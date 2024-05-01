import FormLabel from '@mui/material/FormLabel';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

interface Props extends BaseTextFieldProps {
  inputName: string;
  label: string;
}

const LabelInput = ({ label, inputName = 'inputName', ...props }: Props) => {
  return (
    <div className="label-input-wrap">
      <FormLabel htmlFor={inputName}>{label}</FormLabel>
      <TextField id={inputName} variant="outlined" {...props} />
    </div>
  );
};

export default LabelInput;
