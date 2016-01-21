package se.eh.spring.repository;


import org.springframework.data.repository.CrudRepository;
import se.eh.spring.model.Keyword;

public interface KeywordRepository extends CrudRepository<Keyword, Integer> {

}
