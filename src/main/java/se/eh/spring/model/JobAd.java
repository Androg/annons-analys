package se.eh.spring.model;

import javax.persistence.*;

@Entity
public class JobAd extends AbstractEntity
{

    @Column(nullable = false)
	private String url;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String employer;

	protected JobAd() {
	}

    public JobAd(String url, String title, String employer) {
        this.url = url;
        this.title = title;
        this.employer = employer;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getEmployer() {
        return employer;
    }

    public void setEmployer(String employer) {
        this.employer = employer;
    }
}
