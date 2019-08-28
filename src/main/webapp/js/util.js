//取消单选
function CancelSel(){
	var domName = $(this).attr('name');
	var $radio = $(this);
	// if this was previously checked
	if ($radio.data('waschecked') == true){
	$radio.prop('checked', false);
	$("input:radio[name='" + domName + "']").data('waschecked',false);
	//$radio.data('waschecked', false);
	} else {
	$radio.prop('checked', true);
	$("#Person_ul input:radio[name='" + domName + "']").data('waschecked',false);
	$radio.data('waschecked', true);
	}
};


//实时更新名字
function updataName(){
	var userId = getCookie("userId");
	$.ajax({
		url:path+"/user/loadUser.do",
		type:"post",
		data:{"userId":userId},
		dataType:"json",
		success:function(result){
			//result是服务器返回的JSON结果
			if(result.status==0){	
				var userName = result.data.cn_user_name;
				$("#Rname").val("");
				$("#Naz").val("");
				$("#Rname").val(userName);
				$("#Naz").val(userName);
			}
		},
		error:function(){
			alert("加载失败!请检查Tomcat连接!Σ( ° △ °|||)︴");
		}
	});
};

//下拉连锁
function depmx(){
var b = document.getElementById("stufaculty").value;
if(b=="")
	a="0";
if(b=="机械工程系")
	a="1";
if(b=="电气与信息工程系")
	a="2";
if(b=="材料科学与工程系")
	a="3";
if(b=="经济管理系")
	a="4";
$("#stuProfession select").css("display","none");
switch(a){
	
	case '0':
			$("#destuProfession").css("display","block");
			break;
    case '1':
			$("#jxgc").css("display","block");
			break;
    case '2':
			$("#dqxx").css("display","block");
			break;
    case '3':
			$("#clkx").css("display","block");
			break;
    case '4':
			$("#jjgl").css("display","block");
			break;
	default:break;
}
};

