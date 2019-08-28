package com.xi2.q_bank.controller.User;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.service.UserService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/user")
public class RegistUserController {
	
	@Resource
	private UserService userService;
	
	@RequestMapping("/regist.do")
	@ResponseBody
	public NoteResult<Object> execute(String name,String sno,String password){
		System.out.println("зЂВс");
		NoteResult result = userService.addUser(name, sno, password);
		return result;
		
	}

}
