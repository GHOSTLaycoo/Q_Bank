package com.xi2.q_bank.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xi2.q_bank.dao.QuserDao;
import com.xi2.q_bank.dao.UserDao;
import com.xi2.q_bank.entity.Title;
import com.xi2.q_bank.util.NoteResult;

@Service("quserService")
public class QuserServiceImpl implements QuserService{
    
	@Resource
	private QuserDao quserDao;
	@Resource
	private UserDao userDao;
	
	public NoteResult<List<Title>> loadexamQ(String type) {
		NoteResult<List<Title>> result = new NoteResult<List<Title>>();
		List<Title> list = quserDao.findTitlebyId(type);
		if(list!=null) {
			result.setStatus(0);
			result.setMsg("登陆成功");
			result.setData(list);
			return result;
		}
		return result;
	}

	public NoteResult<Map<String,Object>> checkExam(List<Map> list) {
		NoteResult<Map<String,Object>> result = new NoteResult<Map<String,Object>>();
		List<Title> lis = new ArrayList<Title>();
		int poi=0;
		double num = 0;
		double Maxnum=100;
		String whatPass=null;
		String mess=null;
     
		
        Map p = list.get(0);
		String type = (String) p.get("type");
	
		String userId = (String) p.get("userId");
		for(int i=0;i<list.size();i++) {
			Map params = list.get(i);
			Title li = quserDao.checkexam(params);
		
			if(li!=null) {
				poi++;
				num+=Maxnum/list.size();
			}else {
				String examId = (String) params.get("examId");
				Title fli = quserDao.findTitleByExamId(examId);
				lis.add(fli);
			}
		}
		if(num>=Maxnum*0.6) {
			whatPass="  恭喜及格";
		}else {
			whatPass="  不及格!请下次继续努力!";
		}
		
		mess=(int)num+"  正确数:"+poi+"/"+list.size()+whatPass+"\n";
		
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("num", mess);
		data.put("lis", lis);
		
		
		Map<String,Object> pp = new HashMap<String, Object>();
		pp.put("type", type);
		pp.put("num", (int)num);
		pp.put("userId", userId);
		
		userDao.createResult(pp);
		
	
		result.setStatus(0);
		result.setMsg("成功");
		result.setData(data);
		return result;
	}

}
