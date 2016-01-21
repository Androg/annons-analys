package se.eh.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Employer extends AbstractEntity
{

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String employer;

    protected Employer() {
    }

    public Employer(String title, String employer) {
        this.title = title;
        this.employer = employer;
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
