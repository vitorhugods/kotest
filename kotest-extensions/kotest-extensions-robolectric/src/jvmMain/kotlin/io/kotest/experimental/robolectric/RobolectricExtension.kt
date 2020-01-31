package io.kotest.experimental.robolectric

import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.core.spec.Spec
import io.kotest.core.extensions.ConstructorExtension
import io.kotest.core.extensions.TestCaseExtension
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class RobolectricExtension : ConstructorExtension, TestCaseExtension {

   private val containedRobolectricRunner = ContainedRobolectricRunner()

   override fun <T : Spec> instantiate(clazz: KClass<T>): Spec? {
      if (clazz.isRobolectricClass()) return null
      return containedRobolectricRunner.sdkEnvironment.bootstrappedClass<Spec>(clazz.java).newInstance()
   }

   private fun <T : Spec> KClass<T>.isRobolectricClass() =
      findAnnotation<RobolectricTest>() == null

   override suspend fun intercept(
      testCase: TestCase,
      execute: suspend (TestCase) -> TestResult
   ): TestResult {

      if (testCase.spec::class.isRobolectricClass()) return TestResult.Ignored

      val containedRobolectricRunner = ContainedRobolectricRunner()

      beforeTest(containedRobolectricRunner)
      val result = execute(testCase)
      afterTest(containedRobolectricRunner)

      return result
   }

   private fun beforeTest(containedRobolectricRunner: ContainedRobolectricRunner) {
      Thread.currentThread().contextClassLoader = containedRobolectricRunner.sdkEnvironment.robolectricClassLoader
      containedRobolectricRunner.containedBefore()
   }

   private fun afterTest(containedRobolectricRunner: ContainedRobolectricRunner) {
      containedRobolectricRunner.containedAfter()
      Thread.currentThread().contextClassLoader = RobolectricExtension::class.java.classLoader
   }
}

annotation class RobolectricTest
