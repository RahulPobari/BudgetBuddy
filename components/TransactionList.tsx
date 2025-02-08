import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TransactionItemProps, TransactionListType } from '@/types'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Typo from './Typo'
import { FlashList } from "@shopify/flash-list";
import Loading from './Loading'


const TransactionList = ({
    data,
    title,
    loading,
    emptyListMessage
}: TransactionListType) => {

    const handleClick = () => {
        //todo: open transaction details
    }

    return (
        <View style={styles.container}>
            {
                title && (
                    <Typo size={20} fontWeight={'500'}>
                        {title}
                    </Typo>
                )}

            <View style={styles.list}>
                <FlashList
                    data={data}
                    renderItem={({ item, index }) => (
                        <TransactionItem item={item} index={index} handleClick={handleClick} />
                    )}
                    estimatedItemSize={60}
                />
            </View>

            {
                !loading && data.length == 0 && (
                    <Typo size={15} color={colors.neutral400} style={{ textAlign: 'center', marginTop: spacingY._15 }}>
                        {emptyListMessage}
                    </Typo>
                )
            }

            {
                loading && (
                    <View style={{ top: verticalScale(100) }}>
                        <Loading />
                    </View>
                )
            }


        </View>
    );
};

const TransactionItem = ({
    item, index, handleClick
}: TransactionItemProps) => {
    return <View>
        <Typo>Transcation Item</Typo>
    </View>
}


export default TransactionList

const styles = StyleSheet.create({
    container: {
        gap: spacingY._17
    },
    list: {
        minHeight: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacingX._12,
        marginBottom: spacingY._12,


        backgroundColor: colors.neutral800,
        padding: spacingY._10,
        paddingHorizontal: spacingY._10,
        borderRadius: radius._17,
    },
    icon: {
        height: verticalScale(44),
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius._12,
        borderCurve: 'continuous',
    },
    categoryDes: {
        flex: 1,
        gap: 2.5,
    },
    amountData: {
        alignItems: 'flex-end',
        gap: 3,
    }
})