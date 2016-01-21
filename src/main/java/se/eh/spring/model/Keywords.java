package se.eh.spring.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Keywords extends AbstractEntity {

    @Column(nullable = false)
    private ArrayList<String> keywords;

    protected Keywords() {}

    public Keywords(ArrayList<String> keywords) {
        this.keywords = keywords;
    }


    public ArrayList<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(ArrayList<String> keywords) {
        this.keywords = keywords;
    }

    public Keyword[] asKeywordArray() {
        List<Keyword> result = new ArrayList<>();
        if(this.keywords != null) {
            for (int i = 0; i < this.keywords.size(); i++) {
                String keyword = this.keywords.get(i);
                result.add(new Keyword(keyword));
            }
        }
        Keyword[] key = new Keyword[result.size()];
        return result.toArray(key);

    }
}
