package com.xi2.q_bank.dao;

import java.util.List;
import java.util.Map;

import com.xi2.q_bank.entity.Message_2;
import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.entity.Title;

public interface AdminDao {
	public int saveQuestion(Title title);
	public List<Message_2> findAllM2(Map params);
	public Result findAllRe(String userId);
}
