package se.eh.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Info extends AbstractEntity {

    @Column(nullable = false)
    private String info;

    protected Info(){}

    public Info(String info) {
        this.info = info;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
