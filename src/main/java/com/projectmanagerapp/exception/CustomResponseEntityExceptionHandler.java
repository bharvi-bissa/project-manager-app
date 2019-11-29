package com.projectmanagerapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.projectmanagerapp.response.ProjectIdentifierExceptionResponse;
import com.projectmanagerapp.response.ProjectNotFoundExceptionResponse;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectIdentifierException(ProjectIdentifierException ex,
			WebRequest request) {
		ProjectIdentifierExceptionResponse response = new ProjectIdentifierExceptionResponse(ex.getMessage());
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler
	public final ResponseEntity<Object> handleProjectNotFoundExceptionException(ProjectNotFoundException ex,
			WebRequest request) {
		ProjectNotFoundExceptionResponse response = new ProjectNotFoundExceptionResponse(ex.getMessage());
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}
	
}
