package com.xi2.q_bank.controller.Quser;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.service.QuserService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/User")
public class SubmitExamController {
	
	@Resource
	private QuserService quserService;
	
	@RequestMapping("/submit.do")
	@ResponseBody
	public NoteResult<Map<String,Object>> execute(@RequestBody List<Map> saveData){
		System.out.println("ÆÀ·Ö");
		NoteResult<Map<String,Object>> result = quserService.checkExam(saveData);
		return result;	
		
	}
}
