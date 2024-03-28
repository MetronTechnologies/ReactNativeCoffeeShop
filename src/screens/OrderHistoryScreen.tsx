import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useStore} from "../store/store.ts";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {screenStylings} from "./ScreenStyles.ts";
import {COLORS} from "../theme/theme.ts";
import HeaderBar from "../components/HeaderBar.tsx";
import EmptyListAnimation from "../components/EmptyListAnimation.tsx";
import PopUpAnime from "../components/PopUpAnime.tsx";
import {useState} from "react";
import OrderHistoryCard from "../components/OrderHistoryCard.tsx";

const OrderHistoryScreen = ({navigation}: any) => {
    const orderList = useStore(
        (state: any) => state.OrderHistoryList
    )
    const[showAnime, setShowAnime] = useState(false);
    const styles = screenStylings.OrderHistoryScreenStyle
    const tabBarHeight = useBottomTabBarHeight();
    const buttonPressHandler = () => {
      setShowAnime(true);
      setTimeout(
          () => {
              setShowAnime(false)
          }, 2000
      )
    }
    const navigationHandler = ({index, id, type}: any) => {
      navigation.navigate(
          'Details', {
              index, id, type
          }
      )
    }
    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
            {
                showAnime && (
                    <PopUpAnime
                        style={styles.lottieAnime}
                        source={require('../lottie/download.json')}
                    />
                )
            }
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                <View style={[styles.scrollInnerView, {marginBottom: tabBarHeight}]}>
                    <View style={styles.itemContainer}>
                        <HeaderBar title='Order History'/>
                        {
                            orderList.length > 0 ? (
                                <View style={styles.listItemContainer}>
                                    {
                                        orderList.map(
                                            (data: any, index: any) => (
                                                <OrderHistoryCard
                                                    key={index.toString()}
                                                    navigationHandler={navigationHandler}
                                                    orderDate={data.orderDate}
                                                    cartListPrice={data.cartPrice}
                                                    cartItems={data.cartList}
                                                />
                                            )
                                        )
                                    }
                                </View>
                            ) : (
                                <EmptyListAnimation title='Order history is empty' />
                            )
                        }
                    </View>
                    {
                        orderList.length > 0 && (
                            <TouchableOpacity
                                style={styles.downloadButton}
                                onPress={
                                    () => {
                                        buttonPressHandler()
                                    }
                                }
                            >
                                <Text style={styles.buttonText}>Download</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default OrderHistoryScreen;