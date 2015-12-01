package se.eh.spring.model;

import javax.persistence.*;

@Entity
public class JobAd extends AbstractEntity
{

	@Column(nullable = false)
	private String url;

	protected JobAd() {
	}

	public JobAd(String url) {
		this.url = url;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
