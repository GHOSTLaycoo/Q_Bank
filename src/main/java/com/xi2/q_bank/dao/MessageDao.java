package com.xi2.q_bank.dao;

import com.xi2.q_bank.entity.Message_1;
import com.xi2.q_bank.entity.Message_2;

public interface MessageDao {
	public int saveM1(Message_1 m1);
	public int updataM1(Message_1 m1);
	public int saveM2(Message_2 m2);
	public int updataM2(Message_2 m2);
	
	public Message_1 loadM1(String userId);
	public Message_2 loadM2(String userId);
}
