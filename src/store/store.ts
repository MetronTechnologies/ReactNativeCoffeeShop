import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData.ts';
import BeansData from '../data/BeansData.ts';
import {produce} from "immer";

interface PriceSetting{
    size: string;
    price: string;
    currency: string;
    quantity: number;
}
export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            FavoriteList: [],
            CartList: [],
            OrderHistoryList: [],
            CartPrice: 0,
            AddToCart: (cartItem: any) => (
                set(
                    produce(
                        (state) => {
                            let found = false;
                            for (let i = 0; i < state.CartList.length; i++) {
                                if (state.CartList[i].id == cartItem.id) {
                                    found = true;
                                    let size = false;
                                    for (let j = 0; j < state.CartList[i].prices.length; j++) {
                                        if (
                                            state.CartList[i].prices[j].size == cartItem.prices[0].size
                                        ) {
                                            size = true;
                                            state.CartList[i].prices[j].quantity++;
                                            break;
                                        }
                                    }
                                    if (size == false) {
                                        state.CartList[i].prices.push(cartItem.prices[0]);
                                    }
                                    state.CartList[i].prices.sort((a: any, b: any) => {
                                        if (a.size > b.size) {
                                            return -1;
                                        }
                                        if (a.size < b.size) {
                                            return 1;
                                        }
                                        return 0;
                                    });
                                    break;
                                }
                            }
                            if (found == false) {
                                state.CartList.push(cartItem);
                            }
                        }
                    )
                )
            ),
            CalculateCartPrice: () => (
                set(
                    produce(
                        (state) => {
                            let totalprice = 0;
                            for (let i = 0; i < state.CartList.length; i++) {
                                let tempprice = 0;
                                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                                    tempprice = tempprice +
                                        parseFloat(state.CartList[i].prices[j].price) *
                                        state.CartList[i].prices[j].quantity;
                                }
                                state.CartList[i].ItemPrice = tempprice.toFixed(2).toString();
                                totalprice = totalprice + tempprice;
                            }
                            state.CartPrice = totalprice.toFixed(2).toString();
                        }
                    )
                )
            ),
            AddToFavoriteList: (type: string, id: string) => (
                set(
                    produce(
                        (state) => {
                            if(type === 'Coffee'){
                                for(let i=0; i<state.CoffeeList.length; i++){
                                    if(state.CoffeeList[i].id === id){
                                        if(!state.CoffeeList[i].favourite){
                                            state.CoffeeList[i].favourite = true;
                                            state.FavoriteList.unshift(state.CoffeeList[i])
                                        }
                                        break;
                                    }
                                }
                            } else if (type === 'Bean'){
                                for(let i=0; i<state.BeanList.length; i++){
                                    if(state.BeanList[i].id === id){
                                        if(!state.BeanList[i].favourite){
                                            state.BeanList[i].favourite = true;
                                            state.FavoriteList.unshift(state.BeanList[i])
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    )
                )
            ),
            DeleteFromFavoriteList: (type: string, id: string) => (
                set(
                    produce(
                        (state) => {
                            if(type === 'Coffee'){
                                for(let i=0; i<state.CoffeeList.length; i++){
                                    if(state.CoffeeList[i].id === id){
                                        if(state.CoffeeList[i].favourite){
                                            state.CoffeeList[i].favourite = false;
                                        }
                                        break;
                                    }
                                }
                            } else if (type === 'Bean') {
                                for (let i = 0; i < state.BeanList.length; i++) {
                                    if (state.BeanList[i].id === id) {
                                        if (state.BeanList[i].favourite) {
                                            state.BeanList[i].favourite = false;
                                        }
                                        break;
                                    }
                                }
                            }
                            let spliceIndex = -1;
                            for(let i=0; i<state.FavoriteList.length; i++){
                                if(state.FavoriteList[i].id === id){
                                    spliceIndex = i;
                                    break;
                                }
                            }
                            state.FavoriteList.splice(spliceIndex, 1);
                        }
                    )
                )
            ),
            IncreaseCartQuantity: (id: string, size: string) => set(
                produce(
                    state => {
                        for (let i = 0; i < state.CartList.length; i++) {
                            if (state.CartList[i].id == id) {
                                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                                    if (state.CartList[i].prices[j].size == size) {
                                        state.CartList[i].prices[j].quantity++;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                )
            ),
            DecreaseCartQuantity: (id: string, size: string) => set(
                produce(
                    state => {
                        for (let i = 0; i < state.CartList.length; i++) {
                            if (state.CartList[i].id == id) {
                                for (let j = 0; j < state.CartList[i].prices.length; j++) {
                                    if (state.CartList[i].prices[j].size == size) {
                                        if (state.CartList[i].prices.length > 1) {
                                            if (state.CartList[i].prices[j].quantity > 1) {
                                                state.CartList[i].prices[j].quantity--;
                                            } else {
                                                state.CartList[i].prices.splice(j, 1);
                                            }
                                        } else {
                                            if (state.CartList[i].prices[j].quantity > 1) {
                                                state.CartList[i].prices[j].quantity--;
                                            } else {
                                                state.CartList.splice(i, 1);
                                            }
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                )
            ),
            AddToOrder: () => set(
                produce(
                    state => {
                        let temp = state.CartList.reduce(
                            (x: number, y: any) => x+parseFloat(y.ItemPrice),0
                        );
                        if(state.OrderHistoryList.length > 0){
                            state.OrderHistoryList.unshift({
                                orderDate: new Date().toDateString() + " " + new Date().toLocaleDateString(),
                                cartList: state.CartList,
                                cartPrice: temp.toFixed(2).toString()
                            });
                        } else {
                            state.OrderHistoryList.push({
                                orderDate: new Date().toDateString() + " " + new Date().toLocaleDateString(),
                                cartList: state.CartList,
                                cartPrice: temp.toFixed(2).toString()
                            });
                        }
                        state.CartList = [];
                    }
                )
            )

        }),
        {
            name: 'coffee-app',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
