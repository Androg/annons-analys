package se.eh.service.api;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import se.eh.spring.model.Keywords;
import se.eh.spring.service.KeywordsService;

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

@Path("/keywords")
@Consumes({MediaType.APPLICATION_JSON})
public class KeywordsResource {
    private final AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
    private KeywordsService service = new KeywordsService();

    {
        context.scan("se.eh.spring.config");
        context.refresh();
        service = context.getBean(KeywordsService.class);
    }

    @POST
    public final Response createUrl(@Context UriInfo uriInfo, Keywords keywords) throws IOException {
        Keywords result = service.createKeywords(keywords);
        if (result != null) {
            URI uri = uriInfo.getAbsolutePathBuilder().path(result.getKeyword()).build();
            return Response.created(uri).entity(result).build();
        }
        throw new BadRequestException();
    }
}
