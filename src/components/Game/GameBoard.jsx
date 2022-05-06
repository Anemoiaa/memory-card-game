import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { icons } from './icons';
import Card from './Card';
import WinDialog from './WinDialog';



function GameBoard({boardSize}) {
	const [boardElements, setBoardElement] = useState([null]);
	const [cardIsOpened, setCardOpenedValue] = useState(Array(boardSize*boardSize).fill(false));
	const [nowIsOpen, setNowIsOpen] = useState(null);
	const [wait, setWait] = useState(false);
	const [steps, setSteps] = useState(0);
	const [isWin, setWin] = useState(false)
	const [restart, setRestart] = useState(false)

	
	useEffect(() => {
		let len = boardSize * boardSize;
		let arr = Array(len).fill(null);
		for (let i = 0; i < len/2; i++) {
			let j = 0;
			while(j < 2) {
				let index = Math.floor(Math.random() * len);
				if(arr[index] === null) {
					arr[index] = icons[i];
					j+=1;
				}
			}
		}
		setSteps(0);
		setWin(false);
		setCardOpenedValue(Array(boardSize*boardSize).fill(false))
		setBoardElement(arr);
	}, [boardSize, restart])

	useEffect(() => {
		if (!cardIsOpened.some(elem => elem===false)) {
			setWin(true)
		}
	}, [cardIsOpened])

	function openCard(e) {
		if(wait){
			return
		}
		let arr = [...cardIsOpened]
		arr[e] = true;
		setCardOpenedValue(arr);
		check(e)
	}

	function check(e) {
		if (nowIsOpen === null) {
			setNowIsOpen(e);
		}
		else if (boardElements[nowIsOpen] === boardElements[e]) {
			setNowIsOpen(null);
			setSteps(steps+1);
		}
		else if (boardElements[nowIsOpen] !== boardElements[e]) {
			setWait(true);
			setSteps(steps+1);
			setTimeout(() => {
				let arr = [...cardIsOpened]
				arr[nowIsOpen] = false;
				arr[e] = false;
				setCardOpenedValue(arr);
				setNowIsOpen(null);
				setWait(false)	
			}, 800)
		}
		
	}
	return (
		<>
			{ isWin && 
				<WinDialog steps={steps} handleClick={() =>setRestart(!restart)}/>
			}
			<Grid container direction={'column'} sx={{width:'32vw', height:'32vw'}}>
				{Array(boardSize).fill(0).map((_, gridIndex) => 
					<Grid container sx={{flex: 1}} key={gridIndex}>
						{Array(boardSize).fill(0).map((_, cardIndex) => 
							<Card 
							key={gridIndex * boardSize + cardIndex} 
							id={gridIndex * boardSize + cardIndex}
							cardIsOpened={cardIsOpened[gridIndex * boardSize + cardIndex]}
							openCard={openCard}
							>
								{boardElements[gridIndex * boardSize + cardIndex]}
							</Card>
						)}
					</Grid>
				)}
			</Grid>
		</>
	);
}

export default GameBoard;