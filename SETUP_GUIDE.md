# 카페 비즈니스 솔루션 A/B 테스트 설정 가이드

## 1. Google Forms 설정

### 1.1 Google Form 생성
1. [Google Forms](https://forms.google.com)에 접속
2. 새 양식 만들기
3. 제목: "카페 비즈니스 솔루션 사전신청"
4. 다음 필드 추가:
   - 이메일 주소 (필수, 이메일 유효성 검사)
   - 버전 (드롭다운: Version A, Version B)

### 1.2 Form ID 및 Entry ID 확인
1. 양식 편집 화면에서 '미리보기' 클릭
2. 개발자 도구 열기 (F12)
3. Network 탭에서 양식 제출
4. `formResponse` 요청에서 다음 확인:
   - Form ID: URL에서 `/forms/d/e/[FORM_ID]/formResponse`
   - Entry ID: 폼 데이터에서 `entry.123456789` 형식

### 1.3 코드에 적용
`components/email-modal.tsx` 파일에서:
```typescript
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
const GOOGLE_FORM_EMAIL_FIELD = "entry.123456789" // 이메일 필드의 entry ID
```

## 2. Google Analytics 4 설정

### 2.1 GA4 계정 생성
1. [Google Analytics](https://analytics.google.com) 접속
2. 새 속성 만들기
3. 웹 스트림 추가
4. 측정 ID 복사 (G-XXXXXXXXXX 형식)

### 2.2 코드에 적용
`app/layout.tsx` 파일에서:
```typescript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // 실제 측정 ID로 교체
```

### 2.3 이벤트 추적 확인
- 이메일 제출 시 `generate_lead` 이벤트 발생
- 버전별 구분: `version` 파라미터 (A 또는 B)

## 3. 배포

### 3.1 Vercel 배포
```bash
# Vercel CLI 설치 (이미 설치되어 있으면 생략)
npm i -g vercel

# 프로젝트 빌드 테스트
npm run build

# Vercel에 배포
vercel
```

### 3.2 환경 변수 설정 (선택사항)
Vercel 대시보드에서 환경 변수 추가:
- `NEXT_PUBLIC_GA_ID`: Google Analytics 측정 ID
- `NEXT_PUBLIC_FORM_ID`: Google Form ID

## 4. 테스트 체크리스트

- [ ] `/version-a` 페이지 접속 확인
- [ ] `/version-b` 페이지 접속 확인
- [ ] 모바일 반응형 확인
- [ ] 이메일 모달 동작 확인
- [ ] Google Forms 데이터 수집 확인
- [ ] Google Analytics 실시간 확인

## 5. 주요 URL

- 메인 페이지: `/`
- 버전 A (무료 재고관리): `/version-a`
- 버전 B (납품업체 리뷰): `/version-b`

## 6. 모니터링

### Google Analytics에서 확인할 지표:
1. 실시간 > 개요: 현재 활성 사용자
2. 참여도 > 이벤트: generate_lead 이벤트
3. 획득 > 트래픽 획득: 유입 경로

### Google Forms에서 확인:
1. 응답 탭에서 이메일 수집 현황
2. 버전별 응답 비율

## 7. 주의사항

- Google Forms의 CORS 정책으로 인해 `mode: "no-cors"` 사용
- 실제 제출 성공 여부는 클라이언트에서 확인 불가
- Google Forms 응답에서 직접 확인 필요