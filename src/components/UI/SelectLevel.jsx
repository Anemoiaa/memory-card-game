import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SelectLevel({ onChange, value }) {
	return (
			<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
				<InputLabel>Level</InputLabel>
				<Select
					value={value}
					label="Level"
					onChange={(e) => onChange(e.target.value)}
				>
					<MenuItem value={4}>Easy</MenuItem>
					<MenuItem value={6}>Medium</MenuItem>
					<MenuItem value={8}>Hard</MenuItem>
				</Select>
			</FormControl>
	)
}
export default SelectLevel;