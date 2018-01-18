<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="article-block">
	<table>
		<tr>
			<td>
				<img src="pictures/bookname.png" width="25px" height="25px"/>
				<a href="<%out.print(request.getParameter("url"));%>" onclick="record('visited', <%out.print(request.getParameter("userid")+", "+request.getParameter("itemid"));%>);" target="_blank"><%out.print(request.getParameter("bookname"));%></a>
			</td>
		</tr>
		<!--<tr>
			  <td><span>作者：</span><%out.print(request.getParameter("author"));%></td>
		</tr>
		<tr>
			<td><span>从属：</span><%out.print(request.getParameter("tag"));%></td>
		</tr>
		<tr>
			<td><span>简介：</span><%out.print(request.getParameter("summary"));%></td>
		</tr>                              
		<tr>
			<td>
				<input type="image" onclick="record('collect', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" src="pictures/collect.png"/>
				<input type="image" onclick="record('dislike', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" src="pictures/dislike.png"/>
				<input type="image" onclick="record('read', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" src="pictures/readed.png"/>
				<input type="image" src="pictures/score.png" disabled="true"/>
				<input type="image" onclick="record('score1', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" id="score1-<%out.print(request.getParameter("itemid"));%>" src="pictures/0score.png" class="score-point"/>
				<input type="image" onclick="record('score2', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" id="score2-<%out.print(request.getParameter("itemid"));%>" src="pictures/0score.png" class="score-point"/>
				<input type="image" onclick="record('score3', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" id="score3-<%out.print(request.getParameter("itemid"));%>" src="pictures/0score.png" class="score-point"/>
				<input type="image" onclick="record('score4', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" id="score4-<%out.print(request.getParameter("itemid"));%>" src="pictures/0score.png" class="score-point"/>
				<input type="image" onclick="record('score5', <%out.print(request.getParameter("uesrid")+", "+request.getParameter("itemid"));%>);" id="score5-<%out.print(request.getParameter("itemid"));%>" src="pictures/0score.png" class="score-point"/>
			</td>
		</tr>-->
	</table>
</div>
</body>
</html>