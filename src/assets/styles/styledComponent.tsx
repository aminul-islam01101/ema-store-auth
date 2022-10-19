import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { CustomizedButton, CustomizedSlider } from './Styled';

interface Props {
    text: string;
    bgColor: string;
}
export const StyledComponentsDeep = () => <CustomizedSlider defaultValue={30} />;

export const StyledButton: FC<Props> = ({ text, bgColor }: Props) => (
    <CustomizedButton $secondary={bgColor} $primary="#fff000" variant="contained">
        {text}
    </CustomizedButton>
);

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
