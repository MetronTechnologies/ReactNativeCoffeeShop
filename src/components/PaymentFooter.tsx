import {Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import {componentStylings} from "./ComponentStyles.ts";

interface PriceProps{
    price: string;
    currency: string;
}
interface PaymentFooterProps{
    price: PriceProps;
    buttonPressHandler: any;
    buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({price, buttonPressHandler, buttonTitle}) => {
    const styles = componentStylings.PaymentStyles;
    return (
        <View style={styles.priceFooter}>
            <View style={styles.priceContainer}>
                <Text style={styles.priceTitle}>{price.price}</Text>
                <Text style={styles.priceText}>
                    {price.currency}
                    <Text style={styles.price}>{price.price}</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.payButton} onPress={() => buttonPressHandler()}>
                <Text style={styles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentFooter;