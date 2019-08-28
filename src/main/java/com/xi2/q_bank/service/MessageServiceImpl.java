package com.xi2.q_bank.service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xi2.q_bank.dao.MessageDao;
import com.xi2.q_bank.dao.UserDao;
import com.xi2.q_bank.entity.Message_1;
import com.xi2.q_bank.entity.Message_2;
import com.xi2.q_bank.util.NoteResult;

@Service("messageService")
public class MessageServiceImpl implements MessageService{

	@Resource
	private MessageDao messageDao;
	
	@Resource
	private UserDao userDao;
	
	public NoteResult<Object> updataM1(Map map) {
		NoteResult<Object> result = new NoteResult<Object>();
		Message_1 m1 = new Message_1();
		m1.setCn_user_id(map.get("userId").toString());
		m1.setM_mail(map.get("mail").toString());
		m1.setM_nc(map.get("nc").toString());
		m1.setM_Note(map.get("Note").toString());
		m1.setM_phone(map.get("phone").toString());
		m1.setM_sr(map.get("sr").toString());
		m1.setM_sx(map.get("sx").toString());
		m1.setM_xx(map.get("xx").toString());
		m1.setM_xz(map.get("xz").toString());
		m1.setM_zy(map.get("zy").toString());
		
		int a = messageDao.updataM1(m1);
		
		Message_2 m2 = new Message_2();
		m2.setCn_user_id(map.get("userId").toString());
		m2.setM_ban(map.get("ban").toString());
		m2.setM_jie(map.get("jie").toString());
		m2.setM_Rschool(map.get("Rschool").toString());
		m2.setM_stufaculty(map.get("stufaculty").toString());
		m2.setM_stuProfession(map.get("stuProfession").toString());
		
		int b = messageDao.updataM2(m2);
		
		Map<String,Object> params = new HashMap<String, Object>();
		params.put("Rname", map.get("Rname"));
		params.put("userId", map.get("userId"));
		int c = userDao.updataName(params);
		
		
		if(a==1&&b==1&&c==1) {
			result.setStatus(0);
			result.setMsg("保存成功");
		}
		return result;
	}

	public NoteResult<Message_1> loadM1(String userId) {
		NoteResult<Message_1> result = new NoteResult<Message_1>();
		Message_1 m1= messageDao.loadM1(userId);
		if(m1!=null) {
			result.setStatus(0);
			result.setMsg("加载成功");
			result.setData(m1);
		}
		return result;
	}

	public NoteResult<Message_2> loadM2(String userId) {
		NoteResult<Message_2> result = new NoteResult<Message_2>();
		Message_2 m2= messageDao.loadM2(userId);
		if(m2!=null) {
			result.setStatus(0);
			result.setMsg("加载成功");
			result.setData(m2);
		}
		return result;
	}
	
	

}
