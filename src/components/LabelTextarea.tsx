import FormLabel from '@mui/material/FormLabel';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { TextareaAutosizeProps } from '@mui/material';

interface Props extends TextareaAutosizeProps {
  name: string;
  label: string;
}

const LabelTextarea = ({ label, name = 'TextareaName', ...props }: Props) => {
  return (
    <div className="label-input-wrap">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <TextareaAutosize id={name} {...props} />
    </div>
  );
};

export default LabelTextarea;
