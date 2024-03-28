import {StyleSheet} from "react-native";
import {COLORS} from "../theme/theme.ts";

export const navigatorStyles = StyleSheet.create({
    TabNavigatorStyle: {
        tabBar: {
            height: 80,
            position: 'absolute',
            backgroundColor: COLORS.primaryBlackRGBA,
            borderTopWidth: 0,
            elevation: 0,
            borderTopColor: 'transparent',
        },
        blurView: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
});