package vn.com.pvcombank;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import vn.com.pvcombank.DatareconciliationApp;
import vn.com.pvcombank.config.TestSecurityConfiguration;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { DatareconciliationApp.class, TestSecurityConfiguration.class })
public @interface IntegrationTest {
}
