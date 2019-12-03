package dev.repository;

import dev.model.GroupLoad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupLoadRepository extends JpaRepository<GroupLoad, Integer> {
     List<GroupLoad> findAllByTeacherID(int teacherID);
}
