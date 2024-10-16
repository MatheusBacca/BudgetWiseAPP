import React from 'react'
import { SafeAreaView } from 'react-native'

import { ButtonSocial } from '../../components/ButtonSocial/ButtonSocial';

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton
} from './styles';
import Input from '../../components/Input/Input';
import { useTheme } from 'styled-components';

const Login: React.FC = () => {
    const { COLORS } = useTheme();

    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem-vindo(a) {"\n"}ao BudgetWiseAPP</Title>

                    <Description>Entre com as redes sociais:</Description>

                    <ViewButton>
                        <ButtonSocial iconName='google'/>
                        <ButtonSocial iconName='facebook'/>
                    </ViewButton>

                    <Description>ou:</Description>

                </ContentHeader>

                <ContentBody>
                    <Input
                        iconName="mail-outline"
                        iconSize={25}
                        leftIcon
                        placeholder='Digite seu e-mail'
                    />

                    <Input
                        iconName="lock-closed-outline"
                        iconSize={25}
                        leftIcon
                        rightIcon
                        placeholder='Digite sua senha'
                    />
                </ContentBody>

                <ContentFooter>
                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
}

export { Login };
