package com.xi2.q_bank.controller.Message;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.entity.Message_1;
import com.xi2.q_bank.service.MessageService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/Inform")
public class LoadM1Controller {
	
	@Resource
	private MessageService messageService;
	
	@RequestMapping("/load.do")
	@ResponseBody
	public NoteResult<Message_1> execute(String userId){
		System.out.println("º”‘ÿM1");
		NoteResult<Message_1> result = messageService.loadM1(userId);
		return result;
	}

}
