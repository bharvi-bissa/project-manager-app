package com.projectmanagerapp.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "project")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long projectId;

	@NotBlank(message = "Project Name is required")
	private String projectName;

	@NotBlank(message = "Project Identifier is required")
	@Column(updatable = false, unique = true)
	private String projectIdentifier;

	@NotBlank(message = "Project Description is required")
	private String description;

	@NotNull(message = "Start date is required")
	@JsonFormat(pattern = "yy-mm-dd")
	private Date startDate;

	@NotNull(message = "Start date is required")
	@JsonFormat(pattern = "yy-mm-dd")
	private Date endDate;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "project") // if project is deleted its
																						// backlog is also
																						// deleted,Project owns Backlog
	private Backlog backlog;// one project can have only one backlog

	@CreationTimestamp
	@Column(name = "created_at", updatable = false)
	@JsonFormat(pattern = "yy-mm-dd")
	private Date createdAt;

	@UpdateTimestamp
	@Column(name = "updated_at")
	@JsonFormat(pattern = "yy-mm-dd")
	private Date updatedAt;

	public Project() {
	}

	public Project(Long projectId, @NotBlank(message = "Project Name is required") String projectName,
			@NotBlank(message = "Project Identifier is required") String projectIdentifier,
			@NotBlank(message = "Project Description is required") String description,
			@NotNull(message = "Start date is required") Date startDate,
			@NotNull(message = "Start date is required") Date endDate, Backlog backlog) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.projectIdentifier = projectIdentifier;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.backlog = backlog;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectIdentifier() {
		return projectIdentifier;
	}

	public void setProjectIdentifier(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Backlog getBacklog() {
		return backlog;
	}

	public void setBacklog(Backlog backlog) {
		this.backlog = backlog;
	}

	@Override
	public String toString() {
		return "Project [projectId=" + projectId + ", projectName=" + projectName + ", projectIdentifier="
				+ projectIdentifier + ", description=" + description + ", startDate=" + startDate + ", endDate="
				+ endDate + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

}
