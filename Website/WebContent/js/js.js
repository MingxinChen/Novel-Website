/*对book进行操作的按钮响应-----------------------------------------------------------*/
function record(operation, itemid) {  /*operation表示操作，有collect、dislike、read、delete-collect、delete-dislike、delete-read*/
	console.log(operation+'    '+itemid);
	if(operation=='collect'||operation=='delete-collect'){
		$.ajax({
	        type: "POST",
	        url: "Servlet/CollectServlet",
	        data: {"type":operation, "itemid":itemid},
	        async: false,
	        success: function(data){
	            console.log(operation+" "+itemid);
	            if(operation=='collect') {
	            	var d = document.getElementsByName('collect-'+itemid);
	            	d[0].name='delete-collect-'+itemid;
	            	d = document.getElementsByName('delete-collect-'+itemid);
	            	d[0].src="pictures/cancelCollect.png";
	            	d[0].style.width='130px';
	            	d[0].onclick=function(){record('delete-collect', itemid);};
	        		
	        	} else {
	        		var d = document.getElementsByName('delete-collect-'+itemid);
	            	d[0].name='collect-'+itemid;
	            	d = document.getElementsByName('collect-'+itemid);
	            	d[0].style.width='80px';
	            	d[0].src="pictures/collect.png";
	            	d[0].onclick=function(){record('collect', itemid);};
	        	}
	        }
	     });
	}else if(operation=='dislike'||operation=='delete-dislike'){
		$.ajax({
	        type: "POST",
	        url: "Servlet/DislikeServlet",
	        data: {"type":operation, "itemid":itemid},
	        async: false,
	        success: function(data){
	            console.log(operation+" "+itemid);
	            if(operation=='dislike') {
	            	var d = document.getElementsByName('dislike-'+itemid);
	            	d[0].name='delete-dislike-'+itemid;
	            	d = document.getElementsByName('delete-dislike-'+itemid);
	            	d[0].src="pictures/cancelDislike.png";
	            	d[0].style.width='130px';
	            	d[0].onclick=function(){record('delete-dislike', itemid);};
	        		
	        	} else {
	        		var d = document.getElementsByName('delete-dislike-'+itemid);
	            	d[0].name='dislike-'+itemid;
	            	d = document.getElementsByName('dislike-'+itemid);
	            	d[0].style.width='80px';
	            	d[0].src="pictures/dislike.png";
	            	d[0].onclick=function(){record('dislike', itemid);};
	        	}
	        }
	     });
	}else if(operation=='read'||operation=='delete-read'){
		$.ajax({
	        type: "POST",
	        url: "Servlet/ReadServlet",
	        data: {"type":operation, "itemid":itemid},
	        async: false,
	        success: function(data){
	            console.log(operation+" "+itemid);
	            if(operation=='read') {
	            	var d = document.getElementsByName('read-'+itemid);
	            	d[0].name='delete-read-'+itemid;
	            	d = document.getElementsByName('delete-read-'+itemid);
	            	d[0].src="pictures/cancelRead.png";
	            	d[0].style.width='130px';
	            	d[0].onclick=function(){record('delete-read', itemid);};
	        		
	        	} else {
	        		var d = document.getElementsByName('delete-read-'+itemid);
	            	d[0].name='read-'+itemid;
	            	d = document.getElementsByName('read-'+itemid);
	            	d[0].style.width='80px';
	            	d[0].src="pictures/readed.png";
	            	d[0].onclick=function(){record('read', itemid);};
	        	}
	        }
	     });
	}else {
		$.ajax({
	        type: "POST",
	        url: "Servlet/ScoreServlet",
	        data: {"type":operation, "itemid":itemid},
	        async: false,
	        success: function(data){
	            console.log(operation+" "+itemid);
	        }
	     });
	}
	if(operation=='score1'){
		document.getElementsByName('score1-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score2-'+itemid)[0].src="pictures/0score.png";
		document.getElementsByName('score3-'+itemid)[0].src="pictures/0score.png";
		document.getElementsByName('score4-'+itemid)[0].src="pictures/0score.png";
		document.getElementsByName('score5-'+itemid)[0].src="pictures/0score.png";
	}
	else if(operation=='score2'){
		document.getElementsByName('score1-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score2-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score3-'+itemid)[0].src="pictures/0score.png";
		document.getElementsByName('score4-'+itemid)[0].src="pictures/0score.png";
		document.getElementsByName('score5-'+itemid)[0].src="pictures/0score.png";	
	}
	else if(operation=='score3'){
		document.getElementsByName('score1-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score2-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score3-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score4-'+itemid)[0].src="pictures/0score.png";
		document.getElementsByName('score5-'+itemid)[0].src="pictures/0score.png";
	}
	else if(operation=='score4'){
		document.getElementsByName('score1-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score2-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score3-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score4-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score5-'+itemid)[0].src="pictures/0score.png";
	}
	else if(operation=='score5'){
		document.getElementsByName('score1-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score2-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score3-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score4-'+itemid)[0].src="pictures/1score.png";
		document.getElementsByName('score5-'+itemid)[0].src="pictures/1score.png";
	}
}



