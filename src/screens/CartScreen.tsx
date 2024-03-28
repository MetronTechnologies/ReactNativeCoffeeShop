import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useStore} from "../store/store.ts";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {screenStylings} from "./ScreenStyles.ts";
import {COLORS} from "../theme/theme.ts";
import HeaderBar from "../components/HeaderBar.tsx";
import EmptyListAnimation from "../components/EmptyListAnimation.tsx";
import PaymentFooter from "../components/PaymentFooter.tsx";
import CartItem from "../components/CartItem.tsx";

const CartScreen = ({navigation, route}: any) => {
    const cartList = useStore(
        (state: any) => state.CartList
    );

    const cartPrice = useStore(
        (state: any) => state.CartPrice
    );
    const increaseCart = useStore(
        (state: any) => state.IncreaseCartQuantity
    );
    const decreseCart = useStore(
        (state: any) => state.DecreaseCartQuantity
    );
    
    const increaseCartQuantity = (id: string, size: string) => {
        increaseCart(id, size);
        calculateCartPrice();
    }
    const decreaseCartQuantity = (id: string, size: string) => {
        decreseCart(id, size);
        calculateCartPrice();
    }

    const calculateCartPrice = useStore(
        (state: any) => state.CalculateCartPrice
    );
    const buttonHandler = () => {
        navigation.navigate(
            "Payment", {
                amount: cartPrice
            }
        )
    }
    const tabBarHeight = useBottomTabBarHeight();
    const styles = screenStylings.CartScreenStyle;
    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                <View style={[styles.scrollInnerView, {marginBottom: tabBarHeight}]}>
                    <View style={styles.itemContainer}>
                        <HeaderBar title='Cart'/>
                        {
                            cartList.length > 0 ? (
                                <View style={styles.listItemContainer}>
                                    {
                                        cartList.map(
                                            (data: any) => (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        navigation.navigate(
                                                            'Details',{
                                                                index: data.index,
                                                                id: data.id,
                                                                type: data.type
                                                            }
                                                        )
                                                    }}
                                                    key={data.id}
                                                >
                                                    <CartItem
                                                        id={data.id}
                                                        name={data.name}
                                                        roasted={data.roasted}
                                                        prices={data.prices}
                                                        type={data.type}
                                                        increaseCartItemQuantity={increaseCartQuantity}
                                                        decreaseCartItemQuantity={decreaseCartQuantity}
                                                        imageLink={data.imagelink_square}
                                                        special_ingredient={data.special_ingredient}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </View>
                            ) : (
                                <EmptyListAnimation title='Cart is empty' />
                            )
                        }
                    </View>
                    <View>
                        {
                            cartList.length > 0 && (
                                <PaymentFooter
                                    price={
                                        {
                                            price: cartPrice,
                                            currency: "$"
                                        }
                                    }
                                    buttonPressHandler={() => {
                                        buttonHandler()
                                    }}
                                    buttonTitle="Pay"
                                />
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CartScreen;