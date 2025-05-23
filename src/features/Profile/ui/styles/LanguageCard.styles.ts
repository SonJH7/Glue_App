// src/features/Profile/ui/styles/LanguageCard.styles.ts
import { StyleSheet } from 'react-native';
import { semanticColors, typography, spacing } from '@app/styles';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: spacing.md,
    marginRight: spacing.md,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: { ...typography.subtitle2, color: semanticColors.text, },
  editText: {
    ...typography.editbutton,
    fontWeight: '600',             
    color:'#1CBFDC',
  },
  editButton: {
    width: 43,
    height: 22,
    borderRadius: 12,                  
    backgroundColor: semanticColors.secondary + '30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { flexDirection: 'row', justifyContent: 'space-between', marginTop: spacing.sm, marginBottom: spacing.sm },
  label: { ...typography.body2, color: semanticColors.comparing },
  value: { ...typography.body1, color: semanticColors.text },
});