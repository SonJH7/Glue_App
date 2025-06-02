import { StyleSheet } from 'react-native';
import { semanticColors, colors } from 'src/app/styles/colors';
import { spacing } from '@app/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semanticColors.mainbackground,
  },
  scrollView: {
    flex: 1,
    backgroundColor: semanticColors.mainbackground,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: semanticColors.mainbackground,
    paddingVertical: 16,
    paddingHorizontal: 17,
    marginBottom: 32,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
    marginHorizontal: 19,
  },
  image: {
    width: 24,
    height: 24,
  },
  box: {
    width: 24,
    height: 24,
  },
  box2: {
    height: 1,
    backgroundColor: colors.antiFlashWhite,
    marginBottom: 35,
    marginHorizontal: 19,
  },
  box3: {
    marginBottom: 11,
  },
  text: {
    color: semanticColors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    color: semanticColors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 28,
    marginLeft: 19,
  },
  text3: {
    color: semanticColors.text,
    fontSize: 16,
    marginRight: 4,
    flex: 1,
  },
  text4: {
    color: semanticColors.text,
    fontSize: 16,
    textAlign: 'right',
    flex: 1,
  },
  text5: {
    color: semanticColors.text,
    fontSize: 16,
    marginBottom: 23,
    marginLeft: 19,
  },
  text6: {
    color: semanticColors.text,
    fontSize: 16,
    marginBottom: 22,
    marginLeft: 19,
  },
  text7: {
    color: semanticColors.text,
    fontSize: 16,
    marginBottom: 36,
    marginLeft: 19,
  },
  text8: {
    color: semanticColors.text,
    fontSize: 16,
    marginBottom: 203,
    marginLeft: 19,
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