/*添加一个book的html节点-----------------------------------------------------------*/
function toArticleBlock(page, itemid, url, bookname, author, tag, summary, blockType) {
	console.log('itemid:'+itemid);
	
	html='<div class="article-block"><table>';
	html+='<tr><td><img src="pictures/bookname.png" width="25px" height="25px"/><a href="' + url + '" target="_blank">' + bookname + '</a></td></tr>';
	html+='<tr><td><span>作者：</span>' + author + '</td></tr>';
	html+='<tr><td><span>从属：</span>' + tag + '</td></tr>';
	html+='<tr><td><span>简介：</span>' + summary + '</td></tr>';
	html+='<tr><td>'
	if(blockType=='normal'){
		html+='<input type="image" name="collect-' + itemid + '" src="pictures/collect.png"/>';
		html+='<input type="image" name="dislike-' + itemid + '" src="pictures/dislike.png"/>';
		html+='<input type="image" name="read-' + itemid + '" src="pictures/readed.png"/>';
		html+='<input type="image" src="pictures/score.png" disabled="true"/>';
		html+='<input type="image" name="score1-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
		html+='<input type="image" name="score2-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
		html+='<input type="image" name="score3-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
		html+='<input type="image" name="score4-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
		html+='<input type="image" name="score5-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
		html+='</td></tr>'
		html+='</table></div>';
		
		$(page).append(html);
		$(page).trigger("create");
		document.getElementsByName('collect-'+itemid)[0].addEventListener('click', function(){record('collect', itemid);});
		document.getElementsByName('dislike-'+itemid)[0].addEventListener('click', function(){record('dislike', itemid);});
		document.getElementsByName('read-'+itemid)[0].addEventListener('click', function(){record('read', itemid);});
		
		document.getElementsByName('score1-'+itemid)[0].onclick=function(){record('score1', itemid);};
		document.getElementsByName('score2-'+itemid)[0].onclick=function(){record('score2', itemid);};
		document.getElementsByName('score3-'+itemid)[0].onclick=function(){record('score3', itemid);};
		document.getElementsByName('score4-'+itemid)[0].onclick=function(){record('score4', itemid);};
		document.getElementsByName('score5-'+itemid)[0].onclick=function(){record('score5', itemid);};
	} 
	else if(blockType=='collect') {
		html+='<td><input type="image" name="delete-collect-' + itemid + '" name="delete" src="pictures/delete.png"/></td>';
		html+='</td></tr>'
		html+='</table></div>';
		
		$(page).append(html);
		$(page).trigger("create");
		console.log("test"+itemid);
		document.getElementsByName('delete-collect-'+itemid)[0].onclick=function(){record('delete-collect', itemid);};
	}
	else if(blockType=='dislike') {
		html+='<td><input type="image" name="delete-dislike-' + itemid + '" name="delete" src="pictures/delete.png"/></td>';
		html+='</td></tr>'
		html+='</table></div>';
			
		$(page).append(html);
		$(page).trigger("create");
			
		document.getElementsByName('delete-dislike-'+itemid)[0].onclick=function(){record('delete-dislike', itemid);};
	}
	else if(blockType=='read') {
		html+='<td><input type="image" name="delete-read-' + itemid + '" name="delete" src="pictures/delete.png"/></td>';
		html+='</td></tr>'
		html+='</table></div>';
			
		$(page).append(html);
		$(page).trigger("create");
			
		document.getElementsByName('delete-read-'+itemid)[0].onclick=function(){record('delete-read', itemid);};
	}
}


