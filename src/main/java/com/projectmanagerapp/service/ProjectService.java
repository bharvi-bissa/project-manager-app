package com.projectmanagerapp.service;

import java.util.List;

import com.projectmanagerapp.entity.Project;

public interface ProjectService {
	Project createOrUpdateProject(Project project);

	Project findByProjectIdentifier(String projectIdentifier);

	Boolean deleteProjectByProjectIdentifier(String projectIdentifier);

	List<Project> getAllProjects();
}
