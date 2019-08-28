package com.xi2.q_bank.service;

import java.util.List;
import java.util.Map;

import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.util.NoteResult;

public interface AdminService {
	public NoteResult<Object> UploadQuestion(Map map);
	public NoteResult<List<Result>> findAllR(String stuSession,String stuProfession,String stuClass,String stufaculty);
}
