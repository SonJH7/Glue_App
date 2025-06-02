// src/features/Profile/ui/GroupHistoryScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text } from '@shared/ui/typography/Text';
import CustomHeader from '@widgets/header/ui/CustomHeader';
import { styles } from './styles/GroupHistoryScreen.styles';
import { useTranslation } from 'react-i18next';

export const GroupHistoryScreen = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'host' | 'participant'>('host');

  const renderHostedGroups = () => (
    <>
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/621rrw02_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <View style={styles.box4} />
        <View style={styles.box5} />
        <View style={styles.box4} />
      </View>
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/500dpgaz_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.box6} />
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/yrw0e5y5_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <View style={styles.box4} />
        <View style={styles.box5} />
        <View style={styles.box4} />
      </View>
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/g0unbx7s_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.column3}>
        <View style={styles.box4} />
        <View style={styles.box5} />
        <View style={styles.box4} />
      </View>
    </>
  );

  const renderParticipatedGroups = () => (
    <>
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/auoyic2o_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box3} />
      </View>
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/my3kq20z_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.box5} />
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/uyyf5w2c_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.column2}>
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box3} />
      </View>
      <View style={styles.row3}>
        <Image
          source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/q439g9mz_expires_30_days.png"}}
          resizeMode="stretch"
          style={styles.image2}
        />
        <View style={styles.column}>
          <View style={styles.view}>
            <Text variant="body2" color="gray600">{t('group.categories.study')}</Text>
          </View>
          <Text variant="body1" weight="medium" style={styles.text5}>{t('group.sampleGroupName', 'Maratang Warriors')}</Text>
        </View>
      </View>
      <View style={styles.column3}>
        <View style={styles.box3} />
        <View style={styles.box4} />
        <View style={styles.box3} />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <ScrollView style={styles.scrollView}>
        <View style={styles.box} />
        <View style={styles.row}>
          <Image
            source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/bofgua2q_expires_30_days.png"}}
            resizeMode="stretch"
            style={styles.image}
          />
          <Text variant="h3" weight="semiBold" style={styles.text}>{t('profile.myGroupsHistory')}</Text>
          <View style={styles.box2} />
        </View>
        <View style={styles.row2}>
          <TouchableOpacity onPress={() => setActiveTab('host')}>
            <Text 
              variant="body1" 
              weight="medium" 
              color={activeTab === 'host' ? 'primary' : 'gray600'}
              style={styles.text2}
            >
              {t('groupHistory.hostTab')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('participant')}>
            <Text 
              variant="body1" 
              weight="medium" 
              color={activeTab === 'participant' ? 'primary' : 'gray600'}
              style={styles.text3}
            >
              {t('groupHistory.guestTab')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.box3, activeTab === 'participant' && styles.box3Right]} />
        
        {activeTab === 'host' ? renderHostedGroups() : renderParticipatedGroups()}

        <View style={styles.view2}>
          <View style={styles.box7} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};