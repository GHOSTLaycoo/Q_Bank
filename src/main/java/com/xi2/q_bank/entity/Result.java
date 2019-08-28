package com.xi2.q_bank.entity;

import java.io.Serializable;

public class Result implements Serializable{
	private String cn_user_id;
	private String cn_user_name;
	private int R_Chinese;
	private int R_English;
	private int R_Math;
	public String getCn_user_name() {
		return cn_user_name;
	}
	public void setCn_user_name(String cn_user_name) {
		this.cn_user_name = cn_user_name;
	}
	public String getCn_user_id() {
		return cn_user_id;
	}
	public void setCn_user_id(String cn_user_id) {
		this.cn_user_id = cn_user_id;
	}
	public int getR_Chinese() {
		return R_Chinese;
	}
	public void setR_Chinese(int r_Chinese) {
		R_Chinese = r_Chinese;
	}
	public int getR_English() {
		return R_English;
	}
	public void setR_English(int r_English) {
		R_English = r_English;
	}
	public int getR_Math() {
		return R_Math;
	}
	public void setR_Math(int r_Math) {
		R_Math = r_Math;
	}
	
	
	
}
