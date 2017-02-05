package com.superpower.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.superpower.board.dao.IBoardDao;
import com.superpower.board.dto.BoardDto;

@Service
public class BoardService implements IBoardService{

	@Autowired
	IBoardDao boardDao;
	
	@Override
	public List<BoardDto> getList(BoardDto dto) {
		
		return boardDao.getList(dto);
	}

	@Override
	public int getTotal(BoardDto dto) {
		return boardDao.getTotal(dto);
	}
}

