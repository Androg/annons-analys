package se.eh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.eh.spring.model.Keywords;
import se.eh.spring.repository.KeywordsRepository;

@Service
public class KeywordsService {

    @Autowired
    private KeywordsRepository keywordsRepository;

    public Keywords createKeywords(Keywords keywords) {
        Keywords createdKeywords = new Keywords(keywords.getKeywords());
        return keywordsRepository.save(createdKeywords);
    }
}
