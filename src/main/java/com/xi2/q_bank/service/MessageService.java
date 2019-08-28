package com.xi2.q_bank.service;

import java.util.Map;

import com.xi2.q_bank.entity.Message_1;
import com.xi2.q_bank.entity.Message_2;
import com.xi2.q_bank.util.NoteResult;

public interface MessageService {
	public NoteResult<Object> updataM1(Map map);
	public NoteResult<Message_1> loadM1(String userId);
	public NoteResult<Message_2> loadM2(String userId);
}
