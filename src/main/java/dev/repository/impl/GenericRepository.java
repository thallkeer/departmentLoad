package dev.repository.impl;

import dev.repository.IGenericRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository("repos")
@Transactional
public class GenericRepository<TEntity> implements IGenericRepository<TEntity> {

    @Autowired
    private SessionFactory sessionFactory;

    protected final Session getSession() {
        return this.sessionFactory.getCurrentSession();
    }

    @Override
    public TEntity getById(int id, Class<TEntity> entityClass) {
        return (TEntity) getSession().get(entityClass, id);
    }

    @Override
    public void create(TEntity entity) {
        getSession().persist(entity);
    }

    @Override
    public void update(TEntity entity) {
        getSession().merge(entity);
    }

    @Override
    public void delete(TEntity entity) {
        getSession().delete(entity);
    }

    @Override
    public void delete(int id,Class<TEntity> entityClass) {
        delete(getById(id,entityClass));
    }

    @Override
    public List<TEntity> getAll(Class<TEntity> entityClass) {
        Query<TEntity> query = getSession().createQuery("from " + entityClass.getName(), entityClass);
        return query.getResultList();
    }

    @Override
    public void clear() {
        getSession().clear();
    }

    @Override
    public void flush() {
        getSession().flush();
    }
}
