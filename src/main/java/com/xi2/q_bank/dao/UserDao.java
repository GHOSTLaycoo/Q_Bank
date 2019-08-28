package com.xi2.q_bank.dao;

import java.util.Map;

import com.xi2.q_bank.entity.Result;
import com.xi2.q_bank.entity.User;

public interface UserDao {
	//ͨ��ѧ�Ų�ѯUser
	public User findByName(String sno);
	//����User
	public int save(User user);
	//����Ĭ�ϳɼ���
	public int saveNumber(Result re);
	//�޸ĳɼ�
	public int createResult(Map pp);
	//ͨ��Id��ѯ�ɼ�
	public Result findNumById(String userId);
	//�޸�����
	public int updataPwd(Map params);
	//�޸�����
	public int updataName(Map params);
	//ͨ��userId��ѯUser
	public User findUserById(String userId);
	
}
