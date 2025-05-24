import { StyleSheet } from 'react-native';

export const languageEditStyles = StyleSheet.create({
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
  section: {
    marginBottom: 20,
    marginHorizontal: 19,
  },
  sectionTitle: {
    color: '#384050',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#D2D5DB',
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
  optionButtonSelected: {
    borderColor: '#1CBFDC',
    backgroundColor: '#E6F8FB',
  },
  optionText: {
    color: '#030712',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  optionIcon: {
    width: 22,
    height: 22,
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: '#1CBFDC',
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 25,
    marginHorizontal: 28,
  },
  saveButtonDisabled: {
    backgroundColor: '#A0D8E3',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    marginBottom: 11,
  },
}); 