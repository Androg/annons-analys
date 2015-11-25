package se.eh.spring.repository;

import org.springframework.data.repository.CrudRepository;
import se.eh.spring.model.JobAds;

public interface JobAdsRepository extends CrudRepository<JobAds, Long> {
}
