package se.eh.spring.repository;

import org.springframework.data.repository.CrudRepository;
import se.eh.spring.model.Keywords;

import java.util.ArrayList;

public interface KeywordsRepository extends CrudRepository<Keywords, Integer> {

}
