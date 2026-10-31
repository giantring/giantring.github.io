/* ============================================================
   설정 — 배포할 때 여기만 고치면 된다
   ============================================================ */
const CONFIG = {
  repo: 'giantring/giantring.github.io',                                   // GitHub 계정/저장소
  report: 'https://x.com/giantring9275',       // 제보 받을 곳. 비우면 버튼이 숨는다
  qr: 'https://x.com/giantring9275/status/2101218964835860601',   // '배포 QR 코드' 버튼이 여는 곳. 비우면 버튼이 숨는다
  more: 'https://x.com/giantring9275',   // '다른 한글패치 보러가기' 버튼이 여는 곳. 비우면 버튼이 숨는다
  credits: [                                            // 만든 사람
    { name: '자트', egg: 'assets/video/SaveTwitter.Net_KljDZUsvHiW_3ApN_(636p).mp4', role: { ko: '번역·검수', ja: '翻訳・校正', en: 'Translation & QA' } },
    { name: 'Claude', role: { ko: '도구·빌드', ja: 'ツール・ビルド', en: 'Tools & build' } },
  ],
};

/* 판 정보 (위에서부터 이 순서로 나온다). 새 버전을 올리면 ver·tag·file·size·sha 를 바꾼다 */
const EDITIONS = [
  { id: 'miles',  code: 'MILES',  lang: 'ko', ver: 'v5.3',
    tag: 'miles-v5.3',   file: 'gyrozetter_kr_MILES_v5.3.zip',   size: '3.7 MB', cover: 100,
    url: 'https://drive.google.com/file/d/1ZyI_1Maz85oT_tUO2aJuHH7jjom-F1nE/view?usp=drivesdk',
    sha: '', img: 'assets/img/miles.jpg' },
  { id: 'tails',  code: 'TAILS',  lang: 'ko', ver: null, soon: true, img: 'assets/img/tails.jpg' },
  { id: 'prower', code: 'PROWER', lang: 'en', ver: 'v14.7',
    review: true,
    tag: 'prower-v14.7', file: 'gyrozetter_en_PROWER_v14.7.zip', size: '2.6 MB', cover: 100,
    url: 'https://drive.google.com/file/d/1ilINuxif36QRbtjFq1u3_oK88sJgNxho/view?usp=drivesdk',   // 외부 링크가 있으면 GitHub 대신 이곳으로 연결
    sha: '', img: 'assets/img/prower.jpg' },
];

/* ============================================================
   문구
   ============================================================ */
