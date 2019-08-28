package com.xi2.q_bank.dao;

import java.util.Map;

import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.entity.User;

public interface UserDao {
	//通过学号查询User
	public User findByName(String sno);
	//保存User
	public int save(User user);
	//创建默认成绩单
	public int saveNumber(Result re);
	//修改成绩
	public int createResult(Map pp);
	//通过Id查询成绩
	public Result findNumById(String userId);
	//修改密码
	public int updataPwd(Map params);
	//修改姓名
	public int updataName(Map params);
	//通过userId查询User
	public User findUserById(String userId);
	
}
