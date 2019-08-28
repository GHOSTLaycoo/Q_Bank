package com.xi2.q_bank.controller.Message;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.entity.Message_1;
import com.xi2.q_bank.entity.Message_2;
import com.xi2.q_bank.service.MessageService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/Inform")
public class LoadM2Controller {
	
	@Resource
	private MessageService messageService;
	
	@RequestMapping("/loadM2.do")
	@ResponseBody
	public NoteResult<Message_2> execute(String userId){
		System.out.println("º”‘ÿM2");
		NoteResult<Message_2> result = messageService.loadM2(userId);
		return result;
	}

}
