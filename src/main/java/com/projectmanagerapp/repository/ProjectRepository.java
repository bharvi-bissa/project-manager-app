package com.projectmanagerapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectmanagerapp.entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
