# Destination dictionary — 한글 ↔ English folder map

`images/destinations/` is KCT's destination photo asset library. Folders are named in
English kebab-case, but our working language is Korean — this file is the canonical
mapping between Korean destination names and their folder names.

**For AI agents and collaborators:** when asked about a destination by its Korean name,
look it up here first to find the corresponding folder. When adding a NEW destination
folder, you MUST add a row to this table (including common aliases people might search for).

| Folder | English name | Korean (한글) | Aliases / also searched as | City · Region | Trips |
|---|---|---|---|---|---|
| `buseoksa-temple` | Buseoksa Temple | 부석사 | 영주 부석사, 무량수전 | Yeongju 영주 · Gyeongbuk | N100 |
| `seonbi-culture-festival` | Seonbi Culture Festival | 영주선비문화축제 | 선비축제, 선비문화축제, 선비촌 | Yeongju 영주 · Gyeongbuk | N100 |
| `chunhyang-festival` | Chunhyang Festival | 춘향제 | 남원 춘향제, 춘향축제 | Namwon 남원 · Jeonbuk | N100, N101 |
| `kim-byeong-jong-art-museum` | Kim Byeong-jong Art Museum | 김병종미술관 | 남원시립김병종미술관 | Namwon 남원 · Jeonbuk | N100 |
| `wonsaek-painting-village` | Wonsaek Painting Village | 원색명화마을 | 원색마을, 명화마을 | Namwon 남원 · Jeonbuk | N100 |
| `jeonju-hanok-village` | Jeonju Hanok Village | 전주한옥마을 | 한옥마을 | Jeonju 전주 · Jeonbuk | N100 |
| `gyeonggijeon-royal-shrine` | Gyeonggijeon Royal Shrine | 경기전 | 전주 경기전, 어진박물관 | Jeonju 전주 · Jeonbuk | N100 |
| `jeonju-national-museum` | Jeonju National Museum | 국립전주박물관 | 전주박물관 | Jeonju 전주 · Jeonbuk | N100 |
| `jeonju-museum-of-history` | Jeonju Museum of History | 전주역사박물관 | 역사박물관 | Jeonju 전주 · Jeonbuk | N100 |
| `ganghwa-doraemi-village` | Doraemi Village | 도래미마을 | 강화도래미마을, 島來美마을 | Ganghwa 강화 (Seonwon-myeon 선원면) · Incheon | N102 |
| `mitasa-temple` | Mitasa Temple | 미타사 | 음성 미타사, 지장보살입상, 마애여래입상 | Eumseong 음성 (Soi-myeon 소이면) · Chungbuk | N102 |
| `eumseong-pumba-festival` | Eumseong Pumba Festival | 음성품바축제 | 품바축제, 품바, 설성공원, 꽃동네 | Eumseong 음성 · Chungbuk | N102 |
| `chungju-dive-festival` | Chungju Dive Festival | 충주 다이브 페스티벌 | 다이브페스티벌, DIVE 페스티벌, 충주종합운동장 | Chungju 충주 · Chungbuk | N102 |
| `chungju-mireukdaewonji` | Mireukdaewonji Temple Site | 충주 미륵대원지 | 미륵대원지, 미륵리사지, 미륵리 석조여래입상, 하늘재 | Chungju 충주 (Suanbo 수안보) · Chungbuk | N102 |
| `chungju-coffee-museum` | Chungju Coffee Museum | 충주커피박물관 | 커피박물관 | Chungju 충주 · Chungbuk | N102 |
| `chungju-market` | Chungju Market | 충주시장 | 충주 전통시장, 자유시장, 공설시장 | Chungju 충주 · Chungbuk | N102 |
| `chungju-aquarium` | Chungju Aquarium | 충주 아쿠아리움 | 아쿠아리움, 탄금공원, 탄금호, 능암늪지생태공원 | Chungju 충주 · Chungbuk | N102 |
| `mokgye-naru` | Mokgye Naru River Port | 목계나루 | 목계나루터, 목계장터, 강배체험관, 목계솔밭 | Chungju 충주 (Eomjeong-myeon 엄정면) · Chungbuk | N102 |

## Naming rules (when creating a new folder)

1. **English kebab-case**, ASCII only — Korean filenames break across macOS/Linux
   (NFC/NFD Unicode normalization) and in URLs.
2. Use the **official romanization** where one exists (VisitKorea spelling preferred):
   부석사 → `buseoksa-temple`, not `pusoksa` or `buseok-sa`.
3. Prefix with the **city** when the name alone is generic or could collide:
   `chungju-market`, `chungju-aquarium` — but skip the prefix when the name is already
   unique (`mokgye-naru`, `buseoksa-temple`).
4. Suffix with the **type** when it helps recognition: `-temple`, `-festival`,
   `-village`, `-museum`, `-market`.
5. Add the row here **in the same commit** that creates the folder.
