package com.xi2.q_bank.controller.Admin;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.service.AdminService;
import com.xi2.q_bank.util.NoteResult;

@Controller
@RequestMapping("/admin")
public class FindAllResultController {
	
	@Resource
	private AdminService adminService;
	
	@RequestMapping("/findAllRe.do")
	@ResponseBody
	public NoteResult<List<Result>> execute(String stuSession, String stuProfession, String stuClass,String stufaculty){
		System.out.println("加载所有成绩");
		NoteResult<List<Result>> result = adminService.findAllR(stuSession, stuProfession, stuClass, stufaculty);
		return result;
		
	}

}
