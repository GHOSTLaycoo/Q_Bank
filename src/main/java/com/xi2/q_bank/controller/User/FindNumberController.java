package com.xi2.q_bank.controller.User;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.entity.User;
import com.xi2.q_bank.service.UserService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/User")
public class FindNumberController {
	@Resource
	private UserService userService;
	
	@RequestMapping("/check.do") 
	@ResponseBody 
	public NoteResult<Result> execute(String userId){
		//调用UserService处理登录请求
		System.out.println("登陆");
		NoteResult<Result> result=userService.checkNum(userId);
		return result;	
	}
}
