import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useStore} from "../store/store.ts";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {screenStylings} from "./ScreenStyles.ts";
import {COLORS} from "../theme/theme.ts";
import HeaderBar from "../components/HeaderBar.tsx";
import CartItem from "../components/CartItem.tsx";
import EmptyListAnimation from "../components/EmptyListAnimation.tsx";
import PaymentFooter from "../components/PaymentFooter.tsx";
import FavouriteCard from "../components/FavouriteCard.tsx";

const FavoriteScreen = ({navigation}: any) => {
    const tabBarHeight = useBottomTabBarHeight();
    const styles = screenStylings.CartScreenStyle;
    
    const favList = useStore(
        (state: any) => state.FavoriteList
    );
    const removeFromFavList = useStore(
        (state: any) => state.DeleteFromFavoriteList
    );
    const addToFavList = useStore(
        (state: any) => state.AddToFavoriteList
    );
    const ToggleFav = (favorite: boolean, type: string, id: string) => {
        favorite ? removeFromFavList(type, id) : addToFavList(type, id)
    }

    return (
        <View style={styles.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                <View style={[styles.scrollInnerView, {marginBottom: tabBarHeight}]}>
                    <View style={styles.itemContainer}>
                        <HeaderBar title='Favourites'/>
                        {
                            favList.length > 0 ? (
                                <View style={styles.listItemContainer}>
                                    {
                                        favList.map(
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
                                                    <FavouriteCard
                                                        id={data.id}
                                                        name={data.name}
                                                        type={data.type}
                                                        average_rating={data.average_rating}
                                                        imagelink_square={data.imagelink_square}
                                                        special_ingredient={data.special_ingredient}
                                                        ingredients={data.ingredients}
                                                        ratings_count={data.ratings_count}
                                                        roasted={data.roasted}
                                                        description={data.description}
                                                        favourite={data.favourite}
                                                        toggleFav={ToggleFav}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </View>
                            ) : (
                                <EmptyListAnimation title='No Favourites' />
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default FavoriteScreen;