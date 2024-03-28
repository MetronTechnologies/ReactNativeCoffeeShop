import {ImageProps, ScrollView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {useStore} from "../store/store.ts";
import {screenStylings} from "./ScreenStyles.ts";
import {COLORS, FONTSIZE} from "../theme/theme.ts";
import ImageBGInfo from "../components/ImageBGInfo.tsx";
import {useState} from "react";
import PaymentFooter from "../components/PaymentFooter.tsx";

const DetailsScreen = ({navigation, route}: any) => {
    const item = useStore(
        (state: any) => (
            route.params.type === 'Coffee' ? state.CoffeeList : state.BeanList
        )
    )[route.params.index];
    const addToFavourite = useStore(
        (state: any) => (
            state.AddToFavoriteList
        )
    );
    const addToCart = useStore(
        (state: any) => (
            state.AddToCart
        )
    );
    const calculateCartPrice = useStore(
        (state: any) => (
            state.CalculateCartPrice
        )
    );
    const deleteFromFavourite = useStore(
        (state: any) => (
            state.DeleteFromFavoriteList
        )
    );
    const stylings = screenStylings.DetailScreenStyle;
    const handleBack = () => {
        navigation.pop();
    }
    const handleToggle = (favourite: boolean, type: string, id: string) => {
        favourite ? deleteFromFavourite(type, id) : addToFavourite(type, id);
    }

    const handleCart = ({id, index, name, roasted, imagelink_square, special_ingredient, type, price} : any) => {
        addToCart({id, index, name, roasted, imagelink_square, special_ingredient, type, prices: [{...price, quantity: 1}]})
        calculateCartPrice();
    }

    const[fullDesc, setFullDesc] = useState(false);
    const[price, setPrice] = useState(item.prices[0]);

    return (
        <View style={stylings.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={stylings.scrollView}
            >
                <ImageBGInfo
                    enableBackHandler={true}
                    imageLink={item.imagelink_portrait}
                    type={item.type}
                    id={item.id}
                    favorite={item.favourite}
                    name={item.name}
                    special_ingredient={item.special_ingredient}
                    ingredients={item.ingredients}
                    average_rating={item.average_rating}
                    rating_count={item.ratings_count}
                    roasted={item.roasted}
                    backHandler={handleBack}
                    toggleFavorite={handleToggle}
                />
                <View style={stylings.footerInfoArea}>
                    <Text style={stylings.infoTitle}>Description</Text>
                    {
                        fullDesc ? (
                            <TouchableWithoutFeedback onPress={() => setFullDesc(x => !x)}>
                                <Text style={stylings.descText}>{item.description}</Text>
                            </TouchableWithoutFeedback>
                        ) : (
                            <TouchableWithoutFeedback onPress={() => setFullDesc(x => !x)}>
                                <Text style={stylings.descText} numberOfLines={3}>{item.description}</Text>
                            </TouchableWithoutFeedback>
                        )
                    }
                    <Text style={stylings.infoTitle}>Size</Text>
                    <View style={stylings.sizeOuterContainer}>
                        {
                            item.prices.map(
                                (p: any) => (
                                    <TouchableOpacity
                                        key={p.size}
                                        style={
                                            [stylings.sizeBox, {
                                                borderColor: p.size == price.size ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex
                                            }]
                                        }
                                        onPress={
                                            () => (
                                                setPrice(p)
                                            )
                                        }
                                    >
                                        <Text
                                            style={
                                                [stylings.sizeText, {
                                                    fontSize: item.type == 'bean' ? FONTSIZE.size_14 : FONTSIZE.size_16,
                                                    color: p.size == price ? COLORS.primaryOrangeHex : COLORS.secondaryLightGreyHex
                                                }]
                                            }
                                        >
                                            {p.size}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            )
                        }
                    </View>
                </View>
                <PaymentFooter
                    buttonTitle={"Add To Cart"}
                    buttonPressHandler={() => {
                        handleCart({
                            id: item.id,
                            index: item.index,
                            name: item.name,
                            roasted: item.roasted,
                            imagelink_square: item.imagelink_square,
                            special_ingredient: item.special_ingredient,
                            type: item.type,
                            price: price
                        })
                    }}
                    price={
                        item.prices.filter((i: any) => i === price)[0]
                    }
                />
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;