const I18N = {
 "ko": {
  "title": "자이로제타 알바로스의 날개 — 팬 번역 패치",
  "start.title": "초속변형 자이로제타<br>알바로스의 날개",
  "start.sub": "일본판 게임을 한국어와 영어로 플레이할 수 있게 해 주는 팬 패치입니다.",
  "start.cta2": "설치",
  "course.title": "줄거리",
  "course.lead": "스포일러 없이, 게임을 시작하기 전에 알아 두면 좋은 이야기만 담았습니다.",
  "course.cp": [
   [
    "2053년, 일본",
    "변형하는 차가 달리는 세상",
    "자동차에 인공지능을 실은 ‘AI카’가 일상이 된 시대. 그중에서도 로봇으로 변형하는 특별한 차가 있다. 그 이름은 <b>자이로제타</b>. 적성만 있다면 아이들도 몰 수 있다."
   ],
   [
    "버스트 파이트",
    "자이로제타의 격투 스포츠",
    "지금 자이로제타가 가장 빛나는 무대는 3대3으로 겨루는 <b>버스트 파이트</b>. 주인공의 부모 다이고와 나오도 한때 이름을 날린 챔피언이었다."
   ],
   [
    "악의 조직 제논",
    "자이로제타 전쟁",
    "7년 전, 악의 조직 \"제논\"에 의하여 큰 전쟁이 벌어졌다. 자이로제타는 그때 병기로 쓰였고, 전쟁이 끝난 지금도 자이로제타를 곱게 보지 않는 사람들이 있다."
   ],
   [
    "이야기의 시작",
    "요코하마 신도심에서",
    "요코하마 신도심에 사는 소년 유우키는 어느 날 폭주하는 자이로제타의 습격을 받는다. 그 일을 계기로 자이로제타의 드라이버가 된 유우키는, 일본 곳곳을 달리며 수수께끼의 사건에 뛰어들게 된다."
   ]
  ],
  "drv.name": "쿠도 유우키",
  "drv.alt": "久堂 ユウキ · Yuuki Kudou",
  "drv.desc": "요코하마 신도심에 사는 소년. 버스트 파이트 챔피언이었던 다이고와 나오의 아들이자, 아이돌을 꿈꾸는 여동생인 에리카의 오빠다. 폭주 자이로제타와 마주친 날부터 드라이버로서의 여행이 시작된다.",
  "drv.spec": [
   [
    "사는 곳",
    "요코하마 신도심"
   ],
   [
    "가족",
    "아버지 다이고 · 어머니 나오 · 여동생 에리카"
   ],
   [
    "이름",
    "게임을 시작할 때 바꿀 수 있다"
   ]
  ],
  "lang.ko": "한국어",
  "lang.en": "English",
  "soon": "준비 중",
  "review": "검수 중",
  "dl": "다운로드",
  "plat.hw": "3DS 실기",
  "plat.emu": "에뮬레이터",
  "req.game": "게임",
  "req.game.v": "일본판 (패키지·다운로드)",
  "req.code": "제품 코드",
  "req.tid": "타이틀 ID",
  "req.dev": "기기",
  "req.dev.hw": "Luma3DS가 설치된 3DS",
  "steps.hw": [
   [
    "압축 풀기",
    "받은 zip 파일의 압축을 풉니다."
   ],
   [
    "SD카드에 복사",
    "안에 있는 <code>luma</code> 폴더를 SD카드 맨 위(루트)에 복사합니다. 이미 <code>luma</code> 폴더가 있으면 덮어쓰지 말고 병합하세요.<br><code class=\"path\">sd:/luma/titles/0004000000059C00/romfs/</code>"
   ],
   [
    "Luma3DS 설정 열기",
    "SELECT를 누른 채 3DS 전원을 켭니다."
   ],
   [
    "게임 패치 켜기",
    "<b>Enable game patching</b>을 켜고 저장한 뒤 재부팅합니다."
   ],
   [
    "게임 실행",
    "타이틀 화면부터 번역된 글자가 보이면 성공입니다."
   ]
  ],
  "steps.emu": [
   [
    "압축 풀기",
    "받은 zip 파일의 압축을 풉니다."
   ],
   [
    "Mods 폴더 열기",
    "에뮬레이터의 게임 목록에서 게임을 우클릭하고 <b>Open Mods Location</b>을 고릅니다. 모바일에서는 게임을 길게 누르세요."
   ],
   [
    "romfs 복사",
    "<code>luma/titles/0004000000059C00/</code> 안에 있는 <code>romfs</code> 폴더를 열린 폴더에 복사합니다."
   ],
   [
    "게임 실행",
    "타이틀 화면부터 번역된 글자가 보이면 성공입니다."
   ]
  ],
  "pit.switch": "다른 판으로 바꿀 때는 기존 <code>0004000000059C00</code> 폴더(에뮬레이터는 mods 폴더의 <code>romfs</code>)를 먼저 지운 뒤 새로 복사하세요. 덮어쓰기만 하면 이전 판의 파일이 남을 수 있습니다.",
  "faq": [
   [
    "세이브 데이터에 영향이 있나요?",
    "없습니다. 패치는 게임이 읽는 텍스트·폰트 파일만 바꿔 끼웁니다. 폴더를 지우면 원래 게임으로 돌아갑니다."
   ],
   [
    "플레이어 이름을 한글이나 영어로 지어도 되나요?",
    "됩니다. 단, 한국어는 MILES·TAILS판에서만, 영어는 PROWER판에서만 적용 가능합니다."
   ],
   [
    "일본어로 남아 있는 화면이 있어요.",
    "일부 UI 라벨(게이지 이름 등)은 텍스트가 아니라 그림으로 들어 있어 이 패치로는 바꿀 수 없습니다. 그 밖의 자리라면 제보해 주세요."
   ],
   [
    "해외판이나 다른 지역판에서도 되나요?",
    "이 게임은 일본에서만 발매되었고, 패치는 일본판(CTR-P-ABCJ) 전용입니다."
   ],
   [
    "두 판을 같이 설치할 수 있나요?",
    "아니요. 한 번에 하나만 씁니다. 바꿀 때는 기존 폴더를 지우고 새로 복사하세요."
   ]
  ],
  "rep.title": "오류를 발견하셨나요?",
  "rep.desc": "X(트위터)로 DM을 보내 주세요. 문제가 보이는 화면의 스크린샷을 함께 첨부해 주시면 좋습니다. 글자가 깨지거나 잘린 화면도 큰 도움이 됩니다.",
  "rep.btn": "제보하기",
  "foot.disc": "이 사이트와 패치는 팬이 만든 비공식 번역이며, 원작의 개발사·발매사와 아무 관계가 없습니다. 게임과 관련 이미지의 저작권은 각 권리자에게 있습니다. 패치를 쓰려면 정식으로 구입한 게임이 필요하며, 게임 본체는 배포하지 않습니다.",
  "foot.img": "이미지 출처: 공식 사이트, 구글 제미나이",
  "ed.miles.name": "한국어판",
  "ed.prower.name": "영문판",
  "ed.tails.name": "한국어 더빙 명칭판",
  "start.em": "Hyper Speed Transform",
  "start.tag": "NINTENDO 3DS · 비공식 팬 번역",
  "start.cta": "패치 받기",
  "start.qr": "배포 QR 코드",
  "more": "다른 한글패치 보러가기",
  "grid.title": "버전을 고르세요",
  "grid.lead": "줄을 누르면 다운로드 버튼이 열립니다. 한 번에 한 판만 설치합니다.",
  "pit.title": "설치하기",
  "pit.lead": "기기를 고르면 그에 맞는 순서가 나옵니다.",
  "radio.title": "주의 사항"
 },
 "ja": {
  "title": "ジャイロゼッター アルバロスの翼 — ファン翻訳パッチ",
  "start.title": "超速変形ジャイロゼッター<br>アルバロスの翼",
  "start.sub": "日本版のゲームを韓国語・英語で遊べるようにするファン製パッチです。",
  "start.cta2": "導入方法",
  "course.title": "ストーリー",
  "course.lead": "ネタバレなしで、遊ぶ前に知っておきたいお話だけをまとめました。",
  "course.cp": [
   [
    "2053年、日本",
    "変形するクルマが走る世界",
    "人工知能を積んだクルマ「AIカー」が当たり前になった時代。その中でも、ロボットに変形する特別なクルマがある。その名は<b>ジャイロゼッター</b>。適性さえあれば、子どもでも乗りこなせる。"
   ],
   [
    "バーストファイト",
    "ジャイロゼッターの格闘スポーツ",
    "いまジャイロゼッターがいちばん輝く舞台は、3対3で戦う<b>バーストファイト</b>。主人公の両親、ダイゴとナオもかつて名を馳せたチャンピオンだった。"
   ],
   [
    "悪の組織ゼノン",
    "ジャイロゼッター戦争",
    "7年前、悪の組織「ゼノン」によって大きな戦争が起きた。ジャイロゼッターはそのとき兵器として使われ、戦争が終わった今も、ジャイロゼッターをよく思わない人々がいる。"
   ],
   [
    "物語のはじまり",
    "横浜新都心から",
    "横浜新都心に住む少年ユウキは、ある日、暴走するジャイロゼッターに襲われる。それをきっかけにジャイロゼッターのドライバーとなったユウキは、日本各地を駆けめぐり、謎の事件に飛び込んでいく。"
   ]
  ],
  "drv.name": "久堂 ユウキ",
  "drv.alt": "쿠도 유우키 · Yuuki Kudou",
  "drv.desc": "横浜新都心に住む少年。バーストファイトのチャンピオンだったダイゴとナオの息子で、アイドルを目指す妹・エリカの兄。暴走ジャイロゼッターと出会ったその日から、ドライバーとしての旅が始まる。",
  "drv.spec": [
   [
    "住まい",
    "横浜新都心"
   ],
   [
    "家族",
    "父ダイゴ・母ナオ・妹エリカ"
   ],
   [
    "名前",
    "ゲーム開始時に変更できる"
   ]
  ],
  "lang.ko": "韓国語",
  "lang.en": "英語",
  "soon": "準備中",
  "review": "校正中",
  "dl": "ダウンロード",
  "plat.hw": "3DS 実機",
  "plat.emu": "エミュレーター",
  "req.game": "ソフト",
  "req.game.v": "日本版(パッケージ・DL)",
  "req.code": "型番",
  "req.tid": "タイトルID",
  "req.dev": "環境",
  "req.dev.hw": "Luma3DSを導入した3DS",
  "steps.hw": [
   [
    "zipを展開",
    "ダウンロードしたzipファイルを展開します。"
   ],
   [
    "SDカードにコピー",
    "中にある <code>luma</code> フォルダをSDカードのいちばん上(ルート)にコピーします。すでに <code>luma</code> フォルダがある場合は、置き換えずに統合してください。<br><code class=\"path\">sd:/luma/titles/0004000000059C00/romfs/</code>"
   ],
   [
    "Luma3DSの設定を開く",
    "SELECTを押しながら3DSの電源を入れます。"
   ],
   [
    "ゲームパッチを有効にする",
    "<b>Enable game patching</b> をオンにして保存し、再起動します。"
   ],
   [
    "ゲームを起動",
    "タイトル画面から翻訳された文字が表示されれば成功です。"
   ]
  ],
  "steps.emu": [
   [
    "zipを展開",
    "ダウンロードしたzipファイルを展開します。"
   ],
   [
    "Modsフォルダを開く",
    "ゲーム一覧でソフトを右クリックし、<b>Open Mods Location</b> を選びます。スマートフォンではソフトを長押ししてください。"
   ],
   [
    "romfsをコピー",
    "<code>luma/titles/0004000000059C00/</code> の中の <code>romfs</code> フォルダを、開いたフォルダにコピーします。"
   ],
   [
    "ゲームを起動",
    "タイトル画面から翻訳された文字が表示されれば成功です。"
   ]
  ],
  "pit.switch": "別の版に切り替えるときは、既存の <code>0004000000059C00</code> フォルダ(エミュレーターの場合はmodsフォルダ内の <code>romfs</code>)を先に削除してからコピーしてください。上書きだけでは前の版のファイルが残ることがあります。",
  "faq": [
   [
    "セーブデータに影響はありますか?",
    "ありません。パッチはゲームが読み込むテキストとフォントのファイルを差し替えるだけです。フォルダを削除すれば元のゲームに戻ります。"
   ],
   [
    "プレイヤー名をハングルや英字にできますか?",
    "できます。ただし、ハングルはMILES・TAILS版のみ、英字はPROWER版のみ対応しています。"
   ],
   [
    "日本語のまま残っている画面があります。",
    "一部のUIラベル(ゲージ名など)はテキストではなく画像として収録されているため、このパッチでは変更できません。それ以外の箇所でしたらお知らせください。"
   ],
   [
    "海外版や他地域版でも使えますか?",
    "本作は日本でのみ発売されたタイトルで、パッチも日本版(CTR-P-ABCJ)専用です。"
   ],
   [
    "2つの版を同時に入れられますか?",
    "いいえ、一度に使えるのは1つだけです。切り替えるときは既存のフォルダを削除してからコピーしてください。"
   ]
  ],
  "rep.title": "不具合を見つけましたか?",
  "rep.desc": "X(旧Twitter)のDMでお知らせください。問題が出ている画面のスクリーンショットを添えていただけると助かります。文字化けや文字切れの画面も大いに役立ちます。",
  "rep.btn": "報告する",
  "foot.disc": "本サイトおよびパッチはファンによる非公式の翻訳であり、原作の開発元・発売元とは一切関係ありません。ゲームおよび関連画像の著作権は各権利者に帰属します。パッチの利用には正規に購入したソフトが必要です。ゲーム本体は配布していません。",
  "foot.img": "画像出典:公式サイト、Google Gemini",
  "ed.miles.name": "韓国語版",
  "ed.prower.name": "英語版",
  "ed.tails.name": "韓国語・吹き替え名称版",
  "start.em": "Hyper Speed Transform",
  "start.tag": "NINTENDO 3DS・非公式ファン翻訳",
  "start.cta": "パッチを入手",
  "start.qr": "配布QRコード",
  "more": "制作者のほかの翻訳パッチ",
  "grid.title": "版を選んでください",
  "grid.lead": "行を押すとダウンロードボタンが開きます。一度に入れられるのは1つの版だけです。",
  "pit.title": "導入する",
  "pit.lead": "環境を選ぶと、それに合わせた手順が表示されます。",
  "radio.title": "注意事項"
 },
 "en": {
  "title": "Gyrozetter: Wings of Albaros — Fan Translation",
  "start.title": "Hyper Speed Transforming Gyrozetter<br>Wings of Albaros",
  "start.sub": "A fan-made patch that lets you play the Japanese release in Korean or English.",
  "start.cta2": "Install",
  "course.title": "Story",
  "course.lead": "No spoilers: just what is worth knowing before you start.",
  "course.cp": [
   [
    "Japan, 2053",
    "A world of transforming cars",
    "Cars carrying artificial intelligence, the “AI cars”, are part of everyday life. A special few can transform into robots. They are called <b>Gyrozetters</b>, and anyone with the aptitude can drive one, even a kid."
   ],
   [
    "Burst Fight",
    "The Gyrozetter fighting sport",
    "Today the biggest stage for Gyrozetters is the three-on-three <b>Burst Fight</b>. The hero’s parents, Daigo and Nao, were famous champions in their day."
   ],
   [
    "Evil organization Xenon",
    "The Gyrozetter War",
    "Seven years ago the evil organization \"Xenon\" started a great war, and Gyrozetters were used as weapons. Even now that the war is over, some people still look at Gyrozetters with suspicion."
   ],
   [
    "Where it begins",
    "New Yokohama Center",
    "Yuuki, a boy from New Yokohama Center, is attacked one day by a runaway Gyrozetter. That day he becomes a Gyrozetter driver himself, and before long he is racing across Japan and into a string of mysterious incidents."
   ]
  ],
  "drv.name": "Yuuki Kudou",
  "drv.alt": "久堂 ユウキ · 쿠도 유우키",
  "drv.desc": "A boy from New Yokohama Center. Son of Daigo and Nao, former Burst Fight champions, and big brother to Erica, his little sister who dreams of becoming an idol. His journey as a driver begins the day he runs into a runaway Gyrozetter.",
  "drv.spec": [
   [
    "Home",
    "New Yokohama Center"
   ],
   [
    "Family",
    "Father Daigo · Mother Nao · Sister Erica"
   ],
   [
    "Name",
    "Can be changed when you start the game"
   ]
  ],
  "lang.ko": "Korean",
  "lang.en": "English",
  "soon": "Coming soon",
  "review": "In review",
  "dl": "Download",
  "plat.hw": "3DS hardware",
  "plat.emu": "Emulator",
  "req.game": "Game",
  "req.game.v": "Japanese release (cart or eShop)",
  "req.code": "Product code",
  "req.tid": "Title ID",
  "req.dev": "Device",
  "req.dev.hw": "A 3DS with Luma3DS",
  "steps.hw": [
   [
    "Extract",
    "Extract the zip file you downloaded."
   ],
   [
    "Copy to the SD card",
    "Copy the <code>luma</code> folder inside to the root of your SD card. If a <code>luma</code> folder is already there, merge it rather than replacing it.<br><code class=\"path\">sd:/luma/titles/0004000000059C00/romfs/</code>"
   ],
   [
    "Open Luma3DS settings",
    "Hold SELECT while powering on the 3DS."
   ],
   [
    "Turn on game patching",
    "Enable <b>Enable game patching</b>, save, and reboot."
   ],
   [
    "Play",
    "If the title screen shows translated text, you are done."
   ]
  ],
  "steps.emu": [
   [
    "Extract",
    "Extract the zip file you downloaded."
   ],
   [
    "Open the mods folder",
    "Right-click the game in the emulator's list and choose <b>Open Mods Location</b>. On mobile, long-press the game instead."
   ],
   [
    "Copy romfs",
    "Copy the <code>romfs</code> folder from inside <code>luma/titles/0004000000059C00/</code> into the folder that opens."
   ],
   [
    "Play",
    "If the title screen shows translated text, you are done."
   ]
  ],
  "pit.switch": "To switch editions, delete the existing <code>0004000000059C00</code> folder first (on an emulator, the <code>romfs</code> folder in mods), then copy the new one. Copying over the top can leave files from the old edition behind.",
  "faq": [
   [
    "Does it affect my save data?",
    "No. The patch only swaps in the text and font files the game reads. Delete the folder and you are back to the original game."
   ],
   [
    "Can I use an English or Korean player name?",
    "Yes. Korean names work only in the MILES and TAILS editions, and English names only in the PROWER edition."
   ],
   [
    "Some screens are still in Japanese.",
    "A few UI labels (gauge names and the like) are stored as images rather than text, so this patch cannot change them. Anywhere else, please let us know."
   ],
   [
    "Does it work with other regions?",
    "The game was only released in Japan, and the patch is for the Japanese release (CTR-P-ABCJ) only."
   ],
   [
    "Can I install both editions?",
    "No, use one at a time. To switch, delete the existing folder and copy the new one."
   ]
  ],
  "rep.title": "Found a mistake?",
  "rep.desc": "Please send a DM on X (Twitter), with a screenshot of the screen where you saw it. Garbled or cut-off text helps a lot too.",
  "rep.btn": "Report an issue",
  "foot.disc": "This site and the patches are an unofficial fan translation with no affiliation to the game's developer or publisher. The game and related images belong to their respective owners. You need a legitimately purchased copy of the game; no game files are distributed here.",
  "foot.img": "Images: official website, Google Gemini",
  "ed.miles.name": "Korean edition",
  "ed.prower.name": "English edition",
  "ed.tails.name": "Korean dub-names edition",
  "start.em": "Hyper Speed Transform",
  "start.tag": "NINTENDO 3DS · UNOFFICIAL FAN TRANSLATION",
  "start.cta": "Get the patch",
  "start.qr": "Download QR code",
  "more": "More patches by the translator",
  "grid.title": "Pick an edition",
  "grid.lead": "Tap a row to open the download. Install one edition at a time.",
  "pit.title": "Install",
  "pit.lead": "Pick your platform to see the steps for it.",
  "radio.title": "Important notes"
 }
};

