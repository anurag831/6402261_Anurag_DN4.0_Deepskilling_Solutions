package com.example.main;

import com.example.model.Employee;
import org.hibernate.*;
import org.hibernate.cfg.Configuration;

public class MainApp {
    private static SessionFactory factory;

    public static void main(String[] args) {
        try {
            factory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Failed to create sessionFactory object." + ex);
            throw new ExceptionInInitializerError(ex);
        }

        MainApp app = new MainApp();

        Employee employee = new Employee("Anurag Ganguly", "IT");
        Integer empId = app.addEmployee(employee);
        System.out.println("Employee saved with ID: " + empId);
    }

    public Integer addEmployee(Employee employee){
        Session session = factory.openSession();
        Transaction tx = null;
        Integer employeeID = null;

        try {
            tx = session.beginTransaction();
            employeeID = (Integer) session.save(employee);
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employeeID;
    }
}
