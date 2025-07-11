# 카페 사장님 대상 SaaS 수요 검증 프로젝트

## 🎯 프로젝트 개요
- **목적**: 카페 사장님 대상 서비스 2개 중 어떤 것이 실제 수요가 있는지 A/B 테스트
- **기간**: 3일간 테스트 (2024.12.19-21)
- **목표**: 각 버전별 100명 이상 방문, 이메일 전환율 3% 이상 달성

## 🔄 A/B 테스트 버전

### 버전 A: 무료 재고관리 앱
- **타겟**: 비용에 민감한 초보 카페 사장님 (20-30대)
- **핵심 가치**: 평생 무료, 광고 없음, 간단한 사용법
- **검증 포인트**: 무료라도 재고관리 니즈가 있는가?

### 버전 B: 납품업체 리뷰/견적 서비스  
- **타겟**: 원가 절감 원하는 경력 카페 사장님 (30-40대)
- **핵심 가치**: 실제 사장님 리뷰, 한번에 견적 비교
- **검증 포인트**: 유료 서비스로 발전 가능한가?

## 🛠 기술 요구사항

### 필수 기능
1. **2개의 독립적인 랜딩페이지**
   - 각각 다른 URL (예: /version-a, /version-b)
   - 모바일 최적화 필수

2. **이메일 수집 기능**
   - CTA 버튼 클릭 시 이메일 입력 모달/폼
   - Google Forms 연동 방식 사용
   - 제출 후 감사 메시지 표시

3. **분석 도구 설정**
   - Google Analytics 4 설치
   - 이메일 제출 이벤트 추적 (generate_lead)
   - 버전별 구분 가능하도록 설정

### 기술 스택
- Next.js (v0에서 export한 코드 기반)
- Tailwind CSS
- Google Forms (이메일 수집)
- Google Analytics 4 (분석)
- Vercel (배포)

## 🎨 디자인 가이드
- 깔끔하고 신뢰감 있는 디자인
- 카페 관련 이미지 배경 (블러 처리)
- 주 색상: 파란색 계열
- CTA 버튼: 주황색으로 강조
- 모바일 폰트 크기: 최소 16px

## 📊 성공 측정
- Google Analytics에서 실시간 모니터링
- 주요 지표: 방문자 수, 이메일 전환율, 체류 시간
- 일별 데이터 수집 및 비교

## ⚡ 구현 우선순위
1. 기본 페이지 구조 생성
2. 이메일 수집 기능 구현
3. 모바일 반응형 최적화
4. Google Analytics 설정
5. 배포 및 테스트

## 🚨 주의사항
- 과도한 기능 추가 금지 (심플하게)
- 로딩 속도 최적화 필수
- 모바일 우선 디자인
- 이메일만 수집 (다른 정보 요구 X)

