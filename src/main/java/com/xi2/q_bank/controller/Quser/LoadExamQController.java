package com.xi2.q_bank.controller.Quser;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.entity.Title;
import com.xi2.q_bank.service.QuserService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/User")
public class LoadExamQController {
	@Resource
	private QuserService quserService;
	
	@RequestMapping("/loadQ.do") //ƥ������
	@ResponseBody //JSON���
	public NoteResult<List<Title>> execute(String type){
		//����UserService�����¼����
		System.out.println("������Ŀ");
		NoteResult<List<Title>> result=quserService.loadexamQ(type);
		return result;
}
}
