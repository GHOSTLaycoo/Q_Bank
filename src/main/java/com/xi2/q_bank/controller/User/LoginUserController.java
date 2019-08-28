package com.xi2.q_bank.controller.User;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.entity.User;
import com.xi2.q_bank.service.UserService;
import com.xi2.q_bank.util.NoteResult;





@Controller
@RequestMapping("/user")
public class LoginUserController {
	@Resource
	private UserService userService;
	
	@RequestMapping("/login.do") //匹配请求
	@ResponseBody //JSON输出
	public NoteResult<User> execute(String sno,String password){
		//调用UserService处理登录请求
		System.out.println("登陆");
		NoteResult<User> result=userService.checkLogin(sno, password);
		return result;	
	}
	
}
