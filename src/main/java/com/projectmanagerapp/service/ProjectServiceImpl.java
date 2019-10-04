package com.projectmanagerapp.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectmanagerapp.entity.Project;
import com.projectmanagerapp.exception.ProjectIdentifierException;
import com.projectmanagerapp.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

	private static final Logger LOG = LoggerFactory.getLogger(ProjectServiceImpl.class);

	@Autowired
	ProjectRepository projectRepository;

	@Override
	public Project createOrUpdateProject(Project project) {
		try {
			project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
			return projectRepository.save(project);
		} catch (Exception e) {
			System.out.println("Exception :: " + e);
			throw new ProjectIdentifierException(
					"Project Id " + project.getProjectIdentifier().toUpperCase() + " already exists");
		}
	}

	@Override
	public Project findById(Long projectId) {
		Optional<Project> project = projectRepository.findById(projectId);
		return project.isPresent() ? project.get() : null;
	}

	@Override
	public Boolean deleteProjectById(Long projectId) {
		if (findById(projectId) != null) {
			projectRepository.deleteById(projectId);
			return true;
		}
		return false;
	}

	@Override
	public List<Project> getAllProjects() {
		return projectRepository.findAll();
	}

}
