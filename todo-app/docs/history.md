# 작업 이력

### [2026-10-30] 목록/상세 페이지 분리 및 카드형 모바일 UI로 개선
- **작업 내용**:
  - `src/components/ListPage.jsx`: 제목/메모 입력 폼 + 제목만 보이는 카드 목록 (체크박스로 완료 토글, 제목 클릭 시 상세 이동)
  - `src/components/DetailPage.jsx`: 제목/상태/메모 표시, 완료 전환·삭제
  - `src/store/useTodoStore.js`: zustand + persist(localStorage)로 todos 관리
  - `src/App.jsx`: react-router 라우트(`/`, `/todo/:id`) 구성, `src/main.jsx`: `BrowserRouter` 추가
  - `src/App.css`: 카드형·모바일 스타일(최대폭 480px, 입력 16px, 터치 영역 44px 이상)
  - 필터, 더블클릭 수정, 완료 일괄 삭제, 개수 표시 제거
  - 컴포넌트 위치를 CLAUDE.md 규칙에 맞춰 `src/pages/`에서 `src/components/`로 이동
- **변경 사유**: 모바일에서도 보기 편한 단순한 목록 화면과, 메모를 보는 별도 상세 화면이 필요해서
- **검증 결과**: `npx eslint src` 경고 없음, `npx vite build` 성공 (컴포넌트를 `src/components/`로 이동한 뒤에도 동일하게 통과)

### [2026-10-30] App.jsx를 todo 목록 페이지로 교체
- **작업 내용**: `src/App.jsx`의 Vite 기본 템플릿을 useState 기반 todo 목록(추가/완료/수정/삭제/필터/localStorage)으로 교체, `src/App.css` 재작성
- **변경 사유**: todo 목록 페이지 구현 요청
- **검증 결과**: 실행 검증 없음 (이후 작업에서 구조가 전면 교체됨)