/* ============================================================
   동작
   ============================================================ */
const LANGS = ['ko', 'ja', 'en'];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};
const S = { lang: 'ko', open: store.get('ed') || 'miles', plat: store.get('plat') || 'hw' };
const $ = s => document.querySelector(s);
const t = k => (I18N[S.lang][k] !== undefined ? I18N[S.lang][k] : I18N.en[k]);
const ARROW = '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 5l7 7-7 7"/></svg>';
const DL = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>';
const PLUS = '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 5v14M5 12h14"/></svg>';

function cells(pct) {
  const on = Math.round(pct / 5);
  return `<span class="cells">${Array.from({ length: 20 }, (_, i) => `<i class="${i < on ? 'on' : ''}"></i>`).join('')}</span>`;
}

function renderRows() {
  $('#rows').innerHTML = EDITIONS.map((e, i) => {
    const open = S.open === e.id && !e.soon;
    const url = e.soon ? '' : (e.url || `https://github.com/${CONFIG.repo}/releases/download/${e.tag}/${e.file}`);
    return `
    <div class="row ${e.soon ? 'soon' : ''} ${open ? 'open' : ''}" data-id="${e.id}">
      <button class="row-main" type="button" ${e.soon ? 'aria-disabled="true"' : `aria-expanded="${open}"`}>
        <span class="pos">${String(i + 1).padStart(2, '0')}</span>
        <span class="r-name"><b>${e.code}${e.review ? `<i class="rv">${t('review')}</i>` : ''}</b><span>${t(`ed.${e.id}.name`)}</span></span>
        <span class="r-lang">${t('lang.' + e.lang)}</span>
        <span class="meter">${e.soon ? `<span class="dns">${t('soon')}</span>` : `${cells(e.cover)}<b>${e.cover}%</b>`}</span>
        <span class="r-ver" data-size="${e.size || ''}">${e.ver || '—'}</span>
        <span class="r-size">${e.size || '—'}</span>
        <span class="r-arrow">${e.soon ? '' : ARROW}</span>
      </button>
      <div class="row-body"><div>
        <div class="row-inner">
          <div class="row-side">
            <img class="row-thumb" src="${e.img}" alt="" data-optional>
            ${e.soon ? `<span class="go off">${t('soon')}</span>` :
              `<a class="go" href="${url}" ${e.url ? 'target="_blank" rel="noopener"' : `download="${e.file}"`} data-dl="${e.id}">${DL}<span>${t('dl')} · ${e.size}</span></a>
               ${e.sha ? `<div class="sha"><b>SHA-256</b>${e.sha}</div>` : ''}`}
          </div>
        </div>
      </div></div>
    </div>`;
  }).join('');
  $('#rows').querySelectorAll('.row:not(.soon) .row-main').forEach(b => b.addEventListener('click', () => {
    const id = b.parentElement.dataset.id;
    S.open = S.open === id ? '' : id; store.set('ed', S.open);
    document.querySelectorAll('.row').forEach(r => {
      const o = r.dataset.id === S.open;
      r.classList.toggle('open', o);
      r.querySelector('.row-main').setAttribute('aria-expanded', String(o));
    });
  }));
  // 받고 나면 설치 안내로
  $('#rows').querySelectorAll('[data-dl]').forEach(a => a.addEventListener('click', () => {
    setTimeout(() => $('#pit').scrollIntoView({ behavior: 'smooth' }), 400);
  }));
  wireImages($('#rows'));
}

