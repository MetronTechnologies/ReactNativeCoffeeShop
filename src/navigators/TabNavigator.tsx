import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen.tsx';
import CartScreen from '../screens/CartScreen.tsx';
import FavoriteScreen from '../screens/FavoriteScreen.tsx';
import OrderHistoryScreen from '../screens/OrderHistoryScreen.tsx';
import {stylings} from '../screens/ScreenStyles.ts';
import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon.ts';
import {COLORS} from '../theme/theme.ts';
import {navigatorStyles} from "./NavigatorStyles.ts";

const tab = createBottomTabNavigator();
const TabNavigator = () => {
    const tabStyles = navigatorStyles;
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: tabStyles.TabNavigatorStyle.tabBar,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={tabStyles.TabNavigatorStyle.blurView}
          />
        ),
      }}>
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="like"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default TabNavigator;
