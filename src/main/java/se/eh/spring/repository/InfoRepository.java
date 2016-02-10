package se.eh.spring.repository;

import org.springframework.data.repository.CrudRepository;
import se.eh.spring.model.Info;

public interface InfoRepository extends CrudRepository<Info, Integer> {
}
