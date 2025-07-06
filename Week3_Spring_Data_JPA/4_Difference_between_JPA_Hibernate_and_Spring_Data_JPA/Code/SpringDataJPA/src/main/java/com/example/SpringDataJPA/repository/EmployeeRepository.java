package com.example.SpringDataJPA.repository;

import com.example.SpringDataJPA.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}

