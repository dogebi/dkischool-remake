// 원본 홈페이지의 주요 메뉴와 공개 레이아웃을 재현합니다.
import { useState } from 'react';

const menus = [
  { title: '학교소개', children: ['학교장 인사', '상징 및 교가', '교육비전', '현황 및 연혁', '교직원소개', '법인이사회', '학교운영위원회', '학부모회', '층별안내도', '오시는 길'] },
  { title: '입학안내', children: ['입학안내(공통)', '입학안내(유치원)', '입학안내(초등)', '입학안내(중등)', '자주하는 질문'] },
  { title: '교육마당', children: ['교육과정', '교육특색', '교육자료', '온라인교육(유치부)', '온라인교육(초등부)', '온라인교육(중등부)'] },
  { title: '알림마당', children: ['공지사항', '가정통신문', '스쿨뱅킹 및 환불안내', '학교앨범', '보건실', '급식실', '도서실'] },
  { title: '진학마당', children: ['진학정보', '진학자료실', '진학상담'] },
  { title: '참여마당', children: ['학교소식', '자유게시판', '학부모게시판'] },
  { title: '한글학교', children: ['한글학교 안내', '교육과정', '공지사항'] },
];
const notices = [
  ['공지사항', '2026학년도 학교 교육활동 안내', '2026.10.30'],
  ['공지사항', '2027학년도 신입생 입학 안내', '2026.10.26'],
  ['가정통신문', '가을철 안전 및 건강 관리 안내', '2026.10.22'],
  ['공지사항', '학교 시설 이용 안내', '2026.10.18'],
  ['가정통신문', '학부모 상담 주간 운영 안내', '2026.10.12'],
];
const photoCaptions = ['학교 교육활동', '함께 배우는 하루', '즐거운 학교생활', '우리들의 이야기'];

function App() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('전체보기');
  const visibleNotices = notices.filter((row) => (category === '전체보기' || row[0] === category) && row[1].includes(query));
  return <>
    <div className="utility"><div className="wide"><span>대련한국국제학교 Dalian Korean International School</span><div><a href="#">HOME</a><a href="#">LOGIN</a><a href="#">SITEMAP</a></div></div></div>
    <header className="masthead wide">
      <a className="brand" href="#top"><img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="대련한국학교 로고" /><span><b>대련한국국제학교</b><small>DALIAN KOREAN INTERNATIONAL SCHOOL</small></span></a>
      <div className="school-mark"><span>大连韩国国际学校</span><strong>배움과 나눔으로 미래를 여는 학교</strong></div>
    </header>
    <nav className="nav-wrap"><div className="nav wide" onMouseLeave={() => setActive(-1)}>{menus.map((item, i) => <div className={`nav-item ${active === i ? 'selected' : ''}`} key={item.title} onMouseEnter={() => setActive(i)}><button onClick={() => setActive(active === i ? -1 : i)}>{item.title}</button>{active === i && <div className="submenu">{item.children.map((c) => <a href="#notices" key={c}>{c}</a>)}</div>}</div>)}</div></nav>
    <main id="top">
      <section className="hero"><div className="hero-image" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/main_image${slide + 1}.png')` }} /><div className="hero-shade"/><div className="hero-copy"><span>DALIAN KOREAN INTERNATIONAL SCHOOL</span><h1>꿈을 키우고<br/>미래를 여는 학교</h1><p>배움과 나눔으로 함께 성장하는 대련한국국제학교</p><a href="#about">학교 알아보기 <b>→</b></a></div><div className="hero-controls"><button onClick={() => setSlide((slide + 4) % 5)} aria-label="이전 사진">‹</button><span>0{slide + 1} <i>/</i> 05</span><button onClick={() => setSlide((slide + 1) % 5)} aria-label="다음 사진">›</button></div><div className="unofficial">비공식 화면 재현 · 실제 학교 서비스가 아닙니다</div></section>
      <section className="quick-links wide" id="about">{[['입학안내','새로운 시작을 준비해요','↗'],['교육과정','함께 성장하는 배움','▤'],['학교앨범','우리들의 학교 이야기','▧'],['오시는 길','학교 위치와 연락처','⌖']].map(([title,desc,icon])=><a href="#notices" className="quick" key={title}><span className="quick-icon">{icon}</span><span><b>{title}</b><small>{desc}</small></span><em>＋</em></a>)}</section>
      <section className="content-grid wide" id="notices"><div className="notice-panel"><div className="section-heading"><div><span className="eyebrow">SCHOOL NEWS</span><h2>알림마당</h2></div><a href="#notices">전체보기 <b>＋</b></a></div><div className="tabs">{['전체보기','공지사항','가정통신문'].map((t,i)=><button key={t} className={category === t ? 'on' : ''} onClick={() => setCategory(t)}>{t}</button>)}</div><ul className="notice-list">{visibleNotices.map((row,i)=><li key={row[1]}><span className="badge">{row[0]}</span><a href="#notices">{row[1]}</a><time>{row[2]}</time></li>)}</ul><label className="search"><input aria-label="공지 검색" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="검색어를 입력하세요"/><button aria-label="검색">⌕</button></label></div>
      <div className="calendar-panel"><div className="section-heading"><div><span className="eyebrow">SCHOOL SCHEDULE</span><h2>행사일정</h2></div><a href="#schedule">전체보기 <b>＋</b></a></div><div className="month"><button aria-label="이전 달">‹</button><strong>2026. 11</strong><button aria-label="다음 달">›</button></div><div className="calendar" id="schedule"><div className="week">{['일','월','화','수','목','금','토'].map((x)=><b key={x}>{x}</b>)}</div><div className="days">{Array.from({length:35},(_,i)=>{const d=i-5;return <span className={`${d===12?'today':''} ${d<1||d>30?'muted':''}`} key={i}>{d<1?31+d:d>30?d-30:d}</span>})}</div></div><p className="calendar-note"><i/> 11월 학교 일정 안내</p></div></section>
      <section className="gallery wide"><div className="section-heading"><div><span className="eyebrow">PHOTO GALLERY</span><h2>학교앨범</h2></div><a href="#gallery">전체보기 <b>＋</b></a></div><div className="photo-grid" id="gallery">{photoCaptions.map((caption,i)=><a href="#gallery" className="photo-card" key={caption}><img src={`${import.meta.env.BASE_URL}assets/main_image${i+1}.png`} alt="학교 활동 모습"/><span>{caption}<b>→</b></span></a>)}</div></section>
      <section className="banner wide"><div><small>DKIS · TOGETHER WE GROW</small><h2>세계와 함께 성장하는<br/>글로벌 인재의 꿈</h2><p>배움과 나눔이 있는 대련한국국제학교</p></div><a href="#about">학교소개 <b>→</b></a></section>
    </main>
    <footer><div className="footer-inner wide"><div className="foot-brand"><img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt=""/><span>대련한국국제학교<small>DALIAN KOREAN INTERNATIONAL SCHOOL</small></span></div><div className="foot-info"><div className="foot-links"><a href="#">개인정보처리방침</a><a href="#">이용약관</a><a href="#">찾아오시는 길</a></div><p>중국 요녕성 대련시 개발구金马路 209-1호 · 본 화면은 원본 홈페이지를 참고한 비공식 시각 재현입니다.</p><small>© DKIS website visual study. 학교 공식 서비스가 아니며 실제 게시판·로그인·신청 기능을 제공하지 않습니다.</small></div><div className="foot-call"><small>학교 대표전화</small><b>0411-8764-1000</b></div></div></footer>
  </>;
}
export default App;


