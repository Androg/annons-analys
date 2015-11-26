package se.eh.spring.config;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

public class JerseyConfiguration extends ResourceConfig
{
    public JerseyConfiguration() {
        packages("se.eh.spring")
                .register(JacksonConfiguration.class)
                .register(JacksonFeature.class);
    }
}