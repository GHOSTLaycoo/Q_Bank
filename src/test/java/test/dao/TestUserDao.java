package test.dao;


import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.mysql.fabric.xmlrpc.base.Data;
import com.xi2.q_bank.dao.DataDao;
import com.xi2.q_bank.dao.UserDao;
import com.xi2.q_bank.entity.User;



public class TestUserDao {
	

	
	@Test
	public void testUserDao() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("conf/spring-mybatis.xml");
		UserDao dao = ctx.getBean("userDao",UserDao.class);
		User user = dao.findByName("8888");
		System.out.println(user.getCn_user_id()+","+user.getCn_user_password());
	}
	
	@Test
	public void testDataDao() {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("conf/spring-mybatis.xml");
		DataDao dao = ctx.getBean("dataDao",DataDao.class);
		SimpleDateFormat format = new SimpleDateFormat("yyyy:MM:dd:HH:mm:E");
        Date des =  dao.Time();
        System.out.println(format.format(des));

	}
}
