package dev.service;

import java.util.List;
import java.util.Optional;

public interface IService<T> {
    List<T> getAll();
    //TODO: add criteria parameter
    List<T> get();
    Optional<T> getById(int id);
    T add(T entity);
    T update(T entity);
    void delete(T entity);
    void delete(int id);
}
