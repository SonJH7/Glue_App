// src/features/Profile/ui/components/LanguageCard.tsx
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@shared/ui/typography/Text';
import {useTranslation} from 'react-i18next';
import { useTheme } from '@app/providers/theme';

import { styles } from '../styles/LanguageCard.styles';

interface LanguageCardProps {
  title: string;
  language?: string;
  level?: string;
  onEdit: () => void;
}

export const LanguageCard: React.FC<LanguageCardProps> = ({ title, language, level, onEdit }) => {
  const { t } = useTranslation();
    const { theme } = useTheme();

  return(
  <View style={[styles.card, { backgroundColor: "#FFFFFF" }]}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={onEdit}
      >
        <Text style={styles.editText}>
          {t('profile.edit')}
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.body}>
      <Text style={styles.label}>{t('settings.language')}</Text>
      <Text style={styles.value}>{language}</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.label}>{t('profile.level')}</Text>
      <Text style={styles.value}>{level}</Text>
    </View>
  </View>
  );
};