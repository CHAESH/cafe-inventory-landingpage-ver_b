# Google Analytics 4 설정 가이드

## 1. Google Analytics 계정 생성

1. **Google Analytics 접속**
   - https://analytics.google.com 접속
   - Google 계정으로 로그인

2. **새 속성 만들기**
   - "관리" (톱니바퀴 아이콘) 클릭
   - "속성 만들기" 클릭
   - 속성 이름: "카페서플라이"
   - 시간대: 대한민국
   - 통화: KRW

3. **비즈니스 정보**
   - 업종: 기타
   - 비즈니스 규모: 소규모

4. **데이터 스트림 설정**
   - 플랫폼: 웹
   - 웹사이트 URL: 배포될 URL (예: cafe-supply.vercel.app)
   - 스트림 이름: "카페서플라이 웹"

5. **측정 ID 확인**
   - 생성 완료 후 측정 ID 복사 (G-XXXXXXXXXX 형식)

## 2. 코드에 적용

1. `app/layout.tsx` 파일에서:
   ```typescript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // 여기에 실제 측정 ID 입력
   ```

## 3. 이벤트 추적 확인

현재 추적하는 이벤트:
- `generate_lead`: 이메일 제출 시
  - value: 1
  - currency: KRW
  - version: "B"

## 4. 실시간 확인

1. Google Analytics 대시보드에서:
   - "보고서" → "실시간" 클릭
   - 웹사이트 방문 시 실시간 사용자 확인
   - 이메일 제출 시 이벤트 확인

## 5. 추가 설정 (선택사항)

### 전환 설정
1. "관리" → "이벤트" → "전환"
2. "generate_lead" 이벤트를 전환으로 표시

### 잠재고객 설정
1. "관리" → "잠재고객"
2. "새 잠재고객" → "맞춤 잠재고객 만들기"
3. 이메일 제출한 사용자 그룹 생성

### 목표 설정
- 일일 이메일 수집 목표
- 전환율 목표 (방문자 대비 이메일 제출)

## 6. 대시보드 활용

주요 확인 지표:
- 일일 활성 사용자 (DAU)
- 페이지뷰
- 평균 세션 시간
- 이탈률
- 이메일 전환율
- 디바이스별 통계 (모바일 vs 데스크톱)

## 7. 디버깅

개발 환경에서 테스트:
1. Chrome 확장 프로그램 "Google Analytics Debugger" 설치
2. 개발자 도구 Console에서 gtag 이벤트 확인
3. GA4 실시간 보고서에서 확인