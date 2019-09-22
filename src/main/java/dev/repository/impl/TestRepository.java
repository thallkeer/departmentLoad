package dev.repository.impl;

import dev.model.TeacherEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TestRepository {

    @Autowired
    private SessionFactory sessionFactory;

    public List<TeacherEntity> getAll(){
        List<TeacherEntity> teachers = this.sessionFactory.getCurrentSession().createQuery("from TeacherEntity ",TeacherEntity.class).getResultList();
        return teachers;
    }

    public void create(TeacherEntity teachers) {
        Session session;
        try {
            session = sessionFactory.openSession();
            session.beginTransaction();

            Integer id = (Integer) session.save(teachers);
            System.out.println("Teacher is created with id " + id);
            session.getTransaction().commit();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
