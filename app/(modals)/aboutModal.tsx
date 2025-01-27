import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import BackButton from '@/components/BackButton';
import { spacingY } from '@/constants/theme';
import Header from '@/components/Header';
import * as Icons from 'phosphor-react-native';

const aboutModal = () => {
  const openLink = (url: any) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <ScreenWrapper style={{ paddingTop: 10, backgroundColor: '#171717', paddingBottom: 25 }}>
      <View style={styles.container}>
        <Header title="About App" leftIcon={<BackButton />} style={{ marginBottom: spacingY._10 }} />

        <Text style={styles.appDescription}>
          <Text style={styles.bold}>BudgetBuddy – Your Ultimate Budgeting & Spending App 💸{"\n"}</Text>
          Welcome to BudgetBuddy, your smart and reliable companion for managing expenses efficiently. 
          Built using React Native and Expo, BudgetBuddy leverages Firebase for a seamless and secure experience. 
          Track your expenses, set budgets, and stay financially informed – all in one app!
        </Text>

        <View style={styles.developerSection}>
          <Text style={styles.sectionTitle}>About the Developer</Text>
          <Text style={styles.developerName}>Created by: Rahul Pobari</Text>

          <View style={styles.linksContainer}>
            <TouchableOpacity style={[styles.linkItem, { backgroundColor: '#333' }]} onPress={() => openLink('https://github.com/RahulPobari')}>
              <Icons.GithubLogo size={24} color="#fff" style={styles.icon} />
              <Text style={[styles.linkText, { color: '#fff' }]}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.linkItem, { backgroundColor: '#0e76a8' }]} onPress={() => openLink('https://www.linkedin.com/in/rahul-pobari-388a151ba/')}>            
              <Icons.LinkedinLogo size={24} color="#fff" style={styles.icon} />
              <Text style={[styles.linkText, { color: '#fff' }]}>LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.linkItem, { backgroundColor: '#E1306C' }]} onPress={() => openLink('https://www.instagram.com/rahul_pobari1278/')}>            
              <Icons.InstagramLogo size={24} color="#fff" style={styles.icon} />
              <Text style={[styles.linkText, { color: '#fff' }]}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default aboutModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacingY._20,
  },
  appDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ddd',
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  developerSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  developerName: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  linkText: {
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    marginRight: 5,
  },
});