import {StyleSheet} from 'react-native';
import { colors, semanticColors } from 'src/app/styles/colors';

export const userProfileDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: semanticColors.mainbackground,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: semanticColors.border,
  },

  backButton: {
    // padding: 8,
  },

  backButtonText: {
    fontSize: 18,
    color: semanticColors.text,
    fontWeight: '600',
  },

  scrollContainer: {
    flex: 1,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  errorText: {
    fontSize: 16,
    color: semanticColors.error,
    textAlign: 'center',
  },

  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: semanticColors.mainbackground,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.antiFlashWhite,
  },

  defaultAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.ghostWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightSilver,
  },

  avatarText: {
    fontSize: 40,
  },

  basicInfoSection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: semanticColors.text,
    textAlign: 'center',
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    color: semanticColors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },

  infoRow: {
    marginBottom: 12,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {
    fontSize: 16,
    marginRight: 12,
  },

  infoText: {
    fontSize: 16,
    color: semanticColors.text,
    marginLeft: 12,
  },

  languageSection: {
    backgroundColor: colors.ghostWhite,
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: semanticColors.text,
    marginBottom: 16,
  },

  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  languageColumn: {
    flex: 1,
    marginHorizontal: 8,
  },

  languageItem: {
    marginBottom: 16,
  },

  languageLabel: {
    fontSize: 14,
    color: semanticColors.textSecondary,
    marginBottom: 4,
  },

  languageValue: {
    fontSize: 16,
    color: semanticColors.text,
    fontWeight: '500',
  },

  userInfoSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: semanticColors.border,
  },

  menuText: {
    fontSize: 16,
    color: semanticColors.text,
  },

  menuArrow: {
    fontSize: 16,
    color: colors.manatee,
  },
});
