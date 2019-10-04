package com.projectmanagerapp.service;

import java.util.List;

import com.projectmanagerapp.entity.Project;

public interface ProjectService {
	Project createOrUpdateProject(Project project);

	Project findById(Long projectId);

	Boolean deleteProjectById(Long projectId);

	List<Project> getAllProjects();
}
