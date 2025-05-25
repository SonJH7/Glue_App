import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 17,
    marginBottom: 32,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: '#303030',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerPlaceholder: {
    width: 24,
    height: 24,
  },
  sectionTitle: {
    color: '#303030',
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
    color: '#303030',
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