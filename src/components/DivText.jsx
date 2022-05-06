import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({

	...theme.typography.button,
	marginTop: '3vh',
	textAlign: 'center',
	fontSize: '0.7em',
  '@media (min-width:600px)': {
    fontSize: '0.7em',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3em',
  },
}));

export default function DivText(props) {
	return <Div>{props.children}</Div>;
}