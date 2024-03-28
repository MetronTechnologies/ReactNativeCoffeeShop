import {FlatList, ScrollView, StatusBar, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useStore} from '../store/store.ts';
import {useRef, useState} from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {screenStylings} from './ScreenStyles.ts';
import {COLORS, FONTSIZE} from '../theme/theme.ts';
import HeaderBar from '../components/HeaderBar.tsx';
import CustomIcon from "../components/CustomIcon.ts";
import {CoffeeCard} from "../components/CoffeeCard.tsx";

// const getCategoriesFromData = (data: any) => {
//   let temp: any = {};
//   for (let i = 0; i < data.length; i++) {
//     if (temp[data[i].name] == undefined) {
//       temp[data[i].name] = 1;
//     } else {
//       temp[data[i].name]++;
//     }
//   }
//   let categories = Object.keys(temp);
//   categories.unshift('All');
//   return categories;
// };
interface price {
    size: string;
    price: string;
    currency: string;
}

interface coffee {
    id: string;
    name: string;
    description: string;
    roasted: string;
    imagelink_square: typeof require;
    imagelink_portrait: typeof require;
    ingredients: string;
    special_ingredient: string;
    prices: price[];
    average_rating: number;
    ratings_count: string;
    favourite: boolean;
    type: string;
    index: number;
}

const getCategoriesFromData = (data: coffee[]) => {
    let newCoffee = data.map(c => c.name);
    let uniqueArray = newCoffee.filter((value, index, self) => {
        let b = self.indexOf(value) === index;
        return b;
    });
    uniqueArray.unshift('All');
    return uniqueArray;
}

const getCoffeeList = (category: string, data: any) => {
    if (category == 'All') {
        return data;
    } else {
        let coffeeList = data.filter((item: any) => item.name == category);
        return coffeeList;
    }
};



