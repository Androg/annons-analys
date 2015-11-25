package se.eh.spring.model;

import javax.persistence.*;

@Entity
@Table(name="urls")
public final class JobAds {

    @Column(nullable = false, unique = true)
    private String url;

    public JobAds(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "JobAdSpring{" +
                "url='" + url + '\'' +
                '}';
    }


}
