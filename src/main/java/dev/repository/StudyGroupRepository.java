package dev.repository;

import dev.model.StudyGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyGroupRepository extends JpaRepository<StudyGroup,Integer> {
}
