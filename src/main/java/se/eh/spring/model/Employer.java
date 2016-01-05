package se.eh.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Employer extends AbstractEntity
{

    @Column(nullable = false)
    private String company;

    protected Employer() {
    }

    public Employer(String company) {
        this.company = company;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
}
