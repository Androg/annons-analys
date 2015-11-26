package se.eh.service.api;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import se.eh.service.dao.JobAdDaoImpl;
import se.eh.spring.model.JobAds;
import se.eh.spring.service.JobAdsService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.io.IOException;
import java.net.URI;
import java.sql.SQLException;

@Path("/urls")
@Produces("application/json")
@Consumes("application/json")
public final class JobAdResource {

    @Inject
    private JobAdsService jobAdsService = new JobAdsService();

    private String title;
    private Document document;
    private JobAdDaoImpl urlDao = new JobAdDaoImpl();

    @GET
    @Path("/gettitle")
    public String getAllJobAds() throws SQLException {
        try {
            document = Jsoup.connect(urlDao.getAllUrls().getUrl()).get();
            title = document.title();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return title;
    }


    @POST
    public Response createUser(@Context UriInfo uriInfo, JobAds jobAds) {
        JobAds result = jobAdsService.addJobAd(new JobAds(jobAds.getUrl()));
        if (result != null) {
            URI uri = uriInfo.getAbsolutePathBuilder().path(result.getUrl()).build();
            return Response.created(uri)
                    .entity(result)
                    .build();
        }
        throw new BadRequestException();
    }



}
