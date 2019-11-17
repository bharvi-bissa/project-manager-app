package com.projectmanagerapp.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectmanagerapp.entity.ProjectTask;

@Repository
@Transactional
public interface ProjectTaskRepository extends JpaRepository<ProjectTask, Long> {

	List<ProjectTask> findByProjectIdentifierOrderByPriority(String projectIdentifier);

	ProjectTask findByProjectSequence(String projectSequence);

	void deleteByProjectSequence(String projectSequence);
}
