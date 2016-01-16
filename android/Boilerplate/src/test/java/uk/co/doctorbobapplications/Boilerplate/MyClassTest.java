//For test, add separate package, .test
package uk.co.doctorbobapplications.Boilerplate.test;

//For test, use the following junit classes
import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

//For test, import the class being testing
import uk.co.doctorbobapplications.Boilerplate.MyClass;

//For test, declare test class
public class MyClassTest {

//For test, annotate tests with @Test
  @Test
  public void testFirst() {
  
    MyClass myClass = new MyClass();
    String actual = myClass.message();
    System.out.println(actual);
    
    String unexpected = "";

//For test, assert
    assertFalse("unexpected"+actual, actual==unexpected);
  }

} 


