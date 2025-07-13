package com.cognizant.spring_learn.controllers;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.services.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public ResponseEntity<Country> getCountry(@PathVariable String code) {
        LOGGER.debug("Request received for /countries/{}", code);
        Country country = countryService.getCountry(code);
        if (country != null) {
            LOGGER.debug("Country found: {}", country);
            return ResponseEntity.ok(country);
        } else {
            LOGGER.warn("Country with code {} not found", code);
            return ResponseEntity.notFound().build();
        }
    }
}
