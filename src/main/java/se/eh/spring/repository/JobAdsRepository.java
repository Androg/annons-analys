package se.eh.spring.repository;

import org.springframework.data.repository.CrudRepository;
import se.eh.spring.model.JobAd;


public interface JobAdsRepository extends CrudRepository<JobAd, Integer>
{
    JobAd findById(int id);
}