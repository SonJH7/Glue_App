import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {theme} from '../../../../app/styles/theme';
import {colors} from '../../../../app/styles/colors';
import {typography} from '../../../../app/styles/typography';

export const TermsNotice = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.footer}>
      <Text style={styles.termsText}>
        {t('auth.welcome.termsNotice').split('이용약관')[0]}
        <Text style={styles.termsLink}>{t('auth.welcome.terms')}</Text>
        {t('auth.welcome.termsNotice').includes('개인정보처리방침')
          ? '과 '
          : ' and '}
        <Text style={styles.termsLink}>{t('auth.welcome.privacy')}</Text>
        {t('auth.welcome.termsNotice').split('개인정보처리방침')[1]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  termsText: {
    ...typography.caption,
    color: colors.ghostWhite,
    textAlign: 'center',
    opacity: 0.8,
  },
  termsLink: {
    textDecorationLine: 'underline',
  },
});
