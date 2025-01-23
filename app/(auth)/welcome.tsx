import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'

const Welcome = () => {
    return (
        <ScreenWrapper>
            <View style={styles.container}>
                {/* Login Button & Image */}

                <View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Typo fontWeight='500'>Sign in</Typo>
                    </TouchableOpacity>

                    <Animated.Image
                        entering={FadeIn.duration(1000)}
                        source={require('../../assets/images/BudgetBuddy.png')}
                        style={styles.welcomeImage}
                        resizeMode='contain'
                    />
                </View>

                {/* Footer  */}

                <View style={styles.footer}>
                    <Animated.View entering={FadeInDown.duration(1000).springify().damping(12)} style={{ alignItems: 'center' }}>
                        <Typo size={30} fontWeight={"800"}>Every budget tells a story,</Typo>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.duration(1000).delay(100).springify().damping(12)} style={{ alignItems: 'center' , gap: 2 }}>
                    <Typo size={18} color={colors.textLight}>write yours wisely.</Typo>
                    </Animated.View>

                    <Animated.View  entering={FadeInDown.duration(1000).delay(200).springify().damping(12)} style={styles.buttonContainer}>
                        <Button>
                            <Typo size={22} color={colors.neutral900} fontWeight={"600"}>Get Started</Typo>
                        </Button>
                    </Animated.View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: spacingY._7
    },
    welcomeImage: {
        width: "100%",
        height: verticalScale(300),
        alignSelf: 'center',
        marginTop: verticalScale(100)
    },
    loginButton: {
        alignSelf: 'flex-end',
        marginRight: spacingX._20,
    },
    footer: {
        backgroundColor: colors.neutral900,
        alignItems: 'center',
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(30),
        gap: spacingX._20,
        shadowColor: "white",
        shadowOffset: { width: 0, height: -10 },
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15,
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: spacingX._25,
    },

})