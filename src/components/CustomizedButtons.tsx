import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  color: 'white',
  backgroundColor: '#4B5C6B',
  width: '100%',
  '&:hover': {
    backgroundColor: '#4B5C6B',
  }
}));

interface Props extends ButtonProps{
  text: string;
}

export default function CustomizedButtons({ text }: Props) {
  return <ColorButton variant="contained">{text}</ColorButton>;
}
