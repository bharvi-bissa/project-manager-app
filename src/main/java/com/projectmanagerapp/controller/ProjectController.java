package com.projectmanagerapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectmanagerapp.entity.Project;
import com.projectmanagerapp.service.ProjectServiceImpl;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
	
	@Autowired
	ProjectServiceImpl projService;

	@PostMapping("")
	public ResponseEntity<?> testController(@RequestBody Project project) {
		Project createdProject = projService.createOrUpdateProject(project);
		return new ResponseEntity<>(createdProject,HttpStatus.CREATED);
	}
}
