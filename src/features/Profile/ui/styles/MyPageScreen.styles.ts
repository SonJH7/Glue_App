// src/features/Profile/ui/styles/MyPageScreen.styles.ts
import { StyleSheet } from 'react-native';
import { semanticColors, typography, spacing } from '@app/styles';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { paddingHorizontal: 19, paddingTop: 0 },
  section: { marginBottom: spacing.ls },
  sectionTitle: {
    ...typography.h4,
    color: semanticColors.text,
    marginTop: spacing.ls,
    marginBottom: spacing.sm,
    marginLeft: 3,
  },
  languageContainer: { flexDirection: 'row', gap: '5' },
  infoList: { marginTop: spacing.md,
    marginLeft: 3,
   },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: spacing.md,
    borderRadius: spacing.sm,
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: spacing.md,
  },
  infoContainer: {
    flex: 1,
    marginRight: spacing.sm,
  },
  nickname: {
    ...typography.h4,
    color: semanticColors.text,
  },
  bio: {
    ...typography.body2,
    color: semanticColors.textSecondary,
    marginTop: spacing.xs,
  },
    /* 언어 설정과 내 정보 사이 구분선 */
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: semanticColors.border,
    marginTop: spacing.md,           // 위쪽 여백만 크게
    marginBottom: spacing.lg,        // 아래쪽은 기본
  },
  
});