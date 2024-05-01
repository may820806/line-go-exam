import FormLabel from '@mui/material/FormLabel';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { TextareaAutosizeProps } from '@mui/material';

interface Props extends TextareaAutosizeProps {
  inputName: string;
  label: string;
}

const LabelTextarea = ({ label, inputName = 'TextareaName', ...props }: Props) => {
  return (
    <div className="label-input-wrap">
      <FormLabel htmlFor={inputName}>{label}</FormLabel>
      <TextareaAutosize id={inputName} {...props} />
    </div>
  );
};

export default LabelTextarea;
