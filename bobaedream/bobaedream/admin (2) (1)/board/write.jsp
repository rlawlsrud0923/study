<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" %>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>프로그램 입력</title>
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link href="../css/admin.css" rel="stylesheet" type="text/css" />
</head>

<body class="admin" lang="en">

<!-- site align S -->
<div class="sa">

	<%@include file="../include/header.jsp" %>
	
	<%@include file="../include/left.jsp" %>

	<!-- section S -->
	<div id="section">

		<div id="pagetitle">

			<h2>관리자 모드</h2>


		</div>

		<div id="content">

			<h3>관리자 쓰기</h3>

			<!-- bbs default write S -->
			<table cellspacing="0" summary="[프로그램 입력] 글쓰기 입력 양식입니다." class="bdw">
				<caption>글쓰기 입력 양식</caption>
				<colgroup><col width="125" /><col width="*" /></colgroup>
				<tbody>
					<tr>
						<th scope="row" class="first"><label for="formname01">제목</label></th>
						<td class="last"><input type="text" id="formname01" name="formname01" size="70" /></td>
					</tr>
					<tr>
						<th scope="row" class="first"><label for="formname02">작성자</label></th>
						<td class="last"><input type="text" id="formname02" name="formname02" size="70" /> </td>
					</tr>
					<tr>
						<th scope="row" class="first"><label for="formname03">조회</label></th>
						<td class="last"><input type="text" id="formname03" name="formname03" size="70" /></td>
					</tr>
					<tr>
						<th scope="row" class="first"><label for="formname05">셀렉트박스</label></th>
						<td class="last">
							<select id="formname05" name="formname05" title="셀렉트박스 Select">
								<option>셀렉트박스</option>
							</select>
						</td>
					</tr>
					<tr>
						<th scope="row" class="first"><span for="radio1_1" class="label">라디오버튼</span></th>
						<td class="last">
							<input type="radio" id="radio1_1" name="radio1" class="radio" /><label for="radio1_1">Use</label>
							<input type="radio" id="radio1_2" name="radio1" class="radio" /><label for="radio1_2">Use</label>
							<input type="radio" id="radio1_3" name="radio1" class="radio" /><label for="radio1_3">Use</label>
							<input type="radio" id="radio1_4" name="radio1" class="radio" /><label for="radio1_4">Use</label>
							<input type="radio" id="radio1_5" name="radio1" class="radio" /><label for="radio1_5">Use</label>
						</td>
					</tr>
					<tr>
						<th scope="row" class="first"><span for="checkbox1_1" class="label">체크박스</span></th>
						<td class="last">
							<input type="checkbox" id="checkbox1_1" name="checkbox1" class="checkbox" /><label for="checkbox1_1">Check</label>
							<input type="checkbox" id="checkbox1_2" name="checkbox1" class="checkbox" /><label for="checkbox1_2">Check</label>
							<input type="checkbox" id="checkbox1_3" name="checkbox1" class="checkbox" /><label for="checkbox1_3">Check</label>
							<input type="checkbox" id="checkbox1_4" name="checkbox1" class="checkbox" /><label for="checkbox1_4">Check</label>
							<input type="checkbox" id="checkbox1_5" name="checkbox1" class="checkbox" /><label for="checkbox1_5">Check</label>
						</td>
					</tr>
					<tr>
						<th scope="row" class="first"><label for="memo">내용</label></th>
						<td class="last"><textarea id="memo" name="memo" rows="10"></textarea></td>
					</tr>
					<tr>
						<th scope="row" class="first"><label for="atchfile">첨부파일</label></th>
						<td class="last"><input type="file" id="atchfile" name="atchfile" size="50" class="atchfile" /></td>
					</tr>
				</tbody>
			</table>
			<!-- bbs default write E -->

			<!-- bbs footer S -->
			<div class="bft">

				<div class="bb">
					<ul>
						<li><a href="#">취소</a></li>
						<li class="inputBtn"><input type="submit" value="확인" /></li>
					</ul>
				</div>

			</div>
			<!-- bbs footer E -->

			

		</div>
		<!-- content E -->

	</div>
	<!-- section E -->

		<%@include file="../include/footer.jsp" %>

</div>
<!-- site align E -->


</body>
</html>