package se.eh.service.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import java.io.Serializable;

@XmlAccessorType(XmlAccessType.NONE)
public final class JobAd implements Serializable{

    @XmlElement(name="url")
    private String url;

    public JobAd() {
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



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof JobAd)) return false;

        JobAd jobAd = (JobAd) o;

        return !(url != null ? !url.equals(jobAd.url) : jobAd.url != null);

    }

    @Override
    public int hashCode() {
        return url != null ? url.hashCode() : 0;
    }

    @Override
    public String toString() {
        return url;
    }
}
