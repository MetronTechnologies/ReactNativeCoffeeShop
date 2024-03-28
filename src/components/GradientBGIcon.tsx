import {Text, View} from 'react-native';
import {componentStylings} from "./ComponentStyles.ts";
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from "../theme/theme.ts";
import CustomIcon from "./CustomIcon.ts";


interface GradientBGIconProps{
    name: string;
    color: string;
    size: number;
}
const GradientBGIcon: React.FC<GradientBGIconProps> = ({name, color, size}) => {
    const gradientStyle = componentStylings.GradientStyles;
    return (
        <View style={gradientStyle.container}>
            <LinearGradient
                style={gradientStyle.linearGradient}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                start = {{x: 0, y: 0}}
                end={{x: 1, y: 1}}
            >
                <CustomIcon name={name} color={color} size={size}/>
            </LinearGradient>
        </View>
    );
};

export default GradientBGIcon;