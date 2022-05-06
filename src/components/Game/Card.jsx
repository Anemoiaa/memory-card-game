import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Mybtn = styled(Button)({
	flex: 1,
	margin: '0.2vh 0.2vh',
	padding: 0,
	minWidth: 0,
	backgroundColor: 'white',
	'&:hover': {
		backgroundColor: '#F2F2F2',
	},
	'@media (max-width:850px)': {
		fontSize: '0.5em',
	  },

	'@media (max-width:450px)': {
		fontSize: '0.3em',
	  },
});

function Card({ id, cardIsOpened, openCard, ...props }) {

	function clickHandler() {
		if (!cardIsOpened) {
			openCard(id)
		}
	}

	return (
		<Mybtn onClick={clickHandler}>
			{cardIsOpened && props.children}
		</Mybtn>
	);
}

export default Card;