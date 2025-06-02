import { StyleSheet } from 'react-native';
import { colors, semanticColors } from 'src/app/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semanticColors.mainbackground,
  },
  scrollView: {
    flex: 1,
    backgroundColor: semanticColors.mainbackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: semanticColors.mainbackground,
    paddingVertical: 16,
    paddingHorizontal: 17,
    marginBottom: 32,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: semanticColors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerPlaceholder: {
    width: 24,
    height: 24,
  },
  sectionTitle: {
    color: semanticColors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 28,
    marginLeft: 19,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
    marginHorizontal: 19,
  },
  itemLabel: {
    color: semanticColors.text,
    fontSize: 16,
  },
  itemIcon: {
    width: 44,
    height: 24,
    marginRight: 8,
  },
  bottomSpacer: {
    marginBottom: 11,
  },
}); 