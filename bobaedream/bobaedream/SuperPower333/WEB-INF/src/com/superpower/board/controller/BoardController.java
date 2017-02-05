package com.superpower.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;

import com.superpower.board.dto.BoardDto;
import com.superpower.board.service.IBoardService;

@Controller
public class BoardController {
	@Autowired
	IBoardService boardService;
	
	@RequestMapping(value="/board/list")
	public ModelAndView getList(BoardDto dto)
	{
		ModelAndView view = new ModelAndView();
		view.setViewName("board/list");
		List<BoardDto> list = boardService.getList(dto);
		view.addObject("list", list);
		view.addObject("totalcnt", boardService.getTotal(dto));
		return view;
	}
}
