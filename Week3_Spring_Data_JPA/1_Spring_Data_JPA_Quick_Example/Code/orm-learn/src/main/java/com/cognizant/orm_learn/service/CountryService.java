package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.orm_learn.model.Country;
import java.util.List;

@Service
public class CountryService {

	@Autowired
    private final CountryRepository countryRepository;

    CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }
	
    @Transactional
	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}
}