const HomeScreen = ({navigation}) => {
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

    const handleCart = ({id, index, name, roasted, imagelink_square, special_ingredient, type, price} : any) => {
        addToCart({id, index, name, roasted, imagelink_square, special_ingredient, type, prices: [{...price, quantity: 1}]})
        calculateCartPrice();
        ToastAndroid.showWithGravity(`${name} is added to the cart`, ToastAndroid.SHORT, ToastAndroid.CENTER)
    }
    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);
    const [categories, setCategories] = useState(
        getCategoriesFromData(CoffeeList),
    );

    const [searchText, setSearchText] = useState('');

    const [categoryIndex, setCategoryIndex] = useState({
        index: 1,
        category: categories[1],
    });
    const [sortedCoffee, setSortedCoffee] = useState(
        getCoffeeList(categoryIndex.category, CoffeeList),
    );
    const listRef: any = useRef<FlatList>()
    const searchCoffee = (search: string) => {
        if(search != ''){
            listRef?.current.scrollToOffset({
                animated: true,
                offset: 0
            });
            setCategoryIndex({
                index: 0,
                category: categories[0]
            });
            setSortedCoffee([
                ...CoffeeList.filter(
                    (item: any) => (
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                )
            ]);
        }
    }

    const resetSearch = () => {
        listRef?.current.scrollToOffset({
            animated: true,
            offset: 0
        });
        setCategoryIndex({
            index: 0,
            category: categories[0]
        });
        setSortedCoffee([...CoffeeList]);
        setSearchText('');
    }

    const tabBarHeight = useBottomTabBarHeight();
    const homeStyle = screenStylings.HomeScreenStyle;

    return (
        <View style={homeStyle.screenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={homeStyle.scrollViewFlex}
            >
                <HeaderBar/>
                <Text style={homeStyle.screenTitle}>
                    Find the best{'\n'}coffee for you
                </Text>
                <View style={homeStyle.inputContainer}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                searchCoffee(searchText)
                            }
                        }
                    >
                        <CustomIcon
                            name='search'
                            size={FONTSIZE.size_18}
                            color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
                            style={homeStyle.customIcon}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Find your coffee'
                        value={searchText}
                        onChangeText={
                            text => {
                                setSearchText(text);
                                searchCoffee(text);
                            }
                        }
                        placeholderTextColor={COLORS.primaryLightGreyHex}
                        style={homeStyle.textInput}
                    />
                    {
                        searchText.length > 0 && (
                            <TouchableOpacity
                                onPress={
                                    () => (resetSearch())
                                }
                            >
                                <CustomIcon
                                    name={'close'}
                                    size={FONTSIZE.size_16}
                                    color={COLORS.primaryLightGreyHex}
                                    style={homeStyle.customIcon}
                                />
                            </TouchableOpacity>
                        )
                    }
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={homeStyle.categoryStyle}
                >
                    {
                        categories.map(
                            (data, index) => (
                                <View key={index.toString()} style={homeStyle.categoryContainer}>
                                    <TouchableOpacity
                                        style={homeStyle.categoryItem}
                                        onPress={
                                          () => {
                                              listRef?.current?.scrollToOffset({
                                                  animated: true,
                                                  offset: 0
                                              })
                                            setCategoryIndex({
                                              index: index,
                                              category: categories[index]
                                            })
                                            setSortedCoffee([...getCoffeeList(categories[index], CoffeeList)]);
                                          }
                                        }
                                    >
                                        <Text
                                            style={[
                                                homeStyle.categoryText,
                                                categoryIndex.index === index && {
                                                  color: COLORS.primaryOrangeHex
                                                }
                                            ]}
                                        >
                                            {data}
                                        </Text>
                                        {
                                            categoryIndex.index === index && (
                                                <View style={homeStyle.activeCategory}/>
                                            )
                                        }
                                    </TouchableOpacity>
                                </View>
                            )
                        )
                    }
                </ScrollView>
                <FlatList
                    ref = {listRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={homeStyle.flatListContainer}
                    data={sortedCoffee}
                    ListEmptyComponent={
                        <View style={homeStyle.emptyContainer}>
                            <Text style={homeStyle.categoryText}>No Coffee Found</Text>
                        </View>
                    }
                    keyExtractor={
                        (item) => (item.id)
                    }
                    renderItem={
                        ({item}) => {
                            return <TouchableOpacity
                                onPress={
                                    () => {
                                        navigation.navigate(
                                            'Details',
                                            {
                                                index: item.index,
                                                id: item.id,
                                                type: item.type
                                            }
                                        )
                                    }
                                }
                            >
                                <CoffeeCard
                                    id={item.id}
                                    index={item.index}
                                    type={item.type}
                                    roasted={item.roasted}
                                    imagelink_square={item.imagelink_square}
                                    name={item.name}
                                    special_ingredient={item.special_ingredient}
                                    average_rating={item.average_rating}
                                    prices={item.prices}
                                    buttonPressHandler={handleCart}
                                />
                            </TouchableOpacity>
                        }
                    }
                />
                <Text style={homeStyle.beanTitle}>Coffee Beans</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[homeStyle.flatListContainer, {marginBottom: tabBarHeight}]}
                    data={BeanList}
                    keyExtractor={
                        (item) => (item.id)
                    }
                    renderItem={
                        ({item}) => {
                            return (
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            navigation.navigate(
                                                'Details',
                                                {
                                                    index: item.index,
                                                    id: item.id,
                                                    type: item.type
                                                }
                                            )
                                        }
                                    }
                                >
                                    <CoffeeCard
                                        id={item.id}
                                        index={item.index}
                                        type={item.type}
                                        roasted={item.roasted}
                                        imagelink_square={item.imagelink_square}
                                        name={item.name}
                                        special_ingredient={item.special_ingredient}
                                        average_rating={item.average_rating}
                                        prices={item.prices}
                                        buttonPressHandler={handleCart}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    }
                />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
