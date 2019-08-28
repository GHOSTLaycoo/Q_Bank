//加载详细信息
function LoadM2(){
	var userId = getCookie("userId");
	$.ajax({
		 url:path+"/Inform/loadM2.do",
		 type:"post",
		 data:{"userId":userId},
		 dataType:"json",
		 success:function(result){
			 if(result.status==0){
				 $("#Rschool").val(result.data.m_Rschool);
				 $("#stufaculty").find("option:contains("+result.data.m_stufaculty+")").attr("selected",true);
				 depmx();
				 var a = $("#stuProfession").find("option:contains("+result.data.m_stuProfession+")").attr("selected",true);
				 console.log(a);
				 $("#jie").find("option:contains("+result.data.m_jie+")").attr("selected",true);
				 $("#ban").find("option:contains("+result.data.m_ban+")").attr("selected",true); 
			 }
		 },
		 error:function(){
			 alert("加载M2失败");
		 }
	 });
};

//加载个人信息
function LoadMessage(){
	$("#menuz ul").css("display","none");
	var userId = getCookie("userId");
	$.ajax({
		 url:path+"/Inform/load.do",
		 type:"post",
		 data:{"userId":userId},
		 dataType:"json",
		 success:function(result){
			 if(result.status==0){
				 $("#NC").val(result.data.m_nc);
				 $("#Person_ul input:radio[value="+result.data.m_sx+"]").attr('checked','true');
				 $("#SR").val(result.data.m_sr);
				 $("#xz").find("option:contains("+result.data.m_xz+")").attr("selected",true);
				 $("#xx").find("option:contains("+result.data.m_xx+")").attr("selected",true);
				 $("#zy").find("option:contains("+result.data.m_zy+")").attr("selected",true);
				 $("#mail").val(result.data.m_mail);
				 $("#phone").val(result.data.m_phone);
				 $("#Note").val(result.data.m_Note);
				 LoadM2();
				 $("#Person_ul").css("display","block");
			 }
		 },
		 error:function(){
			 alert("无法查询个人资料!请检查Tomcat连接Σ( ° △ °|||)︴");
		 }
	 });
};

//上传个人信息
function savePeopleInform(){
	
	var map = {};
	map.userId = getCookie("userId");
	map.nc = $("#NC").val();
	var sx = $("#Person_ul input[name='sx']:checked").attr("value");
	if(sx==undefined){
		sx = "";
		map.sx = sx;
	}else{
		map.sx = sx;
	}
	map.sr = $("#SR").val();
	map.xz= $("#xz").find("option:selected").text(); 
	map.xx= $("#xx").find("option:selected").text();
	map.zy= $("#zy").find("option:selected").text();
	map.mail = $("#mail").val();
	map.phone = $("#phone").val();
	map.Note = $("#Note").val();
	
	map.Rname = $("#Rname").val();
	map.Rschool = $("#Rschool").val();
	map.stufaculty = $("#stufaculty").find("option:selected").text();
	map.stuProfession = $("#stuProfession").find("option:selected").text().trim();
	map.jie = $("#jie").find("option:selected").text();
	map.ban = $("#ban").find("option:selected").text();
	
	console.log(map);
	
	
	$.ajax({
		 url:path+"/Inform/save.do",
		 type:"post",
		 data:JSON.stringify(map),
		 dataType:"json",
		 contentType:"application/json",
		 success:function(result){
			 if(result.status==0){
				 updataName();
				 alert("保存成功")
			 }
		 },
		 error:function(){
			 alert("保存失败");
		 }
	 });
	
};


//查询成绩
function checkNum(){
	$("#menuz ul").css("display","none");
	var userId=getCookie("userId");	
	$.ajax({
		 url:path+"/User/check.do",
		 type:"post",
		 data:{"userId":userId},
		 dataType:"json",
		 success:function(result){
			 if(result.status==0){
				 var re = result.data;
				 var chinese = re.r_Chinese;
				 var english = re.r_English;
				 var math = re.r_Math;
				 
				$("#TestCexam").val(chinese);
				$("#TestMexam").val(math);
				$("#TestEexam").val(english);
				$("#fraction_ul").css("display","block");
				//alert(result.data);
			 }
		 },
		 error:function(){
			 alert("无法查询分数!请检查Tomcat连接!Σ( ° △ °|||)︴");
		 }
	 });
};


