package se.eh.spring.repository;

import org.springframework.data.repository.CrudRepository;
import se.eh.spring.model.Keywords;

public interface KeywordsRepository extends CrudRepository<Keywords, Integer> {

}
