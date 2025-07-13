package com.cognizant.spring_learn.controllers;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START - authenticate");
        LOGGER.debug("Authorization Header: {}", authHeader);

        String user = getUser(authHeader);
        LOGGER.debug("User from header: {}", user);

        String token = generateJwt(user);

        Map<String, String> map = new HashMap<>();
        map.put("token", token);

        LOGGER.info("END - authenticate");
        return map;
    }

    private String getUser(String authHeader) {
        LOGGER.debug("START - getUser");

        String encodedCredentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedCredentials = new String(decodedBytes);
        LOGGER.debug("Decoded credentials: {}", decodedCredentials);

        String username = decodedCredentials.split(":")[0];
        LOGGER.debug("Extracted username: {}", username);

        LOGGER.debug("END - getUser");
        return username;
    }

    private String generateJwt(String user) {
        LOGGER.debug("START - generateJwt");

        JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);
        builder.setIssuedAt(new Date());
        builder.setExpiration(new Date((new Date()).getTime() + 20 * 60 * 1000)); // 20 mins
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

        String token = builder.compact();

        LOGGER.debug("Generated token: {}", token);
        LOGGER.debug("END - generateJwt");

        return token;
    }


}
