package se.eh.service.api;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import se.eh.spring.model.Employer;
import se.eh.spring.service.EmployerService;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.io.IOException;
import java.net.URI;

@Path("/employer")
@Consumes({ MediaType.APPLICATION_JSON })
public class EmployerResource {

    private final AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
    private EmployerService service = new EmployerService();

    {
        context.scan("se.eh.spring.config");
        context.refresh();
        service = context.getBean(EmployerService.class);
    }

    @POST
    public final Response createUrl(@Context UriInfo uriInfo, Employer employer) throws IOException {
        Employer result = service.createEmployer(employer);
        if (result != null) {
            URI uri = uriInfo.getAbsolutePathBuilder().path(result.getCompany()).build();
            return Response.created(uri).entity(result).build();
        }
        throw new BadRequestException();
    }


}
