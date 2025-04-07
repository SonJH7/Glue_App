import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {theme} from '../../../../app/styles/theme';
import {SocialLoginButton} from '../../../../features/auth/social-login-button';

type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export const SocialLoginSection = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  // 소셜 로그인 핸들러 - 실제 구현시에는 인증 로직 추가
  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} 로그인 시도`);
    // 소셜 로그인 성공 후 처리
    navigation.navigate('Login' as never); // 임시로 Login 페이지로 이동
  };

  return (
    <View style={styles.buttonContainer}>
      <SocialLoginButton
        type="google"
        onPress={() => handleSocialLogin('Google')}
      />

      <SocialLoginButton
        type="apple"
        onPress={() => handleSocialLogin('Apple')}
      />

      <SocialLoginButton
        type="kakao"
        onPress={() => handleSocialLogin('Kakao')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
    marginBottom: theme.spacing.xl,
  },
});
