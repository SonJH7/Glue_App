import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {colors} from '@app/styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '@shared/ui/Button';
import Complete1SVG from '@shared/assets/images/complete1.svg';
import Complete2SVG from '@shared/assets/images/complete2.svg';
import Complete3SVG from '@shared/assets/images/complete3.svg';

interface SignupCompleteScreenProps {
  nickname: string;
  onStart: () => void;
}

const SignupCompleteScreen: React.FC<SignupCompleteScreenProps> = ({
  nickname,
  onStart,
}) => {
  const {t} = useTranslation();

  // 애니메이션 값 정의
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const card1Anim = useRef(new Animated.Value(0)).current;
  const card2Anim = useRef(new Animated.Value(0)).current;
  const card3Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 메인 화면 페이드인 및 슬라이드 업 애니메이션
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // 카드 순차적으로 나타나는 애니메이션
    Animated.stagger(200, [
      Animated.timing(card1Anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(card2Anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(card3Anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, card1Anim, card2Anim, card3Anim]);

  return (
    <LinearGradient colors={['#FFFFFF', '#F6FEFF']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Animated.View
          style={[
            {flex: 1},
            {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
          ]}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.welcomeSection}>
              <View style={styles.logoPlaceholder} />
              <Text style={styles.welcomeText}>
                {t('signup.complete.welcome', {
                  nickname: nickname,
                  defaultValue:
                    '{{nickname}} 님,\nGLUE에 오신 것을 환영합니다!',
                })}
              </Text>
            </View>

            {/* 첫 번째 기능 소개 */}
            <Animated.View style={{opacity: card1Anim}}>
              <View style={styles.featureCard}>
                <Complete1SVG
                  width={42}
                  height={42}
                  style={styles.featureIcon}
                />
                <View>
                  <Text style={styles.featureTitle}>
                    {t(
                      'signup.complete.feature1.title',
                      '같은 학교 학생끼리니까,',
                    )}
                  </Text>
                  <Text style={styles.featureDescription}>
                    {t(
                      'signup.complete.feature1.description',
                      '더욱 안전하게 교류할 수 있어요.',
                    )}
                  </Text>
                </View>
              </View>
            </Animated.View>

            {/* 두 번째 기능 소개 */}
            <Animated.View style={{opacity: card2Anim}}>
              <View style={styles.featureCard}>
                <Complete2SVG
                  width={42}
                  height={42}
                  style={styles.featureIcon}
                />
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>
                    {t(
                      'signup.complete.feature2.title',
                      '다양한 나라의 친구들과',
                    )}
                  </Text>
                  <Text style={styles.featureDescription}>
                    {t(
                      'signup.complete.feature2.description',
                      '소통하면서 언어 능력을 향상시킬 수 있어요.',
                    )}
                  </Text>
                </View>
              </View>
            </Animated.View>

            {/* 세 번째 기능 소개 */}
            <Animated.View style={{opacity: card3Anim}}>
              <View style={styles.featureCard}>
                <Complete3SVG
                  width={42}
                  height={42}
                  style={styles.featureIcon}
                />
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>
                    {t('signup.complete.feature3.title', '모임을 형성하여')}
                  </Text>
                  <Text style={styles.featureDescription}>
                    {t(
                      'signup.complete.feature3.description',
                      '원하는 친구들과 교류를 이어나갈 수 있어요.',
                    )}
                  </Text>
                </View>
              </View>
            </Animated.View>
          </ScrollView>

          {/* 시작하기 버튼 - 하단에 고정 */}
          <View style={styles.buttonContainer}>
            <Button
              label={t('signup.complete.startButton', '지금 바로 시작하기')}
              onPress={onStart}
              variant="primary"
            />
          </View>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 80, // 버튼 공간 확보
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 41,
    paddingRight: 19,
  },
  headerText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  headerImage: {
    width: 76,
    height: 13,
  },
  welcomeSection: {
    paddingBottom: 43,
    marginBottom: 52,
    marginHorizontal: 28,
  },
  logoPlaceholder: {
    height: 37,
    marginBottom: 64,
  },
  welcomeText: {
    color: colors.batteryChargedBlue,
    fontSize: 24,
    fontWeight: 'bold',
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 15,
    marginHorizontal: 22,
    // 그림자 추가
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    width: 42,
    height: 42,
    marginRight: 19,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    color: colors.richBlack,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  featureDescription: {
    color: colors.richBlack,
    fontSize: 14,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    paddingHorizontal: 28,
    paddingBottom: 30,
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
});

export default SignupCompleteScreen;
