import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailsScreen from './src/screens/DetailsScreen.tsx';
import PaymentScreen from './src/screens/PaymentScreen.tsx';
import TabNavigator from './src/navigators/TabNavigator.tsx';
import {useEffect} from "react";
import SplashScreen from 'react-native-splash-screen';

const stack = createNativeStackNavigator();
const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, []);
    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <stack.Screen
                    name="Tab"
                    component={TabNavigator}
                    options={{
                        animation: 'slide_from_bottom',
                    }}
                />
                <stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        animation: 'slide_from_bottom',
                    }}
                />
                <stack.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{
                        animation: 'slide_from_bottom',
                    }}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
