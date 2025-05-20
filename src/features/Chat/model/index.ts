import {ChatRoom, ChatDetails, ChatMessage} from '../entities/types';
import {dummyChatRooms, dummyChatDetails} from './dummyData';

// 채팅방 목록을 가져오는 함수
export const fetchChatRooms = async (): Promise<ChatRoom[]> => {
  try {
    // 실제 API 호출 로직이 들어갈 자리
    // const response = await api.get('/chatrooms');
    // return response.data;

    // 임시로 더미 데이터 반환
    return dummyChatRooms;
  } catch (error) {
    console.error('채팅방 목록을 불러오는데 실패했습니다.', error);
    return [];
  }
};

// 채팅방 상세 정보를 가져오는 함수
export const fetchChatDetails = async (
  roomId: string,
): Promise<ChatDetails | null> => {
  try {
    // 실제 API 호출 로직이 들어갈 자리
    // const response = await api.get(`/chatrooms/${roomId}`);
    // return response.data;

    // roomId에 해당하는 채팅방 찾기
    const room = dummyChatRooms.find(r => r.id === roomId);

    if (!room) {
      console.error(
        `채팅방 ID ${roomId}에 해당하는 채팅방을 찾을 수 없습니다.`,
      );
      return null;
    }

    // 채팅방 정보를 기반으로 새로운 ChatDetails 객체 생성
    // 각 채팅방마다 고유한 정보를 가질 수 있도록 설정
    const customChatDetails: ChatDetails = {
      id: room.id,
      name: room.name,
      roomIcon: dummyChatDetails.roomIcon,
      memberCount: room.memberCount || 2,
      // 더미 데이터의 일부 사용자만 선택하여 다른 채팅방마다 다른 멤버를 보여줌
      users:
        room.id === '1'
          ? dummyChatDetails.users.slice(0, 8) // 모든 사용자
          : room.id === '2'
          ? dummyChatDetails.users.slice(0, 5) // 5명의 사용자
          : room.id === '3'
          ? dummyChatDetails.users.slice(1, 3) // 2명의 사용자 (개인 채팅)
          : dummyChatDetails.users.slice(2, 4), // 다른 개인 채팅

      // 채팅방별로 다른 메시지 설정
      messages:
        room.id === '1'
          ? dummyChatDetails.messages // 원본 메시지
          : room.id === '2'
          ? [
              {
                id: 'room2_msg1',
                text: '서울 여행 어디로 가실 건가요?',
                senderId: 'user2',
                timestamp: '오후 02:15',
              },
              {
                id: 'room2_msg2',
                text: '저는 남산타워 가보고 싶어요!',
                senderId: 'user3',
                timestamp: '오후 02:20',
              },
              {
                id: 'room2_msg3',
                text: '저도요! 그리고 명동도 가고 싶어요',
                senderId: 'user4',
                timestamp: '오후 02:25',
              },
            ]
          : room.id === '3'
          ? [
              {
                id: 'room3_msg1',
                text: '안녕하세요! 모임에 관심 가져주셔서 감사합니다.',
                senderId: 'user2',
                timestamp: '오전 09:10',
              },
              {
                id: 'room3_msg2',
                text: '네 알겠습니다!',
                senderId: 'user1',
                timestamp: '오전 09:15',
              },
            ]
          : [
              {
                id: 'room4_msg1',
                text: '모임 날짜 변경 가능할까요?',
                senderId: 'user3',
                timestamp: '어제',
              },
            ],

      currentUserId: dummyChatDetails.currentUserId,
      type: room.type,
    };

    console.log(`채팅방 ${roomId}의 정보를 로드했습니다. 이름: ${room.name}`);
    return customChatDetails;
  } catch (error) {
    console.error(
      `채팅방 ${roomId} 상세 정보를 불러오는데 실패했습니다.`,
      error,
    );
    return null;
  }
};

// 메시지 전송 함수
export const sendMessage = async (
  roomId: string,
  message: string,
): Promise<ChatMessage | null> => {
  try {
    // 실제 API 호출 로직이 들어갈 자리
    // const response = await api.post(`/chatrooms/${roomId}/messages`, { text: message });
    // return response.data;

    // 각 채팅방 별로 고유한 메시지 ID 형식을 갖도록 설정
    // 임시로 더미 메시지 생성
    const newMessage: ChatMessage = {
      id: `${roomId}_msg_${Date.now()}`, // 채팅방 ID를 포함하여 더 고유한 ID 생성
      text: message,
      senderId: dummyChatDetails.currentUserId,
      timestamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      readCount: 0,
    };

    console.log(
      `채팅방 ${roomId}에 새 메시지 전송: "${message.substring(0, 15)}${
        message.length > 15 ? '...' : ''
      }"`,
    );
    return newMessage;
  } catch (error) {
    console.error(`채팅방 ${roomId}에 메시지 전송 실패: ${error}`);
    return null;
  }
};
