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
public class FindUserByIdController {
	
	@Resource
	private UserService userService;
	
	@RequestMapping("/loadUser.do")
	@ResponseBody
	public NoteResult<User> execute(String userId){
		System.out.println("≤È—Ø’À∫≈");
		NoteResult<User> result = userService.findUser(userId);
		return result;
		
	}
}
