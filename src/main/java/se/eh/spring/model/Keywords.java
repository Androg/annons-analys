package se.eh.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Keywords extends AbstractEntity {

    @Column(nullable = false)
    private String keyword;

    protected Keywords(){}

    public Keywords(String keyword) {
        this.keyword = keyword;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
