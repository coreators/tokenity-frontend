import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      marginBottom: '8px',
    },
    '&:hover fieldset': {
      borderColor: 'green',
      borderWidth: '2px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});