//注册
function registUser(){
	var sno = $("#usernum").val().trim();
	var name = $("#username").val().trim();
	var password=$("#password").val().trim();
	
	console.log(name);
	var ok=true;
	if(sno==""&&password==""&&name==""){
		$("#usernum").attr("placeholder","学号");
		$("#password").attr("placeholder","密码");
		$("#username").attr("placeholder","姓名");
		ok=false;
	}else{
		if(name==""){
			$("#username").attr("placeholder","姓名不能为空");
			ok=false;
		}
		if(sno==""){
			$("#usernum").attr("placeholder","学号不能为空");
			ok=false;
		}
		if(password==""){
			$("#password").attr("placeholder","密码不能为空");
			ok=false;
		}
	}
	if(ok){//测试格式通过
		//发送ajax请求
		$.ajax({
			url:path+"/user/regist.do",
			type:"post",
			data:{"name":name,"sno":sno,"password":password},
			dataType:"json",
			success:function(result){
				//result是服务器返回的JSON结果
				if(result.status==0){	
				document.getElementById("regedit").style.display="block";	
				}else if(result.status==1){ 
					alert(result.msg)
				}
			},
			error:function(){
				alert("注册失败!请检查Tomcat连接是否出现异常!Σ( ° △ °|||)︴");
			}
		});
	}
	
};


//登陆
function userLogin(){
	var sno = $("#usernum").val().trim();
	var password=$("#password").val().trim();
	
	//addCookie("password",password,2);
	//alert(name+","+password);
	//格式检测
	var ok=true;
	if(sno==""&&password==""){
		$("#usernum").attr("placeholder","学号");
		$("#password").attr("placeholder","密码");
		ok=false;
	}else{
		if(sno==""){
			$("#usernum").attr("placeholder","学号不能为空");
			ok=false;
		}
		if(password==""){
			$("#password").attr("placeholder","密码不能为空");
			ok=false;
		}	
	}
	
	if(ok){//测试格式通过
		//发送ajax请求
		$.ajax({
			url:path+"/user/login.do",
			type:"post",
			data:{"sno":sno,"password":password},
			dataType:"json",
			success:function(result){
				//result是服务器返回的JSON结果
				if(result.status==0){
					//将用户信息保存到Cookie
					var userId=result.data.cn_user_id;
					var userName=result.data.cn_user_name;
					var userSno=result.data.cn_user_sno;
					addCookie("userId",userId,2);
					addCookie("userName",userName,2);
					
					if(userSno!="root"){
						window.location.href="user.html";
					}else{
						window.location.href="admin.html";
					}
					
					
				}else if(result.status==1){ 
					alert(result.msg)
				}else if(result.status==2){
					alert(result.msg)
				}
			},
			error:function(){
				alert("登陆失败!请检查Tomcat连接是否出现异常!Σ( ° △ °|||)︴");
			}
		});
	}
};