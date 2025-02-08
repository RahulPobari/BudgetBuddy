// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Stack } from 'expo-router'
// import { AuthProvider } from '@/contexts/authContext';

// const StackLayout = () => {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>

//       <Stack.Screen name='(modals)/profileModal' options={{
//         presentation: 'modal'
//       }} />
//       <Stack.Screen name='(modals)/aboutModal' options={{
//         presentation: 'modal'
//       }} />
//       <Stack.Screen name='(modals)/SettingsModal' options={{
//         presentation: 'modal'
//       }} />
//       <Stack.Screen name='(modals)/walletModal' options={{
//         presentation: 'modal'
//       }} />
//       <Stack.Screen name='(modals)/TransactionModal' options={{
//         presentation: 'modal'
//       }} />

//     </Stack>
//   )
// };
// export default function RootLayout() {
//   return (
//     <AuthProvider>
//       <StackLayout />
//     </AuthProvider>
//   )
// }

// const styles = StyleSheet.create({});



import { Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '@/contexts/authContext';

const StackLayout = () => {
  return (
    <View style={styles.container}> 
      <Stack
        screenOptions={{
          headerShown: false,
          presentation: Platform.OS === 'ios' ? 'modal' : 'transparentModal',
          animation: Platform.OS === 'ios' ? 'default' : 'none',
          contentStyle: { backgroundColor: '#404040' },
        }}
      >
        <Stack.Screen name='(modals)/profileModal' />
        <Stack.Screen name='(modals)/aboutModal' />
        <Stack.Screen name='(modals)/SettingsModal' />
        <Stack.Screen name='(modals)/walletModal' />
        <Stack.Screen name='(modals)/TransactionModal' />
      </Stack>
    </View>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <View style={styles.container}> 
        <StackLayout />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
  },
});
