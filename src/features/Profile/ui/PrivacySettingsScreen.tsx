import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui/typography/Text';
import { styles } from './styles/PrivacySettingsScreen.styles';

const PrivacySettingsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const PRIVACY_ITEMS = [
    {
      key: 'department',
      label: t('privacy.department'),
      icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/pz4ka2af_expires_30_days.png',
    },
    {
      key: 'groupHistory',
      label: t('privacy.groupHistory'),
      icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/us2rx3nc_expires_30_days.png',
    },
    {
      key: 'likes',
      label: t('privacy.likes'),
      icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/3pzfk5gi_expires_30_days.png',
    },
    {
      key: 'guestbook',
      label: t('privacy.guestbook'),
      icon: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/ptz6r7sk_expires_30_days.png',
    },
  ];

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/puef0e3o_expires_30_days.png' }}
            resizeMode={'stretch'}
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle} weight="bold">
            {t('profile.privacySettings')}
          </Text>
          <View style={styles.headerPlaceholder} />
        </View>
        <Text style={styles.sectionTitle} weight="bold">
          {t('privacy.visibility')}
        </Text>
        {PRIVACY_ITEMS.map((item) => (
          <View key={item.key} style={styles.itemRow}>
            <Text style={styles.itemLabel}>{item.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: item.icon }} resizeMode={'stretch'} style={styles.itemIcon} />
              <Switch
                value={privacy[item.key]}
                onValueChange={() => handleToggle(item.key)}
                trackColor={{ false: '#D2D5DB', true: '#1CBFDC' }}
                thumbColor={privacy[item.key] ? '#1CBFDC' : '#f4f3f4'}
              />
            </View>
          </View>
        ))}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacySettingsScreen; 