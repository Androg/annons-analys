package se.eh.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.eh.spring.model.Employer;
import se.eh.spring.repository.EmployerRepository;

@Service
public final class EmployerService {

    @Autowired
    private EmployerRepository employerRepository;

    public Employer createEmployer(Employer employer) {
        Employer createdEmployer = new Employer(employer.getTitle(), employer.getEmployer());
        return employerRepository.save(createdEmployer);
    }
}
