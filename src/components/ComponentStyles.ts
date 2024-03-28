import {StyleSheet} from 'react-native';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme.ts';
import {cardHeight, cardWidth} from "./CoffeeCard.tsx";
import ImageBGInfo from "./ImageBGInfo.tsx";

export const componentStylings = StyleSheet.create({
    HeaderStyles: {
        headerContainer: {
            padding: SPACING.space_30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        headerText: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_20,
            color: COLORS.primaryWhiteHex
        }
    },
    GradientStyles: {
        container: {
            borderWidth: 7,
            borderColor: COLORS.secondaryDarkGreyHex,
            borderRadius: SPACING.space_12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.secondaryDarkGreyHex,
            overflow: 'hidden'
        },
        linearGradient: {
            height: SPACING.space_36,
            width: SPACING.space_36,
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    ProfileStyles: {
        imageContainer: {
            height: SPACING.space_36,
            width: SPACING.space_36,
            borderRadius: SPACING.space_12,
            borderWidth: 2,
            borderColor: COLORS.secondaryDarkGreyHex,
            alignItems: 'center',
            overflow: 'hidden'
        },
        image: {
            height: SPACING.space_36,
            width: SPACING.space_36,
        }
    },
    CoffeeCardStyles: {
        linearCardContainer: {
            padding: SPACING.space_15,
            borderRadius: BORDERRADIUS.radius_25
        },
        cardImageBackground: {
            height: cardHeight,
            width: cardWidth,
            borderRadius: BORDERRADIUS.radius_20,
            borderWidth: 1,
            borderColor: COLORS.primaryLightGreyHex,
            marginBottom: SPACING.space_15,
            overflow: 'hidden'
        },
        ratingContainer: {
            flexDirection: 'row',
            backgroundColor: COLORS.primaryBlackRGBA,
            alignItems: 'center',
            justifyContent: 'center',
            gap: SPACING.space_10,
            paddingHorizontal: SPACING.space_15,
            position: 'absolute',
            borderBottomLeftRadius: BORDERRADIUS.radius_20,
            borderTopRightRadius: BORDERRADIUS.radius_20,
            top: 0,
            right: 0,
        },
        ratingText: {
            fontFamily: FONTFAMILY.poppins_medium,
            color: COLORS.primaryWhiteHex,
            fontSize: FONTSIZE.size_14,
            lineHeight: 22
        },
        cardTitle: {
            fontFamily: FONTFAMILY.poppins_medium,
            color: COLORS.primaryWhiteHex,
            fontSize: FONTSIZE.size_16
        },
        cardSubTitle: {
            fontFamily: FONTFAMILY.poppins_light,
            color: COLORS.primaryWhiteHex,
            fontSize: FONTSIZE.size_10
        },
        cardFooter: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SPACING.space_15
        },
        cardPriceCurrency: {
            fontFamily: FONTFAMILY.poppins_semibold,
            color: COLORS.primaryOrangeHex,
            fontSize: FONTSIZE.size_18
        },
        cardPrice: {
            color: COLORS.primaryWhiteHex
        }
    },
    BGIconStyles: {
        iconBg: {
            height: SPACING.space_30,
            width: SPACING.space_30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: BORDERRADIUS.radius_8,
        }
    },
    ImageBGInfoStyles: {
        itemBgImage: {
            width: '100%',
            aspectRatio: 20 / 25,
            justifyContent: 'space-between'
        },
        imageFooterContainer: {
            paddingVertical: SPACING.space_24,
            paddingHorizontal: SPACING.space_30,
            backgroundColor: COLORS.primaryBlackRGBA,
            borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
            borderTopRightRadius: BORDERRADIUS.radius_20 * 2
        },
        imageInnerContainer: {
            justifyContent: 'space-between',
            gap: SPACING.space_15
        },
        infoContainerRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        itemTitleText: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_24,
            color: COLORS.primaryWhiteHex
        },
        itemSubtitleText: {
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_12,
            color: COLORS.primaryWhiteHex
        },
        itemPropertiesContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: SPACING.space_20
        },
        properties: {
            height: 55,
            width: 55,
            borderRadius: BORDERRADIUS.radius_15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primaryBlackHex
        },
        propertyTextFirst: {
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_10,
            color: COLORS.primaryWhiteHex
        },
        ratingContainer: {
            flexDirection: 'row',
            gap: SPACING.space_10,
            alignItems: 'center'
        },
        ratingText: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryWhiteHex
        },
        ratingCount: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_12,
            color: COLORS.primaryWhiteHex
        },
        roastedText: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_10,
            color: COLORS.primaryWhiteHex
        },
        roastedContainer: {
            height: 55,
            width: 55 * 2 + SPACING.space_20,
            borderRadius: BORDERRADIUS.radius_15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primaryBlackHex
        },
        propertyTextLast: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_10,
            color: COLORS.primaryWhiteHex,
            marginTop: SPACING.space_6
        },
        imageHeaderBarContainer: {
            back: {
                padding: SPACING.space_30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            noBack: {
                padding: SPACING.space_30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end'
            }
        }
    },
    PaymentStyles: {
        priceFooter: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: SPACING.space_20,
            padding: SPACING.space_20,
            justifyContent: 'center'
        },
        priceContainer: {
            alignItems: 'center',
            width: 100
        },
        priceTitle: {
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_14,
            color: COLORS.secondaryLightGreyHex
        },
        priceText: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_24,
            color: COLORS.primaryOrangeHex
        },
        price: {
            color: COLORS.primaryWhiteHex
        },
        payButton: {
            backgroundColor: COLORS.primaryOrangeHex,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: SPACING.space_36 * 2,
            borderRadius: BORDERRADIUS.radius_20
        },
        buttonText: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryWhiteHex
        }
    },
    EmptyCartStyles: {
        emptyContainer: {
            flex: 1,
            justifyContent: 'center'
        },
        lottie: {
            height: 300,
        },
        lottieText: {
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_16,
            color: COLORS.primaryOrangeHex,
            textAlign: 'center'
        },
        itemContainer: {
            paddingHorizontal: SPACING.space_20,
            gap: SPACING.space_20,
        }
    },
    CartItemStyles: {
        cartItemLinearGradient: {
            flex: 1,
            gap: SPACING.space_12,
            padding: SPACING.space_12,
            borderRadius: BORDERRADIUS.radius_25,
        },
        cartItemImage: {
            height: 130,
            width: 130,
            borderRadius: BORDERRADIUS.radius_25
        },
        cardItemRow: {
            flexDirection: 'row',
            flex: 1,
            gap: SPACING.space_12
        },
        cartItemInfo: {
            flex: 1,
            paddingVertical: SPACING.space_4,
            justifyContent: 'space-between'
        },
        cartItemTitle: {
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryWhiteHex
        },
        cartItemSubTitle: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_12,
            color: COLORS.secondaryLightGreyHex
        },
        itemRoastedContainer: {
            height: 50,
            width: 100 + SPACING.space_20,
            borderRadius: BORDERRADIUS.radius_15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.primaryDarkGreyHex
        },
        roastedText: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_10,
            color: COLORS.primaryWhiteHex
        },
        itemPriceContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: SPACING.space_20,
            flexDirection: 'row'
        },
        itemSizeContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        sizeBox: {
            backgroundColor: COLORS.primaryBlackHex,
            height: 40,
            width: 100,
            borderRadius: BORDERRADIUS.radius_10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        sizeText: {
            fontFamily: FONTFAMILY.poppins_medium,
            color: COLORS.secondaryLightGreyHex
        },
        sizeCurrency: {
            fontFamily: FONTFAMILY.poppins_semibold,
            color: COLORS.primaryOrangeHex,
            fontSize: FONTSIZE.size_18,
        },
        sizePrice: {
            color: COLORS.primaryWhiteHex,
        },
        itemIcon: {
            backgroundColor: COLORS.primaryOrangeHex,
            padding: SPACING.space_12,
            borderRadius: BORDERRADIUS.radius_10
        },
        itemQuantityContainer: {
            backgroundColor: COLORS.primaryBlackHex,
            width: 80,
            borderRadius: BORDERRADIUS.radius_10,
            borderWidth: 2,
            borderColor: COLORS.primaryOrangeHex,
            alignItems: 'center',
            paddingVertical: SPACING.space_4
        },
        itemQuantityText: {
            fontFamily: FONTFAMILY.poppins_semibold,
            color: COLORS.primaryWhiteHex,
            fontSize: FONTSIZE.size_16
        },
        cartItemSingleLinearGradient: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: SPACING.space_12,
            gap: SPACING.space_12,
            borderRadius: BORDERRADIUS.radius_25
        },
        cartItemSingleImage:{
            height: 150,
            width: 150,
            borderRadius: BORDERRADIUS.radius_20
        },
        singleItemInfoContainer: {
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'space-around'
        },
        singleItemSizeContainer: {
            flexDirection : 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        singleItemQuantityContainer: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    FavouriteStyles: {
        cardContainer: {
            borderRadius: BORDERRADIUS.radius_25,
            overflow: 'hidden'
        },
        linearGradContainer: {
            gap: SPACING.space_10,
            padding: SPACING.space_20
        },
        descriptionTitle: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_16,
            color: COLORS.secondaryLightGreyHex
        },
        descriptionText: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_14,
            color: COLORS.primaryWhiteHex
        },
    },
    PaymentMethod: {
        paymentContainer: {
            borderRadius: BORDERRADIUS.radius_15*2,
            backgroundColor: COLORS.primaryGreyHex,
            borderWidth: 3
        },
        linearGradientWallet: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: SPACING.space_12,
            paddingHorizontal: SPACING.space_24,
            gap: SPACING.space_24,
            borderRadius: BORDERRADIUS.radius_15*2
        },
        walletRow: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: SPACING.space_24
        },
        paymentTitle: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_16,
            color: COLORS.primaryWhiteHex
        },
        paymentPrice: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_16,
            color: COLORS.secondaryLightGreyHex
        },
        linearGradientRegular: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: SPACING.space_12,
            paddingHorizontal: SPACING.space_24,
            gap: SPACING.space_24,
            borderRadius: BORDERRADIUS.radius_15*2
        },
        paymentImage: {
            height: SPACING.space_30,
            width: SPACING.space_30,
        }
    },
    PopUpAnimeStyles: {
        lottieAnimeContainer: {
            flex: 1,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: COLORS.secondaryBlackRGBA,
            justifyContent: 'center'
        }
    },
    OrderCardStyles: {
        cardContainer: {
            gap: SPACING.space_10,
            padding: SPACING.space_20
        },
        cardHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: SPACING.space_20,
            alignItems: 'center'
        },
        headerTitle: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_16,
            color: COLORS.primaryWhiteHex
        },
        headerSubTitle: {
            fontFamily: FONTFAMILY.poppins_light,
            fontSize: FONTSIZE.size_16,
            color: COLORS.primaryWhiteHex
        },
        priceContainer: {
            alignItems: 'flex-end'
        },
        headerPrice: {
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryOrangeHex
        },
        listContainer: {
            gap: SPACING.space_20,
        }
    },
    OrderItemCardStyle: {
        cardLinearGradient: {
            gap: SPACING.space_20,
            padding: SPACING.space_20,
            borderRadius: BORDERRADIUS.radius_25
        },
        cardInfoContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        cardImageInfoContainer: {
            flexDirection: 'row',
            gap: SPACING.space_20,
            alignItems: 'center'
        },
        image: {
            height: 90,
            width: 90,
            borderRadius: BORDERRADIUS.radius_15
        },
        cardTitle: {
            fontFamily: FONTFAMILY.poppins_medium,
            fontSize: FONTSIZE.size_18,
            color: COLORS.primaryWhiteHex
        },
        cardSubTitle: {
            fontFamily: FONTFAMILY.poppins_regular,
            fontSize: FONTSIZE.size_12,
            color: COLORS.secondaryLightGreyHex
        },
        cardCurrency: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_20,
            color: COLORS.primaryOrangeHex
        },
        cardPrice: {
            fontFamily: FONTFAMILY.poppins_semibold,
            fontSize: FONTSIZE.size_20,
            color: COLORS.primaryWhiteHex
        },
        cardTableRow: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        sizeBoxLeft: {
            backgroundColor: COLORS.primaryBlackHex,
            height: 45,
            flex: 1,
            borderTopLeftRadius: BORDERRADIUS.radius_10,
            borderBottomLeftRadius: BORDERRADIUS.radius_10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 1,
            borderRightColor: COLORS.primaryGreyHex
        },
        sizeText: {
            fontFamily: FONTFAMILY.poppins_medium,
            color: COLORS.secondaryLightGreyHex
        },
        priceBoxRight: {
            backgroundColor: COLORS.primaryBlackHex,
            height: 45,
            flex: 1,
            borderTopRightRadius: BORDERRADIUS.radius_10,
            borderBottomRightRadius: BORDERRADIUS.radius_10,
            justifyContent: 'center',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderLeftColor: COLORS.primaryGreyHex
        },
        priceCurrency: {
            fontFamily: FONTFAMILY.poppins_semibold,
            color: COLORS.primaryOrangeHex,
            fontSize: FONTSIZE.size_18
        },
        price: {
            color: COLORS.primaryWhiteHex,
        },
        cardQuantityPriceText: {
            fontFamily: FONTFAMILY.poppins_semibold,
            color: COLORS.primaryOrangeHex,
            fontSize: FONTSIZE.size_18,
            flex: 1,
            textAlign: 'center'
        }
    }
});
