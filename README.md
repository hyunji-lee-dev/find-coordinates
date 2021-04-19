# 타겟 좌표 찾기

Window API (크기, 좌표, 이벤트) 실습 목적의 프로젝트 👉 [Live Demo](https://hyunji-lee-dev.github.io/find-coordinates/)

## 사용기술

- HTML+CSS
- JavaScript
- Web APIs

## 구현사항

### 마우스 따라 타겟 이동 및 좌표값 업데이트

![demo](https://user-images.githubusercontent.com/79075688/115184789-84406880-a119-11eb-96fa-31cd9fa03f90.gif)

### 성능 고려

Critical Rendering Path 중 composition만 발생 (top/left 변화 대신 transform 사용)

## 추가사항

### 페이지 로딩 시 타겟의 위치와 좌표값 중앙으로 초기화 (윈도우 크기의 변화도 반영)

## 참고자료

- 드림코딩 아카데미
- MDN Web Docs
