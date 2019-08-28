package com.xi2.q_bank.service;

import java.util.List;
import java.util.Map;

import com.xi2.q_bank.entity.Title;
import com.xi2.q_bank.util.NoteResult;

public interface QuserService {
	public NoteResult<List<Title>> loadexamQ(String type);
	public NoteResult<Map<String,Object>> checkExam(List<Map> list);
}
