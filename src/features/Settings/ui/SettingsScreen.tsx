import React from 'react';
import { SafeAreaView, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@shared/ui/typography/Text';
import { useTranslation } from 'react-i18next';
import { styles } from './styles/SettingsScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();

  const handleContactUs = () => {
    navigation.navigate('ContactUs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/ta5xgxiy_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={styles.image}
          />
          <Text style={styles.text}>{t("settings.title")}</Text>
          <View style={styles.box} />
        </View>
        <Text style={styles.text2}>{t("settings.guide")}</Text>
        <View style={styles.row2}>
          <Text style={styles.text3}>{t("settings.appVersion")}</Text>
          <Text style={styles.text4}>1.0.0</Text>
        </View>
        <TouchableOpacity onPress={handleContactUs}>
          <Text style={styles.text5}>{t("settings.contact")}</Text>
        </TouchableOpacity>
        <Text style={styles.text5}>{t("settings.notice")}</Text>
        <Text style={styles.text6}>{t("settings.terms")}</Text>
        <Text style={styles.text6}>{t("settings.privacy")}</Text>
        <Text style={styles.text7}>{t("settings.openSource")}</Text>
        <View style={styles.box2} />
        <Text style={styles.text2}>{t("settings.etc")}</Text>
        <Text style={styles.text5}>{t("settings.withdraw")}</Text>
        <Text style={styles.text8}>{t("settings.logout")}</Text>
        <View style={styles.box3} />
      </ScrollView>
    </SafeAreaView>
  );
}; 