// src/features/Profile/ui/styles/MyInfoItem.styles.ts
import { StyleSheet } from 'react-native';
import { semanticColors, typography, spacing } from '@app/styles';

export const styles = StyleSheet.create({
  item: {
    height: 37,
    justifyContent: 'left',
    borderBottomWidth: 0,
    borderBottomColor: '#FFFFFF',
    //paddingHorizontal: spacing.ms,
    marginVertical: 1,
  },
  label: { ...typography.body1, color: semanticColors.text },
});