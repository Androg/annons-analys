package se.eh.service.api;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import se.eh.service.dao.JobAdDaoImpl;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.io.IOException;
import java.sql.SQLException;

@Path("/urls")
public class JobAdResource {

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

}
