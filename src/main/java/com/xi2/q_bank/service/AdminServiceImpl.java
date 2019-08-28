package com.xi2.q_bank.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xi2.q_bank.dao.AdminDao;
import com.xi2.q_bank.entity.Message_2;
import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.entity.Title;
import com.xi2.q_bank.util.NoteResult;
import com.xi2.q_bank.util.NoteUtil;

@Service("adminService")
public class AdminServiceImpl implements AdminService{
	
	@Resource
	private AdminDao adminDao;

	public NoteResult<Object> UploadQuestion(Map map) {
		NoteResult<Object> result = new NoteResult<Object>();
		
		if(map.get("Question")==""||map.get("A")==""||map.get("B")==""||map.get("C")==""||map.get("D").toString()==""||map.get("type")==null) {
			result.setStatus(1);
			result.setMsg("题目请填写完整!");
		}else if(map.get("answer")==null){
			result.setStatus(2);
			result.setMsg("请选择一个正确答案!");
		}else if(map.get("A").equals(map.get("B"))||map.get("A").equals(map.get("C"))||map.get("A").equals(map.get("D"))||map.get("B").equals(map.get("C"))||map.get("B").equals(map.get("D"))||map.get("C").equals(map.get("D"))){
			result.setStatus(3);
			result.setMsg("选项不能重复!");
		}else {
		
			Title t = new Title();
			String id = NoteUtil.createId();
			t.setQ_Id(id);
			t.setQ_title(map.get("Question").toString());
			t.setQ_A(map.get("A").toString());
			t.setQ_B(map.get("B").toString());
			t.setQ_C(map.get("C").toString());
			t.setQ_D(map.get("D").toString());
			t.setQ_Answer(map.get("answer").toString());
			t.setQ_type(map.get("type").toString());
			
			int a = adminDao.saveQuestion(t);
			if(a==1) {
				result.setStatus(0);
				result.setMsg("提交成功");
				
			}
		}
		
		return result;
	}

	public NoteResult<List<Result>> findAllR(String stuSession, String stuProfession, String stuClass,String stufaculty) {
		NoteResult<List<Result>> result = new NoteResult<List<Result>>();
		List<Result> li = new ArrayList<Result>();
		Map<String,Object> params = new HashMap<String, Object>();
		params.put("ss", stuSession);
		params.put("sf", stufaculty);
		params.put("sp", stuProfession);
		params.put("sc", stuClass);
		System.out.println(params);
		List<Message_2> list = adminDao.findAllM2(params);
		for(int i=0;i<list.size();i++) {
			String userId = list.get(i).getCn_user_id();
			if(!userId.equals("b290738f1a59456ca5a6bd4a99576d1d")) {
				Result re = adminDao.findAllRe(userId);
				li.add(re);
			}	
		}
		if(li.size()>-1) {
			result.setStatus(0);
			result.setMsg("加载成功");
			result.setData(li);
		}
		return result;
	}

}
