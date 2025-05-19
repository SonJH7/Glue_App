// 필요한 이미지들을 여기에서 내보냅니다.
// 실제 프로젝트에서는 이미지 파일들을 추가하고 적절히 내보내야 합니다.

// SVG 컴포넌트들
export {default as AppleSvg} from './social/apple-logo.svg';
export {default as GoogleSvg} from './social/google-logo.svg';
export {default as KakaoSvg} from './social/kakao-logo.svg';

// 이미지 파일들
export const logo = require('./logo.png');

// PNG 파일이 없어서 오류 발생 - 삭제
// 소셜 로그인은 SVG 파일만 사용
export { default as BellIcon     } from './bell.svg';
export { default as SettingsIcon } from './settings.svg';
export { default as RightArrowIcon } from './right-arrow.svg';