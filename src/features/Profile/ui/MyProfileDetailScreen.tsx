// src/features/Profile/ui/MyProfileDetailScreen.tsx
import React from 'react';
import { SafeAreaView, View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@shared/ui/typography/Text';
import { useTranslation } from 'react-i18next';

import { useProfile } from '../model/useProfile';
import { styles } from './styles/MyProfileDetail.styles';

export const MyProfileDetailScreen = ({ navigation }) => {
  const { profile } = useProfile();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 32, marginBottom: 16 }}>
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.title}>{t('profile.settingTitle')}</Text>
        </View>
        <Image
          source={profile.avatar}
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 12 }}
        />
        <Text style={styles.nickname}>{profile.nickname}</Text>
      </View>
      <View style={{ backgroundColor: '#F9FAFB', height: 16, marginBottom: 24 }} />
      <View style={{ marginHorizontal: 24 }}>
        <Text style={styles.sectionTitle}>{t('profile.basicInfo')}</Text>
        <Text style={styles.label}>{t('profile.name')}</Text>
        <Text style={styles.value}>{profile.name}</Text>
        <Text style={styles.label}>{t('profile.nickname')}</Text>
        <Text style={styles.value}>{profile.nickname}</Text>
        <Text style={styles.label}>{t('profile.birth')}</Text>
        <Text style={styles.value}>{profile.birth}</Text>
        <Text style={styles.label}>{t('profile.gender')}</Text>
        <Text style={styles.value}>{profile.gender}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.label}>{t('profile.systemLanguage')}</Text>
          {/* 수정 버튼 추가 */}
          <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
            <Text style={{ color: '#1CBFDC', marginLeft: 8 }}>{t('profile.edit')}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{profile.language}</Text>

        <View style={{ height: 16 }} />
        <Text style={styles.sectionTitle}>{t('profile.schoolInfo')}</Text>
        <Text style={styles.label}>{t('profile.school')}</Text>
        <Text style={styles.value}>{profile.school}</Text>
        <Text style={styles.label}>{t('profile.major')}</Text>
        <Text style={styles.value}>{profile.major}</Text>
        <Text style={styles.label}>{t('profile.email')}</Text>
        <Text style={styles.value}>{profile.email}</Text>
      </View>
    </SafeAreaView>
  );
};