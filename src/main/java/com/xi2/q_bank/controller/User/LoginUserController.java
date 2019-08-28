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
	
	@RequestMapping("/login.do") //ƥ������
	@ResponseBody //JSON���
	public NoteResult<User> execute(String sno,String password){
		//����UserService�����¼����
		System.out.println("��½");
		NoteResult<User> result=userService.checkLogin(sno, password);
		return result;	
	}
	
}
