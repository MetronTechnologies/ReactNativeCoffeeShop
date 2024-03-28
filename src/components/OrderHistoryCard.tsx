import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {componentStylings} from "./ComponentStyles.ts";
import OrderItemCard from "./OrderItemCard.tsx";

interface OrderHistoryProps{
    navigationHandler: any;
    orderDate: string;
    cartListPrice: string;
    cartItems: any
}

const OrderHistoryCard: React.FC<OrderHistoryProps> = ({navigationHandler, orderDate, cartItems, cartListPrice}) => {
    const styles = componentStylings.OrderCardStyles;
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <View>
                    <Text style={styles.headerTitle}>Order Time</Text>
                    <Text style={styles.headerSubTitle}>{orderDate}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.headerTitle}>Total Amount</Text>
                    <Text style={styles.headerPrice}>${cartListPrice}</Text>
                </View>
            </View>
            <View style={styles.listContainer}>
                {
                    cartItems.map(
                        (data: any, index: any) => (
                            <TouchableOpacity
                                key={index.toString()}
                                onPress={
                                    () => {
                                        navigationHandler({
                                            index: data.index,
                                            id: data.id,
                                            type: data.type,
                                        })
                                    }
                                }
                            >
                                <OrderItemCard
                                    type={data.type}
                                    name={data.name}
                                    imageLink={data.imagelink_square}
                                    special_ingredient={data.special_ingredient}
                                    prices={data.prices}
                                    itemPrice={data.ItemPrice}
                                />
                            </TouchableOpacity>
                        )
                    )
                }
            </View>
        </View>
    );
};

export default OrderHistoryCard;