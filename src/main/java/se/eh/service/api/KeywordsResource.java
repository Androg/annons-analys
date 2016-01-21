package se.eh.service.api;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import se.eh.spring.model.Keywords;
import se.eh.spring.service.KeywordsService;

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
    public final Response keywordToDatabase(@Context final UriInfo uriInfo, final Keywords keywords) throws IOException {

        System.out.println("husse   " + keywords.getKeywords());
        service.createKeywords(keywords.asKeywordArray());
        URI uri = uriInfo.getAbsolutePath();

        return Response.created(uri).build();
    }


}