function renderCourse() {
  $('#checkpoints').innerHTML = t('course.cp').map(([when, h, p], i) => `
    <div class="cp reveal">
      <span class="cp-flag">CP${i + 1}</span>
      ${when ? `<small>${when}</small>` : ''}<h3>${h}</h3><p>${p}</p>
    </div>`).join('');
  $('#drvSpec').innerHTML = t('drv.spec').map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
}

function renderPit() {
  document.querySelectorAll('.toggle button').forEach(b => b.classList.toggle('on', b.dataset.plat === S.plat));
  document.querySelectorAll('[data-plat-only]').forEach(el => el.hidden = el.dataset.platOnly !== S.plat);
  const steps = t('steps.' + S.plat);
  $('#laps').innerHTML = steps.map(([h, p], i) => `
    <li class="lap">
      <div class="lap-no"><small>LAP</small><b>${i + 1}<em>/${steps.length}</em></b></div>
      <div class="lap-body"><h5>${h}</h5><p>${p}</p></div>
    </li>`).join('');
}

function renderFaq() {
  $('#faq').innerHTML = t('faq').map(([q, a], i) => `
    <details class="msg"><summary><span class="ch">CH.${String(i + 1).padStart(2, '0')}</span><span>${q}</span>${PLUS}</summary><p>${a}</p></details>`).join('');
}

