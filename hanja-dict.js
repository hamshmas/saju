/**
 * 한자 사전 데이터 (hanja-dict.js)
 * 자평진전(子平眞詮)에 등장하는 주요 한자의 음/뜻/부수/획수
 *
 * 구조: { '한자': { eumhun: '음', meaning: '뜻', radical: '부수', strokes: 총획수, myeongri: '명리학적 의미(선택)' } }
 */

const HANJA_DICT = {
  // ═══════════════════════════════════════════
  // 천간 (天干) - 10 Heavenly Stems
  // ═══════════════════════════════════════════
  '甲': { eumhun: '갑', meaning: '갑옷, 첫째 천간', radical: '田', strokes: 5, myeongri: '양목(陽木). 큰 나무, 대들보. 봄의 시작, 동쪽. 인성이 곧고 강직함' },
  '乙': { eumhun: '을', meaning: '둘째 천간, 새', radical: '乙', strokes: 1, myeongri: '음목(陰木). 풀, 덩굴, 꽃. 유연하고 감싸는 성질. 봄, 동쪽' },
  '丙': { eumhun: '병', meaning: '셋째 천간, 밝다', radical: '一', strokes: 5, myeongri: '양화(陽火). 태양, 큰 불. 밝고 화려함. 여름, 남쪽' },
  '丁': { eumhun: '정', meaning: '넷째 천간, 장정', radical: '一', strokes: 2, myeongri: '음화(陰火). 촛불, 등불, 별빛. 문명의 불. 여름, 남쪽' },
  '戊': { eumhun: '무', meaning: '다섯째 천간', radical: '戈', strokes: 5, myeongri: '양토(陽土). 산, 제방, 큰 언덕. 중앙, 사계절의 변환점. 포용력' },
  '己': { eumhun: '기', meaning: '여섯째 천간, 자기', radical: '己', strokes: 3, myeongri: '음토(陰土). 전답, 정원. 만물을 기르는 땅. 중앙' },
  '庚': { eumhun: '경', meaning: '일곱째 천간', radical: '广', strokes: 8, myeongri: '양금(陽金). 큰 쇠, 도끼, 칼. 가을, 서쪽. 결단력, 의리' },
  '辛': { eumhun: '신', meaning: '여덟째 천간, 매울', radical: '辛', strokes: 7, myeongri: '음금(陰金). 보석, 바늘, 가위. 가을, 서쪽. 세밀함, 예리함' },
  '壬': { eumhun: '임', meaning: '아홉째 천간', radical: '士', strokes: 4, myeongri: '양수(陽水). 큰 바다, 강, 호수. 겨울, 북쪽. 지혜, 유동성' },
  '癸': { eumhun: '계', meaning: '열째 천간', radical: '癶', strokes: 12, myeongri: '음수(陰水). 이슬, 비, 안개. 겨울, 북쪽. 상상력, 내면의 지혜' },

  // ═══════════════════════════════════════════
  // 지지 (地支) - 12 Earthly Branches
  // ═══════════════════════════════════════════
  '子': { eumhun: '자', meaning: '아들, 자식, 첫째 지지', radical: '子', strokes: 3, myeongri: '쥐(鼠). 양수(陽水). 11월, 북쪽. 자시(23:00-01:00). 장생(長生)의 시작' },
  '丑': { eumhun: '축', meaning: '둘째 지지, 소', radical: '一', strokes: 4, myeongri: '소(牛). 음토(陰土). 12월, 북동쪽. 축시(01:00-03:00). 습토, 금의 고(庫)' },
  '寅': { eumhun: '인', meaning: '셋째 지지, 범', radical: '宀', strokes: 11, myeongri: '호랑이(虎). 양목(陽木). 1월, 동북쪽. 인시(03:00-05:00). 봄의 시작' },
  '卯': { eumhun: '묘', meaning: '넷째 지지, 토끼', radical: '卩', strokes: 5, myeongri: '토끼(兎). 음목(陰木). 2월, 동쪽. 묘시(05:00-07:00). 꽃이 피는 때' },
  '辰': { eumhun: '진', meaning: '다섯째 지지, 별', radical: '辰', strokes: 7, myeongri: '용(龍). 양토(陽土). 3월, 동남쪽. 진시(07:00-09:00). 습토, 수의 고(庫)' },
  '巳': { eumhun: '사', meaning: '여섯째 지지, 뱀', radical: '己', strokes: 3, myeongri: '뱀(蛇). 음화(陰火). 4월, 남동쪽. 사시(09:00-11:00). 여름의 시작' },
  '午': { eumhun: '오', meaning: '일곱째 지지, 말', radical: '十', strokes: 4, myeongri: '말(馬). 양화(陽火). 5월, 남쪽. 오시(11:00-13:00). 한여름, 도화살' },
  '未': { eumhun: '미', meaning: '여덟째 지지, 양', radical: '木', strokes: 5, myeongri: '양(羊). 음토(陰土). 6월, 남서쪽. 미시(13:00-15:00). 건토, 목의 고(庫)' },
  '申': { eumhun: '신', meaning: '아홉째 지지, 원숭이', radical: '田', strokes: 5, myeongri: '원숭이(猴). 양금(陽金). 7월, 서남쪽. 신시(15:00-17:00). 가을의 시작' },
  '酉': { eumhun: '유', meaning: '열째 지지, 닭', radical: '酉', strokes: 7, myeongri: '닭(鷄). 음금(陰金). 8월, 서쪽. 유시(17:00-19:00). 도화살' },
  '戌': { eumhun: '술', meaning: '열한째 지지, 개', radical: '戈', strokes: 6, myeongri: '개(犬). 양토(陽土). 9월, 서북쪽. 술시(19:00-21:00). 건토, 화의 고(庫)' },
  '亥': { eumhun: '해', meaning: '열두째 지지, 돼지', radical: '亠', strokes: 6, myeongri: '돼지(豬). 음수(陰水). 10월, 북서쪽. 해시(21:00-23:00). 겨울의 시작' },

  // ═══════════════════════════════════════════
  // 오행 (五行) - Five Elements
  // ═══════════════════════════════════════════
  '木': { eumhun: '목', meaning: '나무', radical: '木', strokes: 4, myeongri: '오행의 하나. 봄, 동쪽, 청색, 인묘(寅卯). 생장, 발전, 인(仁)의 덕' },
  '火': { eumhun: '화', meaning: '불', radical: '火', strokes: 4, myeongri: '오행의 하나. 여름, 남쪽, 적색, 사오(巳午). 광명, 예(禮)의 덕' },
  '土': { eumhun: '토', meaning: '흙, 땅', radical: '土', strokes: 3, myeongri: '오행의 하나. 사계 전환기, 중앙, 황색, 진술축미(辰戌丑未). 중재, 신(信)의 덕' },
  '金': { eumhun: '금', meaning: '쇠, 금', radical: '金', strokes: 8, myeongri: '오행의 하나. 가을, 서쪽, 백색, 신유(申酉). 결실, 의(義)의 덕' },
  '水': { eumhun: '수', meaning: '물', radical: '水', strokes: 4, myeongri: '오행의 하나. 겨울, 북쪽, 흑색, 해자(亥子). 저장, 지(智)의 덕' },

  // ═══════════════════════════════════════════
  // 십신 (十神) 관련 글자
  // ═══════════════════════════════════════════
  '比': { eumhun: '비', meaning: '견주다, 비교하다', radical: '比', strokes: 4, myeongri: '십신 중 비견(比肩). 나와 같은 오행, 같은 음양. 형제, 동료, 경쟁자' },
  '肩': { eumhun: '견', meaning: '어깨', radical: '肉', strokes: 8, myeongri: '비견(比肩)의 견. 어깨를 나란히 함, 대등한 관계' },
  '劫': { eumhun: '겁', meaning: '빼앗다, 겁탈하다', radical: '力', strokes: 7, myeongri: '십신 중 겁재(劫財). 나와 같은 오행, 다른 음양. 재물을 뺏는 힘' },
  '食': { eumhun: '식', meaning: '먹다, 음식', radical: '食', strokes: 9, myeongri: '십신 중 식신(食神). 내가 생하는 오행, 같은 음양. 의식주, 수명, 자식' },
  '神': { eumhun: '신', meaning: '귀신, 신령', radical: '示', strokes: 10, myeongri: '식신(食神), 용신(用神) 등에 사용. 신묘한 작용' },
  '傷': { eumhun: '상', meaning: '다치다, 상처', radical: '人', strokes: 13, myeongri: '십신 중 상관(傷官). 내가 생하는 오행, 다른 음양. 정관을 극하여 해침' },
  '官': { eumhun: '관', meaning: '벼슬, 관리', radical: '宀', strokes: 8, myeongri: '십신 중 정관(正官)/편관(偏官). 나를 극하는 오행. 직업, 명예, 규율' },
  '偏': { eumhun: '편', meaning: '치우치다, 한쪽', radical: '人', strokes: 11, myeongri: '편재, 편관, 편인 등에 사용. 음양이 같은 관계(무정한 관계)' },
  '正': { eumhun: '정', meaning: '바르다, 바를', radical: '止', strokes: 5, myeongri: '정재, 정관, 정인 등에 사용. 음양이 다른 관계(유정한 관계)' },
  '印': { eumhun: '인', meaning: '도장, 찍다', radical: '卩', strokes: 6, myeongri: '십신 중 정인(正印)/편인(偏印). 나를 생하는 오행. 학문, 문서, 어머니' },
  '財': { eumhun: '재', meaning: '재물, 재산', radical: '貝', strokes: 10, myeongri: '십신 중 정재(正財)/편재(偏財). 내가 극하는 오행. 재물, 아버지, 아내(남자)' },

  // ═══════════════════════════════════════════
  // 음양 (陰陽)
  // ═══════════════════════════════════════════
  '陰': { eumhun: '음', meaning: '그늘, 응달', radical: '阝', strokes: 11, myeongri: '만물의 어두운 면, 여성적 기운. 음간: 乙丁己辛癸. 음지: 丑卯巳未酉亥' },
  '陽': { eumhun: '양', meaning: '볕, 양달', radical: '阝', strokes: 12, myeongri: '만물의 밝은 면, 남성적 기운. 양간: 甲丙戊庚壬. 양지: 子寅辰午申戌' },

  // ═══════════════════════════════════════════
  // 격국 (格局) 관련
  // ═══════════════════════════════════════════
  '格': { eumhun: '격', meaning: '격식, 법칙', radical: '木', strokes: 10, myeongri: '사주의 격국(格局). 월지(月支)의 장간(藏干)이 천간에 투출하여 정해짐' },
  '局': { eumhun: '국', meaning: '판, 형국', radical: '尸', strokes: 7, myeongri: '격국(格局)의 국. 사주 전체의 구성과 형세' },
  '用': { eumhun: '용', meaning: '쓰다, 사용하다', radical: '用', strokes: 5, myeongri: '용신(用神). 사주에서 가장 필요한 글자. 격국을 성립시키는 핵심 오행' },
  '喜': { eumhun: '희', meaning: '기쁘다', radical: '口', strokes: 12, myeongri: '희신(喜神). 용신을 돕는 오행. 용신 다음으로 중요한 역할' },
  '忌': { eumhun: '기', meaning: '꺼리다, 싫어하다', radical: '心', strokes: 7, myeongri: '기신(忌神). 용신을 해치는 오행. 사주에서 나쁜 작용을 하는 글자' },
  '仇': { eumhun: '구', meaning: '원수', radical: '人', strokes: 4, myeongri: '구신(仇神). 기신을 돕는 오행. 간접적으로 용신을 해침' },
  '閑': { eumhun: '한', meaning: '한가하다', radical: '門', strokes: 12, myeongri: '한신(閑神). 용신에 대해 도움도 해도 안 되는 중립적 오행' },

  // ═══════════════════════════════════════════
  // 합 (合) 관련
  // ═══════════════════════════════════════════
  '合': { eumhun: '합', meaning: '합하다, 모으다', radical: '口', strokes: 6, myeongri: '천간합(天干合), 지지합(地支合). 두 글자가 서로 끌려 합쳐지는 관계' },
  '沖': { eumhun: '충', meaning: '충돌하다, 부딪치다', radical: '水', strokes: 7, myeongri: '지지충(地支沖). 서로 대립하여 부딪치는 관계. 변동, 이동, 갈등' },
  '刑': { eumhun: '형', meaning: '형벌', radical: '刀', strokes: 6, myeongri: '지지형(地支刑). 형벌의 관계. 삼형살, 자형 등. 법적 문제, 질병' },
  '破': { eumhun: '파', meaning: '깨뜨리다', radical: '石', strokes: 10, myeongri: '지지파(地支破). 깨뜨리는 관계. 파괴, 손실' },
  '害': { eumhun: '해', meaning: '해치다', radical: '宀', strokes: 10, myeongri: '지지해(地支害). 육해(六害). 서로 해치는 관계. 질병, 고통' },

  // ═══════════════════════════════════════════
  // 자평진전 핵심 용어 한자
  // ═══════════════════════════════════════════
  '命': { eumhun: '명', meaning: '목숨, 명령', radical: '口', strokes: 8, myeongri: '명(命). 사주팔자로 보는 운명. 명리학(命理學)의 명' },
  '理': { eumhun: '리/이', meaning: '다스리다, 이치', radical: '玉', strokes: 11, myeongri: '이치, 도리. 명리학(命理學)의 리. 사주의 이치를 연구하는 학문' },
  '學': { eumhun: '학', meaning: '배우다', radical: '子', strokes: 16, myeongri: '학문. 명리학(命理學), 자평학(子平學)' },
  '平': { eumhun: '평', meaning: '평평하다, 고르다', radical: '干', strokes: 5, myeongri: '자평(子平). 서자평(徐子平)의 이름에서 유래. 사주명리학의 다른 이름' },
  '眞': { eumhun: '진', meaning: '참, 진실', radical: '目', strokes: 10, myeongri: '자평진전(子平眞詮)의 진. 참된, 진실한 내용' },
  '詮': { eumhun: '전', meaning: '해석하다, 풀이', radical: '言', strokes: 13, myeongri: '자평진전(子平眞詮)의 전. 풀이, 해설. 자평의 참된 해설이라는 뜻' },
  '論': { eumhun: '론/논', meaning: '논하다, 의논하다', radical: '言', strokes: 15, myeongri: '자평진전 각 장의 제목에 사용. ~을 논하다' },

  // ═══════════════════════════════════════════
  // 생극 (生剋) 관련
  // ═══════════════════════════════════════════
  '生': { eumhun: '생', meaning: '나다, 살다', radical: '生', strokes: 5, myeongri: '상생(相生). 한 오행이 다른 오행을 낳아 도움. 木生火, 火生土, 土生金, 金生水, 水生木' },
  '剋': { eumhun: '극', meaning: '이기다, 극하다', radical: '刀', strokes: 9, myeongri: '상극(相剋). 한 오행이 다른 오행을 제압. 木剋土, 土剋水, 水剋火, 火剋金, 金剋木' },
  '克': { eumhun: '극', meaning: '이기다', radical: '儿', strokes: 7, myeongri: '剋의 약자. 상극(相克) 관계에서 사용' },
  '相': { eumhun: '상', meaning: '서로', radical: '目', strokes: 9, myeongri: '서로의 관계. 상생(相生), 상극(相剋)에 사용' },
  '洩': { eumhun: '설', meaning: '새다, 빠지다', radical: '水', strokes: 9, myeongri: '설기(洩氣). 기운이 빠져나감. 생하는 관계에서 생해주는 쪽의 기운이 약해짐' },

  // ═══════════════════════════════════════════
  // 사주 구성 요소
  // ═══════════════════════════════════════════
  '天': { eumhun: '천', meaning: '하늘', radical: '大', strokes: 4, myeongri: '천간(天干). 하늘의 기운. 사주에서 위쪽 글자(연간, 월간, 일간, 시간)' },
  '干': { eumhun: '간', meaning: '줄기, 방패', radical: '干', strokes: 3, myeongri: '천간(天干)의 간. 줄기. 하늘의 기둥' },
  '地': { eumhun: '지', meaning: '땅', radical: '土', strokes: 6, myeongri: '지지(地支). 땅의 기운. 사주에서 아래쪽 글자(연지, 월지, 일지, 시지)' },
  '支': { eumhun: '지', meaning: '가지, 지탱하다', radical: '支', strokes: 4, myeongri: '지지(地支)의 지. 가지. 땅의 가지' },
  '柱': { eumhun: '주', meaning: '기둥', radical: '木', strokes: 9, myeongri: '사주(四柱)의 주. 기둥. 년주, 월주, 일주, 시주의 네 기둥' },
  '四': { eumhun: '사', meaning: '넷', radical: '囗', strokes: 5, myeongri: '사주(四柱)의 사. 네 개의 기둥(년월일시)' },
  '八': { eumhun: '팔', meaning: '여덟', radical: '八', strokes: 2, myeongri: '팔자(八字)의 팔. 여덟 글자(천간 4 + 지지 4)' },
  '字': { eumhun: '자', meaning: '글자', radical: '子', strokes: 6, myeongri: '팔자(八字)의 자. 사주를 이루는 여덟 글자' },
  '年': { eumhun: '년/연', meaning: '해, 년', radical: '干', strokes: 6, myeongri: '년주(年柱). 태어난 해. 조상궁, 사회적 환경' },
  '月': { eumhun: '월', meaning: '달', radical: '月', strokes: 4, myeongri: '월주(月柱). 태어난 달. 부모궁, 격국을 정하는 핵심. 월령(月令)' },
  '日': { eumhun: '일', meaning: '날, 해', radical: '日', strokes: 4, myeongri: '일주(日柱). 태어난 날. 나 자신(일간=일원=일주). 배우자궁' },
  '時': { eumhun: '시', meaning: '때', radical: '日', strokes: 10, myeongri: '시주(時柱). 태어난 시간. 자녀궁, 말년운' },

  // ═══════════════════════════════════════════
  // 월령 (月令) / 절기 관련
  // ═══════════════════════════════════════════
  '令': { eumhun: '령/영', meaning: '명령, 하여금', radical: '人', strokes: 5, myeongri: '월령(月令). 월지가 가진 기운의 명령. 사주에서 가장 중요한 글자' },
  '旺': { eumhun: '왕', meaning: '왕성하다', radical: '日', strokes: 8, myeongri: '왕(旺)한 상태. 기운이 강성함. 월령을 얻으면 왕하다고 함' },
  '衰': { eumhun: '쇠', meaning: '쇠하다', radical: '衣', strokes: 10, myeongri: '쇠(衰)한 상태. 기운이 약해짐. 십이운성 중 하나' },
  '氣': { eumhun: '기', meaning: '기운', radical: '气', strokes: 10, myeongri: '기(氣). 오행의 기운. 사주에서 각 글자가 가진 에너지' },
  '勢': { eumhun: '세', meaning: '형세, 힘', radical: '力', strokes: 13, myeongri: '세(勢). 기세, 형세. 사주 전체의 흐름과 힘의 방향' },
  '得': { eumhun: '득', meaning: '얻다', radical: '彳', strokes: 11, myeongri: '득령(得令): 월령을 얻음, 득지(得地): 지지의 도움을 얻음' },
  '失': { eumhun: '실', meaning: '잃다', radical: '大', strokes: 5, myeongri: '실령(失令): 월령을 잃음. 일간이 월지에서 힘을 받지 못함' },

  // ═══════════════════════════════════════════
  // 십이운성 (十二運星) 관련
  // ═══════════════════════════════════════════
  '長': { eumhun: '장', meaning: '길다, 어른', radical: '長', strokes: 8, myeongri: '장생(長生). 십이운성의 첫째. 태어남, 시작. 생명력의 시작' },
  '沐': { eumhun: '목', meaning: '머리 감다', radical: '水', strokes: 7, myeongri: '목욕(沐浴). 십이운성. 씻김, 불안정, 도화(桃花)와 관련' },
  '浴': { eumhun: '욕', meaning: '목욕하다', radical: '水', strokes: 10, myeongri: '목욕(沐浴)의 욕. 목욕살. 변동, 이성문제' },
  '冠': { eumhun: '관', meaning: '갓, 관', radical: '冖', strokes: 9, myeongri: '관대(冠帶). 십이운성. 갓을 쓰는 나이. 성장, 독립' },
  '帶': { eumhun: '대', meaning: '띠, 차다', radical: '巾', strokes: 11, myeongri: '관대(冠帶)의 대. 허리띠를 매다. 성인이 됨' },
  '臨': { eumhun: '임', meaning: '임하다, 다가가다', radical: '臣', strokes: 17, myeongri: '임관(臨官). 십이운성. 벼슬에 나아감. 사회 진출, 활동력' },
  '帝': { eumhun: '제', meaning: '임금', radical: '巾', strokes: 9, myeongri: '제왕(帝旺). 십이운성. 최고의 왕성한 상태' },
  '死': { eumhun: '사', meaning: '죽다', radical: '歹', strokes: 6, myeongri: '사(死). 십이운성. 기운이 끝남. 고정, 정지' },
  '墓': { eumhun: '묘', meaning: '무덤', radical: '土', strokes: 13, myeongri: '묘(墓)/고(庫). 십이운성. 저장, 수집. 묘지(창고)에 들어감' },
  '絶': { eumhun: '절', meaning: '끊다, 끊어지다', radical: '糸', strokes: 12, myeongri: '절(絶). 십이운성. 기운이 완전히 끊어짐. 새로운 변화의 전조' },
  '胎': { eumhun: '태', meaning: '아이 밸', radical: '肉', strokes: 9, myeongri: '태(胎). 십이운성. 잉태, 새 생명의 시작. 계획, 구상 단계' },
  '養': { eumhun: '양', meaning: '기르다', radical: '食', strokes: 15, myeongri: '양(養). 십이운성. 양육, 준비 단계. 어머니 뱃속에서 자람' },
  '病': { eumhun: '병', meaning: '병, 앓다', radical: '疒', strokes: 10, myeongri: '병(病). 십이운성. 기운이 약해져 병듦. 쇠약, 고민' },

  // ═══════════════════════════════════════════
  // 장간 (藏干) 관련
  // ═══════════════════════════════════════════
  '藏': { eumhun: '장/창', meaning: '감추다, 창고', radical: '艸', strokes: 18, myeongri: '장간(藏干). 지지 속에 감추어진 천간. 지지의 본기/중기/여기' },
  '透': { eumhun: '투', meaning: '통하다, 드러나다', radical: '辵', strokes: 14, myeongri: '투출(透出). 장간이 천간에 드러남. 격국을 정하는 핵심 조건' },
  '出': { eumhun: '출', meaning: '나다, 나가다', radical: '凵', strokes: 5, myeongri: '투출(透出)의 출. 드러남. 장간이 천간에 나타남' },
  '本': { eumhun: '본', meaning: '근본, 뿌리', radical: '木', strokes: 5, myeongri: '본기(本氣). 지지에 가장 강하게 들어있는 천간' },
  '中': { eumhun: '중', meaning: '가운데', radical: '丨', strokes: 4, myeongri: '중기(中氣). 지지에 두 번째로 들어있는 천간' },
  '餘': { eumhun: '여', meaning: '남다, 나머지', radical: '食', strokes: 16, myeongri: '여기(餘氣). 지지에 세 번째로 들어있는 천간. 이전 월의 잔여 기운' },

  // ═══════════════════════════════════════════
  // 자평진전 주요 논제 관련 한자
  // ═══════════════════════════════════════════
  '體': { eumhun: '체', meaning: '몸, 본체', radical: '骨', strokes: 23, myeongri: '체(體). 사주의 본체. 일간, 격국 등 사주의 기본 틀' },
  '配': { eumhun: '배', meaning: '짝, 배합하다', radical: '酉', strokes: 10, myeongri: '배합(配合). 사주 글자 간의 조합과 궁합' },
  '取': { eumhun: '취', meaning: '취하다, 가지다', radical: '又', strokes: 8, myeongri: '취용(取用). 용신을 취함. 격국에서 용신을 정하는 것' },
  '成': { eumhun: '성', meaning: '이루다', radical: '戈', strokes: 7, myeongri: '성격(成格). 격국이 이루어짐. 좋은 구성의 사주' },
  '敗': { eumhun: '패', meaning: '패하다, 무너지다', radical: '攴', strokes: 11, myeongri: '패격(敗格)/파격(破格). 격국이 깨짐. 나쁜 구성의 사주' },
  '清': { eumhun: '청', meaning: '맑다', radical: '水', strokes: 11, myeongri: '청(清). 사주가 맑고 깨끗함. 격국이 순수하여 좋은 구성' },
  '濁': { eumhun: '탁', meaning: '흐리다', radical: '水', strokes: 16, myeongri: '탁(濁). 사주가 혼탁함. 격국이 복잡하여 나쁜 구성' },
  '順': { eumhun: '순', meaning: '순하다, 따르다', radical: '頁', strokes: 12, myeongri: '순용(順用). 용신을 순하게 씀. 상생의 방식으로 용신을 취함' },
  '逆': { eumhun: '역', meaning: '거스르다', radical: '辵', strokes: 10, myeongri: '역용(逆用). 용신을 거슬러 씀. 상극의 방식으로 용신을 취함' },
  '變': { eumhun: '변', meaning: '변하다', radical: '言', strokes: 23, myeongri: '변화(變化). 합, 충 등으로 인한 오행의 변화' },
  '化': { eumhun: '화', meaning: '되다, 변화하다', radical: '匕', strokes: 4, myeongri: '화(化). 합화(合化). 천간합이 되어 다른 오행으로 변하는 것' },

  // ═══════════════════════════════════════════
  // 운 (運) 관련
  // ═══════════════════════════════════════════
  '運': { eumhun: '운', meaning: '운, 움직이다', radical: '辵', strokes: 13, myeongri: '대운(大運), 세운(歲運). 시간의 흐름에 따른 기운의 변화' },
  '大': { eumhun: '대', meaning: '크다', radical: '大', strokes: 3, myeongri: '대운(大運). 10년 단위의 운. 월주에서 파생되어 순행/역행' },
  '歲': { eumhun: '세', meaning: '해, 나이', radical: '止', strokes: 13, myeongri: '세운(歲運)/유년(流年). 매년 돌아오는 운. 그 해의 천간지지' },
  '流': { eumhun: '류/유', meaning: '흐르다', radical: '水', strokes: 10, myeongri: '유년(流年). 흘러가는 해. 매년 바뀌는 운세' },

  // ═══════════════════════════════════════════
  // 부성/모성/처재/자식 등 육친 관련
  // ═══════════════════════════════════════════
  '父': { eumhun: '부', meaning: '아버지', radical: '父', strokes: 4, myeongri: '아버지. 남자에게는 편재(偏財), 여자에게는 정재(正財)로 봄' },
  '母': { eumhun: '모', meaning: '어머니', radical: '毋', strokes: 5, myeongri: '어머니. 정인(正印)으로 봄. 양육, 보호, 학문의 상징' },
  '妻': { eumhun: '처', meaning: '아내', radical: '女', strokes: 8, myeongri: '아내. 남자에게 정재(正財)로 봄' },
  '夫': { eumhun: '부', meaning: '남편, 지아비', radical: '大', strokes: 4, myeongri: '남편. 여자에게 정관(正官)으로 봄' },
  '兄': { eumhun: '형', meaning: '형', radical: '儿', strokes: 5, myeongri: '형제자매. 비겁(比劫)으로 봄' },
  '弟': { eumhun: '제', meaning: '아우', radical: '弓', strokes: 7, myeongri: '동생. 비겁(比劫)으로 봄' },
  '子': { eumhun: '자', meaning: '아들, 자식', radical: '子', strokes: 3, myeongri: '자녀. 남자에게 관살(官殺), 여자에게 식상(食傷)으로 봄' },

  // ═══════════════════════════════════════════
  // 일반 한자 (자평진전 빈출)
  // ═══════════════════════════════════════════
  '之': { eumhun: '지', meaning: '~의, 가다', radical: '丿', strokes: 4 },
  '也': { eumhun: '야', meaning: '~이다, ~도', radical: '乙', strokes: 3 },
  '者': { eumhun: '자', meaning: '~하는 사람/것', radical: '老', strokes: 8 },
  '而': { eumhun: '이', meaning: '~하고, 그러나', radical: '而', strokes: 6 },
  '以': { eumhun: '이', meaning: '~으로써', radical: '人', strokes: 5 },
  '爲': { eumhun: '위', meaning: '하다, 되다', radical: '爪', strokes: 12 },
  '不': { eumhun: '불/부', meaning: '아니다', radical: '一', strokes: 4 },
  '有': { eumhun: '유', meaning: '있다', radical: '月', strokes: 6 },
  '無': { eumhun: '무', meaning: '없다', radical: '火', strokes: 12 },
  '可': { eumhun: '가', meaning: '가하다, 옳다', radical: '口', strokes: 5 },
  '能': { eumhun: '능', meaning: '능하다, 할 수 있다', radical: '肉', strokes: 10 },
  '如': { eumhun: '여', meaning: '같다, 만약', radical: '女', strokes: 6 },
  '若': { eumhun: '약', meaning: '만약, 같다', radical: '艸', strokes: 8 },
  '則': { eumhun: '칙/즉', meaning: '곧, 법칙', radical: '刀', strokes: 9 },
  '其': { eumhun: '기', meaning: '그, 그것', radical: '八', strokes: 8 },
  '此': { eumhun: '차', meaning: '이것', radical: '止', strokes: 6 },
  '是': { eumhun: '시', meaning: '이것, 옳다', radical: '日', strokes: 9 },
  '非': { eumhun: '비', meaning: '아니다', radical: '非', strokes: 8 },
  '所': { eumhun: '소', meaning: '바, 곳', radical: '戶', strokes: 8 },
  '於': { eumhun: '어', meaning: '~에, ~에서', radical: '方', strokes: 8 },
  '與': { eumhun: '여', meaning: '~와, 주다', radical: '臼', strokes: 14 },
  '為': { eumhun: '위', meaning: '하다, 되다', radical: '爪', strokes: 9 },
  '從': { eumhun: '종', meaning: '따르다', radical: '彳', strokes: 11 },
  '自': { eumhun: '자', meaning: '스스로', radical: '自', strokes: 6 },
  '乃': { eumhun: '내', meaning: '이에, 곧', radical: '丿', strokes: 2 },
  '亦': { eumhun: '역', meaning: '또한', radical: '亠', strokes: 6 },
  '必': { eumhun: '필', meaning: '반드시', radical: '心', strokes: 5 },
  '當': { eumhun: '당', meaning: '마땅하다', radical: '田', strokes: 13 },
  '皆': { eumhun: '개', meaning: '모두', radical: '白', strokes: 9 },
  '要': { eumhun: '요', meaning: '요긴하다, 구하다', radical: '西', strokes: 9 },
  '又': { eumhun: '우', meaning: '또', radical: '又', strokes: 2 },
  '最': { eumhun: '최', meaning: '가장', radical: '曰', strokes: 12 },
  '甚': { eumhun: '심', meaning: '심하다, 매우', radical: '甘', strokes: 9 },
  '蓋': { eumhun: '개', meaning: '대개, 덮다', radical: '艸', strokes: 13 },
  '故': { eumhun: '고', meaning: '그러므로, 옛', radical: '攴', strokes: 9 },
  '因': { eumhun: '인', meaning: '인하다, 원인', radical: '囗', strokes: 6 },
  '但': { eumhun: '단', meaning: '다만', radical: '人', strokes: 7 },
  '且': { eumhun: '차', meaning: '또, 게다가', radical: '一', strokes: 5 },
  '或': { eumhun: '혹', meaning: '혹, 혹시', radical: '戈', strokes: 8 },
  '即': { eumhun: '즉', meaning: '곧', radical: '卩', strokes: 7 },
  '雖': { eumhun: '수/쇄', meaning: '비록', radical: '隹', strokes: 17 },
  '然': { eumhun: '연', meaning: '그러하다', radical: '火', strokes: 12 },
  '何': { eumhun: '하', meaning: '무엇, 어찌', radical: '人', strokes: 7 },
  '凡': { eumhun: '범', meaning: '무릇, 모든', radical: '几', strokes: 3 },
  '蓋': { eumhun: '개', meaning: '대개', radical: '艸', strokes: 13 },
  '豈': { eumhun: '기', meaning: '어찌', radical: '豆', strokes: 10 },

  // ═══════════════════════════════════════════
  // 동사/형용사 (자평진전 빈출)
  // ═══════════════════════════════════════════
  '見': { eumhun: '견', meaning: '보다', radical: '見', strokes: 7 },
  '知': { eumhun: '지', meaning: '알다', radical: '矢', strokes: 8 },
  '言': { eumhun: '언', meaning: '말, 말하다', radical: '言', strokes: 7 },
  '謂': { eumhun: '위', meaning: '이르다, 말하다', radical: '言', strokes: 16 },
  '曰': { eumhun: '왈', meaning: '가로되, 말하다', radical: '曰', strokes: 4 },
  '問': { eumhun: '문', meaning: '묻다', radical: '口', strokes: 11 },
  '答': { eumhun: '답', meaning: '대답하다', radical: '竹', strokes: 12 },
  '先': { eumhun: '선', meaning: '먼저', radical: '儿', strokes: 6 },
  '後': { eumhun: '후', meaning: '뒤, 나중', radical: '彳', strokes: 9 },
  '上': { eumhun: '상', meaning: '위', radical: '一', strokes: 3 },
  '下': { eumhun: '하', meaning: '아래', radical: '一', strokes: 3 },
  '內': { eumhun: '내', meaning: '안', radical: '入', strokes: 4 },
  '外': { eumhun: '외', meaning: '밖', radical: '夕', strokes: 5 },
  '多': { eumhun: '다', meaning: '많다', radical: '夕', strokes: 6 },
  '少': { eumhun: '소', meaning: '적다', radical: '小', strokes: 4 },
  '強': { eumhun: '강', meaning: '강하다', radical: '弓', strokes: 12 },
  '弱': { eumhun: '약', meaning: '약하다', radical: '弓', strokes: 10 },
  '輕': { eumhun: '경', meaning: '가볍다', radical: '車', strokes: 14 },
  '重': { eumhun: '중', meaning: '무겁다', radical: '里', strokes: 9 },
  '善': { eumhun: '선', meaning: '착하다, 좋다', radical: '口', strokes: 12 },
  '惡': { eumhun: '악/오', meaning: '악하다, 싫어하다', radical: '心', strokes: 12 },
  '吉': { eumhun: '길', meaning: '길하다', radical: '口', strokes: 6, myeongri: '길(吉). 좋은 운. 사주나 운에서 좋은 작용' },
  '凶': { eumhun: '흉', meaning: '흉하다', radical: '凵', strokes: 4, myeongri: '흉(凶). 나쁜 운. 사주나 운에서 나쁜 작용' },
  '貴': { eumhun: '귀', meaning: '귀하다', radical: '貝', strokes: 12, myeongri: '귀(貴). 고귀함. 관직, 높은 지위를 얻는 것' },
  '賤': { eumhun: '천', meaning: '천하다', radical: '貝', strokes: 15, myeongri: '천(賤). 비천함. 낮은 지위' },
  '富': { eumhun: '부', meaning: '부유하다', radical: '宀', strokes: 12, myeongri: '부(富). 부유함. 재물이 풍부한 것' },
  '貧': { eumhun: '빈', meaning: '가난하다', radical: '貝', strokes: 11, myeongri: '빈(貧). 가난함. 재물이 부족한 것' },
  '壽': { eumhun: '수', meaning: '목숨, 오래 살다', radical: '寸', strokes: 14, myeongri: '수(壽). 장수. 오래 사는 것' },
  '夭': { eumhun: '요', meaning: '일찍 죽다', radical: '大', strokes: 4, myeongri: '요(夭). 요절. 일찍 죽는 것' },

  // ═══════════════════════════════════════════
  // 사주 해석 관련
  // ═══════════════════════════════════════════
  '身': { eumhun: '신', meaning: '몸', radical: '身', strokes: 7, myeongri: '신(身). 일간(日干) 자신을 가리킴. 신강(身强)/신약(身弱)' },
  '主': { eumhun: '주', meaning: '주인', radical: '丶', strokes: 5, myeongri: '일주(日主). 일간을 가리키는 말. 사주의 주인공' },
  '元': { eumhun: '원', meaning: '으뜸, 근원', radical: '儿', strokes: 4, myeongri: '일원(日元). 일간을 가리키는 말' },
  '根': { eumhun: '근', meaning: '뿌리', radical: '木', strokes: 10, myeongri: '통근(通根). 천간이 지지에 뿌리를 둠. 힘의 원천' },
  '通': { eumhun: '통', meaning: '통하다', radical: '辵', strokes: 11, myeongri: '통근(通根), 통관(通關). 뿌리가 통하거나 관계가 통함' },
  '關': { eumhun: '관', meaning: '관문, 빗장', radical: '門', strokes: 19, myeongri: '통관(通關). 대립하는 두 오행 사이를 중재하는 오행' },
  '情': { eumhun: '정', meaning: '뜻, 정', radical: '心', strokes: 11, myeongri: '유정(有情)/무정(無情). 사주 글자 간의 친밀한 관계 여부' },
  '力': { eumhun: '력/역', meaning: '힘', radical: '力', strokes: 2, myeongri: '역량, 힘. 일간이나 용신의 힘의 정도' },
  '真': { eumhun: '진', meaning: '참, 진실', radical: '十', strokes: 10, myeongri: '진(眞)의 속자. 참된 것. 진신(真神), 진격(真格)' },
  '假': { eumhun: '가', meaning: '거짓, 빌리다', radical: '人', strokes: 11, myeongri: '가(假). 거짓된 것. 가신(假神), 가격(假格)' },

  // ═══════════════════════════════════════════
  // 특수 명리학 개념
  // ═══════════════════════════════════════════
  '祿': { eumhun: '록', meaning: '녹봉, 복', radical: '示', strokes: 13, myeongri: '록(祿). 녹봉. 천간이 지지에서 임관(臨官)의 위치. 건록격(建祿格)' },
  '建': { eumhun: '건', meaning: '세우다', radical: '廴', strokes: 9, myeongri: '건록(建祿). 월지가 일간의 록이 되는 것. 건록격(建祿格)' },
  '刃': { eumhun: '인', meaning: '칼날', radical: '刀', strokes: 3, myeongri: '양인(陽刃). 일간이 극왕한 상태. 양인격(陽刃格). 강렬한 기운' },
  '殺': { eumhun: '살', meaning: '죽이다', radical: '殳', strokes: 11, myeongri: '칠살(七殺)/편관(偏官). 나를 극하는 같은 음양의 오행. 강한 극' },
  '制': { eumhun: '제', meaning: '만들다, 제어하다', radical: '刀', strokes: 8, myeongri: '제화(制化). 살을 제어함. 식신제살(食神制殺)' },
  '護': { eumhun: '호', meaning: '보호하다', radical: '言', strokes: 20, myeongri: '보호. 용신을 보호하는 역할' },
  '救': { eumhun: '구', meaning: '구하다, 구원하다', radical: '攴', strokes: 11, myeongri: '구응(救應). 위기를 구함. 파격을 막아주는 글자' },
  '損': { eumhun: '손', meaning: '덜다, 손해', radical: '手', strokes: 13, myeongri: '손상. 용신이 손상됨' },
  '益': { eumhun: '익', meaning: '더하다, 이익', radical: '皿', strokes: 10, myeongri: '유익함. 사주에 도움이 되는 작용' },
  '調': { eumhun: '조', meaning: '고르다, 조절하다', radical: '言', strokes: 15, myeongri: '조후(調候). 사주의 한난조습을 조절하는 것. 병약법의 핵심' },
  '候': { eumhun: '후', meaning: '기후, 기다리다', radical: '人', strokes: 10, myeongri: '조후(調候)의 후. 기후. 사주의 온도와 습도 조절' },
  '寒': { eumhun: '한', meaning: '춥다', radical: '宀', strokes: 12, myeongri: '한(寒). 차가움. 겨울에 태어난 사주는 따뜻함이 필요' },
  '暖': { eumhun: '난', meaning: '따뜻하다', radical: '日', strokes: 13, myeongri: '난(暖). 따뜻함. 추운 사주에 필요한 화(火)의 기운' },
  '燥': { eumhun: '조', meaning: '마르다', radical: '火', strokes: 17, myeongri: '조(燥). 건조함. 여름 사주에 나타나는 건조한 기운' },
  '濕': { eumhun: '습', meaning: '습하다', radical: '水', strokes: 17, myeongri: '습(濕). 습함. 수기(水氣)가 많은 사주의 특성' },

  // ═══════════════════════════════════════════
  // 도화/역마/귀인 등 신살 관련
  // ═══════════════════════════════════════════
  '桃': { eumhun: '도', meaning: '복숭아', radical: '木', strokes: 10, myeongri: '도화살(桃花殺). 이성운, 매력, 인기와 관련된 신살' },
  '花': { eumhun: '화', meaning: '꽃', radical: '艸', strokes: 8, myeongri: '도화(桃花)의 화. 꽃처럼 아름답고 매력적인 기운' },
  '驛': { eumhun: '역', meaning: '역, 역참', radical: '馬', strokes: 23, myeongri: '역마살(驛馬殺). 이동, 여행, 변동과 관련된 신살' },
  '馬': { eumhun: '마', meaning: '말', radical: '馬', strokes: 10, myeongri: '역마(驛馬)의 마. 말처럼 움직이는 기운. 변동, 이사, 해외' },
  '貴': { eumhun: '귀', meaning: '귀하다', radical: '貝', strokes: 12, myeongri: '천을귀인(天乙貴人). 가장 좋은 귀인. 위기에서 도움을 받음' },
  '人': { eumhun: '인', meaning: '사람', radical: '人', strokes: 2, myeongri: '귀인(貴人). 도움을 주는 사람/기운' },
  '華': { eumhun: '화', meaning: '빛나다, 꽃', radical: '艸', strokes: 12, myeongri: '화개살(華蓋殺). 예술, 종교, 학문과 관련. 고독, 총명' },
  '蓋': { eumhun: '개', meaning: '덮다', radical: '艸', strokes: 13, myeongri: '화개(華蓋)의 개. 덮개. 하늘을 덮는 화려한 장막' },

  // ═══════════════════════════════════════════
  // 추가 일반 한자 (고전 문장 빈출)
  // ═══════════════════════════════════════════
  '一': { eumhun: '일', meaning: '하나', radical: '一', strokes: 1 },
  '二': { eumhun: '이', meaning: '둘', radical: '二', strokes: 2 },
  '三': { eumhun: '삼', meaning: '셋', radical: '一', strokes: 3 },
  '五': { eumhun: '오', meaning: '다섯', radical: '二', strokes: 4 },
  '六': { eumhun: '육/륙', meaning: '여섯', radical: '八', strokes: 4 },
  '七': { eumhun: '칠', meaning: '일곱', radical: '一', strokes: 2 },
  '九': { eumhun: '구', meaning: '아홉', radical: '丿', strokes: 2 },
  '十': { eumhun: '십', meaning: '열', radical: '十', strokes: 2 },
  '百': { eumhun: '백', meaning: '일백', radical: '白', strokes: 6 },
  '千': { eumhun: '천', meaning: '일천', radical: '十', strokes: 3 },
  '萬': { eumhun: '만', meaning: '일만', radical: '艸', strokes: 13 },
  '人': { eumhun: '인', meaning: '사람', radical: '人', strokes: 2 },
  '物': { eumhun: '물', meaning: '만물, 물건', radical: '牛', strokes: 8 },
  '事': { eumhun: '사', meaning: '일', radical: '亅', strokes: 8 },
  '心': { eumhun: '심', meaning: '마음', radical: '心', strokes: 4 },
  '性': { eumhun: '성', meaning: '성품', radical: '心', strokes: 8 },
  '情': { eumhun: '정', meaning: '뜻, 정', radical: '心', strokes: 11 },
  '意': { eumhun: '의', meaning: '뜻', radical: '心', strokes: 13 },
  '德': { eumhun: '덕', meaning: '덕', radical: '彳', strokes: 15 },
  '道': { eumhun: '도', meaning: '길, 도리', radical: '辵', strokes: 13 },
  '法': { eumhun: '법', meaning: '법, 방법', radical: '水', strokes: 8 },
  '經': { eumhun: '경', meaning: '경전, 지나다', radical: '糸', strokes: 13 },
  '書': { eumhun: '서', meaning: '글, 책', radical: '曰', strokes: 10 },
  '文': { eumhun: '문', meaning: '글월, 무늬', radical: '文', strokes: 4 },
  '章': { eumhun: '장', meaning: '글, 문장', radical: '立', strokes: 11 },
  '名': { eumhun: '명', meaning: '이름', radical: '口', strokes: 6 },
  '義': { eumhun: '의', meaning: '옳다, 의리', radical: '羊', strokes: 13 },
  '仁': { eumhun: '인', meaning: '어질다', radical: '人', strokes: 4 },
  '禮': { eumhun: '례/예', meaning: '예의', radical: '示', strokes: 18 },
  '智': { eumhun: '지', meaning: '지혜', radical: '日', strokes: 12 },
  '信': { eumhun: '신', meaning: '믿다, 믿음', radical: '人', strokes: 9 },

  // ═══════════════════════════════════════════
  // 자연/시간 관련
  // ═══════════════════════════════════════════
  '春': { eumhun: '춘', meaning: '봄', radical: '日', strokes: 9, myeongri: '봄. 목(木)의 계절. 인묘진(寅卯辰)월' },
  '夏': { eumhun: '하', meaning: '여름', radical: '夂', strokes: 10, myeongri: '여름. 화(火)의 계절. 사오미(巳午未)월' },
  '秋': { eumhun: '추', meaning: '가을', radical: '禾', strokes: 9, myeongri: '가을. 금(金)의 계절. 신유술(申酉戌)월' },
  '冬': { eumhun: '동', meaning: '겨울', radical: '冫', strokes: 5, myeongri: '겨울. 수(水)의 계절. 해자축(亥子丑)월' },
  '東': { eumhun: '동', meaning: '동쪽', radical: '木', strokes: 8, myeongri: '동쪽. 목(木)의 방위' },
  '西': { eumhun: '서', meaning: '서쪽', radical: '西', strokes: 6, myeongri: '서쪽. 금(金)의 방위' },
  '南': { eumhun: '남', meaning: '남쪽', radical: '十', strokes: 9, myeongri: '남쪽. 화(火)의 방위' },
  '北': { eumhun: '북', meaning: '북쪽', radical: '匕', strokes: 5, myeongri: '북쪽. 수(水)의 방위' },
  '山': { eumhun: '산', meaning: '산', radical: '山', strokes: 3 },
  '川': { eumhun: '천', meaning: '내, 시내', radical: '川', strokes: 3 },
  '河': { eumhun: '하', meaning: '강', radical: '水', strokes: 8 },
  '海': { eumhun: '해', meaning: '바다', radical: '水', strokes: 10 },
  '風': { eumhun: '풍', meaning: '바람', radical: '風', strokes: 9 },
  '雲': { eumhun: '운', meaning: '구름', radical: '雨', strokes: 12 },
  '雨': { eumhun: '우', meaning: '비', radical: '雨', strokes: 8 },
  '雪': { eumhun: '설', meaning: '눈', radical: '雨', strokes: 11 },
  '霜': { eumhun: '상', meaning: '서리', radical: '雨', strokes: 17 },
  '露': { eumhun: '로/노', meaning: '이슬', radical: '雨', strokes: 21 },
  '雷': { eumhun: '뢰/뇌', meaning: '우레', radical: '雨', strokes: 13 },
  '電': { eumhun: '전', meaning: '번개', radical: '雨', strokes: 13 },

  // ═══════════════════════════════════════════
  // 식물/동물 관련
  // ═══════════════════════════════════════════
  '草': { eumhun: '초', meaning: '풀', radical: '艸', strokes: 9 },
  '林': { eumhun: '림/임', meaning: '수풀', radical: '木', strokes: 8 },
  '森': { eumhun: '삼', meaning: '삼림', radical: '木', strokes: 12 },
  '松': { eumhun: '송', meaning: '소나무', radical: '木', strokes: 8 },
  '竹': { eumhun: '죽', meaning: '대나무', radical: '竹', strokes: 6 },
  '鳥': { eumhun: '조', meaning: '새', radical: '鳥', strokes: 11 },
  '魚': { eumhun: '어', meaning: '물고기', radical: '魚', strokes: 11 },
  '龍': { eumhun: '룡/용', meaning: '용', radical: '龍', strokes: 16 },
  '虎': { eumhun: '호', meaning: '호랑이', radical: '虍', strokes: 8 },
  '鼠': { eumhun: '서', meaning: '쥐', radical: '鼠', strokes: 13 },
  '牛': { eumhun: '우', meaning: '소', radical: '牛', strokes: 4 },
  '兎': { eumhun: '토', meaning: '토끼', radical: '儿', strokes: 7 },
  '蛇': { eumhun: '사', meaning: '뱀', radical: '虫', strokes: 11 },
  '羊': { eumhun: '양', meaning: '양', radical: '羊', strokes: 6 },
  '猴': { eumhun: '후', meaning: '원숭이', radical: '犬', strokes: 12 },
  '鷄': { eumhun: '계', meaning: '닭', radical: '鳥', strokes: 21 },
  '犬': { eumhun: '견', meaning: '개', radical: '犬', strokes: 4 },
  '豬': { eumhun: '저', meaning: '돼지', radical: '豕', strokes: 16 },

  // ═══════════════════════════════════════════
  // 신체/건강 관련
  // ═══════════════════════════════════════════
  '頭': { eumhun: '두', meaning: '머리', radical: '頁', strokes: 16 },
  '目': { eumhun: '목', meaning: '눈', radical: '目', strokes: 5 },
  '耳': { eumhun: '이', meaning: '귀', radical: '耳', strokes: 6 },
  '口': { eumhun: '구', meaning: '입', radical: '口', strokes: 3 },
  '手': { eumhun: '수', meaning: '손', radical: '手', strokes: 4 },
  '足': { eumhun: '족', meaning: '발', radical: '足', strokes: 7 },
  '骨': { eumhun: '골', meaning: '뼈', radical: '骨', strokes: 10 },
  '血': { eumhun: '혈', meaning: '피', radical: '血', strokes: 6 },
  '肉': { eumhun: '육', meaning: '고기, 살', radical: '肉', strokes: 6 },
  '皮': { eumhun: '피', meaning: '가죽, 피부', radical: '皮', strokes: 5 },
  '氣': { eumhun: '기', meaning: '기운', radical: '气', strokes: 10 },

  // ═══════════════════════════════════════════
  // 사회/직업/관직 관련
  // ═══════════════════════════════════════════
  '王': { eumhun: '왕', meaning: '임금', radical: '玉', strokes: 4 },
  '臣': { eumhun: '신', meaning: '신하', radical: '臣', strokes: 7 },
  '將': { eumhun: '장', meaning: '장수', radical: '寸', strokes: 11 },
  '相': { eumhun: '상', meaning: '서로, 재상', radical: '目', strokes: 9 },
  '侯': { eumhun: '후', meaning: '제후', radical: '人', strokes: 9 },
  '公': { eumhun: '공', meaning: '공평하다, 공', radical: '八', strokes: 4 },
  '私': { eumhun: '사', meaning: '사사롭다', radical: '禾', strokes: 7 },
  '民': { eumhun: '민', meaning: '백성', radical: '氏', strokes: 5 },
  '國': { eumhun: '국', meaning: '나라', radical: '囗', strokes: 11 },
  '家': { eumhun: '가', meaning: '집', radical: '宀', strokes: 10 },

  // ═══════════════════════════════════════════
  // 추가 자평진전 빈출 한자
  // ═══════════════════════════════════════════
  '太': { eumhun: '태', meaning: '크다, 매우', radical: '大', strokes: 4 },
  '極': { eumhun: '극', meaning: '극, 끝', radical: '木', strokes: 13 },
  '陰': { eumhun: '음', meaning: '그늘', radical: '阝', strokes: 11 },
  '陽': { eumhun: '양', meaning: '볕', radical: '阝', strokes: 12 },
  '太': { eumhun: '태', meaning: '매우, 크다', radical: '大', strokes: 4, myeongri: '태극(太極). 음양이 나뉘기 전의 상태' },
  '兩': { eumhun: '양', meaning: '둘, 양쪽', radical: '入', strokes: 8 },
  '儀': { eumhun: '의', meaning: '거동, 의식', radical: '人', strokes: 15 },
  '象': { eumhun: '상', meaning: '코끼리, 형상', radical: '豕', strokes: 12 },
  '數': { eumhun: '수', meaning: '셈, 수', radical: '攴', strokes: 15 },
  '理': { eumhun: '리/이', meaning: '이치, 다스리다', radical: '玉', strokes: 11 },
  '氣': { eumhun: '기', meaning: '기운', radical: '气', strokes: 10 },
  '質': { eumhun: '질', meaning: '바탕, 질', radical: '貝', strokes: 15 },
  '形': { eumhun: '형', meaning: '모양', radical: '彡', strokes: 7 },
  '勝': { eumhun: '승', meaning: '이기다', radical: '力', strokes: 12 },
  '負': { eumhun: '부', meaning: '지다, 짊어지다', radical: '貝', strokes: 9 },
  '進': { eumhun: '진', meaning: '나아가다', radical: '辵', strokes: 12 },
  '退': { eumhun: '퇴', meaning: '물러나다', radical: '辵', strokes: 9 },
  '消': { eumhun: '소', meaning: '사라지다', radical: '水', strokes: 10 },
  '長': { eumhun: '장', meaning: '길다, 자라다', radical: '長', strokes: 8 },
  '短': { eumhun: '단', meaning: '짧다', radical: '矢', strokes: 12 },
  '深': { eumhun: '심', meaning: '깊다', radical: '水', strokes: 11 },
  '淺': { eumhun: '천', meaning: '얕다', radical: '水', strokes: 11 },
  '厚': { eumhun: '후', meaning: '두텁다', radical: '厂', strokes: 9 },
  '薄': { eumhun: '박', meaning: '얇다', radical: '艸', strokes: 16 },
  '明': { eumhun: '명', meaning: '밝다', radical: '日', strokes: 8 },
  '暗': { eumhun: '암', meaning: '어둡다', radical: '日', strokes: 13 },
  '動': { eumhun: '동', meaning: '움직이다', radical: '力', strokes: 11 },
  '靜': { eumhun: '정', meaning: '고요하다', radical: '青', strokes: 16 },
  '開': { eumhun: '개', meaning: '열다', radical: '門', strokes: 12 },
  '閉': { eumhun: '폐', meaning: '닫다', radical: '門', strokes: 11 },
  '始': { eumhun: '시', meaning: '비로소', radical: '女', strokes: 8 },
  '終': { eumhun: '종', meaning: '마치다', radical: '糸', strokes: 11 },
  '古': { eumhun: '고', meaning: '옛, 예', radical: '口', strokes: 5 },
  '今': { eumhun: '금', meaning: '이제', radical: '人', strokes: 4 },
  '新': { eumhun: '신', meaning: '새롭다', radical: '斤', strokes: 13 },
  '舊': { eumhun: '구', meaning: '옛, 예전', radical: '臼', strokes: 18 },
  '常': { eumhun: '상', meaning: '항상', radical: '巾', strokes: 11 },
  '異': { eumhun: '이', meaning: '다르다', radical: '田', strokes: 11 },
  '同': { eumhun: '동', meaning: '같다', radical: '口', strokes: 6 },
  '別': { eumhun: '별', meaning: '다르다, 나누다', radical: '刀', strokes: 7 },
  '全': { eumhun: '전', meaning: '온전하다', radical: '入', strokes: 6 },
  '半': { eumhun: '반', meaning: '반', radical: '十', strokes: 5 },
  '分': { eumhun: '분', meaning: '나누다', radical: '刀', strokes: 4 },
  '和': { eumhun: '화', meaning: '화합하다', radical: '口', strokes: 8 },
  '平': { eumhun: '평', meaning: '평평하다', radical: '干', strokes: 5 },
  '正': { eumhun: '정', meaning: '바르다', radical: '止', strokes: 5 },
  '直': { eumhun: '직', meaning: '곧다', radical: '目', strokes: 8 },
  '曲': { eumhun: '곡', meaning: '굽다', radical: '曰', strokes: 6 },
  '方': { eumhun: '방', meaning: '모, 방향', radical: '方', strokes: 4 },
  '圓': { eumhun: '원', meaning: '둥글다', radical: '囗', strokes: 13 },
  '高': { eumhun: '고', meaning: '높다', radical: '高', strokes: 10 },
  '低': { eumhun: '저', meaning: '낮다', radical: '人', strokes: 7 },
  '左': { eumhun: '좌', meaning: '왼쪽', radical: '工', strokes: 5 },
  '右': { eumhun: '우', meaning: '오른쪽', radical: '口', strokes: 5 },
  '前': { eumhun: '전', meaning: '앞', radical: '刀', strokes: 9 },
  '後': { eumhun: '후', meaning: '뒤', radical: '彳', strokes: 9 },
  '裏': { eumhun: '리/이', meaning: '속', radical: '衣', strokes: 13 },
  '表': { eumhun: '표', meaning: '겉, 나타내다', radical: '衣', strokes: 8 },
  '中': { eumhun: '중', meaning: '가운데', radical: '丨', strokes: 4 },
  '間': { eumhun: '간', meaning: '사이', radical: '門', strokes: 12 },
  '遠': { eumhun: '원', meaning: '멀다', radical: '辵', strokes: 14 },
  '近': { eumhun: '근', meaning: '가깝다', radical: '辵', strokes: 7 },
  '來': { eumhun: '래/내', meaning: '오다', radical: '人', strokes: 8 },
  '去': { eumhun: '거', meaning: '가다', radical: '厶', strokes: 5 },
  '入': { eumhun: '입', meaning: '들다', radical: '入', strokes: 2 },
  '出': { eumhun: '출', meaning: '나다', radical: '凵', strokes: 5 },
  '行': { eumhun: '행', meaning: '가다, 행하다', radical: '行', strokes: 6 },
  '止': { eumhun: '지', meaning: '그치다', radical: '止', strokes: 4 },
  '動': { eumhun: '동', meaning: '움직이다', radical: '力', strokes: 11 },
  '作': { eumhun: '작', meaning: '짓다, 만들다', radical: '人', strokes: 7 },
  '起': { eumhun: '기', meaning: '일어나다', radical: '走', strokes: 10 },
  '立': { eumhun: '립/입', meaning: '서다', radical: '立', strokes: 5 },
  '坐': { eumhun: '좌', meaning: '앉다', radical: '土', strokes: 7 },
  '定': { eumhun: '정', meaning: '정하다', radical: '宀', strokes: 8 },
  '安': { eumhun: '안', meaning: '편안하다', radical: '宀', strokes: 6 },
  '危': { eumhun: '위', meaning: '위태하다', radical: '卩', strokes: 6 },
  '存': { eumhun: '존', meaning: '있다, 존재하다', radical: '子', strokes: 6 },
  '亡': { eumhun: '망', meaning: '망하다', radical: '亠', strokes: 3 },
  '盛': { eumhun: '성', meaning: '성하다', radical: '皿', strokes: 12 },
  '衰': { eumhun: '쇠', meaning: '쇠하다', radical: '衣', strokes: 10 },
  '興': { eumhun: '흥', meaning: '일어나다, 흥하다', radical: '臼', strokes: 16 },
  '廢': { eumhun: '폐', meaning: '폐하다', radical: '广', strokes: 15 },
  '榮': { eumhun: '영', meaning: '영화롭다', radical: '木', strokes: 14 },
  '枯': { eumhun: '고', meaning: '마르다', radical: '木', strokes: 9 },
  '茂': { eumhun: '무', meaning: '무성하다', radical: '艸', strokes: 8 },

  // ═══════════════════════════════════════════
  // 자평진전 장(章) 제목 관련
  // ═══════════════════════════════════════════
  '原': { eumhun: '원', meaning: '근원, 원래', radical: '厂', strokes: 10 },
  '配': { eumhun: '배', meaning: '짝, 배합', radical: '酉', strokes: 10 },
  '順': { eumhun: '순', meaning: '순서, 순하다', radical: '頁', strokes: 12 },
  '逆': { eumhun: '역', meaning: '거스르다', radical: '辵', strokes: 10 },
  '雜': { eumhun: '잡', meaning: '섞이다', radical: '隹', strokes: 18, myeongri: '잡기(雜氣). 진술축미(辰戌丑未)의 여러 기운이 섞인 상태' },
  '專': { eumhun: '전', meaning: '오로지', radical: '寸', strokes: 11 },
  '旺': { eumhun: '왕', meaning: '왕성하다', radical: '日', strokes: 8 },
  '衰': { eumhun: '쇠', meaning: '쇠하다', radical: '衣', strokes: 10 },
  '强': { eumhun: '강', meaning: '강하다', radical: '弓', strokes: 11 },
  '弱': { eumhun: '약', meaning: '약하다', radical: '弓', strokes: 10 },

  // ═══════════════════════════════════════════
  // 추가 고전 한문 빈출자
  // ═══════════════════════════════════════════
  '受': { eumhun: '수', meaning: '받다', radical: '又', strokes: 8 },
  '授': { eumhun: '수', meaning: '주다', radical: '手', strokes: 11 },
  '使': { eumhun: '사', meaning: '시키다, 사신', radical: '人', strokes: 8 },
  '令': { eumhun: '령/영', meaning: '시키다, 명령', radical: '人', strokes: 5 },
  '致': { eumhun: '치', meaning: '이르다', radical: '至', strokes: 10 },
  '至': { eumhun: '지', meaning: '이르다', radical: '至', strokes: 6 },
  '及': { eumhun: '급', meaning: '미치다', radical: '又', strokes: 4 },
  '達': { eumhun: '달', meaning: '통달하다', radical: '辵', strokes: 13 },
  '得': { eumhun: '득', meaning: '얻다', radical: '彳', strokes: 11 },
  '失': { eumhun: '실', meaning: '잃다', radical: '大', strokes: 5 },
  '持': { eumhun: '지', meaning: '가지다', radical: '手', strokes: 9 },
  '守': { eumhun: '수', meaning: '지키다', radical: '宀', strokes: 6 },
  '待': { eumhun: '대', meaning: '기다리다', radical: '彳', strokes: 9 },
  '望': { eumhun: '망', meaning: '바라다', radical: '月', strokes: 11 },
  '思': { eumhun: '사', meaning: '생각하다', radical: '心', strokes: 9 },
  '想': { eumhun: '상', meaning: '생각하다', radical: '心', strokes: 13 },
  '念': { eumhun: '념/염', meaning: '생각하다', radical: '心', strokes: 8 },
  '覺': { eumhun: '각', meaning: '깨닫다', radical: '見', strokes: 20 },
  '觀': { eumhun: '관', meaning: '보다', radical: '見', strokes: 25 },
  '察': { eumhun: '찰', meaning: '살피다', radical: '宀', strokes: 14 },
  '辨': { eumhun: '변', meaning: '분별하다', radical: '辛', strokes: 16 },
  '別': { eumhun: '별', meaning: '나누다, 다르다', radical: '刀', strokes: 7 },
  '類': { eumhun: '류/유', meaning: '무리', radical: '頁', strokes: 19 },
  '屬': { eumhun: '속', meaning: '속하다, 무리', radical: '尸', strokes: 21 },

  // ═══════════════════════════════════════════
  // 간지 관련 추가 한자
  // ═══════════════════════════════════════════
  '干': { eumhun: '간', meaning: '줄기, 방패', radical: '干', strokes: 3, myeongri: '천간(天干). 사주의 위쪽 글자' },
  '支': { eumhun: '지', meaning: '가지', radical: '支', strokes: 4, myeongri: '지지(地支). 사주의 아래쪽 글자' },
  '納': { eumhun: '납', meaning: '들이다, 바치다', radical: '糸', strokes: 10, myeongri: '납음(納音). 천간과 지지를 합하여 오행을 정하는 법' },
  '音': { eumhun: '음', meaning: '소리', radical: '音', strokes: 9, myeongri: '납음(納音). 소리의 오행' },
  '空': { eumhun: '공', meaning: '비다', radical: '穴', strokes: 8, myeongri: '공망(空亡). 비어 있는 지지. 그 지지의 작용이 약해짐' },
  '亡': { eumhun: '망', meaning: '망하다', radical: '亠', strokes: 3, myeongri: '공망(空亡). 없어짐' },
  '祿': { eumhun: '록', meaning: '녹, 복', radical: '示', strokes: 13, myeongri: '천간의 록. 천간이 지지에서 가장 왕성한 위치' },
  '馬': { eumhun: '마', meaning: '말', radical: '馬', strokes: 10, myeongri: '역마. 이동, 변동의 신살' },

  // ═══════════════════════════════════════════
  // 자평진전에 자주 등장하는 추가 한자
  // ═══════════════════════════════════════════
  '徐': { eumhun: '서', meaning: '천천히, 성씨', radical: '彳', strokes: 10, myeongri: '서자평(徐子平). 자평명리학의 창시자' },
  '沈': { eumhun: '심', meaning: '잠기다, 성씨', radical: '水', strokes: 7, myeongri: '심효첨(沈孝瞻). 자평진전의 저자' },
  '孝': { eumhun: '효', meaning: '효도', radical: '子', strokes: 7 },
  '任': { eumhun: '임', meaning: '맡기다, 성씨', radical: '人', strokes: 6, myeongri: '임철초(任鐵樵). 적천수의 주석자' },
  '滴': { eumhun: '적', meaning: '물방울', radical: '水', strokes: 14, myeongri: '적천수(滴天髓). 또 다른 명리학 고전' },
  '髓': { eumhun: '수', meaning: '골수', radical: '骨', strokes: 21, myeongri: '적천수(滴天髓). 명리학의 핵심 고전' },
  '窮': { eumhun: '궁', meaning: '다하다, 궁하다', radical: '穴', strokes: 15, myeongri: '궁통보감(窮通寶鑑). 조후법의 대표적 저서' },
  '通': { eumhun: '통', meaning: '통하다', radical: '辵', strokes: 11, myeongri: '궁통보감(窮通寶鑑). 막힌 것을 통함' },
  '寶': { eumhun: '보', meaning: '보배', radical: '宀', strokes: 20, myeongri: '궁통보감(窮通寶鑑). 보배로운 거울' },
  '鑑': { eumhun: '감', meaning: '거울, 비추다', radical: '金', strokes: 22, myeongri: '궁통보감(窮通寶鑑). 살피는 거울' },

  // ═══════════════════════════════════════════
  // 감정/심리 관련
  // ═══════════════════════════════════════════
  '樂': { eumhun: '락/악', meaning: '즐겁다, 음악', radical: '木', strokes: 15 },
  '苦': { eumhun: '고', meaning: '쓰다, 괴롭다', radical: '艸', strokes: 8 },
  '怒': { eumhun: '노', meaning: '성내다', radical: '心', strokes: 9, myeongri: '노(怒). 오지(五志) 중 목(木)의 감정' },
  '恐': { eumhun: '공', meaning: '두려워하다', radical: '心', strokes: 10, myeongri: '공(恐). 오지(五志) 중 수(水)의 감정' },
  '悲': { eumhun: '비', meaning: '슬프다', radical: '心', strokes: 12, myeongri: '비(悲). 오지(五志) 중 금(金)의 감정' },
  '憂': { eumhun: '우', meaning: '근심하다', radical: '心', strokes: 15, myeongri: '우(憂). 토(土)와 관련된 감정' },

  // ═══════════════════════════════════════════
  // 기타 명리학 관련
  // ═══════════════════════════════════════════
  '福': { eumhun: '복', meaning: '복', radical: '示', strokes: 14 },
  '禍': { eumhun: '화', meaning: '재앙', radical: '示', strokes: 14 },
  '災': { eumhun: '재', meaning: '재앙', radical: '火', strokes: 7 },
  '難': { eumhun: '난', meaning: '어렵다', radical: '隹', strokes: 19 },
  '吉': { eumhun: '길', meaning: '길하다', radical: '口', strokes: 6 },
  '凶': { eumhun: '흉', meaning: '흉하다', radical: '凵', strokes: 4 },
  '禎': { eumhun: '정', meaning: '상서롭다', radical: '示', strokes: 14 },
  '瑞': { eumhun: '서', meaning: '상서롭다', radical: '玉', strokes: 13 },
  '忠': { eumhun: '충', meaning: '충성', radical: '心', strokes: 8 },
  '孝': { eumhun: '효', meaning: '효도', radical: '子', strokes: 7 },
  '節': { eumhun: '절', meaning: '마디, 절개', radical: '竹', strokes: 13 },
  '義': { eumhun: '의', meaning: '옳다', radical: '羊', strokes: 13 },
  '廉': { eumhun: '렴/염', meaning: '청렴하다', radical: '广', strokes: 13 },
  '恥': { eumhun: '치', meaning: '부끄러움', radical: '心', strokes: 10 },
  '婚': { eumhun: '혼', meaning: '혼인', radical: '女', strokes: 11, myeongri: '혼인. 남자는 재성(財星), 여자는 관성(官星)으로 봄' },
  '姻': { eumhun: '인', meaning: '인연', radical: '女', strokes: 9 },
  '壽': { eumhun: '수', meaning: '목숨, 오래 살다', radical: '寸', strokes: 14 },
  '夭': { eumhun: '요', meaning: '일찍 죽다', radical: '大', strokes: 4 },
  '祥': { eumhun: '상', meaning: '상서롭다', radical: '示', strokes: 11 },
  '殃': { eumhun: '앙', meaning: '재앙', radical: '歹', strokes: 9 }
};

// 사전에 없는 한자를 위한 Unicode 기반 기본 정보 제공
function getHanjaInfo(char) {
  if (HANJA_DICT[char]) {
    return HANJA_DICT[char];
  }
  // CJK Unified Ideographs 범위 확인
  const code = char.charCodeAt(0);
  if (code >= 0x4E00 && code <= 0x9FFF) {
    return { eumhun: '(미등록)', meaning: '사전에 없는 한자입니다', radical: '-', strokes: '-' };
  }
  return null;
}

// 한자인지 확인
function isHanja(char) {
  const code = char.charCodeAt(0);
  return (code >= 0x4E00 && code <= 0x9FFF) ||
         (code >= 0x3400 && code <= 0x4DBF) ||
         (code >= 0xF900 && code <= 0xFAFF);
}
