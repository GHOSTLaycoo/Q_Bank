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
	
	@RequestMapping("/loadQ.do") //匹配请求
	@ResponseBody //JSON输出
	public NoteResult<List<Title>> execute(String type){
		//调用UserService处理登录请求
		System.out.println("加载题目");
		NoteResult<List<Title>> result=quserService.loadexamQ(type);
		return result;
}
}
