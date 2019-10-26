package dev.service;

import java.util.List;

public interface IService<T> {
    List<T> getAll();
    //TODO: add criteria parameter
    List<T> get();
    T getById(int id);
    void add(T entity);
    void update(T entity);
    void delete(T entity);
    void delete(int id);
}
