package se.eh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.eh.spring.model.Keyword;
import se.eh.spring.repository.KeywordRepository;

@Service
public class KeywordsService {

    @Autowired
    private KeywordRepository keywordRepository;

    public void createKeywords(Keyword[] keywords) {
        for(int i = 0; i < keywords.length; i++) {
            keywordRepository.save(keywords[i]);
        }
    }
}
