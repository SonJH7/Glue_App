import React from 'react';
import { SafeAreaView, View } from 'react-native';
import CustomHeader from '@widgets/header/ui/CustomHeader';
import { styles } from './styles/MyActiveGroupsScreen.styles';

export const MyActiveGroupsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <View style={styles.scrollView}>
      </View>
    </SafeAreaView>
  );
}; 