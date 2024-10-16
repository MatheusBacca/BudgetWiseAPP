import { styled } from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)<{ buttonColor?: string }>`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  margin-left: ${RFValue(5)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: ${RFValue(5)}px;

  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ buttonColor, theme }) =>
    buttonColor || theme.COLORS.GRAY6};
`;

export const Icon = styled(Fontisto)`
  font-size: ${RFValue(30)}px;
  height: ${RFValue(35)}px;
`;

export const Image = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(35)}px;
  resizeMode: contain;
`;

export const Title = styled.Text<{ titleColor?: string }>`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
  color: ${({ titleColor, theme }) => titleColor || theme.COLORS.BLACK};

  margin-left: ${RFValue(5)}px;
`;
