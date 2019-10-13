package com.projectmanagerapp.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectmanagerapp.entity.Backlog;
import com.projectmanagerapp.entity.Project;
import com.projectmanagerapp.exception.ProjectIdentifierException;
import com.projectmanagerapp.repository.BacklogRepository;
import com.projectmanagerapp.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

	private static final Logger LOG = LoggerFactory.getLogger(ProjectServiceImpl.class);

	@Autowired
	ProjectRepository projectRepository;

	@Autowired
	BacklogRepository backlogRepository;

	@Override
	public Project createOrUpdateProject(Project project) {
		LOG.info("running createOrUpdateProject()");
		final String projectIdentifierUpdateString = project.getProjectIdentifier().toUpperCase();
		try {
			project.setProjectIdentifier(projectIdentifierUpdateString);
			LOG.info("PROJECT ::"+project);
			// if no project id is passed, create new project and create a backlog
			if (project.getProjectId() == null || project.getProjectId() == 0) {
				Backlog backlog = new Backlog();
				project.setBacklog(backlog);
				backlog.setProject(project);// for bidirectional oneToOne
				backlog.setProjectIdentifier(projectIdentifierUpdateString);
			}
			// if projectId is passed (that mean we have to update the project), and no
			// backlog is passed, set the backlog by finding backlog by projectIdentifier
			if (project.getProjectId() != null) {
				project.setBacklog(backlogRepository.findByProjectIdentifier(projectIdentifierUpdateString));
			}

			return projectRepository.save(project);
		} catch (Exception e) {
			System.out.println("Exception :: " + e);
			throw new ProjectIdentifierException("Project Identifier " + projectIdentifierUpdateString + " already exists");
		}
	}

	@Override
	public Project findByProjectIdentifier(String projectIdentifier) {
		Optional<Project> project = projectRepository.findByProjectIdentifier(projectIdentifier);
		return project.isPresent() ? project.get() : null;
	}

	@Override
	public Boolean deleteProjectByProjectIdentifier(String projectIdentifier) {
		if (findByProjectIdentifier(projectIdentifier) != null) {
			projectRepository.deleteByProjectIdentifier(projectIdentifier);
			return true;
		}
		return false;
	}

	@Override
	public List<Project> getAllProjects() {
		return projectRepository.findAll();
	}

}
