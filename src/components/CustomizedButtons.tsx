import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';


interface Props extends ButtonProps {
  text: string;
  textColor?: string;
  bgcolor?: string;
}

export default function CustomizedButtons({ text, textColor = "white" ,bgcolor = "#4B5C6B", ...props }: Props) {

  const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: textColor,
    backgroundColor: bgcolor,
    width: '100%',
    '&:hover': {
      backgroundColor: bgcolor,
    }
  }));
  
  return <ColorButton variant="contained" {...props}>{text}</ColorButton>;
}