function toArticleBlockForPage2(page, itemid, url, bookname, author, tag, summary, iscollect, dislike, read) {
	console.log('itemid:'+itemid);
	
	html='<div class="article-block"><table>';
	html+='<tr><td><img src="pictures/bookname.png" width="25px" height="25px"/><a href="' + url + '" target="_blank">' + bookname + '</a></td></tr>';
	html+='<tr><td><span>作者：</span>' + author + '</td></tr>';
	html+='<tr><td><span>从属：</span>' + tag + '</td></tr>';
	html+='<tr><td><span>简介：</span>' + summary + '</td></tr>';
	html+='<tr><td>'
	
	if(iscollect!=0) {
		html+='<input type="image" class="delete-button" name="delete-collect-' + itemid + '" name="delete" src="pictures/cancelCollect.png"/>';
	} else {
		html+='<input type="image" name="collect-' + itemid + '" src="pictures/collect.png"/>';
	}
	
	if(dislike!=0) {
		html+='<input type="image" class="delete-button" name="delete-dislike-' + itemid + '" name="delete" src="pictures/cancelDislike.png"/>';
	} else {
		html+='<input type="image" name="dislike-' + itemid + '" src="pictures/dislike.png"/>';
	}
	
	if(read!=0) {
		html+='<input type="image" class="delete-button" name="delete-read-' + itemid + '" name="delete" src="pictures/cancelRead.png"/>';
	} else {
		html+='<input type="image" name="read-' + itemid + '" src="pictures/readed.png"/>';
	}
	
	html+='<input type="image" src="pictures/score.png" disabled="true"/>';
	html+='<input type="image" name="score1-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
	html+='<input type="image" name="score2-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
	html+='<input type="image" name="score3-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
	html+='<input type="image" name="score4-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
	html+='<input type="image" name="score5-' + itemid + '" src="pictures/0score.png" class="score-point"/>';
	html+='</td></tr>'
	html+='</table></div>';
	
	$(page).append(html);
	$(page).trigger("create");
	
	if(iscollect!=0) {
		document.getElementsByName('delete-collect-'+itemid)[0].onclick=function(){record('delete-collect', itemid);};
	} else {
		document.getElementsByName('collect-'+itemid)[0].addEventListener('click', function(){record('collect', itemid);});
	}
	
	if(dislike!=0) {
		document.getElementsByName('delete-dislike-'+itemid)[0].onclick=function(){record('delete-dislike', itemid);};
	} else {
		document.getElementsByName('dislike-'+itemid)[0].addEventListener('click', function(){record('dislike', itemid);});
	}
	
	if(read!=0) {
		document.getElementsByName('delete-read-'+itemid)[0].onclick=function(){record('delete-read', itemid);};
	} else {
		document.getElementsByName('read-'+itemid)[0].addEventListener('click', function(){record('read', itemid);});
	}
	
	document.getElementsByName('score1-'+itemid)[0].onclick=function(){record('score1', itemid);};
	document.getElementsByName('score2-'+itemid)[0].onclick=function(){record('score2', itemid);};
	document.getElementsByName('score3-'+itemid)[0].onclick=function(){record('score3', itemid);};
	document.getElementsByName('score4-'+itemid)[0].onclick=function(){record('score4', itemid);};
	document.getElementsByName('score5-'+itemid)[0].onclick=function(){record('score5', itemid);};
}


