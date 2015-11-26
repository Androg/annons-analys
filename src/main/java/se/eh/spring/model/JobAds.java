package se.eh.spring.model;

import javax.persistence.*;

@Entity
@Table(name="urls")
public final class JobAds {

    @Column(name="url",nullable = false)
    private String url;

    private int id;


    public JobAds(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    @Id
    @GeneratedValue
    @Column(name = "id", unique = true, nullable = false)
    public int getId() {
        return this.id;
    }
    public void setId(int id) {
        this.id = id;
    }
}
