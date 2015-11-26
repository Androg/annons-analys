package se.eh.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@Component
@ComponentScan(basePackages = {
        "se.eh.spring",
        "se.eh.service"
})
public class SpringConfiguration
{
}