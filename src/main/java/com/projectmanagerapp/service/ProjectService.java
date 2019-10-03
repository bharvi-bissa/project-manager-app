package com.projectmanagerapp.service;

import com.projectmanagerapp.entity.Project;

public interface ProjectService {
	Project createOrUpdateProject(Project project);

	Project findById(Long projectId);
	
	Boolean deleteProjectById(Long projectId);
}
