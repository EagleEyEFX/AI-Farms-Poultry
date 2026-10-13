// Trellised cucumber on drip fertigation — one source of truth for BOTH the
// in-app "Cucumber" template and the downloadable CSV.
//
// Day 0 = sowing day. Every event is "Day 0 + N", so the dates follow
// whatever sowing date is set on the field — nothing here is a calendar date.
//
// Categories: sowing, practice, monitoring, nutrition, flowering, fruiting,
// pesticide, fungicide, neem, harvest.
//
// Rates are standard planning figures per 15 L knapsack / per 1000 L of drip
// water. Product strengths vary by brand, so every spray row says to confirm
// on the label. PHI values are deliberately conservative planning numbers;
// the label always wins.

const FERT_NOTE =
  'Run fertigation for the full irrigation cycle, then flush the lines with plain water for 10 minutes so nothing sits in the drippers. Target EC at the emitter: 1.5–2.2 mS/cm. Pale new leaves = raise one step; leaf-edge burn = drop one step.';

const EVENING = 'Spray in the evening (after 5pm): protects pollinators and avoids leaf scorch.';

export const CUCUMBER_PROGRAMME = [
  // ─────────────── Week 1–2 · Establishment ───────────────
  {
    day: 0, title: 'SOWING DAY — sow, mulch, light irrigation', cat: 'sowing',
    rate: '2 seeds per hole, 2–3 cm deep · ~40–50 cm in-row × ~1.2 m between rows (trellis) · wet the root zone, do not flood',
    phi: null,
    notes: 'Assumes bed prepared before today: raised bed, basal manure/compost mixed in, drip laid and flushed, trellis posts in. Mulch right after sowing to hold moisture and cut weeds.',
  },
  {
    day: 0, title: 'Damping-off protection (skip if seed is already treated)', cat: 'fungicide',
    rate: 'Metalaxyl-M + mancozeb: 25–30g/15L, drench each planting station (~100ml) · confirm on label',
    phi: null,
    notes: 'One time only. Damping-off kills seedlings in warm, wet soil in the first 2 weeks. Do not repeat — later fungicides take over.',
  },
  {
    day: 3, title: 'Starter fertigation + check germination', cat: 'nutrition',
    rate: 'NPK 20-20-20 (or 19-19-19): 0.75kg/1000L via drip + MAP 12-61-0: 0.25kg/1000L (root boost)',
    phi: null,
    notes: `Most seed is up by day 3–5. ${FERT_NOTE}`,
  },
  {
    day: 6, title: 'Gap-fill missing stations + starter fertigation', cat: 'nutrition',
    rate: 'NPK 20-20-20: 0.75kg/1000L via drip',
    phi: null,
    notes: 'Re-sow any hole with no seedling TODAY (later than day 7 and the gap-filled plant lags the rest). ' + FERT_NOTE,
  },
  {
    day: 8, title: 'Imidacloprid drench — aphid/whitefly/beetle protection (ONE TIME ONLY)', cat: 'pesticide',
    rate: 'Imidacloprid 70WG: 1g/1000L via drip (same as the pepper programme) · confirm on label',
    phi: null,
    notes: 'Last neonicotinoid of the whole crop. Imidacloprid must go in BEFORE flowering — it is toxic to bees and cucumber needs pollinators. Aphids and whiteflies spread the viruses that wreck cucumber.',
  },
  {
    day: 9, title: 'Fertigation', cat: 'nutrition',
    rate: 'NPK 20-20-20: 0.75kg/1000L via drip',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 10, title: 'Thin to ONE plant per station', cat: 'practice',
    rate: 'Snip the weaker seedling at soil level — do not pull (pulling disturbs the keeper\'s roots)',
    phi: null,
    notes: 'Keep the straightest, strongest seedling.',
  },
  {
    day: 12, title: 'Fertigation + first weeding', cat: 'nutrition',
    rate: 'NPK 20-20-20: 1.0kg/1000L via drip',
    phi: null,
    notes: 'Hand-weed between plants and re-top the mulch. Keep weeds off the drip line — they hide mites and aphids. ' + FERT_NOTE,
  },

  // ─────────────── Week 3–4 · Vegetative ───────────────
  {
    day: 14, title: 'Start trellis training — tie the main stem', cat: 'practice',
    rate: 'Tie loosely with soft twine / clips every 2–3 days as the vine climbs · remove side shoots and any flowers on the lowest 5–6 nodes (~first 40–50 cm)',
    phi: null,
    notes: 'Clearing the lowest nodes gives a stronger plant, better airflow (less mildew) and cleaner fruit later. Keep the main stem growing upward; do not let it sprawl on the ground.',
  },
  {
    day: 14, title: 'Mancozeb — first protectant fungicide', cat: 'fungicide',
    rate: 'Mancozeb 80WP: 35–40g/15L · confirm on label',
    phi: 5,
    notes: 'Protectant against downy mildew and leaf spots. Start now, BEFORE you see disease — downy mildew is the main yield killer in humid weather. Spray the undersides of leaves.',
  },
  {
    day: 15, title: 'Fertigation (N-led) + calcium', cat: 'nutrition',
    rate: 'NPK 20-20-20: 1.0kg/1000L via drip · Calcium nitrate: 0.5kg/1000L via drip on the NEXT irrigation (separate tank/day)',
    phi: null,
    notes: 'Never put calcium nitrate in the same tank as phosphate or sulphate fertilisers — it precipitates and blocks drippers. ' + FERT_NOTE,
  },
  {
    day: 16, title: 'Neem oil — evening', cat: 'neem',
    rate: 'Neem oil: 25ml/15L + 2ml dish soap · SPRAY ALONE, apply after 5pm only',
    phi: 1,
    notes: 'Soft first pass on aphids, whiteflies and mites. Never on the same day as sulfur or abamectin.',
  },
  {
    day: 18, title: 'MITE BLOCK 1 — Abamectin knockdown (broad/spider mite, thrips, leaf miner)', cat: 'pesticide',
    rate: 'Abamectin: 5ml/15L (confirm on label — strength varies by formulation) · spray into growing tips and leaf undersides',
    phi: 7,
    notes: `Built in because broad mite is already on the farm. ${EVENING} Abamectin does not kill mite eggs, so the second spray 7 days later is essential. SKIP the pair only if you are certain no mites are on this field (scout first).`,
  },
  {
    day: 19, title: 'Fertigation + magnesium', cat: 'nutrition',
    rate: 'NPK 20-20-20: 1.0kg/1000L via drip · Magnesium sulphate (Epsom): 0.25kg/1000L (weekly)',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 21, title: 'Metalaxyl-M + mancozeb — systemic downy mildew cover', cat: 'fungicide',
    rate: 'Metalaxyl-M + mancozeb: 25–30g/15L · confirm on label',
    phi: 5,
    notes: 'Rotates away from plain mancozeb so downy mildew cannot build resistance. Use this product at most 2 times in the crop.',
  },
  {
    day: 22, title: 'Fertigation + calcium', cat: 'nutrition',
    rate: 'NPK 20-20-20: 1.0kg/1000L via drip · Calcium nitrate: 0.5kg/1000L on the next irrigation',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 25, title: 'MITE BLOCK 2 — Abamectin follow-up (7 days after block 1)', cat: 'pesticide',
    rate: 'Abamectin: 5ml/15L (confirm on label)',
    phi: 7,
    notes: `Catches mites that hatched since the first spray. ${EVENING} This is the last abamectin before flowering — after this, only use it if scouting shows active damage.`,
  },
  {
    day: 26, title: 'Fertigation — step up potassium', cat: 'nutrition',
    rate: 'NPK 20-20-20: 0.75kg/1000L + Potassium nitrate 13-0-46: 0.5kg/1000L via drip',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 28, title: 'Scout everything — mites, aphids, whitefly, mildew, virus', cat: 'monitoring',
    rate: 'Check 10 plants per bed: growing tips (curling/bronzing = mites), leaf undersides (whitefly, aphids, mildew), yellow mosaic or crinkled leaves (virus)',
    phi: null,
    notes: 'Pull and bag any plant showing virus symptoms (yellow mosaic, severe crinkling, stunting) — do not carry it past other plants. If tips still curl, repeat the abamectin pair rather than switching products.',
  },

  // ─────────────── Week 5 · Flowering (pollinators arrive — change the rules) ───────────────
  {
    day: 28, title: 'FLOWERING STARTS — protect pollinators from now on', cat: 'practice',
    rate: 'No daytime insecticide sprays · evening sprays only · no more imidacloprid or pyrethroids · leave flowering weeds at the field edge for bees',
    phi: null,
    notes: 'Cucumber needs bees. No bees = misshapen, curved, nubby fruit. Pyrethroids also tend to flare up mite populations, which is why none are in this programme.',
  },
  {
    day: 29, title: 'Fertigation (flower support) + boron', cat: 'flowering',
    rate: 'Potassium nitrate 13-0-46: 1.0kg/1000L + MAP 12-61-0: 0.3kg/1000L via drip · Boron (Solubor): 1–2g/15L foliar, ONCE',
    phi: null,
    notes: 'Boron improves flower set and pollen tube growth. Foliar boron once only — too much burns leaves. ' + FERT_NOTE,
  },
  {
    day: 30, title: 'Azoxystrobin — systemic mildew/anthracnose cover', cat: 'fungicide',
    rate: 'Azoxystrobin 250SC: 7–10ml/15L · confirm on label',
    phi: 1,
    notes: 'Max 2 sprays in a row of this group, then rotate. Also protects against gummy stem blight and anthracnose.',
  },
  {
    day: 32, title: 'Fertigation + calcium', cat: 'flowering',
    rate: 'Potassium nitrate: 1.0kg/1000L via drip · Calcium nitrate: 0.5kg/1000L on the next irrigation',
    phi: null, notes: 'Calcium keeps fruit firm and cuts blossom-end problems. ' + FERT_NOTE,
  },
  {
    day: 33, title: 'Spinosad — thrips, leaf miner, beetles (evening)', cat: 'pesticide',
    rate: 'Spinosad: 4–5ml/15L · confirm on label',
    phi: 3,
    notes: `${EVENING} Spinosad is harmful to bees while wet, so evening only and keep it off open flowers where you can. Maximum 2 uses per crop.`,
  },
  {
    day: 35, title: 'Fertigation + magnesium', cat: 'flowering',
    rate: 'Potassium nitrate: 1.2kg/1000L via drip · Magnesium sulphate: 0.25kg/1000L (weekly)',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 35, title: 'Hang fruit-fly traps; start bagging/removing damaged fruit', cat: 'practice',
    rate: 'Fruit-fly bait traps (protein bait or cue-lure) at the edges and middle of the plot · bury or bag any stung/rotten fruit — never leave it on the ground',
    phi: null,
    notes: 'Melon fly stings young fruit and larvae rot it from inside. Traps cost little and catch it before it builds.',
  },
  {
    day: 34, title: 'Mancozeb — last high-PHI fungicide before harvest', cat: 'fungicide',
    rate: 'Mancozeb 80WP: 35–40g/15L · confirm on label',
    phi: 5,
    notes: 'Fruit starts to harvest around day 38–42, and a 5-day hold from today ends before then. From the next fungicide on, use only short-PHI products so picking is never blocked for long.',
  },

  // ─────────────── Week 6–11 · Fruiting & harvest ───────────────
  {
    day: 38, title: 'Fertigation — high-K fruiting feed begins', cat: 'fruiting',
    rate: 'Potassium nitrate 13-0-46: 1.5kg/1000L via drip · alternate days: Calcium nitrate 0.5kg/1000L',
    phi: null,
    notes: 'From here the crop takes more potassium than anything else — it drives fruit size, colour and shelf life. Run every 2–3 days. ' + FERT_NOTE,
  },
  {
    day: 39, title: 'Scout — mites, fruit fly, mildew, virus (twice a week from now)', cat: 'monitoring',
    rate: 'Same 10-plant check as day 28, plus: fruit with sting marks, yellowing lower leaves, white powder (powdery mildew)',
    phi: null,
    notes: 'IF mites are back (tips curling/bronzing): abamectin 5ml/15L evening, repeat after 7 days. PHI is 7 days, so pick everything harvestable FIRST, then spray.',
  },
  {
    day: 40, title: 'HARVEST BEGINS — pick every 1–2 days, early morning', cat: 'harvest',
    rate: 'Pick fruit when uniformly green, firm and the right size for your variety, before any yellowing at the blossom end · cut the stem with a knife or scissors, do not twist',
    phi: null,
    notes: 'Pick ALL harvestable fruit before any spray. Remove curved/deformed fruit early — they steal energy from good ones. Frequent picking keeps the plant producing; one missed week and production drops.',
  },
  {
    day: 41, title: 'Fertigation', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.5kg/1000L via drip · Magnesium sulphate: 0.25kg/1000L (weekly)',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 42, title: 'Azoxystrobin — mildew cover (short PHI)', cat: 'fungicide',
    rate: 'Azoxystrobin 250SC: 7–10ml/15L · confirm on label',
    phi: 1,
    notes: 'Pick first, spray after. If you used azoxystrobin on day 30, this is the second and last of the group in this stretch — rotate next time.',
  },
  {
    day: 44, title: 'Fertigation + calcium', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.5kg/1000L via drip · Calcium nitrate: 0.5kg/1000L on the next irrigation',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 45, title: 'Prune: strip yellow lower leaves; pinch the tip at the top wire', cat: 'practice',
    rate: 'Remove leaves below the lowest fruit and anything yellow or mildewed (bag them, do not drop them in the field) · pinch the growing tip once the vine passes the top of the trellis (~1.8–2m)',
    phi: null,
    notes: 'Airflow is the cheapest mildew control. Never remove more than a third of the leaf area in one go.',
  },
  {
    day: 46, title: 'Neem oil — evening (mites/aphids, soft option)', cat: 'neem',
    rate: 'Neem oil: 25ml/15L + 2ml dish soap · SPRAY ALONE, apply after 5pm only',
    phi: 1, notes: 'Pick first. Never on the same day as any other spray.',
  },
  {
    day: 47, title: 'Fertigation', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.5kg/1000L via drip',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 49, title: 'Copper-based fungicide — downy mildew and bacterial leaf spot (short PHI)', cat: 'fungicide',
    rate: 'Copper oxychloride 50WP: 30g/15L · confirm on label',
    phi: 3,
    notes: 'Third product group in the rotation. Do not use copper in the same week as sulfur or on stressed, heat-wilted plants.',
  },
  {
    day: 50, title: 'Fertigation + calcium', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.5kg/1000L via drip · Calcium nitrate: 0.5kg/1000L on the next irrigation',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 53, title: 'Fertigation + magnesium', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.5kg/1000L via drip · Magnesium sulphate: 0.25kg/1000L (weekly)',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 54, title: 'Acetamiprid — aphid/whitefly (only if scouting shows them)', cat: 'pesticide',
    rate: 'Acetamiprid 20SP: 4–5g/15L, evening · confirm on label',
    phi: 3,
    notes: 'CONDITIONAL — skip if aphids and whiteflies are low. Virus risk is highest in dry spells when whiteflies boom. Evening only. Pick first.',
  },
  {
    day: 56, title: 'Azoxystrobin — mildew cover (short PHI)', cat: 'fungicide',
    rate: 'Azoxystrobin 250SC: 7–10ml/15L · confirm on label',
    phi: 1, notes: 'Pick first, spray after. Rotate away after this one.',
  },
  {
    day: 56, title: 'Fertigation', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.5kg/1000L via drip · Calcium nitrate: 0.5kg/1000L on the next irrigation',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 59, title: 'Fertigation + magnesium; second prune', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.5kg/1000L via drip · Magnesium sulphate: 0.25kg/1000L (weekly)',
    phi: null,
    notes: 'Strip yellow lower leaves again. ' + FERT_NOTE,
  },
  {
    day: 60, title: 'Copper-based fungicide (short PHI)', cat: 'fungicide',
    rate: 'Copper oxychloride 50WP: 30g/15L · confirm on label',
    phi: 3, notes: 'Pick first, spray after.',
  },
  {
    day: 62, title: 'Fertigation', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.3kg/1000L via drip · Calcium nitrate: 0.5kg/1000L on the next irrigation',
    phi: null, notes: 'Taper nitrogen a little from here — plants that are still pushing leaf produce fewer, smaller fruit. ' + FERT_NOTE,
  },
  {
    day: 63, title: 'Scout — mites, fruit fly, mildew, virus', cat: 'monitoring',
    rate: 'Full 10-plant check plus fruit-fly trap count',
    phi: null,
    notes: 'IF mites are back: abamectin 5ml/15L in the evening after picking, repeat after 7 days (PHI 7). If fruit-fly catches are rising, hang more traps and clear every stung fruit.',
  },
  {
    day: 65, title: 'Fertigation', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.3kg/1000L via drip',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 67, title: 'Azoxystrobin or copper — last mildew cover (short PHI)', cat: 'fungicide',
    rate: 'Azoxystrobin 250SC: 7–10ml/15L OR copper oxychloride 50WP: 30g/15L · confirm on label',
    phi: 3, notes: 'Use whichever you did NOT use last time. Pick first, spray after.',
  },
  {
    day: 68, title: 'Fertigation + calcium', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.2kg/1000L via drip · Calcium nitrate: 0.4kg/1000L on the next irrigation',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 71, title: 'Fertigation — maintenance', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.0kg/1000L via drip',
    phi: null, notes: FERT_NOTE,
  },
  {
    day: 74, title: 'Fertigation — maintenance', cat: 'fruiting',
    rate: 'Potassium nitrate: 1.0kg/1000L via drip',
    phi: null, notes: 'Harvest typically tapers from now. Keep picking every 1–2 days while it lasts.',
  },

  // ─────────────── Wrap-up ───────────────
  {
    day: 77, title: 'Decision point — keep the crop going or close it out', cat: 'monitoring',
    rate: 'Count fruit per picking over the last week · compare with the peak week',
    phi: null,
    notes: 'If picking has dropped by more than half from peak and vines are yellow and diseased, it is usually cheaper to close out and replant than to keep spraying a tired crop. If you keep going, repeat the day 71–74 maintenance feed and a short-PHI fungicide weekly.',
  },
  {
    day: 84, title: 'END OF CYCLE — uproot, clean up, rotate', cat: 'practice',
    rate: 'Uproot vines and bag/burn or bury far from the field · pull mulch and old twine · flush drip lines with plain water · do NOT plant cucumber, melon, watermelon or pumpkin here next — rotate to a different crop family',
    phi: null,
    notes: 'Then press "+ New Batch" on this field to archive this crop and start the next one.',
  },
];

// Days-after-sowing -> stage label for the programme view.
export function cucumberStageForWeek(week) {
  if (week <= 2) return 'Establishment';
  if (week <= 4) return 'Vegetative';
  if (week === 5) return 'Flowering';
  if (week <= 11) return 'Fruiting & Harvest';
  return 'End of Cycle';
}

export const CUCUMBER_RULES =
  'Key rules: imidacloprid only once (day 8, before flowering) · from flowering on, spray insecticides in the evening only · no pyrethroids (they flare mites and kill bees) · pick everything harvestable BEFORE spraying · never put calcium nitrate in the same tank as phosphate or sulphate · no sulfur on cucumber in hot weather (cucurbits scorch) · rotate to a non-cucurbit crop next cycle.';
