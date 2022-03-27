"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3104],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"jacoco",title:"Jacoco",sidebar_label:"Jacoco",slug:"jacoco.html"},l=void 0,s={unversionedId:"framework/integrations/jacoco",id:"framework/integrations/jacoco",isDocsHomePage:!1,title:"Jacoco",description:"Kotest integrates with Jacoco for code coverage in the standard gradle way.",source:"@site/docs/framework/integrations/jacoco.md",sourceDirName:"framework/integrations",slug:"/framework/integrations/jacoco.html",permalink:"/docs/framework/integrations/jacoco.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/integrations/jacoco.md",tags:[],version:"current",frontMatter:{id:"jacoco",title:"Jacoco",sidebar_label:"Jacoco",slug:"jacoco.html"},sidebar:"framework",previous:{title:"Mocking",permalink:"/docs/framework/integrations/mocking.html"},next:{title:"Spec Ordering",permalink:"/docs/framework/spec-ordering.html"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest integrates with ",(0,a.kt)("a",{parentName:"p",href:"https://www.eclemma.org/jacoco/"},"Jacoco")," for code coverage in the standard gradle way.\nYou can read gradle installation instructions ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/jacoco_plugin.html"},"here"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In gradle, add jacoco to your plugins.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"plugins {\n   ...\n   jacoco\n   ...\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure jacoco")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"jacoco {\n    toolVersion = \"0.8.7\"\n    reportsDirectory = layout.buildDirectory.dir('customJacocoReportDir') // optional\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add the jacoco XML report task.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.jacocoTestReport {\n    dependsOn(tasks.test)\n    reports {\n        xml.isEnabled = true\n    }\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Change tests task to depend on jacoco.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.test {\n  ...\n  finalizedBy(tasks.jacocoTestReport)\n}\n")),(0,a.kt)("p",null,"Now when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", the Jacoco report files should be generated in ",(0,a.kt)("inlineCode",{parentName:"p"},"$buildDir/reports/jacoco"),". "),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You may need to apply the jacoco plugin to each submodule if you have a multi module project."))))}m.isMDXComponent=!0}}]);