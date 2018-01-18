<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
String cssPath="css/";
String jsPath="js/";
String picturesPath="pictures/";
String button_red=picturesPath+"button_red.png";
%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>金匮石室</title>
	<link rel="stylesheet" type="text/css" href="<%out.print(cssPath);%>elements.css">
	<script type="text/javascript" src="js/jquery.js"></script>
</head>
<body>
	<!-- 背景和logo -->
	<div class="bg"><img src="pictures/bg1.png"/></div>
	<div class="logo"><img src="pictures/logo.png"/></div>
	
	<!-- 左边的框 -->
	<div class="left_block">
		<div class="button_red button_log" style="background-image: url('pictures/button_red.png');"><a href="#" onclick="toLog()">登录</a></div>
		<div class="button_red button_reg" style="background-image: url('pictures/button_red.png');"><a href="#" onclick="toReg()">注册</a></div>
		
		<!-- <hr style="width: 1px; height: 200px;"/> -->
		<!-- 登陆和注册的框 -->
		<div class="log_reg_block">
			<div class="information" id="block_log">
				<form name="form_log" id="form_log" action="Servlet/loginServlet" method="post">
					<table>
        				<tr>
        					<td>邮箱</td>
        					<td><input class="input-block" type="email" name="email" id="log_email"></td>
        				</tr>
        				<tr>
        					<td>密码</td>
        					<td><input class="input-block" type="password" name="password"></td>
        				</tr>
        				<tr></tr>
        				<tr></tr>
        				<tr>
        					<td colspan="2"><input class="input-button" type="image" src="pictures/confirm.png" name="login" value="login"/></td>
        				</tr>
        			</table>
				</form>
			</div>
			
			<div class="information" id="block_reg" style="visibility: hidden;">
				<form name="form_reg" id="form_reg" action="Servlet/registerServlet" method="post">
        			<table>
        				<tr>
        					<td>用户名</td>
        					<td><input class="input-block" type="text" name="username"></td>
        				</tr>
        				<tr>
        					<td>邮箱</td>
        					<td><input class="input-block" type="email" name="email" id="reg_email"></td>
        				</tr>
        				<tr>
        					<td>密码</td>
        					<td><input class="input-block" type="text" name="password"></td>
        				</tr>
        				<tr></tr>
        				<tr>
        					<td colspan="2"><input class="input-button" type="image" src="pictures/confirm.png" name="register" value="register"/></td>
        				</tr>
        			</table>
				</form>
			</div>
		</div>
		
		<!-- 网站信息 -->
		<div class="web-message"><img src="pictures/information.png"/></div>
	</div>
</body>
<script>
function toLog(){
	${'block_log'}.style.visibility="visible";
	${'block_reg'}.style.visibility="hidden";
}
function toReg(){
	${'block_reg'}.style.visibility="visible";
	${'block_log'}.style.visibility="hidden";
}
</script>
</html>