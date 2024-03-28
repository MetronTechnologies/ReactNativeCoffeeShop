import React from 'react';
import {componentStylings} from "./ComponentStyles.ts";
import {Image, ImageProps, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {COLORS, FONTSIZE} from "../theme/theme.ts";
import CustomIcon from "./CustomIcon.ts";


interface CartItemProps{
    id: string;
    name: string;
    roasted: string;
    prices: any;
    type: string;
    increaseCartItemQuantity: any;
    decreaseCartItemQuantity: any;
    imageLink: ImageProps;
    special_ingredient: string
}
const CartItem: React.FC<CartItemProps> = ({id, name, roasted, prices, type, increaseCartItemQuantity, decreaseCartItemQuantity, imageLink, special_ingredient}) => {
    const styles = componentStylings.CartItemStyles
    return (
        <View>
            {
                prices.length > 1 ? (
                    <LinearGradient
                        start={{x:0, y:0}}
                        end={{x:1, y:1}}
                        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                        style={styles.cartItemLinearGradient}
                    >
                        <View style={styles.cardItemRow}>
                            <Image source={imageLink} style={styles.cartItemImage}/>
                            <View style={styles.cartItemInfo}>
                                <View>
                                    <Text style={styles.cartItemTitle}>{name}</Text>
                                    <Text style={styles.cartItemSubTitle}>{special_ingredient}</Text>
                                </View>
                                <View style={styles.itemRoastedContainer}>
                                    <Text style={styles.roastedText}>{roasted}</Text>
                                </View>
                            </View>
                        </View>
                        {
                            prices.map(
                                (data: any, index: any) => (
                                    <View key={index.toString()} style={styles.itemPriceContainer}>
                                        <View style={styles.itemSizeContainer}>
                                            <View style={styles.sizeBox}>
                                                <Text
                                                    style={
                                                        [
                                                            styles.sizeText,
                                                            {fontSize: type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16}
                                                        ]
                                                    }
                                                >
                                                    {data.size}
                                                </Text>
                                            </View>
                                            <Text style={styles.sizeCurrency}>
                                                {data.currency}
                                                <Text style={styles.sizePrice}>{data.price}</Text>
                                            </Text>
                                        </View>
                                        <View style={styles.itemSizeContainer}>
                                            <TouchableOpacity
                                                style={styles.itemIcon}
                                                onPress={
                                                    () => {
                                                        decreaseCartItemQuantity(id, data.size)
                                                    }
                                                }
                                            >
                                                <CustomIcon
                                                    name={'minus'}
                                                    color={COLORS.primaryWhiteHex}
                                                    size={FONTSIZE.size_10}
                                                />
                                            </TouchableOpacity>
                                            <View style={styles.itemQuantityContainer}>
                                                <Text style={styles.itemQuantityText}>{data.quantity}</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.itemIcon}
                                                onPress={
                                                    () => {
                                                        increaseCartItemQuantity(id, data.size)
                                                    }
                                                }
                                            >
                                                <CustomIcon
                                                    name={'add'}
                                                    color={COLORS.primaryWhiteHex}
                                                    size={FONTSIZE.size_10}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            )
                        }
                    </LinearGradient>
                ) : (
                    <LinearGradient
                        start={{x:0, y:0}}
                        end={{x:1, y:1}}
                        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                        style={styles.cartItemSingleLinearGradient}
                    >
                        <View>
                            <Image source={imageLink} style={styles.cartItemSingleImage}/>
                        </View>
                        <View style={styles.singleItemInfoContainer}>
                            <View>
                                <Text style={styles.cartItemTitle}>{name}</Text>
                                <Text style={styles.cartItemSubTitle}>{special_ingredient}</Text>
                            </View>
                            <View style={styles.singleItemSizeContainer}>
                                <View style={styles.sizeBox}>
                                    <Text
                                        style={
                                            [
                                                styles.sizeText,
                                                {fontSize: type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16}
                                            ]
                                        }
                                    >
                                        {prices[0].size}
                                    </Text>
                                </View>
                                <Text style={styles.sizeCurrency}>
                                    {prices[0].currency}
                                    <Text style={styles.sizePrice}>{prices[0].price}</Text>
                                </Text>
                            </View>
                            <View style={styles.singleItemQuantityContainer}>
                                <TouchableOpacity
                                    style={styles.itemIcon}
                                    onPress={() => {decreaseCartItemQuantity(id, prices[0].size)}}
                                >
                                    <CustomIcon
                                        name={'minus'}
                                        color={COLORS.primaryWhiteHex}
                                        size={FONTSIZE.size_10}
                                    />
                                </TouchableOpacity>
                                <View style={styles.itemQuantityContainer}>
                                    <Text style={styles.itemQuantityText}>{prices[0].quantity}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.itemIcon}
                                    onPress={() => {increaseCartItemQuantity(id, prices[0].size)}}
                                >
                                    <CustomIcon
                                        name={'add'}
                                        color={COLORS.primaryWhiteHex}
                                        size={FONTSIZE.size_10}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </LinearGradient>
                )
            }
        </View>
    );
};

export default CartItem;