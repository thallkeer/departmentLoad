package dev.repository;

import dev.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRoleRepository extends JpaRepository<UserRole,Integer> {
    Optional<UserRole> findByName(UserRole.UserRoleType roleName);
}
