import {ImageBackground, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import {componentStylings} from "./ComponentStyles.ts";
import GradientBGIcon from "./GradientBGIcon.tsx";
import {COLORS, FONTSIZE, SPACING} from "../theme/theme.ts";
import CustomIcon from "./CustomIcon.ts";


interface ImageBgInfoProps {
    enableBackHandler: boolean;
    imageLink: ImageProps;
    type: string;
    id: string;
    favorite: boolean;
    name: string;
    special_ingredient: string;
    ingredients: string;
    average_rating: number;
    rating_count: string;
    roasted: string;
    backHandler?: any;
    toggleFavorite: any;
}


const ImageBGInfo: React.FC<ImageBgInfoProps> = ({ enableBackHandler, imageLink, type, id, favorite, name, special_ingredient, ingredients, average_rating, rating_count, roasted, backHandler, toggleFavorite }) => {
    const stylings = componentStylings.ImageBGInfoStyles;
    return (
        <View>
            <ImageBackground
                source={imageLink}
                style={stylings.itemBgImage}
            >
                {enableBackHandler ? (
                    <View style={stylings.imageHeaderBarContainer.back}>
                        <TouchableOpacity onPress={backHandler}>
                            <GradientBGIcon
                                name={'left'}
                                color={COLORS.primaryLightGreyHex}
                                size={FONTSIZE.size_16}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={
                                () => toggleFavorite(favorite, type, id)
                            }
                        >
                            <GradientBGIcon
                                name={'like'}
                                color={favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
                                size={FONTSIZE.size_16}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={stylings.imageHeaderBarContainer.noBack}>
                        <TouchableOpacity
                            onPress={
                                () => toggleFavorite(favorite, type, id)
                            }
                        >
                            <GradientBGIcon
                                name={'like'}
                                color={favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
                                size={FONTSIZE.size_16}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                <View style={stylings.imageFooterContainer}>
                    <View style={stylings.imageInnerContainer}>
                        <View style={stylings.infoContainerRow}>
                            <View>
                                <Text style={stylings.itemTitleText}>{name}</Text>
                                <Text style={stylings.itemSubtitleText}>{special_ingredient}</Text>
                            </View>
                            <View style={stylings.itemPropertiesContainer}>
                                <View style={stylings.properties}>
                                    <CustomIcon
                                        name={type === 'Bean' ? 'bean' : 'beans'}
                                        size={type === 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                                        color={COLORS.primaryOrangeHex}
                                    />
                                    <Text
                                        style={[
                                            stylings.propertyTextFirst,
                                            {marginTop: type ===  'Bean' ? SPACING.space_6  : 0}
                                        ]}
                                    >
                                        {type}
                                    </Text>
                                </View>
                                <View style={stylings.properties}>
                                    <CustomIcon
                                        name={type === 'Bean' ? 'location' : 'drop'}
                                        size={FONTSIZE.size_16}
                                        color={COLORS.primaryOrangeHex}
                                    />
                                    <Text style={stylings.propertyTextLast}>
                                        {ingredients}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={stylings.infoContainerRow}>
                            <View style={stylings.ratingContainer}>
                                <CustomIcon 
                                    name={'star'}
                                    color={COLORS.primaryOrangeHex}
                                    size={FONTSIZE.size_20}
                                />
                                <Text style={stylings.ratingText}>{average_rating}</Text>
                                <Text style={stylings.ratingCount}>({rating_count})</Text>
                            </View>
                            <View style={stylings.roastedContainer}>
                                <Text style={stylings.roastedText}>{roasted}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ImageBGInfo;