package com.projectmanagerapp.response;

public class ProjectIdentifierExceptionResponse {
	private String projectIdentifier;

	public ProjectIdentifierExceptionResponse() {
		super();
	}

	public ProjectIdentifierExceptionResponse(String projectIdentifier) {
		super();
		this.projectIdentifier = projectIdentifier;
	}

	public String getProjectIdentifier() {
		return projectIdentifier;
	}

	public void setProjectIdentifier(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}

}
