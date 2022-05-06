import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export default function RotateDialog() {
  const matches = useMediaQuery('(min-width:600px)');
	const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md')); 

	return(
		!matches 
		&& 
		<Dialog
			fullScreen={fullScreen}
			open={true}
			aria-labelledby="responsive-dialog-title"
		>
			<DialogContent>
				<DialogContentText>
					Please Rotate Your Device
				</DialogContentText>
			</DialogContent>
		</Dialog>
	)
}