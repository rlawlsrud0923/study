package com.superpower.board.service;

import java.util.List;

import com.superpower.board.dto.BoardDto;

public interface IBoardService {
	List<BoardDto> getList(BoardDto dto);
	int getTotal(BoardDto dto);
}
