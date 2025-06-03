import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from "react-native";
import { Text } from "@shared/ui/typography/Text";
import { useTranslation } from "react-i18next";
import { colors, semanticColors } from "src/app/styles/colors";
import { styles } from './styles/ContactUsScreen.styles';
import { notificationService } from 'src/shared/lib/notifications';
import { useNavigation } from '@react-navigation/native';

type InquiryType = 'group' | 'feature' | 'account' | 'suggestion' | 'etc';

interface ContactUsScreenProps {
  userEmail?: string;
}

// 문의 유형 리스트
const INQUIRY_TYPES = [
  { key: "group" as InquiryType, label: "inquiryType.group" },
  { key: "feature" as InquiryType, label: "inquiryType.feature" },
  { key: "account" as InquiryType, label: "inquiryType.account" },
  { key: "suggestion" as InquiryType, label: "inquiryType.suggestion" },
  { key: "etc" as InquiryType, label: "inquiryType.etc" },
];

export default function ContactUsScreen({ userEmail }: ContactUsScreenProps) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState(userEmail || "");
  const [type, setType] = useState<InquiryType | null>(null);
  const [showTypeList, setShowTypeList] = useState(false);

  // 모든 필수 입력값이 채워졌는지 검사
  const isFormValid = title.trim() && content.trim() && email.trim() && type;

  const handleSubmit = () => {
    if (isFormValid) {
      notificationService.toast.success('', t('contact.successToast'));
      
      // 2초 후 설정 페이지로 이동
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* 헤더 */}
        <View style={styles.row}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/89ytbyqs_expires_30_days.png" }}
            resizeMode="stretch"
            style={styles.image}
          />
          <Text style={styles.text}>{t("contact.title")}</Text>
          <View style={styles.box} />
        </View>

        {/* 제목 */}
        <Text style={styles.text2}>{t("contact.subject")}</Text>
        <TextInput
          placeholder={t("contact.subjectPlaceholder")}
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        {/* 문의 유형 */}
        <Text style={styles.text2}>{t("contact.type")}</Text>
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => setShowTypeList((prev) => !prev)}
          activeOpacity={0.8}
        >
          <Text style={[styles.text3, { color: type ? semanticColors.text : colors.lightSilver }]}>
            {type ? t(INQUIRY_TYPES.find((i) => i.key === type)?.label || "") : t("contact.typePlaceholder")}
          </Text>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/bnWyQkDlsL/i3p60wpi_expires_30_days.png" }}
            resizeMode="stretch"
            style={styles.image2}
          />
        </TouchableOpacity>
        {showTypeList && (
          <View style={styles.dropdown}>
            {INQUIRY_TYPES.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={styles.dropdownItem}
                onPress={() => {
                  setType(item.key);
                  setShowTypeList(false);
                }}
              >
                <Text style={styles.dropdownText}>{t(item.label)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* 문의 내용 */}
        <Text style={styles.text4}>{t("contact.content")}</Text>
        <View style={styles.view}>
          <Text style={styles.text5}>{t("contact.contentGuide")}</Text>
        </View>
        <TextInput
          placeholder={t("contact.contentPlaceholder")}
          value={content}
          onChangeText={setContent}
          style={styles.inputContent}
          multiline
        />

        {/* 답변 받을 이메일 */}
        <Text style={styles.text2}>{t("contact.email")}</Text>
        <TextInput
          placeholder="abcdefg1234@pusan.ac.kr"
          value={email}
          onChangeText={setEmail}
          style={styles.input2}
          editable={false}
        />

        {/* 문의 보내기 버튼 */}
        <TouchableOpacity
          style={isFormValid ? styles.buttonEnabled : styles.buttonDisabled}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <Text style={[styles.text6, { color: isFormValid ? colors.white : colors.white }]}>
            {t("contact.send")}
          </Text>
        </TouchableOpacity>
        <View style={styles.box2} />
      </ScrollView>
    </SafeAreaView>
  );
}
