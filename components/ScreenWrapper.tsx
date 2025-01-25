// import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { ScreenWrapperProps } from '@/types'
// import { colors } from '@/constants/theme'


// const {height} = Dimensions.get('window')

// const ScreenWrapper = ({style, children}: ScreenWrapperProps) => {
//     let paddingTop = Platform.OS == 'ios' ? height * 0.06 : 50;
//   return (
//     <View style={[{
//         paddingTop,
//         flex: 1,
//         backgroundColor: colors.neutral900,
//     },style
//     ]}>
//       <StatusBar barStyle="light-content" />
//     {children}
//     </View>
//   )
// }

// export default ScreenWrapper

// const styles = StyleSheet.create({})


import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenWrapperProps } from '@/types';
import { colors } from '@/constants/theme';

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.neutral900} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
});

export default ScreenWrapper;
