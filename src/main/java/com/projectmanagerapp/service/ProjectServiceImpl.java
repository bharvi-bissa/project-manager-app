package com.projectmanagerapp.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.projectmanagerapp.entity.Project;
import com.projectmanagerapp.repository.ProjectRepository;

public class ProjectServiceImpl implements ProjectService {

	@Autowired
	ProjectRepository projectRepository;

	@Override
	public Project createProject(Project project) {
		return projectRepository.save(project);
	}

}
