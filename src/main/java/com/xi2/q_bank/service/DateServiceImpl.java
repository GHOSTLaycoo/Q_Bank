package com.xi2.q_bank.service;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xi2.q_bank.dao.DataDao;

import com.xi2.q_bank.util.NoteResult;

@Service("dateService")
public class DateServiceImpl implements DateService{
	
	@Resource
	private DataDao dataDao;

	public NoteResult<Date> findDate() {
		NoteResult<Date> result = new NoteResult<Date>();
		//SimpleDateFormat format = new SimpleDateFormat("yyyy:MM:dd:HH:mm:E");
        Date des =  dataDao.Time();
        System.out.println(des);
        //System.out.println(format.format(des));
        if(des!=null) {
        	result.setStatus(0);
			result.setMsg("获取成功");
			result.setData(des);
        }
		return result;
	}
	
}
