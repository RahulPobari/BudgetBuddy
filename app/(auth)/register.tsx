import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/input'
import * as Icons from 'phosphor-react-native'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const Register = () => {

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        if (!emailRef.current || !passwordRef.current || !nameRef.current) {
            Alert.alert('Sign up', 'Please fill all the fields');
            return
        }
        
    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28} />

                <View style={{ gap: 5, marginTop: spacingX._20 }}>
                    <Typo size={30} fontWeight={'800'}>Let's</Typo>
                    <Typo size={30} fontWeight={'800'}>Get Started</Typo>
                </View>

                {/* Form */}

                <View style={styles.form}>
                    <Typo size={16} color={colors.textLighter}>Create an account to track all you expenses</Typo>

                    {/* Input */}

                    <Input
                        placeholder='Enter your name'
                        icon={<Icons.User size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
                        onChangeText={(value) => (nameRef.current = value)}
                    />
                    <Input
                        placeholder='Enter your email'
                        icon={<Icons.At size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
                        onChangeText={(value) => (emailRef.current = value)}
                    />
                    <Input
                        placeholder='Enter your password'
                        icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
                        onChangeText={(value) => (passwordRef.current = value)}
                        secureTextEntry
                    />

                    <Button onPress={handleSubmit} loading={isLoading}>
                        <Typo fontWeight='700' color={colors.black} size={21}>Sign Up</Typo>
                    </Button>

                </View>

                {/* Footer */}

                <View style={styles.footer}>
                    <Typo size={15}>Already have an account?</Typo>
                    <Pressable onPress={() => router.navigate('/(auth)/login')}>
                        <Typo size={15} color={colors.primary} fontWeight={'700'}>Login</Typo>
                    </Pressable>
                </View>

            </View>
        </ScreenWrapper>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
        color: colors.text,
    },
    form: {
        gap: spacingX._20,
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: '500',
        color: colors.text
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15)
    },
})