import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { componentStylings } from './ComponentStyles';
import GradientBGIcon from "./GradientBGIcon.tsx";
import ProfilePic from "./ProfilePic.tsx";
import {COLORS, FONTSIZE} from "../theme/theme.ts";

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
    const headerStyle = componentStylings.HeaderStyles;
    return (
        <View style={headerStyle.headerContainer}>
            <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
            <Text style={headerStyle.headerText}>{title}</Text>
            <ProfilePic />
        </View>
    )
}

export default HeaderBar;