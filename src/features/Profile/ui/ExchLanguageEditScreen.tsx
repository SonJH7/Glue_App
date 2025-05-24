import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../model/useProfile';
import { LANGUAGE_LIST, LEVEL_LIST } from '@shared/constants/language';
import { languageEditStyles } from '@shared/styles/languageEdit.styles';
import { LanguageLevelEditScreen } from './components/LanguageLevelEditScreen';

const ExchLanguageEditScreen = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const { profile, updateProfile } = useProfile();
  const [selectedLanguage, setSelectedLanguage] = useState(profile?.exchangeLanguage || 'en');
  const [selectedLevel, setSelectedLevel] = useState(profile?.exchangeLanguageLevel || 'beginner');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await updateProfile({
        exchangeLanguage: selectedLanguage,
        exchangeLanguageLevel: selectedLevel,
      });
      navigation.goBack();
    } catch (error) {
      alert(t('profile.languageUpdateError'));
    } finally {
      setIsSaving(false);
    }
  };

  const getLabel = (item) => i18n.language === 'ko' ? item.label.ko : item.label.en;

  return (
    <LanguageLevelEditScreen
      headerIcon={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/yggzpo48_expires_30_days.png"}
      headerTitle={t('profile.exchangeLanguage')}
      languageList={LANGUAGE_LIST}
      levelList={LEVEL_LIST}
      selectedLanguage={selectedLanguage}
      selectedLevel={selectedLevel}
      onSelectLanguage={setSelectedLanguage}
      onSelectLevel={setSelectedLevel}
      onSave={handleSave}
      isSaving={isSaving}
      t={t}
      getLabel={getLabel}
    />
  );
};

export default ExchLanguageEditScreen; 