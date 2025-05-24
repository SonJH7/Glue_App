import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Text } from '@shared/ui/typography/Text';
import { styles } from '../styles/ExchLanguageEdit.styles';

interface Option {
  value: string;
  label: { ko: string; en: string };
}

interface LanguageLevelEditScreenProps {
  headerIcon: string;
  headerTitle: string;
  languageList: Option[];
  levelList: Option[];
  selectedLanguage: string;
  selectedLevel: string;
  onSelectLanguage: (value: string) => void;
  onSelectLevel: (value: string) => void;
  onSave: () => void;
  isSaving: boolean;
  t: (key: string) => string;
  getLabel: (item: Option) => string;
}

export const LanguageLevelEditScreen: React.FC<LanguageLevelEditScreenProps> = ({
  headerIcon,
  headerTitle,
  languageList,
  levelList,
  selectedLanguage,
  selectedLevel,
  onSelectLanguage,
  onSelectLevel,
  onSave,
  isSaving,
  t,
  getLabel,
}) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Image source={{ uri: headerIcon }} resizeMode="stretch" style={styles.headerIcon} />
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{headerTitle}</Text>
        <View style={styles.optionContainer}>
          {languageList.map((lang) => (
            <TouchableOpacity
              key={lang.value}
              style={[
                styles.optionButton,
                selectedLanguage === lang.value && { borderColor: '#1CBFDC' },
              ]}
              onPress={() => onSelectLanguage(lang.value)}
            >
              <Text style={styles.optionText}>{getLabel(lang)}</Text>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/qbqi618o_expires_30_days.png" }}
                resizeMode="stretch"
                style={styles.optionIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('profile.languageLevel')}</Text>
        <View style={styles.optionContainer}>
          {levelList.map((level) => (
            <TouchableOpacity
              key={level.value}
              style={[
                styles.optionButton,
                selectedLevel === level.value && { borderColor: '#1CBFDC' },
              ]}
              onPress={() => onSelectLevel(level.value)}
            >
              <Text style={styles.optionText}>{getLabel(level)}</Text>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/pulh7rzg_expires_30_days.png" }}
                resizeMode="stretch"
                style={styles.optionIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={onSave} disabled={isSaving}>
        <Text style={styles.saveButtonText}>
          {isSaving ? t('common.saving') : t('profile.editButton')}
        </Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  </SafeAreaView>
); 