/*获取不同的页面的booklist或者taglist-----------------------------------------------------------*/
function getBookList(page, key, type) {
	if(page=='page1'){    /*日推*/
		$.ajax({  
			type: "post",  
			url: "Servlet/RecommendServlet",   
			dataType: "json",  
			success: function(data){  
				console.log(data); 
				
				$.each(data,function(idx,item){ 
					if(idx==0){ 
						//return true;
					} 
					console.log("name:"+item.name+",value:"+item.value); 
					toArticleBlock('#page1', item.id, item.url, item.bookname, item.author, item.tag, item.summary, 'normal');
				}); 
			}  
		});
	}
	else if(page=='page2'){    /*如果有发送key信息就是搜索，如果发送key信息为空就是随机取*/
		if(key=='first'){
			$.ajax({  
				type: "post",  
				data: {"keyword": key, "type":'book'},
				url: "Servlet/FindServlet",   
				dataType: "text",  
				success: function(data){  
					
					var dataObj=eval("("+data+")");//转换为json对象 	
			    	console.log(dataObj);
					$('#page2Block').empty();
					$.each(dataObj,function(idx,item){ 					
						toArticleBlockForPage2('#page2Block', item.id, item.url, item.bookname, item.author, item.tag, item.summary, item.iscollect, item.dislike, item.read);
					}); 
				} 
			});
		}else{
			console.log('keyword:'+key);
			$.ajax({  
				type: "post",  
				data: {"keyword": key, "type":'book'},
				url: "Servlet/SearchBookServlet",   
				dataType: "json",  
				success: function(data){  
					console.log(data); 
					$('#page2Block').empty();
					$.each(data,function(idx,item){ 
						console.log("name:"+item.name+",value:"+item.value); 
						toArticleBlockForPage2('#page2Block', item.id, item.url, item.bookname, item.author, item.tag, item.summary, item.iscollect, item.dislike, item.read);
					}); 
				} 		
			});
		}
	}
	else if(page=='page3') {    /*发送的消息为取得是key=collect、dislike、read，取到的是type=book；key=dislike、like，、取到的是type=keyword*/
	
		if(key=='collect'){
			$.ajax({  
				type: "post",  
				data: {"key": key, "type":type},
				url: "Servlet/ShowCollectServlet",   
				dataType: "text",  
				success: function(data){
					var dataObj=eval("("+data+")");//转换为json对象 	
					console.log(dataObj);
					$('#collectBookBlock').empty();
					$.each(dataObj,function(idx,item){ 
						if(type=='book'){
							toArticleBlock('#collectBookBlock', item.id, item.url, item.bookname, item.author, item.tag, item.summary, key);
						}
						else if(type=='keyword'){
							/*取到的是keyword时，还没想好怎么展示*/
							if(key=='dislike') {
								
							}
							else if(key=='like') {
								
							}
						}
					}); 
				}  
			});
		}else if(key=='dislike'){
			$.ajax({  
				type: "post",  
				data: {"key": key, "type":type},
				url: "Servlet/ShowDislikeServlet",   
				dataType: "text",  
				success: function(data){
					var dataObj=eval("("+data+")");//转换为json对象 	 					
					$('#dislikeBookBlock').empty();
					console.log(data);
					$.each(dataObj,function(idx,item){ 
						console.log("name:"+item.name+",value:"+item.value); 
						if(type=='book'){
							toArticleBlock('#dislikeBookBlock', item.id, item.url, item.bookname, item.author, item.tag, item.summary, key);
						}
						else if(type=='keyword'){
							/*取到的是keyword时，还没想好怎么展示*/
							if(key=='dislike') {
								
							}
							else if(key=='like') {
								
							}
						}
					}); 
				}  
			});
		}else if(key=='read'){
			$.ajax({  
				type: "post",  
				data: {"type": key, "type":type},
				url: "Servlet/ShowReadServlet",   
				dataType: "text",  
				success: function(data){
					var dataObj=eval("("+data+")");//转换为json对象 	
					$('#readBookBlock').empty();
					$.each(dataObj,function(idx,item){ 
						console.log("name:"+item.name+",value:"+item.value); 
						if(type=='book'){
							toArticleBlock('#readBookBlock', item.id, item.url, item.bookname, item.author, item.tag, item.summary, key);
						}
						else if(type=='keyword'){
							/*取到的是keyword时，还没想好怎么展示*/
							if(key=='dislike') {
								
							}
							else if(key=='like') {
								
							}
						}
					}); 
				}  
			});
		}
		
	}
}



/*跳转到不同的页面-----------------------------------------------------------*/
function toPage(x) {
	if(x==0){
		$('#function-hover-img').css("top","0px");
		$('#bg').attr("src", "pictures/bg2.png");
		$('#page1').css("display","block");
		$('#page2').css("display","none");
		$('#page3').css("display","none");
		$('#page4').css("display","none");
		toList('隐藏');
		
		getBookList('page1' , '', '');
	}
	if(x==1){	
		$('#function-hover-img').css("top","220px");
		$('#bg').attr("src", "pictures/bg3.png");
		$('#page1').css("display","none");
		$('#page2').css("display","block");
		$('#page3').css("display","none");
		$('#page4').css("display","none");
		toList('隐藏');
	
		getBookList('page2', 'first', 'book');
	}
	if(x==2){
		console.log('test++++++++', 'wenku');
		
		$('#function-hover-img').css("top","440px");
		$('#bg').attr("src", "pictures/bg4.png");
		$('#page1').css("display","none");
		$('#page2').css("display","none");
		$('#page3').css("display","block");
		$('#page4').css("display","none");
		toList('收藏');
	}
	if(x==3){
		$('#function-hover-img').css("top","665px");
		$('#bg').attr("src", "pictures/bg5.png");
		$('#page1').css("display","none");
		$('#page2').css("display","none");
		$('#page3').css("display","none");
		$('#page4').css("display","block");
		toList('隐藏');
	}
}



