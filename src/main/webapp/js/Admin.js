//查找指定成绩
function findAllRe(){
	
	var stuSession = $("#stuSession").find("option:selected").text();
	var stufaculty = $("#stufaculty").find("option:selected").text();
	var stuProfession = $("#stuProfession").find("option:selected").text();
	var stuClass = $("#stuClass").find("option:selected").text();
	
	console.log(stuSession+","+stuProfession+","+stuClass+","+stufaculty);
	
	$.ajax({
		 url:path+"/admin/findAllRe.do",
		 type:"post",
		 data:{"stuSession":stuSession,"stuProfession":stuProfession,"stuClass":stuClass,"stufaculty":stufaculty},
		 dataType:"json",
		 success:function(result){
			 if(result.status==0){
				 var Res = result.data;
				 console.log(Res);
				 $("#table_1 tbody").html("");
				 for(var i=0;i<Res.length;i++){
					 var cn_user_name = Res[i].cn_user_name;
					 var R_Chinese = Res[i].r_Chinese;
					 var R_English = Res[i].r_English;
					 var R_Math = Res[i].r_Math;
					 
					 var sli="";
					 sli+='<tr>';
					 sli+='<td><input id="stuName" readonly="readonly" value='+cn_user_name+'></input></td>';
					 sli+='<td><input id="TestCexam" readonly="readonly"value='+R_Chinese+'></input></td>';
					 sli+='<td><input id="TestMexam" readonly="readonly"value='+R_Math+'></input></td>';
					 sli+='<td><input id="TestEexam" readonly="readonly"value='+R_English+'></input></td>';
					 sli+='</tr>';
					 
					 var $tr = $(sli);
					 
					 console.log(sli);
					 $("#table_1 tbody").append($tr);
				 }
				 //$("#stuSession").val("em");
				 //$("#stufaculty").val("em");
				 //$("#stuClass").val("em");
				 
				 
			 }
		 },
		 error:function(){
			 alert("创建失败");
		 }
	 });
};

//显示查找所有成绩
function findAllReWindow(){
	$("#menuz ul").css("display","none");
	$("#fraction_ul").css("display","block");	
};

//上传题目
function uploadQ(){
	$("#menuz_B ul").css("display","none");
	$("#mmm").animate({scrollTop:0},800);
	var type = $("#menu_ul li.checked").attr("value");
	var Question = $("#Ctxta").val();
	var A = $("#CansA").val();
	var B = $("#CansB").val();
	var C = $("#CansC").val();
	var D = $("#CansD").val();
	console.log(A);
	
	var answer = $("#Question_ul input[name='A1']:checked").attr("value");
	console.log(answer);
	var map = {};
	map.type=type;
	map.Question=Question;
	map.A=A;
	map.B=B;
	map.C=C;
	map.D=D;
	map.answer=answer;
	var map2 = JSON.stringify(map);
	
	$.ajax({
			 url:path+"/admin/uploadQ.do",
			 type:"post",
			 data:map2,
			 dataType:"json",
			 contentType:"application/json",
			 success:function(result){
				 if(result.status==0){
					 $("#Ctxta").val("");
					 $("#CansA").val("");
					 $("#CansB").val("");
					 $("#CansC").val("");
					 $("#CansD").val(""); 
		             $("#Question_ul input").removeAttr("checked");
					 alert(result.msg);
				 }else if(result.status==1){
					 alert(result.msg);
					 //$("#Question_ul input").removeAttr("checked"); 
				 }else if(result.status==2){
					 alert(result.msg);
					 //$("#Question_ul input").removeAttr("checked");
				 }else if(result.status==3){
					 alert(result.msg);
					 //$("#Question_ul input").removeAttr("checked");
				 }
			 },
			 error:function(){
				 alert("提交失败!");
			 }
		 });
	
	
	
	
};


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
};
*/


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
	document.getElementById("modp_1").style="border-style:block;background:rgba(255,255,255,1);border:2px solid rgba(79,144,252,1);";
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
function depmx2(){
var b = document.getElementById("stufaculty").value;
console.log(b);
if(b=="em")
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
$("#stuProfession option").attr("selected", false);
switch(a){
	
	case '0':
			$("#destuProfession").css("display","block");
			break;
    case '1':
			$("#jxgc").css("display","block");
			flag_frc = 1;
			break;
    case '2':
			$("#dqxx").css("display","block");
			flag_frc = 2;
			break;
    case '3':
			$("#clkx").css("display","block");
			flag_frc = 3;
			break;
    case '4':
			$("#jjgl").css("display","block");
			flag_frc = 4;
			break;
	default:break;
}
};


/**
function displaystu(){
var A = document.querySelector('#stuSession option:checked').value; 
var B = document.querySelector('#stufaculty option:checked').value; 
var D = document.querySelector('#stuClass option:checked').value; 
var C = "";
var check = new Array();
var checkInputs = document.querySelectorAll('#stuProfession option:checked'); 
var checl = checkInputs.length;
   for(var i = 0;i<checl;i++){
			check[i] = checkInputs[i].value;
		}
if(check[flag_frc]=="机电工程")			
		C="机电";
if(check[flag_frc]=="数字化设计与制造")			
		C="数字化";
	if(check[flag_frc]=="装备制造产业")			
		C="装备制造";
	if(check[flag_frc]=="工业设计")			
		C="工业设计";
	if(check[flag_frc]=="计算机科学与技术")			
		C="计算机";
	if(check[flag_frc]=="软件工程")			
		C="软件";
	if(check[flag_frc]=="电子信息工程")			
		C="电信";
	if(check[flag_frc]=="自动化")			
		C="自动化";
	if(check[flag_frc]=="高分子材料")			
		C="高分子";
	if(check[flag_frc]=="模具设计与制造")			
		C="模具";
	if(check[flag_frc]=="材料成型及控制")			
		C="材料成型";
	if(check[flag_frc]=="材料科学与工程")			
		C="材料科学";
	if(check[flag_frc]=="物流管理")			
		C="物流";
	if(check[flag_frc]=="汽车营销")			
		C="营销";
	if(check[flag_frc]=="财务管理")			
		C="财务";
	if(check[flag_frc]=="旅游管理")			
		C="旅游";
			alert("院系:"+B+"\n"+
			"专业:"+check[flag_frc]+"\n"+
			"班级:"+C+A+D
		); 
};
*/


 




	