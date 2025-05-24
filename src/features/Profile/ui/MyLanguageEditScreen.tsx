import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { useProfile } from '../model/useProfile';
import { styles } from './styles/MyLanguageEdit.styles';
import { LanguageOption } from './components/LanguageOption';

const LANGUAGE_LIST = [
  { label: '한국어', value: 'ko' },
  { label: '영어', value: 'en' },
  { label: '일본어', value: 'ja' },
  { label: '중국어', value: 'zh' },
  { label: '독일어', value: 'de' },
  { label: '프랑스어', value: 'fr' },
  { label: '스페인어', value: 'es' },
];

const LEVEL_LIST = [
  { label: '초급', value: 'beginner' },
  { label: '기초', value: 'elementary' },
  { label: '중급', value: 'intermediate' },
  { label: '고급', value: 'advanced' },
  { label: '능숙', value: 'proficient' },
];

const MyLanguageEditScreen = ({ navigation, route }) => {
  const { profile, updateProfile } = useProfile();
  const [selectedLanguage, setSelectedLanguage] = useState(profile?.language || 'ko');
  const [selectedLevel, setSelectedLevel] = useState(profile?.languageLevel || 'proficient');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSave = async () => {
    try {
      setIsUpdating(true);
      await updateProfile({
        language: selectedLanguage,
        languageLevel: selectedLevel,
      });
      navigation.goBack();
    } catch (error) {
      console.error('언어 설정 업데이트 실패:', error);
      alert('언어 설정 업데이트에 실패했습니다.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/s7gi05p9_expires_30_days.png"}}
            resizeMode="stretch"
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>나의 언어</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>나의 언어</Text>
          <View style={styles.optionContainer}>
            {LANGUAGE_LIST.map(lang => (
              <LanguageOption
                key={lang.value}
                label={lang.label}
                value={lang.value}
                isSelected={selectedLanguage === lang.value}
                onSelect={setSelectedLanguage}
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>언어 수준</Text>
          <View style={styles.optionContainer}>
            {LEVEL_LIST.map(level => (
              <LanguageOption
                key={level.value}
                label={level.label}
                value={level.value}
                isSelected={selectedLevel === level.value}
                onSelect={setSelectedLevel}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.saveButton(isUpdating)}
          onPress={handleSave}
          disabled={isUpdating}
        >
          <Text style={styles.saveButtonText}>
            {isUpdating ? "저장 중..." : "수정하기"}
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyLanguageEditScreen;
