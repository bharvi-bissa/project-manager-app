package com.projectmanagerapp.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectmanagerapp.entity.Backlog;

@Repository
@Transactional
public interface BacklogRepository extends JpaRepository<Backlog, Long> {

	Backlog findByProjectIdentifier(String projectIdentifier);
	
}
