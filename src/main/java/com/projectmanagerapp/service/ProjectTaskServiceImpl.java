package com.projectmanagerapp.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectmanagerapp.constants.StatusConstants;
import com.projectmanagerapp.entity.Backlog;
import com.projectmanagerapp.entity.ProjectTask;
import com.projectmanagerapp.exception.ProjectNotFoundException;
import com.projectmanagerapp.repository.BacklogRepository;
import com.projectmanagerapp.repository.ProjectTaskRepository;

@Service
public class ProjectTaskServiceImpl implements ProjectTaskService {

	private static final Logger LOG = LoggerFactory.getLogger(ProjectTaskServiceImpl.class);

	@Autowired
	BacklogRepository backlogRepository;

	@Autowired
	ProjectTaskRepository projectTaskRepository;

	@Override
	public ProjectTask addProjectTask(ProjectTask projectTask, String projectIdentifier) {
		try {
			Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
			projectTask.setBacklog(backlog);

			Integer backlogSequence = backlog.getPTSequence();// if first time PTSequence will be zero
			backlogSequence++;
			backlog.setPTSequence(backlogSequence);

			projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
			projectTask.setProjectIdentifier(projectIdentifier);

			if (projectTask.getPriority() == null || projectTask.getPriority() == 0) {
				projectTask.setPriority(3);
			}

			if (projectTask.getStatus() == null || projectTask.getStatus() == "") {
				projectTask.setStatus(StatusConstants.TO_DO);
			}

			return projectTaskRepository.save(projectTask);
		} catch (Exception e) {
			System.out.println("Exception :: " + e);
			throw new ProjectNotFoundException("Project Identifier " + projectIdentifier + " not found");
		}

	}

	@Override
	public List<ProjectTask> getProjectTasks(String projectIdentifier) {
		return projectTaskRepository.findByProjectIdentifierOrderByPriority(projectIdentifier);
	}

	@Override
	public ProjectTask findProjectTaskByProjectSequence(String projectIdentifier, String projectSequence) {
		// check for proper project
		Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
		ProjectTask projectTask = projectTaskRepository.findByProjectSequence(projectSequence);
		if (backlog == null) {
			throw new ProjectNotFoundException("Project with Identifier " + projectIdentifier + " not found");
		}

		// make sure task exists
		if (projectTask == null) {
			throw new ProjectNotFoundException("Project Task with project sequence " + projectSequence + " not found");
		}

		// make sure projectTask is in the correct project/backlog
		if (!backlog.getProject().getProjectIdentifier().equals(projectTask.getProjectIdentifier())) {
			throw new ProjectNotFoundException("Project Task with project sequence " + projectSequence
					+ " does not exists in project " + projectIdentifier);
		}
		return projectTask;
	}

	@Override
	public Boolean deleteProjectTaskByProjectSequence(String projectIdentifier, String projectSequence) {
		ProjectTask projectTask = findProjectTaskByProjectSequence(projectIdentifier, projectSequence);
		LOG.info(projectTask.toString());
		projectTaskRepository.deleteByProjectSequence(projectSequence);
		return true;

	}

}
