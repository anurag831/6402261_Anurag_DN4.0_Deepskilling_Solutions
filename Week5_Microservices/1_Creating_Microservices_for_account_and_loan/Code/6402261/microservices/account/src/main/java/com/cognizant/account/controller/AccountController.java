package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Account getAccountDetails(@PathVariable String number){
        return new Account( "00987987973432", "savings", 234343);
    }

    static class Account{
        public String number;
        public String type;
        public Integer balance;

        public Account(String number, String type, Integer balance) {
            this.number = number;
            this.type = type;
            this.balance = balance;
        }
    }


}