function renderCrew() {
  $('#crew').innerHTML = CONFIG.credits.map(c => `<div><small>${c.label || c.role.en}</small>${c.egg ? `<b class="egg" role="button" tabindex="0" data-egg="${c.egg}">${c.name}</b>` : `<b>${c.name}</b>`} · ${c.role[S.lang] || c.role.en}</div>`).join('');
}

function renderStatic() {
  document.documentElement.lang = S.lang;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = I18N[S.lang][el.dataset.i18n]; if (typeof v === 'string') el.innerHTML = v; });
  document.querySelectorAll('.langs button').forEach(b => b.classList.toggle('on', b.dataset.lang === S.lang));
}

function renderAll() {
  renderStatic(); renderRows(); renderCourse(); renderPit(); renderFaq(); renderCrew(); observeReveal();
}

/* 아직 넣지 않은 이미지는 감춘다 */
function wireImages(root = document) {
  root.querySelectorAll('img[data-optional]').forEach(img => {
    const fail = () => img.classList.add('missing');
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener('error', fail, { once: true });
  });
}

/* 스크롤하면 떠오르듯 나타난다 */
let obs;
function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  obs = obs || new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(e => obs.observe(e));
}

/* 진행 계기판 + 오른쪽 랩 표시 */
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const pct = max > 0 ? Math.round(scrollY / max * 100) : 0;
  $('#speedoFill').style.width = pct + '%';
  $('#speedoVal').textContent = pct;
  let cur = '';
  for (const id of ['grid', 'pit', 'course', 'radio']) {
    const el = document.getElementById(id);
    if (el.getBoundingClientRect().top < innerHeight * .45) cur = id;
  }
  document.querySelectorAll('.laps a').forEach(a => a.classList.toggle('on', a.dataset.sec === cur));
}

