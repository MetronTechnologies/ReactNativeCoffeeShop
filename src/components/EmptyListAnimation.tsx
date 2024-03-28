import React from "react";
import {componentStylings} from "./ComponentStyles.ts";
import {Text, View} from "react-native";
import LottieView from "lottie-react-native";

interface EmptyListAnimationProps{
    title: string
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
    const styles = componentStylings.EmptyCartStyles;
    return (
        <View style={styles.emptyContainer}>
            <LottieView
                source={require('../lottie/coffeecup.json')}
                style={styles.lottie}
                autoPlay
                loop
            />
            <Text style={styles.lottieText}>{title}</Text>
        </View>
    );
};

export default EmptyListAnimation;