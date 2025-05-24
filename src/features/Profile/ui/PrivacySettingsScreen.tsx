import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { languageEditStyles } from '@shared/styles/languageEdit.styles';

const PRIVACY_ITEMS = [
  {
    key: 'department',
    label: '내 학과',
    icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/pz4ka2af_expires_30_days.png',
  },
  {
    key: 'groupHistory',
    label: '내 모임 히스토리',
    icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/us2rx3nc_expires_30_days.png',
  },
  {
    key: 'likes',
    label: '내 좋아요 목록',
    icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/3pzfk5gi_expires_30_days.png',
  },
  {
    key: 'guestbook',
    label: '방명록',
    icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/ptz6r7sk_expires_30_days.png',
  },
];

const PrivacySettingsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [privacy, setPrivacy] = useState({
    department: true,
    groupHistory: true,
    likes: true,
    guestbook: true,
  });

  const handleToggle = (key) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', paddingVertical: 16, paddingHorizontal: 17, marginBottom: 32 }}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/puef0e3o_expires_30_days.png' }}
            resizeMode={'stretch'}
            style={{ width: 24, height: 24 }}
          />
          <Text style={{ color: '#303030', fontSize: 16, fontWeight: 'bold' }}>{t('profile.privacySettings')}</Text>
          <View style={{ width: 24, height: 24 }} />
        </View>
        <Text style={{ color: '#303030', fontSize: 20, fontWeight: 'bold', marginBottom: 28, marginLeft: 19 }}>{t('profile.privacySettings')}</Text>
        {PRIVACY_ITEMS.map((item) => (
          <View key={item.key} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, marginHorizontal: 19 }}>
            <Text style={{ color: '#303030', fontSize: 16 }}>{item.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.icon }} resizeMode={'stretch'} style={{ width: 44, height: 24, marginRight: 8 }} />
              <Switch
                value={privacy[item.key]}
                onValueChange={() => handleToggle(item.key)}
                trackColor={{ false: '#D2D5DB', true: '#1CBFDC' }}
                thumbColor={privacy[item.key] ? '#1CBFDC' : '#f4f3f4'}
              />
            </View>
          </View>
        ))}
        <View style={{ marginBottom: 11 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacySettingsScreen; 