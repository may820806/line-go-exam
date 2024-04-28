import FormLabel from '@mui/material/FormLabel';
import {
  Unstable_NumberInput as NumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import styles from '@/styles/LabelInputNumber.module.scss';

interface Props extends NumberInputProps {
  name: string;
  label: string;
}

const LabelInputNumber = ({
  label,
  name = 'NumberInputName',
  ...props
}: Props) => {
  return (
    <div className="label-input-wrap">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <NumberInput
        className={styles['number-input-container']}
        id={name}
        {...props}
      />
    </div>
  );
};

export default LabelInputNumber;
