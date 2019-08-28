package com.xi2.q_bank.controller.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.xi2.q_bank.service.UserService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/user")
public class UpdataPwdController {
	
	@Resource
	private UserService userService;
	
	@ResponseBody
	@RequestMapping("/updataPwd.do")
	public NoteResult<Object> execute(String pwd,String userId){
		System.out.println("ÐÞ¸ÄÃÜÂë");
		NoteResult<Object> result = userService.updataPwd(pwd, userId);
		return result;
		
	}
}
