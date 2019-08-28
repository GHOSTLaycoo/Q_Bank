package com.xi2.q_bank.service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xi2.q_bank.dao.MessageDao;
import com.xi2.q_bank.dao.UserDao;
import com.xi2.q_bank.entity.Message_1;
import com.xi2.q_bank.entity.Message_2;
import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.entity.User;
import com.xi2.q_bank.util.NoteResult;
import com.xi2.q_bank.util.NoteUtil;

@Service("userService")
public class UserServiceImpl implements UserService{
 
	@Resource
	private UserDao userDao;
	
	@Resource
	private MessageDao messageDao;
		
	public NoteResult<User> checkLogin(String sno, String password) {
		//接收结果数据
				NoteResult<User> result = new NoteResult<User>();
				//按参数name查询数据库
				User user = userDao.findByName(sno);
				
				//用户名检测
				if(user==null) {
					result.setStatus(1);
					result.setMsg("用户名不存在");
					return result;
				}
				//检测密码
				if(!user.getCn_user_password().equals(password)) {
					result.setStatus(2);
					result.setMsg("密码错误");
					return result;
				}
				//用户名和密码都正确时
				result.setStatus(0);
				result.setMsg("登陆成功");
				result.setData(user);
				return result;
	}

	public NoteResult<Object> addUser(String name, String sno, String password) {
		NoteResult<Object> result = new NoteResult<Object>();
		//用户检测
		User hasUser = userDao.findByName(sno);
		if(hasUser!=null) {//用户名存在
			result.setStatus(1);
			result.setMsg("用户已被占用");
			return result;
		}
		
		System.out.println(name);
		
		//添加用户
		User user = new User();
		//设置用户名
		user.setCn_user_name(name);
		//设置用户密码
		user.setCn_user_password(password);
		//设置用户昵称
		user.setCn_user_sno(sno);
		//创建ID
		String id = NoteUtil.createId();
		//设置用户ID
		user.setCn_user_id(id);
		//插入用户数据
		int a = userDao.save(user);	
		if(a==1) {
			//创建默认成绩单
			Result re = new Result();
			re.setCn_user_id(id);
			re.setCn_user_name(name);
			re.setR_Chinese(0);
			re.setR_English(0);
			re.setR_Math(0);
			userDao.saveNumber(re);
			
			//创建默认m2
			Message_2 m2 = new Message_2();
			m2.setCn_user_id(id);
			m2.setM_ban(null);
			m2.setM_jie(null);
			m2.setM_Rschool(null);
			m2.setM_stufaculty(null);
			m2.setM_stuProfession(null);
			messageDao.saveM2(m2);
			
			//创建默认m1
			System.out.println(id);
			Message_1 m1 = new Message_1();
			m1.setCn_user_id(id);
			m1.setM_mail(null);
			m1.setM_nc(null);
			m1.setM_Note(null);
			m1.setM_phone(null);
			m1.setM_sr(null);
			m1.setM_sx(null);
			m1.setM_xx(null);
			m1.setM_xz(null);
			m1.setM_zy(null);
			messageDao.saveM1(m1);
			
			
		}
		
		
		
		//构建返回结果
		result.setStatus(0);
		result.setMsg("注册成功");
		return result;
	}

	public NoteResult<Result> checkNum(String userId) {
		System.out.println(userId);
		NoteResult<Result> result = new NoteResult<Result>();
		Result re = userDao.findNumById(userId);
		System.out.println(re);
		if(re!=null) {
			result.setStatus(0);
			result.setMsg("查询成功");
			result.setData(re);
		}
		return result;
	}

	public NoteResult<Object> updataPwd(String pwd, String userId) {
		NoteResult<Object> result = new NoteResult<Object>();
		Map<String,Object> params = new HashMap<String, Object>();
		params.put("pwd", pwd);
		params.put("userId", userId);
		int a = userDao.updataPwd(params);
		if(a==1) {
			result.setStatus(0);
			result.setMsg("修改成功");
		}
		return result;
	}

	public NoteResult<User> findUser(String userId) {
		NoteResult<User> result = new NoteResult<User>();		
		User user = userDao.findUserById(userId);
		if(user!=null) {
			result.setStatus(0);
			result.setMsg("修改成功");
			result.setData(user);
		}
		return result;
	}

}
