# 대련한국국제학교 화면 재현

`http://dkischool.org/`의 공개 메인 페이지를 참고한 비공식 시각 재현 프로젝트입니다. 학교가 운영하거나 승인한 사이트가 아닙니다. 게시판 원문, 개인 정보, 로그인과 신청 기능은 포함하지 않습니다.

## 구성

- `frontend/`: React + Vite 정적 사이트
- `server/`: 정적 파일과 `/api/health`를 제공하는 Rust Axum 서버

## 로컬 실행

저장소 루트에서 프론트엔드 의존성을 설치하고 개발 서버를 실행합니다.

```powershell
npm ci
npm run dev --workspace frontend
```

Axum을 실행하려면 프론트엔드를 빌드한 다음 저장소 루트에서 실행합니다.

```powershell
npm run build --workspace frontend
cargo run --manifest-path server/Cargo.toml
```

프론트엔드는 `http://127.0.0.1:3000/`, API 상태 확인은 `http://127.0.0.1:3000/api/health`에서 확인할 수 있습니다.

## GitHub Pages

GitHub Actions가 `main` 브랜치 변경을 감지해 프론트엔드를 빌드하고 `https://dogebi.github.io/dkischool-remake/`로 배포합니다. GitHub Pages는 정적 파일 호스팅이므로 Axum API는 Pages에서 실행되지 않습니다. API를 인터넷에 서비스하려면 별도 Rust 호스팅이 필요합니다.

## 디자인 참고

원본 홈페이지의 학교 로고, 메인 이미지, 7개 주 메뉴, 공지·가정통신문·행사일정·앨범 배치 및 푸터를 참고했습니다. 메뉴 전환, 메인 사진 넘김, 공지 검색과 화면 너비별 레이아웃을 구현했습니다. 게시판 항목은 실제 개인·학교 공지 대신 예시 문구를 사용합니다.
