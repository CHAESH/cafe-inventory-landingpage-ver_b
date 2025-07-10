# Google Forms 이메일 수집 설정 가이드

## 1단계: Google Form 생성

1. **Google Forms 접속**
   - https://forms.google.com 접속
   - Google 계정으로 로그인

2. **새 양식 만들기**
   - "+" 버튼 클릭하여 빈 양식 생성
   - 제목: "카페서플라이 사전신청"

3. **필드 추가**
   - 질문 1: "이메일 주소"
     - 질문 유형: 단답형
     - 필수 항목 체크
     - 응답 검증 → 텍스트 → 이메일 주소
   
   - 질문 2: "서비스 버전" (숨김 필드로 사용)
     - 질문 유형: 단답형
     - 필수 항목 체크

## 2단계: Form ID와 Entry ID 찾기

1. **미리보기 모드 실행**
   - 양식 상단의 눈 모양 아이콘(미리보기) 클릭

2. **개발자 도구 열기**
   - Chrome: F12 또는 우클릭 → 검사
   - Network 탭 선택

3. **테스트 제출**
   - 이메일: test@test.com 입력
   - 서비스 버전: B 입력
   - 제출 버튼 클릭

4. **Form 정보 확인**
   - Network 탭에서 "formResponse" 찾기
   - URL 확인: `https://docs.google.com/forms/d/e/[이 부분이 FORM_ID]/formResponse`
   - Form Data 확인:
     - entry.XXXXXXXXX: test@test.com (이메일 필드의 entry ID)
     - entry.YYYYYYYYY: B (버전 필드의 entry ID)

## 3단계: 코드에 적용

찾은 ID들을 메모해두세요:
- FORM_ID: ______________________
- 이메일 Entry ID: entry.__________
- 버전 Entry ID: entry.__________

## 4단계: Google Sheets 연동 (선택사항)

1. Google Forms에서 "응답" 탭 클릭
2. 스프레드시트 아이콘 클릭
3. "새 스프레드시트 만들기" 선택
4. 이제 모든 응답이 자동으로 Google Sheets에 저장됩니다

## 5단계: 응답 확인

- **Forms에서**: 응답 탭 → 요약 보기
- **Sheets에서**: 실시간 데이터 확인 및 차트 생성 가능