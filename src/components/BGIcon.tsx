import {Text, View} from 'react-native';
import React from "react";
import {componentStylings} from "./ComponentStyles.ts";
import CustomIcon from "./CustomIcon.ts";

interface BGIconProps{
    name: string;
    color: string;
    size: number;
    BGColor: string;
}
const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
    const bgStyle = componentStylings.BGIconStyles;
    return (
        <View style={[bgStyle.iconBg, {backgroundColor: BGColor}]}>
            <CustomIcon name={name} color={color} size={size}/>
        </View>
    );
};

export default BGIcon;