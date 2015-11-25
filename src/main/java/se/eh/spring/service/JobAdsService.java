package se.eh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.dao.DataAccessException;
import se.eh.spring.model.JobAds;
import se.eh.spring.repository.JobAdsRepository;

public final class JobAdsService {

    @Autowired
    private JobAdsRepository jobAdsRepository;

    public JobAds addJobAd(JobAds jobAds) {
        try {
            JobAds createdJobAd = new JobAds(jobAds.getUrl());
            return jobAdsRepository.save(createdJobAd);
        } catch (NullPointerException | DataAccessException e) {
            e.printStackTrace();
        }
        return null;
    }

}
