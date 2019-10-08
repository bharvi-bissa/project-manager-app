package com.projectmanagerapp.service;

import com.projectmanagerapp.entity.ProjectTask;

public interface ProjectTaskService {
	ProjectTask addProjectTask(ProjectTask projectTask, String projectIdentifier);
}
