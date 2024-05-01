import FormLabel from '@mui/material/FormLabel';
import {
  Unstable_NumberInput as NumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import styles from '@/styles/LabelInputNumber.module.scss';
import { styled } from '@mui/material/styles';

interface Props extends NumberInputProps {
  inputName: string;
  label: string;
}

export const LabelInputTheme = styled(NumberInput)({
  '& input': {
    padding: '10px',
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '4px',
  },
  '&.base--error': {
    '& input': {
      borderColor: '#d32f2f',
    }
  }
})

const LabelInputNumber = ({
  inputName,
  label,
  ...props
}: Props) => {
  console.log('props', props);
  
  return (
    <div className="label-input-wrap">
      <FormLabel htmlFor={inputName}>{label}</FormLabel>
      <LabelInputTheme
        className={styles['number-input-container']}
        id={inputName}
        {...props}
      />
    </div>
  );
};

export default LabelInputNumber;
