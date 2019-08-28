package com.xi2.q_bank.dao;

import java.util.List;
import java.util.Map;

import com.xi2.q_bank.entity.Title;

public interface QuserDao {
	public List<Title> findTitlebyId(String type);
	public Title checkexam(Map params);
	public Title findTitleByExamId(String examId);
}

