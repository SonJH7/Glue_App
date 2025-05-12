import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeArea} from '../../../shared/ui';
import {Text} from '../../../shared/ui/typography/Text';

const ProfileMainScreen = () => {
  // 사용자 데이터 (실제 구현 시에는 API나 컨텍스트에서 데이터를 가져옴)
  const user = {
    id: 1,
    username: '강개발',
    email: 'user@example.com',
    profileImage: '👤', // 실제로는 이미지 URL이 들어감
    joinDate: '2023-05-10',
    posts: 15,
    comments: 42,
    followers: 128,
    following: 99,
    bio: '리액트 네이티브와 FSD 패턴으로 앱을 개발하고 있습니다. 디자인과 개발에 관심이 많습니다.',
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        {/* 상단 프로필 섹션 */}
        <View style={styles.profileSection}>
          <Text style={styles.profileImage}>{user.profileImage}</Text>
          <Text variant="h4" weight="bold" style={styles.username}>
            {user.username}
          </Text>
          <Text variant="body2" color="#757575" style={styles.email}>
            {user.email}
          </Text>
          <Text variant="body2" align="center" style={styles.bio}>
            {user.bio}
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text variant="body1" weight="bold" style={styles.statValue}>
                {user.posts}
              </Text>
              <Text variant="body2" color="#757575" style={styles.statLabel}>
                게시글
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text variant="body1" weight="bold" style={styles.statValue}>
                {user.followers}
              </Text>
              <Text variant="body2" color="#757575" style={styles.statLabel}>
                팔로워
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text variant="body1" weight="bold" style={styles.statValue}>
                {user.following}
              </Text>
              <Text variant="body2" color="#757575" style={styles.statLabel}>
                팔로잉
              </Text>
            </View>
          </View>
        </View>

        {/* 설정 옵션 */}
        <View style={styles.optionsContainer}>
          <View style={styles.optionItem}>
            <Text variant="body1" style={styles.optionText}>
              계정 설정
            </Text>
          </View>
          <View style={styles.optionItem}>
            <Text variant="body1" style={styles.optionText}>
              알림 설정
            </Text>
          </View>
          <View style={styles.optionItem}>
            <Text variant="body1" style={styles.optionText}>
              개인정보 보호
            </Text>
          </View>
          <View style={styles.optionItem}>
            <Text variant="body1" style={styles.optionText}>
              로그아웃
            </Text>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileSection: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileImage: {
    fontSize: 48,
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    marginBottom: 5,
  },
  email: {
    marginBottom: 15,
  },
  bio: {
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {},
  statLabel: {},
  optionsContainer: {
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 8,
    margin: 10,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  optionText: {
    fontSize: 16,
  },
});

export default ProfileMainScreen;
