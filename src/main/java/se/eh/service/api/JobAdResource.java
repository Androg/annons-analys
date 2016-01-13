package se.eh.service.api;

import java.io.IOException;
import java.net.URI;

import javax.ws.rs.BadRequestException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import se.eh.spring.model.JobAd;
import se.eh.spring.service.JobAdsService;

@Path("/urls")
@Consumes({ MediaType.APPLICATION_JSON })
public final class JobAdResource {

	private final AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
	private JobAdsService service = new JobAdsService();

	{
		context.scan("se.eh.spring.config");
		context.refresh();
		service = context.getBean(JobAdsService.class);
	}

	@POST
	public final Response createUrl(@Context UriInfo uriInfo, JobAd jobAd) throws IOException {
		JobAd result = service.createJobAd(jobAd);
		if (result != null) {
			URI uri = uriInfo.getAbsolutePathBuilder().path(result.getUrl()).build();
			return Response.created(uri).entity(result).build();
		}
		throw new BadRequestException();
	}


	@GET
	@Path("/getTitle")
	public final String getTitleFromDb() {
		return String.valueOf(service.findJobAd(16).getUrl());
	}

	@GET
	@Path("/geturls")
	public final Iterable<JobAd> getUrlsFromDatabase() {
		return service.fetchAllUrls();
	}

}
