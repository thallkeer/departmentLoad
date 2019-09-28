package dev.service;

import java.util.List;

public interface IService<TEntity> {
    List<TEntity> getAll();
    //TODO: add criteria parameter
    List<TEntity> get();
    TEntity getById(int id);
    void add(TEntity entity);
    void update(TEntity entity);
    void delete(TEntity entity);
    void delete(int id);
}
