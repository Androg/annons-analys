package se.eh.service.api;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import se.eh.spring.model.Info;
import se.eh.spring.service.InfoService;

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

@Path("/info")
@Consumes({MediaType.APPLICATION_JSON})
public class InfoResource {

    private final AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
    private InfoService service = new InfoService();

    {
        context.scan("se.eh.spring.config");
        context.refresh();
        service = context.getBean(InfoService.class);
    }

    @POST
    public final Response createUrl(@Context UriInfo uriInfo, Info info) throws IOException {
        Info result = service.saveInfo(info);
        if (result != null) {
            URI uri = uriInfo.getAbsolutePathBuilder().path(String.valueOf(result)).build();
            return Response.created(uri).entity(result).build();
        }
        throw new BadRequestException();
    }

}
