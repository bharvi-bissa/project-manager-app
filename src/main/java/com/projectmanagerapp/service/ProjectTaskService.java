package com.projectmanagerapp.service;

import java.util.List;

import com.projectmanagerapp.entity.ProjectTask;

public interface ProjectTaskService {
	ProjectTask addProjectTask(ProjectTask projectTask, String projectIdentifier);

	List<ProjectTask> getProjectTasks(String projectIdentifier);

	ProjectTask findProjectTaskByProjectSequence(String projectIdentifier, String projectSequence);

	Boolean deleteProjectTaskByProjectSequence(String projectIdentifier, String projectSequence);
}
