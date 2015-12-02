package se.eh.service.api;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import se.eh.spring.model.JobAd;
import se.eh.spring.service.JobAdsService;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import java.io.IOException;
import java.net.URI;

@Path("/urls")
@Consumes({MediaType.APPLICATION_JSON})
public final class JobAdResource {

    private final AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
    private JobAdsService service = new JobAdsService();

    {
        context.scan("se.eh.spring.config");
        context.refresh();
        service = context.getBean(JobAdsService.class);
    }

    @POST
    public final Response createUrl(@Context UriInfo uriInfo, JobAd jobAd) {
        JobAd result = service.createJobAd(jobAd);
        if (result != null) {
            URI uri = uriInfo.getAbsolutePathBuilder().path(result.getUrl()).build();
            return Response.created(uri)
                    .entity(result)
                    .build();
        }
        throw new BadRequestException();
    }

    @GET
    @Path("/getTitle")
    public final String getTitleFromUrl() throws IOException {
        Document doc = Jsoup.connect(service.findJobAd(1).getUrl()).get();
        return doc.title();
    }

    @GET
    @Path("/geturls")
    public final Iterable<JobAd> getUrlsFromDatabase() {
        return service.fetchAllUrls();
    }

}