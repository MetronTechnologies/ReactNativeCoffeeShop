import {Dimensions, StyleSheet} from 'react-native';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme.ts';

export const screenStylings = StyleSheet.create({
  HomeScreenStyle: {
    screenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    scrollViewFlex: {
      flexGrow: 1
    },
    screenTitle: {
      fontSize: FONTSIZE.size_28,
      fontFamily: FONTFAMILY.poppins_semibold,
      color: COLORS.primaryWhiteHex,
      paddingLeft: SPACING.space_30
    },
    inputContainer: {
      margin: SPACING.space_30,
      borderRadius: BORDERRADIUS.radius_20,
      backgroundColor: COLORS.secondaryDarkGreyHex,
      flexDirection: 'row',
      alignItems: 'center',
    },
    customIcon: {
      marginHorizontal: SPACING.space_20
    },
    textInput: {
      height: SPACING.space_20*3,
      fontFamily: FONTFAMILY.poppins_medium,
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      flex: 1
    },
    categoryStyle: {
      paddingHorizontal: SPACING.space_20,
      marginBottom: SPACING.space_20
    },
    activeCategory: {
      height: SPACING.space_10,
      width: SPACING.space_10,
      borderRadius: BORDERRADIUS.radius_10,
      backgroundColor: COLORS.primaryOrangeHex
    },
    categoryText: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryLightGreyHex,
      marginBottom: SPACING.space_4
    },
    categoryContainer: {
      paddingHorizontal: SPACING.space_15
    },
    categoryItem: {
      alignItems: 'center'
    },
    flatListContainer: {
      gap: SPACING.space_20,
      paddingVertical: SPACING.space_20,
      paddingHorizontal: SPACING.space_30
    },
    beanTitle: {
      fontSize: FONTSIZE.size_18,
      marginLeft: SPACING.space_30,
      marginTop: SPACING.space_20,
      fontFamily: FONTFAMILY.poppins_medium,
      color: COLORS.secondaryLightGreyHex
    },
    emptyContainer: {
      alignItems: 'center',
      width: Dimensions.get('window').width - SPACING.space_30 * 2,
      justifyContent: 'center',
      paddingVertical: SPACING.space_36 * 3
    }
  },
  DetailScreenStyle: {
    screenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: 'space-between'
    },
    footerInfoArea: {
      padding: SPACING.space_20
    },
    infoTitle: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
      marginBottom: SPACING.space_10
    },
    descText: {
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      marginBottom: SPACING.space_30,
      letterSpacing: 0.5
    },
    sizeOuterContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: SPACING.space_20
    },
    sizeText: {
      fontFamily: FONTFAMILY.poppins_medium
    },
    sizeBox: {
      flex: 1,
      backgroundColor: COLORS.primaryDarkGreyHex,
      alignItems: 'center',
      justifyContent: 'center',
      height: SPACING.space_24 * 2,
      borderRadius: BORDERRADIUS.radius_10,
      borderWidth: 2
    }
  },
  CartScreenStyle: {
    screenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex
    },
    scrollView: {
      flexGrow: 1
    },
    scrollInnerView: {
      flex: 1,
      justifyContent: 'space-between'
    },
    itemContainer: {
      flex: 1
    },
    listItemContainer: {
      paddingHorizontal: SPACING.space_20,
      gap: SPACING.space_20
    }
  },
  PaymentScreenStyle: {
    screenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex
    },
    scrollView: {
      flexGrow: 1
    },
    headerContainer: {
      paddingHorizontal: SPACING.space_24,
      paddingVertical: SPACING.space_15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    emptyView: {
      height: SPACING.space_36,
      width: SPACING.space_36,
    },
    headerText: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_20,
      color: COLORS.primaryWhiteHex
    },
    paymentOptionContainer: {
      padding: SPACING.space_15,
      gap: SPACING.space_15
    },
    creditCardContainer: {
      padding: SPACING.space_10,
      gap: SPACING.space_10,
      borderRadius: BORDERRADIUS.radius_15*2,
      borderWidth: 3
    },
    creditCardTitle: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
      marginLeft: SPACING.space_10
    },
    creditCardBG: {
      backgroundColor: COLORS.primaryGreyHex,
      borderRadius: BORDERRADIUS.radius_25
    },
    linearGradientStyle: {
      borderRadius: BORDERRADIUS.radius_25,
      gap: SPACING.space_36,
      paddingHorizontal: SPACING.space_15,
      paddingVertical: SPACING.space_10,
    },
    creditCardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    creditCardNumberContainer: {
      flexDirection: 'row',
      gap: SPACING.space_10,
      alignItems: 'center'
    },
    creditCardNumber: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
      letterSpacing: SPACING.space_8
    },
    creditCardNameContainer: {
      alignItems: 'flex-start'
    },
    creditCardNameSubTitle: {
      fontFamily: FONTFAMILY.poppins_regular,
      fontSize: FONTSIZE.size_12,
      color: COLORS.secondaryLightGreyHex,
    },
    creditCardNameTitle: {
      fontFamily: FONTFAMILY.poppins_medium,
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
    },
    creditCardDateContainer: {
      alignItems: 'flex-end'
    },
    lottieAnime: {
      flex: 1
    }
  },
  OrderHistoryScreenStyle: {
    screenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex
    },
    scrollView: {
      flexGrow: 1
    },
    scrollInnerView: {
      flex: 1,
      justifyContent: 'space-between'
    },
    itemContainer: {
      flex: 1
    },
    listItemContainer: {
      paddingHorizontal: SPACING.space_20,
      gap: SPACING.space_20
    },
    lottieAnime: {
      height: 250
    },
    downloadButton: {
      margin: SPACING.space_20,
      backgroundColor: COLORS.primaryOrangeHex,
      alignItems: 'center',
      justifyContent: 'center',
      height: SPACING.space_36*2,
      borderRadius: BORDERRADIUS.radius_20
    },
    buttonText: {
      fontFamily: FONTFAMILY.poppins_semibold,
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex
    }
  }
});
