import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text } from '@shared/ui/typography/Text';
import { useTranslation } from 'react-i18next';
import { styles } from './styles/SettingsScreen.styles';

export const SettingsScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
          {/* 언어 설정 컴포넌트 추가 예정 */}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.notification')}</Text>
          {/* 알림 설정 컴포넌트 추가 예정 */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.account')}</Text>
          {/* 계정 설정 컴포넌트 추가 예정 */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.privacy')}</Text>
          {/* 개인정보 설정 컴포넌트 추가 예정 */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.help')}</Text>
          {/* 도움말 컴포넌트 추가 예정 */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.about')}</Text>
          {/* 앱 정보 컴포넌트 추가 예정 */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 