package com.xi2.q_bank.controller.Date;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.service.AdminService;
import com.xi2.q_bank.service.DateService;
import com.xi2.q_bank.util.NoteResult;


@Controller
@RequestMapping("/date")
public class FindDateController {
	@Resource
	private DateService dateService;
	
	@RequestMapping("/findTime.do")
	@ResponseBody
	public NoteResult<Date> execute(){
		System.out.println("œ‘ æ ±º‰");
		NoteResult<Date> result = dateService.findDate();
		return result;
		
	}
}