//单击三角形旋转和下拉框折叠
function OutLogin(){
	var id = $(this).find("#target").css("transform");
	
	if(id=="matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)"||id=="none"||id=="matrix(0, 1, -1, 0, 0, 0)"){
	
	if(id=="matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)"||id=="matrix(0, 1, -1, 0, 0, 0)"){
		$(this).find("#target").removeClass("rotateT");
	}else{
		$(this).find("#target").addClass("rotateT");
	}
		var aNode = $(this);
		var lis = aNode.nextAll("li");
		lis.toggle("show");
	}
	};
	
	
	//记忆点击过的子菜单栏，并且标记
	function Hisz(){
		$("#menu_ul").find("li").removeClass("checked");
		$(this).addClass("checked");
	};
	
	
	//点击删除附加框
	function Cli(){
		$("#user_submit").css("display","none");
		//var name = $(this).text();
		//滚动条每次刷新时置顶
		//document.getElementById('menuz').scrollTop=0
		//if(name=="个人资料")
		//$("#Person_ul").css("display","block");	
		//if(name=="账号管理")
		//$("#User_ul").css("display","block");	
		//if(name=="分数查询")
		//$("#fraction_ul").css("display","block");	
		//if(name=="介绍")
		//$("#Intr_ul").css("display","block");	
		//if(name=="鸣谢")
		//$("#Help_ul").css("display","block");
	};
	
	//账号管理加载
	function showAccount(){
		$("#menuz ul").css("display","none");
		
		//还原
		$("#mpwd").css("display","none");
		$("#eye").css("display","none");
		$("#modb").css("display","block");
		
		var userId=getCookie("userId");
		
		$.ajax({
			url:path+"/user/loadUser.do",
			type:"post",
			data:{"userId":userId},
			dataType:"json",
			success:function(result){
				//result是服务器返回的JSON结果
				if(result.status==0){	
					var userSno = result.data.cn_user_sno;
					var pwd = result.data.cn_user_password;
					$("#sstuid").val(userSno);
					$("#modp_1").val(pwd);
					NowPwd = $("#modp_1").val();
					$("#User_ul").css("display","block");
				}
			},
			error:function(){
				alert("加载失败!请检查Tomcat连接!Σ( ° △ °|||)︴");
			}
		});
	};
	
	//改变账号管理形态
	function changeShow(){
		$("#mpwd").css("display","block");
		$("#eye").css("display","block");
		$("#modb").css("display","none");
		$("#pwdname").val("原始密码:");
		$('#modp_1').attr("readonly",false);
		$("#modp_1").css({"background":"rgba(255,255,255,1)","border-style":"block","border":"2px solid rgba(79,144,252,1)"});
		$("#modp_1").val("");
		$("#modp_2").val("");
		$("#modp_3").val("");
		
	};
	
	//修改密码
	function updataPwd(){
		var userId=getCookie("userId");
		var m1 = $("#modp_1").val().trim();
		var m2 = $("#modp_2").val().trim();
		var m3 = $("#modp_3").val().trim();
		var ok = true;
		if(m1!=NowPwd){
			alert("原始密码错误!")
			ok = false;
		}
		if(m2==""){
			alert("密码不能为空!");
			ok = false;
		}
		
		if(m1==m2){
			alert("不能使用初始密码!");
			ok = false;
		}
		if(m2!=m3){
			alert("密码不相同,请确认!");
			ok = false;
		}
		
		if(ok){
			$.ajax({
				url:path+"/user/updataPwd.do",
				type:"post",
				data:{"pwd":m3,"userId":userId},
				dataType:"json",
				success:function(result){
					//result是服务器返回的JSON结果
					if(result.status==0){	
						alert(result.msg);
						showAccount();
						$("#modp_1").attr("type","password");
						$("#modp_2").attr("type","password");
						$("#modp_3").attr("type","password");
						$("#pwdname").val("密  码:");
						$('#modp_1').attr("readonly",true);
						$("#modp_1").css({"background":"rgba(244,247,227,0)","border-style":"none"});
						var eye = document.getElementById("eye");
						eye.className='fa fa-eye-slash';
					}
				},
				error:function(){
					alert("修改失败!请检查Tomcat连接!Σ( ° △ °|||)︴");
				}
			});
		}
		
	};
	
	//小眼睛功能
	 function showhide_eye(){ //密码显示，隐藏
		 var modp_1 = document.getElementById("modp_1");
		 var modp_2 = document.getElementById("modp_2");
		 var modp_3 = document.getElementById("modp_3");
		 var eye = document.getElementById("eye");
		 if (modp_1.type == "password") {
		          modp_1.type = "text";
				  modp_2.type = "text";
				  modp_3.type = "text";
				  eye.className='fa fa-eye';
		          }else {
		          modp_1.type = "password";
		          modp_2.type = "password";         
				  modp_3.type = "password";
				  eye.className='fa fa-eye-slash';
		      }
		};
	//时间功能
	function showTime()    
	{  
		
		$.ajax({
			url:path+"/date/findTime.do",
			type:"post",
			data:{},
			dataType:"json",
			success:function(result){
				//result是服务器返回的JSON结果
				if(result.status==0){
					var date = result.data;
					//console.log(date.day);
					var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六'); 
					var theMoment = new Date(date);    
					var theHour = theMoment.getHours();    
					var theMinute = theMoment.getMinutes();     
					var theMonth=theMoment.getMonth()+1; 
					var theData=theMoment.getDate(); 
					var theDay=theMoment.getDay(); 
					var hm = document.getElementById("hm");    
					theHour<10?theHour='0'+theHour:theHour;
					theMinute<10?theMinute='0'+theMinute:theMinute;
					theData<10?theData='0'+theData:theData; 
					
					hm.innerHTML = theHour + ":" + theMinute;    
					var other = document.getElementById("other");    
					other.innerHTML = theMonth+"月"+theData+"日"+show_day[theDay];
				}
			},
			error:function(){
				alert("修改失败!请检查Tomcat连接!Σ( ° △ °|||)︴");
			}
		});
	    
	};