package com.xi2.q_bank.entity;

import java.io.Serializable;

public class User implements Serializable{
	private String cn_user_id;
	private String cn_user_name;
	private String cn_user_sno;
	private String cn_user_password;
	public String getCn_user_id() {
		return cn_user_id;
	}
	public void setCn_user_id(String cn_user_id) {
		this.cn_user_id = cn_user_id;
	}
	public String getCn_user_name() {
		return cn_user_name;
	}
	public void setCn_user_name(String cn_user_name) {
		this.cn_user_name = cn_user_name;
	}
	public String getCn_user_sno() {
		return cn_user_sno;
	}
	public void setCn_user_sno(String cn_user_sno) {
		this.cn_user_sno = cn_user_sno;
	}
	public String getCn_user_password() {
		return cn_user_password;
	}
	public void setCn_user_password(String cn_user_password) {
		this.cn_user_password = cn_user_password;
	}
	
	
}
