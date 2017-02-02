package com.superpower.board.dao;

import java.util.List;

import com.superpower.board.dto.BoardDto;

public interface IBoardDao {
	List<BoardDto> getList(BoardDto dto);
	int getTotal(BoardDto dto);
}
