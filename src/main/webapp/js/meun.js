//显示鸣谢
function showIntroduction() {
	$("#menuz ul").css("display","none");
	$("#Introduction").css("display","block");
};

function showThanks(){
	$("#menuz ul").css("display","none");
	$("#Thanks").css("display","block");
};

//加载名字
function loadName(){
	updataName();
};

//显示上传
function showQuestion_ul(){
	$("#menuz ul").css("display","none");
	$("#Question_ul").css("display","block");
};

//显示题目
function showYW(){
	$("#menuz ul").css("display","none");
	examNum = 0;
	$("#Cexam_ul").empty();
	//$("#user_submit").css("display","none");
	var type = $("#menu_ul li.checked").attr("value");
	
	$.ajax({
		 url:path+"/User/loadQ.do",
		 type:"post",
		 data:{"type":type},
		 dataType:"json",
		 success:function(result){
			 if(result.status==0){
				 var exams=result.data;
				 for(var i=0;i<exams.length;i++){
					 var title = exams[i].q_title;
					 var A = exams[i].q_A;
					 var B = exams[i].q_B;
					 var C = exams[i].q_C;
					 var D = exams[i].q_D;
					 var examId = exams[i].q_Id;
					 
					 var sli="";
					 sli+='<li class="a5_4">';
					 sli+='<h3>';
					 sli+=(i+1)+'.'+title;
					 sli+='</h3>';
					 sli+='<h1><label><input name="C'+i+'" type="radio" value="B" />';
					 sli+='<span>B.';
					 sli+=B;
					 sli+='</span></label></h1><h1><label><input name="C'+i+'" type="radio" value="A" />';
					 sli+='<span>A.';
					 sli+=A;
					 sli+='</span></label></h1><br><h1><label><input name="C'+i+'" type="radio" value="D" /><span>D.';
					 sli+=D;
					 sli+='</span></label></h1><h1><label><input name="C'+i+'" type="radio" value="C" /><span>C.';
					 sli+=C;
					 sli+='</span></label></h1></li>';
					 
					 var $li = $(sli);
					 $li.data("examId",examId);
					 $("#Cexam_ul").append($li);
					 $("#Cexam_ul").css("display","block");
				 }
				 examNum = exams.length;
				 if(exams.length>0){
					 $("#user_submit").css("display","block");
				 }
				 
			 }
		 },
		 error:function(){
			 alert("加载失败");
		 }
	 });
};