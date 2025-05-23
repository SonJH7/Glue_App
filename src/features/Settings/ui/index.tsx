import React from 'react';
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Text style={styles.text}>{"2:18"}</Text>
          <Image
            source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/86phb89v_expires_30_days.png"}}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </View>
        <View style={styles.row2}>
          <Image
            source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/arv6mg7w_expires_30_days.png"}}
            resizeMode={"stretch"}
            style={styles.image2}
          />
          <Text style={styles.text2}>{"설정"}</Text>
          <View style={styles.box} />
        </View>
        <Text style={styles.text3}>{"이용 안내"}</Text>
        <View style={styles.row3}>
          <Text style={styles.text4}>{"앱 버전"}</Text>
          <Text style={styles.text5}>{"1.0.0"}</Text>
        </View>
        <Text style={styles.text6}>{"문의하기"}</Text>
        <Text style={styles.text6}>{"공지사항"}</Text>
        <Text style={styles.text7}>{"서비스 이용약관"}</Text>
        <Text style={styles.text7}>{"개인정보 처리방침"}</Text>
        <Text style={styles.text8}>{"오픈소스 라이선스"}</Text>
        <View style={styles.box2} />
        <Text style={styles.text3}>{"기타"}</Text>
        <Text style={styles.text6}>{"회원탈퇴"}</Text>
        <Text style={styles.text9}>{"로그아웃"}</Text>
        <View style={styles.view}>
          <View style={styles.box3} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    width: 24,
    height: 24,
  },
  box2: {
    height: 1,
    backgroundColor: "#F3F4F6",
    marginBottom: 35,
    marginHorizontal: 19,
  },
  box3: {
    width: 140,
    height: 5,
    backgroundColor: "#384050",
    borderRadius: 2222,
  },
  image: {
    width: 76,
    height: 13,
  },
  image2: {
    width: 24,
    height: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingLeft: 41,
    paddingRight: 19,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 17,
    marginBottom: 32,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
    marginHorizontal: 19,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  text2: {
    color: "#303030",
    fontSize: 16,
    fontWeight: "bold",
  },
  text3: {
    color: "#303030",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 28,
    marginLeft: 19,
  },
  text4: {
    color: "#303030",
    fontSize: 16,
    marginRight: 4,
    flex: 1,
  },
  text5: {
    color: "#303030",
    fontSize: 16,
    textAlign: "right",
    flex: 1,
  },
  text6: {
    color: "#303030",
    fontSize: 16,
    marginBottom: 23,
    marginLeft: 19,
  },
  text7: {
    color: "#303030",
    fontSize: 16,
    marginBottom: 22,
    marginLeft: 19,
  },
  text8: {
    color: "#303030",
    fontSize: 16,
    marginBottom: 36,
    marginLeft: 19,
  },
  text9: {
    color: "#303030",
    fontSize: 16,
    marginBottom: 203,
    marginLeft: 19,
  },
  view: {
    alignItems: "center",
    marginBottom: 11,
  },
});

export default SettingsScreen;