/*跳转到不同的list（page3）----------------------------------------------------------*/
function toList(x){
	console.log('toList  '+x);
	if(x=='隐藏'){
		$('#collectBookBlock').css("display","none");
		$('#dislikeBookBlock').css("display","none");
		$('#readBookBlock').css("display","none");
		$('#dislikeKeywordBlock').css("display","none");
		$('#likeBookBlock').css("display","none");
	}
	if(x=='收藏'){
		$('#type-hover-img').css("left","0px");
		$('#collectBookBlock').css("display","block");
		$('#dislikeBookBlock').css("display","none");
		$('#readBookBlock').css("display","none");
		$('#dislikeKeywordBlock').css("display","none");
		$('#likeBookBlock').css("display","none");
		/*toArticleBlock('#collectBookBlock', '12', 'http://www.baidu.com', '123', '1234', '11234', '23452', 'collect');*/
		console.log('test++++++++', 'list');
		
		getBookList('page3', 'collect', 'book');
		
		console.log($('#collectBookBlock'));
	}
	if(x=='踩雷'){
		$('#type-hover-img').css("left","210px");
		$('#collectBookBlock').css("display","none");
		$('#dislikeBookBlock').css("display","block");
		$('#readBookBlock').css("display","none");
		$('#dislikeKeywordBlock').css("display","none");
		$('#likeBookBlock').css("display","none");
		
		getBookList('page3', 'dislike', 'book');
	}
	if(x=='已阅'){
		$('#type-hover-img').css("left","420px");
		$('#collectBookBlock').css("display","none");
		$('#dislikeBookBlock').css("display","none");
		$('#readBookBlock').css("display","block");
		$('#dislikeKeywordBlock').css("display","none");
		$('#likeBookBlock').css("display","none");
		
		getBookList('page3', 'read', 'book');
	}
	if(x=='雷区'){
		$('#type-hover-img').css("left","620px");
		$('#collectBookBlock').css("display","none");
		$('#dislikeBookBlock').css("display","none");
		$('#readBookBlock').css("display","none");
		$('#dislikeKeywordBlock').css("display","block");
		$('#likeBookBlock').css("display","none");
		
		getBookList('page3', 'dislike', 'keyword');
	}
	if(x=='偏好'){
		$('#type-hover-img').css("left","830px");
		$('#collectBookBlock').css("display","none");
		$('#dislikeBookBlock').css("display","none");
		$('#readBookBlock').css("display","none");
		$('#dislikeKeywordBlock').css("display","none");
		$('#likeBookBlock').css("display","block");
		
		getBookList('page3', 'like', 'keyword');
	}
}



/*搜索----------------------------------------------------------*/
function searchDisplay() {
	console.log("search");
	var keyword=$('#searchKeyword').val();
	console.log('123');
	getBookList('page2', keyword, 'book');
}



/*添加新的Keyword----------------------------------------------------------*/
var keywordId=15;
function addKeyword(operation) {      /*operation为dislike、like，表示添加的keyword是dislike还是like*/
	if(operation=='dislike') {
		var input=$('#dislikeKeyword').val();
		var html='<div class="key-word" title="点击删除" id="keywords'+keywordId+'">'+input+'</div>';
		$('#dislikeKeywordsArea').append(html);
		$('#dislikeKeywordsArea').trigger("create");
		var id='keywords'+keywordId;
		document.getElementById('keywords'+keywordId).onclick=function(){deleteKeyword(id);};
	} 
	else if(operation=='like') {
		var input=$('#likeKeyword').val();
		var html='<div class="key-word" title="点击删除" id="keywords'+keywordId+'">'+input+'</div>';
		$('#likeKeywordsArea').append(html);
		$('#likeKeywordsArea').trigger("create");
		var id='keywords'+keywordId;
		document.getElementById('keywords'+keywordId).onclick=function(){deleteKeyword(id);};
	}
	keywordId++;
}



/*添加新的Keyword----------------------------------------------------------*/
function deleteKeyword(keyword) {
	document.getElementById(keyword).style.display="none";
}