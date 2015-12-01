package se.eh.service.api;

import java.io.IOException;
import java.net.URI;
import java.sql.SQLException;

import javax.inject.Inject;
import javax.ws.rs.BadRequestException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import se.eh.service.dao.JobAdDaoImpl;
import se.eh.spring.model.JobAds;
import se.eh.spring.service.JobAdsService;

@Path("/urls")
@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
public final class JobAdResource {

	@Inject
	JobAdsService jobAdsService;

	private String title;
	private Document document;
	private JobAdDaoImpl urlDao = new JobAdDaoImpl();

	@GET
	@Path("/getTitle")
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
	public Response createUrl(@Context UriInfo uriInfo, JobAds jobAds) {
		JobAds result = jobAdsService.addJobAd(jobAds);
		if (result != null) {
			URI uri = uriInfo.getAbsolutePathBuilder().path(result.getUrl()).build();
			return Response.created(uri).entity(result).build();
		}
		throw new BadRequestException();
	}

}
