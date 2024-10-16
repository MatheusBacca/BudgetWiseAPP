import { styled } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 50px;
    padding: 0 12px;
    margin-top: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
    border: 0;
    flex: 1;
    height: 45px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;