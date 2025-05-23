import { StyleSheet } from 'react-native';
import { semanticColors, spacing } from '@app/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: spacing.md,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: semanticColors.text,
    marginBottom: spacing.md,
  },
}); 