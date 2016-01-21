package se.eh.spring.model;

import javax.persistence.*;

@Entity
public class Keyword extends AbstractEntity {

    @Column(nullable = false)
    private String keyword;

    protected Keyword() {}

    public Keyword(String keyword) {
        this.keyword = keyword;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
