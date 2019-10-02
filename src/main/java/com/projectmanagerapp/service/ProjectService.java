package com.projectmanagerapp.service;

import org.springframework.stereotype.Service;

import com.projectmanagerapp.entity.Project;

@Service
public interface ProjectService {
	Project createProject(Project project);
}
