import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from "expo-app-loading";
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from '../src/styles/theme';

import { Login } from './screens/Login/Login';

const App: React.FC = () => {
    const [fontsLoad] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    })

    if (!fontsLoad) {
        return <AppLoading />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={COLORS}>
                <StatusBar 
                    style='dark'
                    translucent
                    backgroundColor='transparent'
                />

                <View>
                    <Login />
                </View>
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

export default App;
