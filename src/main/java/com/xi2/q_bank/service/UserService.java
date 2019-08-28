package com.xi2.q_bank.service;

import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.entity.User;
import com.xi2.q_bank.util.NoteResult;

public interface UserService {
	public NoteResult<User> checkLogin(String sno,String password);
	public NoteResult<Object> addUser(String name,String sno,String password);
	public NoteResult<Result> checkNum(String userId);
	public NoteResult<Object> updataPwd(String pwd,String userId);
	public NoteResult<User> findUser(String userId);
}
