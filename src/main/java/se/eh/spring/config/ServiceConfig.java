package se.eh.spring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import se.eh.spring.service.*;

@Configuration
public class ServiceConfig
{
    @Bean
    public JobAdsService jobAdsService() {
        return new JobAdsService();
    }

    @Bean
    public EmployerService employerService() {
        return new EmployerService();
    }
}
