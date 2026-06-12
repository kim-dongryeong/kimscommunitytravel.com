# Instagram caption template — trip posts

The standard format for KCT trip announcement captions. Follow it exactly unless the
organizer says otherwise. Finished captions are saved next to the trip's promo images
in Google Drive: `Tour08 & KCT/[NXX] <trip name> <dates>/홍보/nXX-instagram-caption.txt`.

## Hard rules

1. **≤ 2,200 characters** (Instagram's caption limit — count CHARACTERS with `len()`,
   not bytes; Korean and emoji are multi-byte).
2. **Every hashtag needs its `#`.** (A past post shipped with bare words —
   `KimCommunityHouse StudyAbroadKorea ...` — because the `#` were lost. Verify by
   counting `#` against the tag list.)
3. **Meeting time = 15 minutes before departure** (sometimes 20 — confirm with the
   organizer). Default meeting point is **Yongsan Station Exit 1**. Always written
   as the two-line pair:
   ```
   ⏰ 𝗠𝗲𝗲𝘁𝗶𝗻𝗴: 07:15, Yongsan Station Exit 1
   🏃‍♀️‍➡️ 𝗗𝗲𝗽𝗮𝗿𝘁 𝟬𝟳:𝟯𝟬 · Exact pin announced individually
   ```
4. **Korean destination names come from the dictionary** —
   `images/destinations/DESTINATIONS.md`. Format: `emoji English / 한글 · City`.
5. **Bold-unicode styling** (Mathematical Sans-Serif Bold, 𝗙𝗥𝗘𝗘 style) goes on:
   - field labels (𝗗𝗮𝘁𝗲𝘀:, 𝗠𝗲𝗲𝘁𝗶𝗻𝗴:, 𝗗𝗲𝘀𝘁𝗶𝗻𝗮𝘁𝗶𝗼𝗻𝘀:, 𝗣𝗿𝗶𝗰𝗲:, 𝗪𝗵𝗼:)
   - section headers (𝗔𝗯𝗼𝘂𝘁 𝗧𝗵𝗶𝘀 𝗧𝗿𝗶𝗽, 𝗪𝗵𝗮𝘁'𝘀 𝗜𝗻𝗰𝗹𝘂𝗱𝗲𝗱, 𝗛𝗢𝗪 𝗧𝗢 𝗝𝗢𝗜𝗡)
   - hook words and key names (𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗟𝗬 𝗙𝗥𝗘𝗘, artist names, 𝗦𝗶𝗴𝗻 𝘂𝗽 𝗡𝗢𝗪!)
   Never set body paragraphs in it (unreadable to screen readers). Generate with:
   A–Z → U+1D5D4ff, a–z → U+1D5EE ff, 0–9 → U+1D7EC ff.
6. Target audience: exchange/international students in Korea, mostly European.
   Tone: warm, playful, concrete. No corporate-speak.

## Structure (in order)

```
<hook emoji> [NXX] <Trip Title> — <hook: FREE / price / headline>
📆 Dates: <Month D–D, YYYY (Day–Day)>
⏰ Meeting: <HH:MM>, <meeting point>
🏃‍♀️‍➡️ Depart <HH:MM> · Exact pin announced individually
📍 Destinations: <City, City, City>
💸 Price: <price line — emphasize if free>
💖 Sponsored by Korean Government 🇰🇷        ← when applicable
🦄 Who: Foreigners & International Students only

💡 About This Trip
<the trip page's "About This Trip" paragraph, lightly tightened for Instagram>

<emoji> <English name> / <한글> · <City>     ← one line per destination,
...                                            in itinerary order

💖 What's Included
🚌 <bus>
🛌 <accommodation>
🍱 <meals>
🏛️ <fees>
🦮 English-speaking guide
<+ any trip-specific perks: gift certificates, etc.>

🔗 𝗛𝗢𝗪 𝗧𝗢 𝗝𝗢𝗜𝗡: Link in our Bio → fill the form → check your name on the list.

⚠️ <urgency line: limited seats / deadline>

#exchangestudentsinKorea #foreignersinKorea #internationalstudentsinkorea
#expatsinkorea #koreaexpats <+ ~5–10 trip-specific tags>
```

## Reference examples

- N100 (paid trip, standard format): see the caption in the N100 Instagram post.
- N102 (free trip, urgency variant): `…/[N102] …/홍보/n102-instagram-caption.txt`

## Related conventions

- Trip-wide conventions (meeting rule, pricing, booking form): `STRUCTURE.md` → "Trip conventions".
- Promo image system (posters, carousel cards, destination cards): `posters/n102-*.html`
  are the reference implementation; render JPGs with headless Chrome at the exact
  pixel size (`--window-size=1080,1350 --screenshot=…`).
