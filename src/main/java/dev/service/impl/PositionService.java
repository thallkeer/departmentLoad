package dev.service.impl;

import dev.model.Position;
import dev.repository.PositionRepository;
import dev.service.IService;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class PositionService implements IService<Position> {
    private final PositionRepository positionRepository;

    public PositionService(PositionRepository positionRepository) {
        this.positionRepository = positionRepository;
    }

    @Override
    public List<Position> getAll() {
        return positionRepository.findAll();
    }

    @Override
    public List<Position> get() {
        return null;
    }

    @Override
    public Optional<Position> getById(int id) {
        return positionRepository.findById(id);
    }

    @Override
    public Position add(Position entity) {
        return positionRepository.saveAndFlush(entity);
    }

    @Override
    public Position update(Position entity) {
        return positionRepository.saveAndFlush(entity);
    }

    @Override
    public void delete(Position entity) {
        positionRepository.delete(entity);
    }

    @Override
    public void delete(int id) {
        positionRepository.deleteById(id);
    }
}
