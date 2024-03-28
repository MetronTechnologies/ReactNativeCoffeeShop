import React from 'react';
import {Image, ImageProps, Text, View} from "react-native";
import {componentStylings} from "./ComponentStyles.ts";
import LinearGradient from "react-native-linear-gradient";
import {COLORS, FONTSIZE} from "../theme/theme.ts";

interface OrderItemCardProps{
    type: string;
    name: string;
    imageLink: ImageProps;
    special_ingredient: string;
    prices: any;
    itemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({type, name, imageLink, special_ingredient, prices, itemPrice}) => {
    const styles = componentStylings.OrderItemCardStyle;
    return (
        <LinearGradient
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            start={{x:0, y: 0}}
            end={{x:1, y: 1}}
            style={styles.cardLinearGradient}
        >
            <View style={styles.cardInfoContainer}>
                <View style={styles.cardImageInfoContainer}>
                    <Image
                        style={styles.image}
                        source={imageLink}
                    />
                    <View>
                        <Text style={styles.cardTitle}>{name}</Text>
                        <Text style={styles.cardSubTitle}>{special_ingredient}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.cardCurrency}>
                        $
                        <Text style={styles.cardPrice}>{itemPrice}</Text>
                    </Text>
                </View>
            </View>
            {
                prices.map(
                    (data: any, index: any) => (
                        <View key={index.toString()} style={styles.cardTableRow}>
                            <View style={styles.cardTableRow}>
                                <View style={styles.sizeBoxLeft}>
                                    <Text
                                        style={
                                            [
                                                styles.sizeText, {fontSize: type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16}
                                            ]
                                        }
                                    >{data.size}</Text>
                                </View>
                                <View style={styles.priceBoxRight}>
                                    <Text style={styles.priceCurrency}>
                                        {data.currency}
                                        <Text style={styles.price}>{data.price}</Text>
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.cardTableRow}>
                                <Text style={styles.cardQuantityPriceText}>
                                    X
                                    <Text style={styles.price}> {data.quantity}</Text>
                                </Text>
                                <Text style={styles.cardQuantityPriceText}>
                                    $ {(data.quantity*data.price).toFixed(2).toString()}
                                </Text>
                            </View>
                        </View>
                    )
                )
            }
        </LinearGradient>
    );
};

export default OrderItemCard;