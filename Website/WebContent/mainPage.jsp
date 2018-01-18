<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.*,java.sql.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
String username=(String)session.getAttribute("username");
String email=(String)session.getAttribute("email");
String headURL=(String)session.getAttribute("header");
headURL="pictures/header.png";
String password="";
%>


<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>金匮石室</title>
	<link rel="stylesheet" type="text/css" href="css/elements.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/js.js"></script>
</head>
<body>
	<div class="bg"><img id="bg" src="pictures/bg2.png"/></div>
	
	<div class="main-left">
		<a href="#" onclick="toPage(0);return false;"><img src="pictures/function1.png"/></a>
		<a href="#" onclick="toPage(1);return false;"><img src="pictures/function2.png"/></a>
		<a href="#" onclick="toPage(2);return false;"><img src="pictures/function3.png"/></a>
		<a href="#" onclick="toPage(3);return false;"><img src="pictures/function4.png"/></a>
		<div class="function-hover" id="function-hover-img"><img src="pictures/function_hover.png"/></div>
	</div>
	
	<div class="main-right">
		<div class="page1" id="page1">
		</div>
		
		
		<div class="page2" id="page2">
			<div class="label-block">
				<a href="#" onclick="getBookList('page2', '灵异', 'book');"><img src="pictures/label1.png"/></a>
				<a href="#" onclick="getBookList('page2', '科幻', 'book');"><img src="pictures/label2.png"/></a>
				<a href="#" onclick="getBookList('page2', '言情', 'book');"><img src="pictures/label3.png"/></a>
				<a href="#" onclick="getBookList('page2', '玄幻', 'book');"><img src="pictures/label4.png"/></a>
				<a href="#" onclick="getBookList('page2', '纯爱', 'book');"><img src="pictures/label5.png"/></a>
				<form>
					<input type="text" id="searchKeyword" title="关键字/作者/书名"/>
					<a href="#" onclick="searchDisplay()"><img class="page2-search" src="pictures/search.png"/></a>
				</form>
			</div>
			<div id="page2Block"></div>
		</div>
		
		
		<div class="page3" id="page3">
			<div class="label-block">
				<a href="#" onclick="toList('收藏')"><img src="pictures/type1.png"/></a>
				<a href="#" onclick="toList('踩雷')"><img src="pictures/type2.png"/></a>
				<a href="#" onclick="toList('已阅')"><img src="pictures/type3.png"/></a>
				<a href="#" onclick="toList('雷区')"><img src="pictures/type4.png"/></a>
				<a href="#" onclick="toList('偏好')"><img src="pictures/type5.png"/></a>
				<div class="type-hover" id="type-hover-img"><img src="pictures/type-hover.png"/></div>
			</div>
			
			<div class="page3-type1" id="collectBookBlock">
			</div>
			
			<div class="page3-type2" id="dislikeBookBlock">
			</div>
			
			<div class="page3-type3" id="readBookBlock">
			</div>
			
			<div class="page3-type4" id="dislikeKeywordBlock">
				<form>
					<input type="text" id="dislikeKeyword" title="关键字/作者/书名"/>
					<a href="#" onclick="addKeyword('dislike')"><img class="page2-search" src="pictures/add.png"/></a>
				</form>
				<div class="dislike-keywords" id="dislikeKeywordsArea">
						<div class="key-word" title="点击删除" id="keywords1" onclick="deleteKeyword('keywords1');"><a>淮上</a></div>
						<div class="key-word" title="点击删除" id="keywords2" onclick="deleteKeyword('keywords2');"><a>逆后宫</a></div>
						<div class="key-word" title="点击删除" id="keywords3" onclick="deleteKeyword('keywords3');"><a>女尊</a></div>
						<div class="key-word" title="点击删除" id="keywords4" onclick="deleteKeyword('keywords4');"><a>快穿</a></div>
						<div class="key-word" title="点击删除" id="keywords5" onclick="deleteKeyword('keywords5');"><a>综漫</a></div>
						<div class="key-word" title="点击删除" id="keywords6" onclick="deleteKeyword('keywords6');"><a>风弄</a></div>
						<div class="key-word" title="点击删除" id="keywords7" onclick="deleteKeyword('keywords7');"><a>焦糖冬瓜</a></div>
				</div>
			</div>
			
			<div class="page3-type5" id="likeBookBlock">
				<form name="addToLike" action="#" method="post">
					<input type="text" id="likeKeyword" title="关键字/作者/书名"/>
					<a href="#" onclick="addKeyword('like')"><img class="page2-search" src="pictures/add.png"/></a>
				</form>
				<div class="like-keywords" id="likeKeywordsArea">
						<div class="key-word" title="点击删除" id="keywords8" onclick="deleteKeyword('keywords8');"><a>胡萝卜</a></div>
						<div class="key-word" title="点击删除" id="keywords9" onclick="deleteKeyword('keywords9');"><a>架空</a></div>
						<div class="key-word" title="点击删除" id="keywords10" onclick="deleteKeyword('keywords10');"><a>机甲时空</a></div>
						<div class="key-word" title="点击删除" id="keywords11" onclick="deleteKeyword('keywords11');"><a>古代玄幻</a></div>
						<div class="key-word" title="点击删除" id="keywords12" onclick="deleteKeyword('keywords12');"><a>修真</a></div>
						<div class="key-word" title="点击删除" id="keywords13" onclick="deleteKeyword('keywords13');"><a>宅斗</a></div>
						<div class="key-word" title="点击删除" id="keywords14" onclick="deleteKeyword('keywords14');"><a>priest</a></div>
				</div>
			</div>
		</div>
		
		
		<div class="page4" id="page4">
			<form action="#" name="userInfo" method="post">
			<div class="information">
				<table>
	        		<tr>
		        		<td>用户名</td><td><input class="input-block" type="text" name="username" value=<%= username %>></td>
		        	</tr>
		        	<tr>
		        		<td>邮箱</td><td><input class="input-block" type="text" name="email" value=<%= email %>></td>
		        	</tr>
		        	<tr>
		        		<td>密码</td><td><input class="input-block" type="password" name="username" value=<%= password %>></td>
		        	</tr>
		        	<tr></tr>
		        	<tr></tr>
	        	</table>
			</div>
			<div class="header">
				<img src=<%= headURL %>/>
				<img src="pictures/bg_header.png"/>
				<input class="input-button" type="image" src="pictures/upload.png" name="upload" value="upload"/>  <!-- 并没有实现这个功能，不管了 -->
			</div>
			<div class="confirm">
				<input class="input-button" type="image" src="pictures/save.png" name="save" value="save"/>
				<input class="input-button" type="image" src="pictures/cancel.png" name="cancel" value="cancel"/>
			</div>
			</form>
		</div>
	</div>
</body>
</html>