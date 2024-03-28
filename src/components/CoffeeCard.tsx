import {Dimensions, ImageBackground, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import {componentStylings} from "./ComponentStyles.ts";
import LinearGradient from "react-native-linear-gradient";
import {COLORS, FONTSIZE} from "../theme/theme.ts";
import CustomIcon from "./CustomIcon.ts";
import BGIcon from "./BGIcon.tsx";

interface CoffeeCardProp{
    id: string;
    index: number;
    type: string;
    roasted: string;
    imagelink_square: ImageProps;
    name: string;
    special_ingredient: string;
    average_rating: number;
    prices: any;
    buttonPressHandler: any;
}
export const cardWidth = Dimensions.get('window').width*0.32;
export const cardHeight = Dimensions.get('window').width*0.32;
export const CoffeeCard: React.FC<CoffeeCardProp> = ({id, index, type, roasted, imagelink_square, name, special_ingredient, average_rating, prices, buttonPressHandler}) => {
    const coffeeStyle = componentStylings.CoffeeCardStyles;

    return (
        <LinearGradient
            start={{x:0, y:0}}
            end={{x:1, y:1}}
            style={coffeeStyle.linearCardContainer}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        >
            <ImageBackground
                source={imagelink_square}
                style={[coffeeStyle.cardImageBackground]}
                resizeMode='cover'
            >
                <View style={coffeeStyle.ratingContainer}>
                    <CustomIcon name={'star'} color={COLORS.primaryOrangeHex} size={FONTSIZE.size_16} />
                    <Text style={coffeeStyle.ratingText}>{average_rating}</Text>
                </View>
            </ImageBackground>
            <Text style={coffeeStyle.cardTitle}>{name}</Text>
            <Text style={coffeeStyle.cardSubTitle}>{special_ingredient}</Text>
            <View style={coffeeStyle.cardFooter}>
                <Text style={coffeeStyle.cardPriceCurrency}>
                    $
                    <Text style={coffeeStyle.cardPrice}>{prices[2].price}</Text>
                </Text>
                <TouchableOpacity
                    onPress={
                        () => {
                            let thePrice = prices[2];
                            buttonPressHandler({id, index, type, roasted, imagelink_square, name, special_ingredient, price: thePrice})
                        }
                    }
                >
                    <BGIcon color={COLORS.primaryWhiteHex} name={'add'} BGColor={COLORS.primaryOrangeHex} size={FONTSIZE.size_10} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};
