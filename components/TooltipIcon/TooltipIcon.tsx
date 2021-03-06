import { FC, ReactElement } from 'react';

import styled from '@emotion/styled';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

export type TooltipIconProps = Omit<TooltipProps, 'title'> & {
  children: ReactElement;
};

const StyledHelpOutlineOutlinedIcon = styled(HelpOutlineOutlinedIcon)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.colors.main4};
  cursor: pointer;
`;

const TooltipIcon: FC<TooltipIconProps> = ({ placement = 'top', children }) => {
  return (
    <Tooltip title={children} placement={placement}>
      <StyledHelpOutlineOutlinedIcon />
    </Tooltip>
  );
};

export default TooltipIcon;
