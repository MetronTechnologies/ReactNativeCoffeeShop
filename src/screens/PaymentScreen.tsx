import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {screenStylings} from "./ScreenStyles.ts";
import {COLORS, FONTSIZE} from "../theme/theme.ts";
import GradientBGIcon from "../components/GradientBGIcon.tsx";
import HeaderBar from "../components/HeaderBar.tsx";
import PaymentMethod from "../components/PaymentMethod.tsx";
import PaymentFooter from "../components/PaymentFooter.tsx";
import LinearGradient from "react-native-linear-gradient";
import CustomIcon from "../components/CustomIcon.ts";
import {useStore} from "../store/store.ts";
import PopUpAnime from "../components/PopUpAnime.tsx";

const PaymentList = [
    {
        name: 'Wallet',
        icon: 'icon',
        isIcon: true
    },
    {
        name: 'Google Pay',
        icon: require('../assets/app_images/gpay.png'),
        isIcon: false
    },
    {
        name: 'Apple Pay',
        icon: require('../assets/app_images/applepay.png'),
        isIcon: false
    },
    {
        name: 'Amazon Pay',
        icon: require('../assets/app_images/amazonpay.png'),
        isIcon: false
    }
]

const PaymentScreen = ({navigation, route}: any) => {

    const calculateCartPrice = useStore(
        (state: any) => state.CalculateCartPrice
    )
    const addToOrder = useStore(
        (state: any) => state.AddToOrder
    )

    const buttonHandler = () => {
        setShowAnime(true);
        addToOrder();
        calculateCartPrice();
        setTimeout(
            () => {
                setShowAnime(false);
                navigation.navigate('History')
            }, 2000
        )
    }
    const[showAnime, setShowAnime] = useState(false)

    const[paymentMode, setPaymentMode] = useState('Credit Card');
    const styles = screenStylings.PaymentScreenStyle

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
            {
                showAnime && (
                    <PopUpAnime
                        style={styles.lottieAnime}
                        source={require('../lottie/successful.json')}
                    />
                )
            }
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => {navigation.pop()}}
                    >
                        <GradientBGIcon
                            name={'left'}
                            color={COLORS.primaryLightGreyHex}
                            size={FONTSIZE.size_16}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}> Payments </Text>
                    <View style={styles.emptyView}/>
                </View>
                <View style={styles.paymentOptionContainer}>
                    <TouchableOpacity
                        onPress={() => setPaymentMode('Credit Card')}
                    >
                        <View
                            style={[
                                styles.creditCardContainer, {
                                    borderColor: paymentMode === 'Credit Card' ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex
                                }
                            ]}
                        >
                            <Text style={styles.creditCardTitle}>Credit Card</Text>
                            <View style={styles.creditCardBG}>
                                <LinearGradient
                                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                                    start={{x:0, y:0}}
                                    end={{x:1, y:1}}
                                    style={styles.linearGradientStyle}
                                >
                                    <View style={styles.creditCardRow}>
                                        <CustomIcon
                                            name={'chip'}
                                            size={FONTSIZE.size_20*2}
                                            color={COLORS.primaryOrangeHex}
                                        />
                                        <CustomIcon
                                            name={'visa'}
                                            size={FONTSIZE.size_30*2}
                                            color={COLORS.primaryWhiteHex}
                                        />
                                    </View>
                                    <View style={styles.creditCardNumberContainer}>
                                        <Text style={styles.creditCardNumber}>9358</Text>
                                        <Text style={styles.creditCardNumber}>2422</Text>
                                        <Text style={styles.creditCardNumber}>7477</Text>
                                        <Text style={styles.creditCardNumber}>3577</Text>
                                    </View>
                                    <View style={styles.creditCardRow}>
                                        <View style={styles.creditCardNameContainer}>
                                            <Text style={styles.creditCardNameSubTitle}>Card Holder Name</Text>
                                            <Text style={styles.creditCardNameTitle}>General Zod</Text>
                                        </View>
                                        <View style={styles.creditCardDateContainer}>
                                            <Text style={styles.creditCardNameSubTitle}>Expiry Date</Text>
                                            <Text style={styles.creditCardNameTitle}>02/30</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {
                        PaymentList.map(
                            (data: any) => (
                                <TouchableOpacity
                                    key={data.name}
                                    onPress={()=> setPaymentMode(data.name)}
                                >
                                    <PaymentMethod
                                        paymentMode = {paymentMode}
                                        name={data.name}
                                        icon={data.icon}
                                        isIcon={data.isIcon}
                                    />
                                </TouchableOpacity>
                            )
                        )
                    }
                </View>
            </ScrollView>
            <PaymentFooter
                price={{price: route.params.amount, currency: '$'}}
                buttonPressHandler={buttonHandler}
                buttonTitle={`Pay with ${paymentMode}`}
            />
        </View>
    );
};

export default PaymentScreen;