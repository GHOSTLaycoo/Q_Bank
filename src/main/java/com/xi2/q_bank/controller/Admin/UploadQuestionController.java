package com.xi2.q_bank.controller.Admin;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xi2.q_bank.service.AdminService;
import com.xi2.q_bank.util.NoteResult;
import net.sf.json.JSONObject;


@Controller
@RequestMapping("/admin")
public class UploadQuestionController {
	
	@Resource
	private AdminService adminService;
	
	@RequestMapping("/uploadQ.do")
	@ResponseBody
	public NoteResult<Object> execute(@RequestBody Map<String, Object> params){
		//String map2 = request.getParameter("map2");
		//JSONObject jb = JSONObject.fromObject(map2);
		//Map map = (Map)jb;
		System.out.println("创建题目");
		NoteResult result=adminService.UploadQuestion(params);
		return result;	
		
	}
}
