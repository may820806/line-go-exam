import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

const StyledDrawer = styled(Drawer)<DrawerProps>(() => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    padding: '20px',
  },
}));

interface Props extends DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function HomeDrawer({ open, children, onClose, ...props }: Props) {
  return (
    <StyledDrawer open={open} anchor="bottom" onClose={onClose} {...props}>
      {children}
    </StyledDrawer>
  );
}
