package se.eh.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Keywords extends AbstractEntity {

    @Column(nullable = false)
    private String keywords;

    protected Keywords() {}

    public Keywords(String keywords) {
        this.keywords = keywords;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
}
