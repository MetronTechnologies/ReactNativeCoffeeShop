import {Image, Text, View} from 'react-native';
import {componentStylings} from "./ComponentStyles.ts";

const ProfilePic = () => {
    const profileStyle = componentStylings.ProfileStyles;
    return (
        <View style={profileStyle.imageContainer}>
            <Image
                style={profileStyle.image}
                source={require('../assets/app_images/avatar.png')}
            />
        </View>
    );
};

export default ProfilePic;