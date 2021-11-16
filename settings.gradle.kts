pluginManagement {
   repositories {
      mavenCentral()
      gradlePluginPortal()
   }
}

val ideaPlatformPrefix: String? = System.getProperty("idea.platform.prefix")
val isIntelliJ = ideaPlatformPrefix.equals("idea", ignoreCase = true)

include("kotest-common")

// defines data classes and the spec styles; all classes needed to define specs/testcases live here
include("kotest-framework:kotest-framework-api")

// used to discovery specs from the classpath at runtime
// brings in the API dependency for required data types
include("kotest-framework:kotest-framework-discovery")

// contains the execution engine implementation for jvm, js, native
// brings in the API dependency
include("kotest-framework:kotest-framework-engine")

// contains the matcher interface and is intended as a lightweight dependency for library authors
// to depend on when writing matcher libraries
include("kotest-assertions:kotest-assertions-api")

// contains basic assertion building block such as shouldBe which are used by both
// framework and assertion libraries;
// no user should need to depend on this
include("kotest-assertions:kotest-assertions-shared")

// the core assertions that cover things like collections, strings, etc
// users should depend on this if they want to use kotest assertions in tests
include("kotest-assertions:kotest-assertions-core")

// support for executing tests via junit platform through gradle
// this will also bring in the required libs for the intellij plugin
include("kotest-runner:kotest-runner-junit5")

plugins {
   id("com.gradle.enterprise") version "3.7.1"
   // See https://jmfayard.github.io/refreshVersions
   id("de.fayard.refreshVersions") version "0.23.0"
}
