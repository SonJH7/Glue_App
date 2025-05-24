import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/MyLanguageEdit.styles';

interface LanguageOptionProps {
  label: string;
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

export const LanguageOption: React.FC<LanguageOptionProps> = ({
  label,
  value,
  isSelected,
  onSelect,
}) => (
  <TouchableOpacity
    style={styles.optionButton(isSelected)}
    onPress={() => onSelect(value)}
  >
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
); 