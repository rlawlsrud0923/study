<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@page import="java.util.*, com.superpower.board.dto.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
	<%
		List<BoardDto> list = 
		   (List<BoardDto>)request.getAttribute("list");
	%>
	<table border="1" cellspacing="0" cellpadding="0"
	       width="1000px">
	 	<thead>
	 		<th width="5%">번호</th>
	 		<th width="*">제목</th>
	 		<th width="10%">작성자</th>
	 		<th width="10%">작성일</th>
	 		<th width="10%">조회수</th>
	 	</thead>
		<tbody>
			<%
				int totalCnt =0;
				totalCnt = (Integer)request.getAttribute("totalcnt");
				
				if(list!=null && list.size()>0) 
				{
					for(int i=0; i<list.size(); i++)
					{
						BoardDto dto = list.get(i);	
						String reply="";
						if( dto.getDepth()>0)
						{
							for(int j=0; j<dto.getDepth(); j++)
								reply = reply+"&nbsp;&nbsp;&nbsp;";
							reply= reply+"re:";
						}
			%>
			<tr>
				<td><%=totalCnt - dto.getNum()+1%></td>
				<td>
					<%=reply%>
					<%=dto.getTitle()%>
				</td>
				<td><%=dto.getUserid()%></td>
				<td><%=dto.getRegdate()%></td>
				<td><%=dto.getHit()%></td>
			</tr>
			<%		}
				}
				else
				{
			%>	
			<tr>
				<td colspan="5">게시글이 없습니다</td>
			</tr>
			<%} %>
		</tbody>
	</table>
</body>
</html>