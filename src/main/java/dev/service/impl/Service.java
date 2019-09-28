package dev.service.impl;

import dev.repository.IGenericRepository;
import dev.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import java.util.List;

@org.springframework.stereotype.Service
public class Service<TEntity> implements IService<TEntity> {
    @Autowired
    @Qualifier("repos")
    private IGenericRepository<TEntity> repository;
    private final Class<TEntity> entityClass;

    public Service(){
        this.entityClass = null;
    }

    public Service(Class<TEntity> entityClass){
        this.entityClass = entityClass;
    }

    //TODO: try/catch + flush

    @Override
    public List<TEntity> get(){
        return null;
    }

    @Override
    public List<TEntity> getAll() {
        return repository.getAll(entityClass);
    }

    @Override
    public TEntity getById(int id){
        return repository.getById(id,entityClass);
    }

    @Override
    public void delete(int id){
       repository.delete(id,entityClass);
    }

    @Override
    public void delete(TEntity entity){
        repository.delete(entity);
    }

    public void add(TEntity entity){
        repository.create(entity);
    }

    public void update(TEntity entity){
        repository.update(entity);
    }
}
