import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
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
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: (isSelected: boolean) => ({
    padding: 10,
    margin: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: isSelected ? '#1CBFDC' : '#D2D5DB',
    backgroundColor: isSelected ? '#E6F8FB' : '#FFF',
  }),
  optionText: {
    color: '#030712',
    fontWeight: 'bold',
  },
  saveButton: (isUpdating: boolean) => ({
    alignItems: 'center',
    backgroundColor: isUpdating ? '#A0D8E3' : '#1CBFDC',
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 25,
    marginHorizontal: 28,
  }),
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    marginBottom: 11,
  },
}); 