/* 첫 화면 속도선 */
(function speedlines() {
  const box = $('#speedlines'); let h = '';
  for (let i = 0; i < 14; i++) {
    const top = Math.round(Math.random() * 100), dur = (1.6 + Math.random() * 2.4).toFixed(2), del = (-Math.random() * 4).toFixed(2);
    h += `<i style="top:${top}%;animation-duration:${dur}s;animation-delay:${del}s"></i>`;
  }
  box.innerHTML = h;
})();

/* 언어 */
function pickLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(q)) return q;
  const s = store.get('lang'); if (LANGS.includes(s)) return s;
  for (const l of navigator.languages || [navigator.language || '']) {
    const p = (l || '').slice(0, 2).toLowerCase(); if (LANGS.includes(p)) return p;
  }
  return 'en';
}
function setLang(l) {
  S.lang = l; store.set('lang', l);
  const u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u);
  renderAll();
}

document.querySelectorAll('.langs button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
document.querySelectorAll('.toggle button').forEach(b => b.addEventListener('click', () => {
  S.plat = b.dataset.plat; store.set('plat', S.plat); renderPit();
}));
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);

const rb = $('#reportBtn');
const qb = $('#qrBtn');
if (CONFIG.qr) qb.href = CONFIG.qr; else qb.remove();
document.querySelectorAll('[data-more]').forEach(a => { if (CONFIG.more) a.href = CONFIG.more; else a.remove(); });
if (CONFIG.report) { rb.href = CONFIG.report; rb.target = '_blank'; rb.rel = 'noopener'; } else $('#report').remove();


S.lang = pickLang();
renderAll();
wireImages();
onScroll();

/* 이스터에그: 크레딧에서 이름(egg 가 있는 사람)을 누르면 영상이 열린다 */
(() => {
  const crew = $('#crew');
  if (!crew) return;
  const open = src => {
    const box = document.createElement('div');
    box.className = 'egg-box';
    box.innerHTML = `<video src="${src}" controls autoplay playsinline></video><button class="egg-x" type="button" aria-label="close">×</button>`;
    const close = () => { box.remove(); document.removeEventListener('keydown', esc); };
    const esc = e => { if (e.key === 'Escape') close(); };
    box.addEventListener('click', e => { if (e.target === box || e.target.classList.contains('egg-x')) close(); });
    document.addEventListener('keydown', esc);
    document.body.appendChild(box);
  };
  crew.addEventListener('click', e => { const b = e.target.closest('[data-egg]'); if (b) open(b.dataset.egg); });
  crew.addEventListener('keydown', e => {
    const b = e.target.closest('[data-egg]');
    if (b && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(b.dataset.egg); }
  });
})();
