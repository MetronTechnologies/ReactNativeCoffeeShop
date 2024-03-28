import React from 'react';
import {ImageProps, Text, View} from "react-native";
import ImageBGInfo from "./ImageBGInfo.tsx";
import LinearGradient from "react-native-linear-gradient";
import {COLORS} from "../theme/theme.ts";
import {componentStylings} from "./ComponentStyles.ts";

interface FavouriteCardProps{
    id: string;
    name: string;
    type: string;
    average_rating: number;
    imagelink_square: ImageProps;
    ingredients: string;
    special_ingredient: string;
    ratings_count: string;
    roasted: string;
    description: string;
    favourite: boolean;
    toggleFav: any
}

const FavouriteCard: React.FC<FavouriteCardProps> = ({id, name, type, average_rating, imagelink_square, ingredients, special_ingredient, ratings_count, roasted, description, favourite, toggleFav}) => {

    const styles = componentStylings.FavouriteStyles
    return (
        <View style={styles.cardContainer}>
            <ImageBGInfo
                enableBackHandler={false}
                imageLink={imagelink_square}
                type={type}
                id={id}
                favorite={favourite}
                name={name}
                special_ingredient={special_ingredient}
                ingredients={ingredients}
                average_rating={average_rating}
                rating_count={ratings_count}
                roasted={roasted}
                toggleFavorite={toggleFav}
            />
            <LinearGradient
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                start={{x:0, y:0}}
                end={{x:1, y:1}}
                style={styles.linearGradContainer}
            >
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </LinearGradient>
        </View>
    );
};

export default FavouriteCard;