import React from 'react';
import { Button, Icon, Image, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Fontisto } from "@expo/vector-icons";
import theme from '@src/styles/theme';

import PngGoogle from '../../assets/google_logo.png';

interface Props extends RectButtonProps {
    iconName: React.ComponentProps<typeof Fontisto>["name"]
    title?: string;
}

const ButtonSocial: React.FC<Props> = ({ title, iconName, ...rest }) => {
    let buttomColour = theme.COLORS.GRAY6;
    let iconColour;
    let titleColor;
    let image;

    switch (iconName) {
        case 'facebook': {
            buttomColour = theme.COLORS.FACEBOOKBLUE;

            iconColour = theme.COLORS.WHITE;
            titleColor = theme.COLORS.WHITE;
            break;
        }
        case 'google': {
            image = PngGoogle;
            break;
        }
        default: {
            iconColour = theme.COLORS.BLACK;
        }
    }

    return (
        <Button buttonColor={buttomColour} {...rest}>
            {
                image
                ? <Image source={image}/>
                : <Icon name={iconName} color={iconColour}/>
            }

            {title && <Title titleColor={titleColor}>{title}</Title>}
        </Button>
    )
}

export { ButtonSocial };
