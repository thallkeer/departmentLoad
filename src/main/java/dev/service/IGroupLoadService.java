package dev.service;

import dev.model.GroupLoadEntity;

import java.util.List;

public interface IGroupLoadService {
    List<GroupLoadEntity> getDisciplinesByGroup(String groupNumber);
    List<GroupLoadEntity> getTeacherLoad(int teacherId);
}
