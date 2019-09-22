package dev.repository;

import java.util.List;


public interface IGenericRepository<TEntity> {
    void delete(TEntity entity);
    void delete(int id);
    void create(TEntity entity);
    void update(TEntity entity);
    void clear();
    void flush();
    TEntity getById(int id);
    List<TEntity> getAll();
}
