package com.superpower.board.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.superpower.board.dto.BoardDto;

@Repository 
public class BoardDao implements IBoardDao{

	//db다루는 클래스 연결 
	@Autowired
	SqlSessionTemplate sm;
	
	@Override
	public List<BoardDto> getList(BoardDto dto) {
		List<BoardDto> list=null;
		try
		{
			System.out.println("@@@@@@@@@@@@@@@@");
			list = sm.selectList("Board_getList", dto);
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
		return list;
	}

	@Override
	public int getTotal(BoardDto dto) {
		Integer total=0;
		try
		{
			total = sm.selectOne("Board_getTotal", dto);
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
		return total;
	}

}
