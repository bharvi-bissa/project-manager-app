package com.projectmanagerapp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.projectmanagerapp.entity.ProjectTask;
import com.projectmanagerapp.service.ProjectTaskServiceImpl;

@Controller
@RequestMapping("/api/backlog")
@CrossOrigin(origins = "*", maxAge = 3600)
public class BacklogController {

	@Autowired
	ProjectTaskServiceImpl projectTaskService;

	@PostMapping("/{projectIdentifier}")
	public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask,
			@PathVariable String projectIdentifier, BindingResult bindingResult) {

		ProjectTask projectTask1 = projectTaskService.addProjectTask(projectTask, projectIdentifier);

		return new ResponseEntity<>(projectTask1, HttpStatus.CREATED);
	}

	@GetMapping("/{projectIdentifier}")
	public ResponseEntity<?> getProjectBacklog(@PathVariable String projectIdentifier) {
		List<ProjectTask> projectTaskList = projectTaskService.getProjectTasks(projectIdentifier);
		return new ResponseEntity<>(projectTaskList, HttpStatus.OK);
	}

	@GetMapping("/{projectIdentifier}/{projectSequence}")
	public ResponseEntity<?> getProjectTask(@PathVariable String projectIdentifier,
			@PathVariable String projectSequence) {
		ProjectTask projectTask = projectTaskService.findProjectTaskByProjectSequence(projectIdentifier,
				projectSequence);
		return new ResponseEntity<>(projectTask, HttpStatus.OK);
	}

	@DeleteMapping("/{projectIdentifier}/{projectSequence}")
	public ResponseEntity<?> deleteProjectTaskByProjectIdentifier(@PathVariable String projectIdentifier,
			@PathVariable String projectSequence) {
		if (projectTaskService.deleteProjectTaskByProjectSequence(projectIdentifier, projectSequence)) {
			return new ResponseEntity<>("Task with project sequence " + projectSequence + " deleted successfully",
					HttpStatus.OK);
		}
		return new ResponseEntity<>("Something went wrong", HttpStatus.OK);
	}
}
