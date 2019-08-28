package com.xi2.q_bank.util;

import java.security.MessageDigest;
import java.util.UUID;

import org.apache.commons.codec.binary.Base64;


/*
 * �������빤��
 */

public class NoteUtil {
	/*
	 * ����UUID�㷨��������
	 */
	public static String createId() {
		UUID uuid = UUID.randomUUID();
		String id = uuid.toString();
		
		return id.replace("-", "");
	}
	
	public static String md5(String src) {
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			//MD5���ܴ���
			byte[] output = md.digest(src.getBytes());
			//Base64����
			String ret = Base64.encodeBase64String(output);
			return ret;
		} catch (Exception e) {
			throw new NoteException("����ʧ��", e);
		}	
	}
	
	public static void main(String[] args) {
		System.out.println(createId());
     	System.out.println(md5(createId()));
	}
}
