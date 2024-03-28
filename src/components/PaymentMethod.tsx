import React from 'react';
import {Image, Text, View} from "react-native";
import {componentStylings} from "./ComponentStyles.ts";
import LinearGradient from "react-native-linear-gradient";
import {COLORS, FONTSIZE} from "../theme/theme.ts";
import CustomIcon from "./CustomIcon.ts";

interface PaymentMethodProps{
    paymentMode : string;
    name: string;
    icon: any
    isIcon: boolean
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({paymentMode, name, icon, isIcon}) => {
    const styles = componentStylings.PaymentMethod;
    return (
        <View
            style={
                [
                    styles.paymentContainer, {
                        borderColor: paymentMode === name ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex
                    }
                ]
            }
        >
            {
                isIcon ? (
                    <LinearGradient
                        start={{x:0, y:0}}
                        end={{x:1, y:1}}
                        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                        style={styles.linearGradientWallet}
                    >
                        <View style={styles.walletRow}>
                            <CustomIcon
                                name={'wallet'}
                                color={COLORS.primaryOrangeHex}
                                size={FONTSIZE.size_30}
                            />
                            <Text style={styles.paymentTitle}>{name}</Text>
                        </View>
                        <Text style={styles.paymentPrice}>$ 100.50</Text>
                    </LinearGradient>
                ) : (
                    <LinearGradient
                        start={{x:0, y:0}}
                        end={{x:1, y:1}}
                        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                        style={styles.linearGradientRegular}
                    >
                        <Image
                            source={icon}
                            style={styles.paymentImage}
                        />
                        <Text style={styles.paymentTitle}>{name}</Text>
                    </LinearGradient>
                )
            }
        </View>
    );
};

export default PaymentMethod;