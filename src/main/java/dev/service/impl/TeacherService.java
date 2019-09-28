package dev.service.impl;

import dev.model.TeacherEntity;
import dev.service.ITeacherService;

@org.springframework.stereotype.Service
public class TeacherService extends Service<TeacherEntity> implements ITeacherService {
    TeacherService(){
        super(TeacherEntity.class);
    }
}
