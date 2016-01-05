package se.eh.spring.repository;

import org.springframework.data.repository.CrudRepository;
import se.eh.spring.model.Employer;


public interface EmployerRepository extends CrudRepository<Employer, Integer> {
}
