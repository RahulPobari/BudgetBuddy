import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import { scale, verticalScale } from '@/utils/styling'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import Header from '@/components/Header'
import BackButton from '@/components/BackButton'
import { Image } from 'expo-image'
import { getProfileImage } from '@/services/imageService'
import * as Icons from 'phosphor-react-native'
import Input from '@/components/input'
import { TransactionType, UserDataType, WalletType } from '@/types'
import Button from '@/components/Button'
import { useAuth } from '@/contexts/authContext'
import { updateUser } from '@/services/userService'
import { useLocalSearchParams, useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import ImageUpload from '@/components/imageUpload'
import { createOrUpdateWallet, deleteWallet } from '@/services/walletService'
import { Dropdown } from 'react-native-element-dropdown';
import { transactionTypes } from '@/constants/data'




const TransactionModal = () => {



    const { user, updateUserData } = useAuth();
    const router = useRouter();

    const [transaction, setTransaction] = useState<TransactionType>({
        type: 'expense',
        amount: 0,
        description: "",
        category: "",
        date: new Date(),
        walletId: "",
        image: null,
    });

    const [loading, setloading] = useState(false);

    const oldTransaction: { name: string, image: string, id: string } = useLocalSearchParams();

    // useEffect(() => {
    //     if (oldTransaction?.id) {
    //         setTransaction({
    //             name: oldTransaction?.name,
    //             image: oldTransaction?.image
    //         });
    //     }
    // }, []);

    const onSubmit = async () => {
        // let { name, image } = transaction;
        // if (!name.trim() || !image) {
        //     Alert.alert("Wallet", "Please fill all the fileds");
        //     return;
        // }

        // const data: WalletType = {
        //     name,
        //     image,
        //     uid: user?.uid
        // };

        // if (oldTransaction?.id) data.id = oldTransaction?.id;

        // setloading(true);
        // const res = await createOrUpdateWallet(data);
        // setloading(false);

        // // console.log('result: ', res);

        // if (res.success) {
        //     router.back();
        // }
        // else {
        //     Alert.alert("Wallet", "Failed to Upload Wallet Icon");
        // }
    }

    const onDelete = async () => {

        if (!oldTransaction?.id) return;
        setloading(true);
        const res = await deleteWallet(oldTransaction?.id);
        setloading(false);
        if (res.success) {
            router.back();
        }
        else {
            Alert.alert("Wallet", "Failed to Delete Wallet Icon");
        }
    };

    const showDeleteAlert = () => {
        Alert.alert("Delete Wallet", "Are you sure you want to delete this wallet? \nThis action will delete all the transcation related to this wallet", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            }
            , {
                text: "Delete",
                onPress: () => onDelete(),
                style: "destructive"
            }
        ]);
    }

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <ScreenWrapper style={{ paddingTop: 10 }}>
            <View style={styles.container}>
                <Header
                    title={oldTransaction?.id ? "Update Transaction" : "New Transaction"}
                    leftIcon={<BackButton />}
                    style={{ marginBottom: spacingY._10 }}
                />

                {/* FORM */}
                <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>

                    <View style={styles.inputContainer}>
                        <Typo color={colors.neutral200}>Type</Typo>

                        <Dropdown
                            style={styles.dropdownContainer}
                            activeColor={colors.neutral700}
                            // placeholderStyle={styles.dropdownPlaceholder}
                            selectedTextStyle={styles.dropdownSelectedTex}
                            iconStyle={styles.dropdownIcon}
                            data={transactionTypes}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            itemTextStyle={styles.dropdownItemText}
                            itemContainerStyle={styles.dropdownItemContainer}
                            containerStyle={styles.dropdownListContainer}
                            // placeholder={!isFocus ? 'Select item' : '...'}
                            value={transaction.type}

                            onChange={item => {
                                setTransaction({ ...transaction, type: item.value })
                            }}

                        />


                    </View>
                    <View style={styles.inputContainer}>
                        <Typo color={colors.neutral200}>transaction Icon</Typo>

                        <ImageUpload
                            file={transaction.image}
                            onSelect={(file) => setTransaction({ ...transaction, image: file })}
                            onClear={() => setTransaction({ ...transaction, image: null })}
                            placeholder='Upload Image'
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                {
                    oldTransaction?.id && !loading && (
                        <Button
                            onPress={showDeleteAlert}
                            style={{
                                backgroundColor: colors.rose,
                                paddingHorizontal: spacingX._15,
                            }}>
                            <Icons.Trash
                                color={colors.white}
                                size={verticalScale(24)}
                                weight='bold'
                            />
                        </Button>
                    )
                }
                <Button onPress={onSubmit} style={{ flex: 1 }} loading={loading}>
                    <Typo color={colors.black} fontWeight={'700'}>
                        {oldTransaction?.id ? "Update Wallet" : "Add Wallet"}
                    </Typo>
                </Button>
            </View>
        </ScreenWrapper>
    )
}

export default TransactionModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacingY._20
    },
    form: {
        gap: spacingY._20,
        paddingVertical: spacingY._15,
        paddingBottom: spacingY._40
    },
    footer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: spacingX._20,
        gap: scale(12),
        paddingTop: spacingY._15,
        borderTopColor: colors.neutral700,
        marginBottom: spacingY._5,
        borderTopWidth: 1,
    },
    inputContainer: {
        gap: spacingY._10,
    },
    iosDropDown: {
        flexDirection: 'row',
        height: verticalScale(54),
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: verticalScale(14),
        borderWidth: 1,
        color: colors.white,
        borderColor: colors.neutral300,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._15
    },
    androidDropDown: {
        // flexDirection: 'row',
        height: verticalScale(54),
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: verticalScale(14),
        borderWidth: 1,
        color: colors.white,
        borderColor: colors.neutral300,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        // paddingHorizontal: spacingX._15
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacingX._5,
    },
    dateInput: {
        flexDirection: 'row',
        height: verticalScale(54),
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.neutral300,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._15
    },
    datePickerButton: {
        backgroundColor: colors.neutral700,
        alignSelf: 'flex-end',
        padding: spacingY._7,
        marginRight: spacingY._7,
        paddingHorizontal: spacingY._15,
        borderRadius: radius._10
    },
    dropdownContainer: {
        height: verticalScale(54),
        borderWidth: 1,
        borderColor: colors.neutral300,
        paddingHorizontal: spacingX._15,
        borderRadius: radius._15,
        borderCurve: 'continuous'
    },
    dropdownItemText: {
        color: colors.white
    },
    dropdownSelectedTex: {
        color: colors.white,
        fontSize: verticalScale(14),
    },
    dropdownListContainer: {
        backgroundColor: colors.neutral900,
        borderRadius: radius._15,
        borderCurve: 'continuous',
        paddingVertical: spacingY._7,
        top: 5,
        borderColor: colors.neutral500,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 5,
    },
    dropdownPlaceholder: {
        color: colors.white
    },
    dropdownItemContainer: {
        borderRadius: radius._15,
        marginHorizontal: spacingX._7,
    },
    dropdownIcon: {
        height: verticalScale(30),
        tintColor: colors.neutral300,
    },
})