//提交答案
function SubmitAnswer(){
	var saveData = [];
	var userId=getCookie("userId");
	var type = $("#menu_ul li.checked").attr("value");
	console.log(type);
	var ok = true;
	var num = 0;
	$("#Cexam_ul li").each(function(i){
		var id= $(this).data("examId");
		console.log(id);
		var answer = $("input[name='C"+i+"']:checked").attr("value");
		if(answer!=null){
			num+=1;
		}
		console.log(answer);
		var map = {};
		map.userId=userId;
		map.type=type;
		map.examId=id;
		map.answer=answer;
		saveData.push(map);
	});
	if(num!=examNum){
		alert("请完成所有题目!");
		ok = false;
	}
	
	console.log(JSON.stringify(saveData));
	if(ok){
		$.ajax({
			 url:path+"/User/submit.do",
			 type:"post",
			 data:JSON.stringify(saveData),
			 dataType:"json",
			 contentType:"application/json",
			 success:function(result){
				 if(result.status==0){
					 var map = result.data;
					 var num = map.num;
					 var lis = map.lis;
					 var falseQ = new Array();
					 var str="";
					 
					     $("#Cexam_ul li").each(function(j){
					    	 var id = $(this).data("examId");
					    	 var answer = $("input[name='C"+j+"']:checked").attr("value");
					    	 console.log("1"+answer);
					    	 for(var i=0;i<lis.length;i++){
								 var FexamId = lis[i].q_Id;
								 var Fanswer = lis[i].q_Answer;
								 console.log("2"+answer);
					    	 if(FexamId==id){
					    		 console.log("3"+answer);
					    		 falseQ[i] = (j+1)+".("+answer+"/"+Fanswer+")  "
					             str+=falseQ[i];
					    	 }
					    	 }
					     });
					 
				  if(lis.length>0){
					  alert("分数:"+num+"题号.(选择/正确)\n"+str);
				  }else{
					  alert("分数:"+num+"恭喜你全对!");
				  }
				 
				 }
			 },
			 error:function(){
				 alert("提交失败");
			 }
		 });
	}
	
};

/**
//判断年份选项框
  function YYYYMMDDstart(){   
           MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
           //先给年下拉框赋内容   
           var y  = new Date().getFullYear();   
           for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年   
                   document.reg_testdate.YYYY.options.add(new Option(" "+ i +" 年", i));   
    
           //赋月份的下拉框   
           for (var i = 1; i < 13; i++)   
                   document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i));   
    
           document.reg_testdate.YYYY.value = y;   
           document.reg_testdate.MM.value = new Date().getMonth() + 1;   
           var n = MonHead[new Date().getMonth()];   
           if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;   
                writeDay(n); //赋日期下拉框Author:meizz   
           document.reg_testdate.DD.value = new Date().getDate();   
   }   
   if(document.attachEvent)   
       window.attachEvent("onload", YYYYMMDDstart);   
   else   
       window.addEventListener('load', YYYYMMDDstart, false);   
   function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)   
   {   
           var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;   
           if (MMvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
           var n = MonHead[MMvalue - 1];   
           if (MMvalue ==2 && IsPinYear(str)) n++;   
                writeDay(n)   
   }   
   function MMDD(str)   //月发生变化时日期联动   
   {   
        var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;   
        if (YYYYvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
        var n = MonHead[str - 1];   
        if (str ==2 && IsPinYear(YYYYvalue)) n++;   
       writeDay(n)   
   }   
   function writeDay(n)   //据条件写日期的下拉框   
   {   
           var e = document.reg_testdate.DD; optionsClear(e);   
           for (var i=1; i<(n+1); i++)   
                e.options.add(new Option(" "+ i + " 日", i));   
   }   
   function IsPinYear(year)//判断是否闰平年   
   {     return(0 == year%4 && (year%100 !=0 || year%400 == 0));}   
   function optionsClear(e)   
   {   
        e.options.length = 1;   
   } 	

*/
/**
function TestCexam_ul(){
var chevp="";
var chev=new Array();
var chez=["D","B","C"];  //答案
var frac=0;
var checkInputs = document.querySelectorAll('#Cexam_ul input:checked'); 
var checl = checkInputs.length;
var chezl = chez.length;
if(flag_C==0){
	if(checl==chezl){   //判断是否有漏选
		for(var i = 0;i<checkInputs.length;i++){
			chev[i] = checkInputs[i].value;
			if(i!=checl-1)
			chevp = chevp+chev[i]+",";
			else
			chevp = chevp+chev[i];
			if(chez[i]==chev[i])
			frac=frac+Fus/checl;  //正确则加分
		}
				document.getElementById("TestCexam").value=parseInt(frac);
				if(frac<Fusq)
					document.getElementById("TestCexam").style.color = 'red';//标记不及格为红色
				alert("       您的答案是:"+chevp+
				"\n       正确答案为:"+chez+
				"\n                 总分:"+parseInt(frac)+"\n");
				flag_C++;
	
	}else{
	alert("请完成所有题目!");
	}
}else
alert("请勿重复提交!");
};


function TestMexam_ul(){
var chevp="";
var chev=new Array();
var chez=["D","B"];  //正确答案
var frac=0;
var checkInputs = document.querySelectorAll('#Mexam_ul input:checked'); 
var checl = checkInputs.length;
var chezl = chez.length;
if(flag_M==0){
	if(checl==chezl){   //判断是否全部选择
		for(var i = 0;i<checkInputs.length;i++){
			chev[i] = checkInputs[i].value;
			if(i!=checl-1)
			chevp = chevp+chev[i]+",";
			else
			chevp = chevp+chev[i];
			if(chez[i]==chev[i])
			frac=frac+Fus/checl;  //正确加分
		}
				document.getElementById("TestMexam").value=parseInt(frac);
				if(frac<Fusq)
					document.getElementById("TestMexam").style.color = 'red';
				alert("       您的答案是:"+chevp+
				"\n       正确答案为:"+chez+
				"\n                 总分:"+parseInt(frac)+"\n");
				flag_M++;
	
	}else{
	alert("请完成所有题目!");
	}
}else
alert("请勿重复提交!");
};

function TestEexam_ul(){
var chevp="";
var chev=new Array();
var chez=["D","B"];  //正确答案
var frac=0;
var checkInputs = document.querySelectorAll('#Eexam_ul input:checked'); 
var checl = checkInputs.length;
var chezl = chez.length;
if(flag_E==0){
	if(checl==chezl){   //判断是否全部选择
		for(var i = 0;i<checkInputs.length;i++){
			chev[i] = checkInputs[i].value;
			if(i!=checl-1)
			chevp = chevp+chev[i]+",";
			else
			chevp = chevp+chev[i];
			if(chez[i]==chev[i])
			frac=frac+Fus/checl;  //正确加分
		}
				document.getElementById("TestEexam").value=parseInt(frac);
				if(frac<Fusq)
					document.getElementById("TestEexam").style.color = 'red';
				alert("       您的答案是:"+chevp+
				"\n       正确答案为:"+chez+
				"\n                 总分:"+parseInt(frac)+"\n");
				flag_E++;
	
	}else{
	alert("请完成所有题目!");
	}
}else
alert("请勿重复提交!");
};
*/

