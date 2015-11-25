package se.eh.spring.model;

import javax.persistence.*;

@Entity
public final class JobAds extends AbstractEntity {

    @Column(nullable = false)
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
