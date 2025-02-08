import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typo from './Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { scale } from '@/utils/styling'

const HomeCard = () => {
    return (
        <ImageBackground
            source={require("@/assets/images/card.png")}
            resizeMode='stretch'
            style={styles.bgImage}
        >
            <View style={styles.container}>
                
            </View>
        </ImageBackground>
    )
}

export default HomeCard

const styles = StyleSheet.create({
    container: {
        padding: spacingX._20,
        paddingHorizontal: scale(23),
        height: "87%",
        width: "100%",
        justifyContent: "space-between"
    },
    bgImage: {
        height: scale(210),
        width: "100%"
    },
    totalBalanceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: spacingY._5
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    statsIcon: {
        backgroundColor: colors.neutral350,
        padding: spacingY._5,
        borderRadius: 50
    },
    incomeExpense: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacingY._7,
    },
})