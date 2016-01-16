# Boilerplate
Boilerplate code for various things

##Html, CSS, js

Simple html doc, and simple js.

##Android
The android project is not complete, and not tested.

###javaDoc support
 For javaDoc needed the additions +











	buildscript {
		 repositories {
	+        maven {
	+            url "https://plugins.gradle.org/m2/"
	+        }
		 }
		 
		 dependencies {
	+        classpath gradle.plugin.com.vanniktech:gradle-android-javadoc-plugin:0
		 }
	 }

	+ apply plugin: 'com.vanniktech.android.javadoc'

then...

    Other tasks
    -----------
    generateDebugJavadoc - Generates Javadoc for debug.
    generateReleaseJavadoc - Generates Javadoc for release.

The output goes to 

`javaDoc` in the Project folder   [add this to .gitignore]

`javaDoc/{type}/{tld}/index.html`

###System.out
For sysout in tests, look in the html output reports, and or use {gradle test -i} option

###Android Test
For testing a class [without android API elements].

location

    {Boilerplate} App
    > src
      > main
        > test
          > ... package ...
            > Boilerplate
              - MyClassTest.java

This contains       

- add separate package, {packagename}.test
- use the following junit classes
  - import static org.junit.Assert.*;
  - import org.junit.Test;
- import the class being testing
- declare test class
- annotate test methods with @Test
- assert

    
