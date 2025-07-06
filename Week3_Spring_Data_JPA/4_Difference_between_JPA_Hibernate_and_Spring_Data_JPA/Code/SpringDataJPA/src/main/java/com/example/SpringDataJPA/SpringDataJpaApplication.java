package com.example.SpringDataJPA;

import com.example.SpringDataJPA.model.Employee;
import com.example.SpringDataJPA.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringDataJpaApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(SpringDataJpaApplication.class, args);

		EmployeeService service = context.getBean(EmployeeService.class);

		Employee emp = new Employee("Anurag Ganguly", "IT");
		service.addEmployee(emp);

		System.out.println("Employee saved using Spring Data JPA.");
	}
}
