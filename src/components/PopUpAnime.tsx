import React from 'react';
import {View} from "react-native";
import {componentStylings} from "./ComponentStyles.ts";
import LottieView from "lottie-react-native";


interface PopUpAnimeProps{
    style: any;
    source: any
}

const PopUpAnime: React.FC<PopUpAnimeProps> = ({style, source}) => {
    const styles = componentStylings.PopUpAnimeStyles
    return (
        <View style={styles.lottieAnimeContainer}>
            <LottieView
                style={style}
                source={source}
                autoPlay
                loop={false}
            />
        </View>
    );
};

export default PopUpAnime;