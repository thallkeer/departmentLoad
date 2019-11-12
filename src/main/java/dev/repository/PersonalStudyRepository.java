package dev.repository;

import dev.model.PersonalStudy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalStudyRepository extends JpaRepository<PersonalStudy, Integer> {
}
