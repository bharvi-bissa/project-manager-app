package com.projectmanagerapp.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	@PostMapping("/{backlog_id}")
	public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask,
			@PathVariable String backlog_id, BindingResult bindingResult) {

		ProjectTask projectTask1 = projectTaskService.addProjectTask(projectTask, backlog_id);

		return new ResponseEntity<>(projectTask1, HttpStatus.CREATED);
	}
}
