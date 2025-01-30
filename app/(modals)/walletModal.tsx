import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { scale, verticalScale } from '@/utils/styling'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import { Image } from 'expo-image'
import { getProfileImage } from '@/services/imageService'
import * as Icons from 'phosphor-react-native'
import Input from '@/components/input'
import { UserDataType, WalletType } from '@/types'
import Button from '@/components/Button'
import { useAuth } from '@/contexts/authContext'
import { updateUser } from '@/services/userService'
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import ImageUpload from '@/components/imageUpload'
import { createOrUpdateWallet } from '@/services/walletService'


const WalletModal = () => {

    const { user, updateUserData } = useAuth();
    const router = useRouter();

    const [wallet, setWallet] = useState<WalletType>({
        name: "",
        image: null,
    });

    const [loading, setloading] = useState(false);


    const onSubmit = async () => {
        let { name, image } = wallet;
        if (!name.trim() || !image) {
            Alert.alert("Wallet", "Please fill all the fileds");
            return;
        }

        const data: WalletType = {
            name,
            image,
            uid: user?.uid
        };

        //todo: include wallet id if updating

        setloading(true);
        const res = await createOrUpdateWallet(data);
        setloading(false);

        // console.log('result: ', res);

        if (res.success) {
            router.back();
        }
        else {
            Alert.alert("Wallet", "Failed to Upload Wallet Icon");
        }
    }

    return (
        <ScreenWrapper style={{ paddingTop: 10 }}>
            <View style={styles.container}>
                <Header title='New Wallet' leftIcon={<BackButton />} style={{ marginBottom: spacingY._10 }} />

                {/* FORM */}
                <ScrollView contentContainerStyle={styles.form}>

                    <View style={styles.inputContainer}>
                        <Typo color={colors.neutral200}>Wallet Name</Typo>
                        <Input
                            placeholder='Salary'
                            value={wallet.name}
                            onChangeText={(value) => setWallet({ ...wallet, name: value })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Typo color={colors.neutral200}>Wallet Icon</Typo>

                        <ImageUpload
                            file={wallet.image}
                            onSelect={(file) => setWallet({ ...wallet, image: file })}
                            onClear={() => setWallet({ ...wallet, image: null })}
                            placeholder='Upload Image'
                        />

                    </View>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <Button onPress={onSubmit} style={{ flex: 1 }} loading={loading}>
                    <Typo color={colors.black} fontWeight={'700'}>Add Wallet</Typo>
                </Button>
            </View>
        </ScreenWrapper>
    )
}

export default WalletModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: spacingY._20,
    },
    footer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: spacingX._20,
        gap: scale(12),
        paddingTop: spacingY._15,
        borderTopColor: colors.neutral700,
        marginBottom: spacingY._20,
        borderTopWidth: 1
    },
    form: {
        gap: spacingY._30,
        marginTop: spacingY._15,
    },
    avatarContainer: {
        position: 'relative',
        alignSelf: 'center'
    },
    avatar: {
        alignSelf: 'center',
        backgroundColor: colors.neutral300,
        height: verticalScale(135),
        width: verticalScale(135),
        borderRadius: 200,
        borderWidth: 1,
        borderColor: colors.neutral500,
    },
    editIcon: {
        position: 'absolute',
        bottom: spacingY._5,
        right: spacingY._7,
        borderRadius: 100,
        backgroundColor: colors.neutral100,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4,
        padding: spacingY._7
    },
    inputContainer: {
        gap: spacingY._10,
    },
})