/**
function save_Person(){

var rname = document.getElementById("Rname").value;
var rschool = document.getElementById("Rschool").value;
var rdepartment = document.getElementById("Rdepartment").value;
var rclass = document.getElementById("Rclass").value;
document.getElementById("Naz").value=rname;
alert("姓名: "+rname+
	  "\n学校: "+rschool+
	  "\n院系: "+rdepartment+
	  "\n班级: "+rclass
);
};*/


/**
function modiypwd(){  //修改密码
	
	if(flag%2!=0){
	document.getElementById("eye").style="display:block;width:50px; position:absolute;right:31.5%;top:4%;";
	document.getElementById("modp_1").readOnly=false;
	document.getElementById("modp_1").value=""; //恢复默认状态
	document.getElementById("modp_2").value="";
	document.getElementById("modp_3").value="";
	document.getElementById("modb").value="保存";
	$("#mpwd").css("display","block");
	document.getElementById("modp_1").style="border-style:block;background:rgba(255,255,255,1);border:2px solid rgba(79,144,252,1)";
	document.getElementById("pwdname").value="原始密码:";
	flag++;
    }else{
if(document.getElementById("modp_1").value!="" && document.getElementById("modp_2").value!="" && document.getElementById("modp_3").value!=""){//任意一项不填则没有反应
	if(pwd==document.getElementById("modp_1").value){
		if(pwd!=document.getElementById("modp_2").value){
		    if(document.getElementById("modp_3").value==document.getElementById("modp_2").value){
		    alert("修改密码成功!");	
			document.getElementById("modp_1").value=document.getElementById("modp_3").value
			pwd=document.getElementById("modp_3").value;
			document.getElementById("modp_1").readOnly=true;
			document.getElementById("modb").value="修改";
			document.getElementById("pwdname").value="密　　码:";
			document.getElementById("modp_1").style="border-style:none;background:rgba(244,247,227,0);";
			$("#mpwd").css("display","none");
			document.getElementById("modp_1").type = "password";
			document.getElementById("modp_2").type = "password";
			document.getElementById("modp_3").type = "password";
			document.getElementById("eye").className='fa fa-eye-slash';
			document.getElementById("eye").style="display:none;width:50px; position:absolute;right:31.5%;top:9%;";
			flag++;
			}else{
			alert("确认密码有误!");	
			}
		}else{
		alert("不能输入旧密码");	
		}
	}else{
	alert("输入原始密码错误");	
	}
}
}
};
*/


/**
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
*/




	