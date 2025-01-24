import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { colors } from '@/constants/theme'
import { StatusBar } from 'expo-status-bar';

const index = () => {
  // const router = useRouter();
  // useEffect(()=>{
  //   setTimeout(() => {
  //     router.push('/(auth)/welcome');
  //   }, 2000);
  // },[]);

  return (
    <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require("../assets/images/BudgetBuddy_2.png")}
        />
        <StatusBar style='auto' />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral900
  },
  logo: {
    height: "30%",
    aspectRatio: 1,
  }
})