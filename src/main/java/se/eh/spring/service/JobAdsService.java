package se.eh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import se.eh.spring.model.JobAd;
import se.eh.spring.repository.JobAdsRepository;

@Service
public final class JobAdsService
{
	@Autowired
	private JobAdsRepository jobAdsRepository;

	public JobAd createJobAd(JobAd jobAd) {
		JobAd createdJobAd = new JobAd(jobAd.getUrl());
		return jobAdsRepository.save(createdJobAd);
	}

	public JobAd findJobAd(int id) {
		return jobAdsRepository.findById(id);
	}

	public Iterable<JobAd> fetchAllUrls() {
		return jobAdsRepository.findAll();
	}

}
