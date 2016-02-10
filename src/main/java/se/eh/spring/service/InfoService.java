package se.eh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import se.eh.spring.model.Info;
import se.eh.spring.repository.InfoRepository;

/**
 * Created by hssen on 2/4/16.
 */
public class InfoService {

    @Autowired
    private InfoRepository infoRepository;

    public Info saveInfo(Info info) {
        Info createdInfo = new Info(info.getInfo());
        return infoRepository.save(createdInfo);
    }
}
