package com.xi2.q_bank.controller.Message;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.service.MessageService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/Inform")
public class SaveMessage1Controller {
	
	@Resource
	private MessageService messageService;
	
	@RequestMapping("/save.do")
	@ResponseBody
	public NoteResult<Object> execute(@RequestBody Map<String,Object> map){
		System.out.println("±£´æm1");
		NoteResult<Object> result = messageService.updataM1(map);
		return result;
	}
}
