package com.projectmanagerapp.response;

public class ProjectNotFoundExceptionResponse {

	private String ProjectNotFound;

	public ProjectNotFoundExceptionResponse() {
		super();
	}

	public ProjectNotFoundExceptionResponse(String ProjectNotFound) {
		super();
		this.ProjectNotFound = ProjectNotFound;
	}

	public String getProjectNotFound() {
		return ProjectNotFound;
	}

	public void setProjectNotFound(String projectNotFound) {
		ProjectNotFound = projectNotFound;
	}

}
