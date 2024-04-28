import FormLabel from '@mui/material/FormLabel';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

interface Props extends BaseTextFieldProps {
  name: string;
  label: string;
}

const LabelInput = ({ label, name = 'inputName', ...props }: Props) => {
  return (
    <div className="label-input-wrap">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <TextField id={name} variant="outlined" {...props} />
    </div>
  );
};

export default LabelInput;
