package com.projectmanagerapp.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectmanagerapp.entity.Project;

@Repository
@Transactional
public interface ProjectRepository extends JpaRepository<Project, Long> {

	Optional<Project> findByProjectIdentifier(String projectIdentifier);

	void deleteByProjectIdentifier(String projectIdentifier);

}
