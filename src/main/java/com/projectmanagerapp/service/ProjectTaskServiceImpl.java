package com.projectmanagerapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectmanagerapp.entity.Backlog;
import com.projectmanagerapp.entity.ProjectTask;
import com.projectmanagerapp.repository.BacklogRepository;
import com.projectmanagerapp.repository.ProjectTaskRepository;

@Service
public class ProjectTaskServiceImpl implements ProjectTaskService {

	@Autowired
	BacklogRepository backlogRepository;

	@Autowired
	ProjectTaskRepository projectTaskRepository;

	@Override
	public ProjectTask addProjectTask(ProjectTask projectTask, String projectIdentifier) {

		Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
		projectTask.setBacklog(backlog);

		Integer backlogSequence = backlog.getPTSequence();
		backlogSequence++;
		backlog.setPTSequence(backlogSequence);

		projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
		projectTask.setProjectIdentifier(projectIdentifier);

		if (projectTask.getPriority() == null || projectTask.getPriority() == 0) {
			projectTask.setPriority(0);
		}

		if (projectTask.getStatus() == null || projectTask.getStatus() == 0) {
			projectTask.setStatus(0);
		}

		return projectTaskRepository.save(projectTask);

	}

}
