// Grouping for the Reference and Misc index pages (presentation only).
// These lists are the source of truth for card order on /reference/ and /misc/. Entry `order` frontmatter is
// only the fallback: an entry not listed here still appears, in a final "More" group, sorted by order/date/title.
// The Reference sequence is an editorial reading order (how the concepts build on each other), not one
// Mr Casino set. Misc groups are subjects, not a curriculum.

export interface IndexItem {
  slug: string;
  /** Short name used in relationship cues on other cards ("Builds on 02 Zones"). */
  short?: string;
  /** One-line card description, drawn from the entry's own Context wording. */
  summary: string;
  /** Slugs of earlier items this one builds on (Reference only). Rendered with their reading number. */
  buildsOn?: string[];
  /** Free-text relationship cue, used instead of buildsOn when that would be a list of everything. */
  cue?: string;
}

export interface IndexGroup {
  id: string;
  title: string;
  /** Short editorial intro (plain text). */
  intro: string;
  /** Optional small tag beside the group title, e.g. "Advanced". */
  tag?: string;
  items: IndexItem[];
}

export const referenceGroups: IndexGroup[] = [
  {
    id: 'language',
    title: 'Language',
    intro: 'The core terms, defined in one place. Every other Reference page uses them.',
    items: [
      {
        slug: 'terminology',
        short: 'Terminology',
        summary: 'One-line definitions of FU, negation, HCS, x3, LAOL and core liquidity, each with his annotated definition charts.',
        cue: 'Start here',
      },
    ],
  },
  {
    id: 'core-concepts',
    title: 'Core concepts',
    intro: 'Zones, timeframe strength and liquidity, in the order the Weekly Programme taught them (Weeks 1, 2 and 3). TFS is read with zones, and the liquidity worked example builds all three on one chart.',
    items: [
      {
        slug: 'zones',
        short: 'Zones',
        summary: 'What zones are, the four zone types, the rules, the three levels of use and a full NY session mark-up. Week 1.',
        buildsOn: ['terminology'],
      },
      {
        slug: 'timeframe-strength',
        short: 'TFS',
        summary: 'The five TFS categories, established and forming TFS, the zone rule and the established TFS retest. Week 2.',
        buildsOn: ['zones'],
      },
      {
        slug: 'liquidity',
        short: 'Liquidity',
        summary: 'His definition, the statements to study, basic and advanced liquidity, and a worked example from 12hr to 1 min. Week 3.',
        buildsOn: ['zones', 'timeframe-strength'],
      },
    ],
  },
  {
    id: 'analysis-extraction',
    title: 'Analysis & extraction',
    intro: 'His practical rules, then one backtest that applies them. The rules come after the core concepts because several of them compress what those pages teach in full: “You must study each point deeper.”',
    items: [
      {
        slug: 'rules-of-analysis',
        short: 'Rules',
        summary: 'Twelve practical rules, "The base of your trading plan and confident profitable extraction", with an entry checklist.',
        cue: 'Draws together the core concepts',
      },
      {
        slug: 'worked-example-3000-reversal',
        short: 'Worked example',
        summary: 'The practical rules applied to one XAUUSD reversal from the 2,999.56 low, charted from the 4hr down to 1 min entries.',
        buildsOn: ['rules-of-analysis'],
      },
    ],
  },
  {
    id: 'top-down-execution',
    title: 'Top-down execution',
    tag: 'Advanced',
    intro: 'The most advanced material here: the top-down cycle gathered from the three Segments, then the step-by-step sequence that walks down it to a final entry.',
    items: [
      {
        slug: 'top-down-extraction-cycle',
        short: 'Cycle',
        summary: 'Swing Campaign, Intraday Wave, Scalp Flow and LTF Timing: the base model, TS build, HCS refinement, LAOL and the three tradable points.',
        cue: 'Gathered from Segments 1–3',
      },
      {
        slug: 'step-by-step-entry-sequence',
        short: 'Entry sequence',
        summary: 'Eight stages from Authority to Management, through one worked XAUUSD example from 18hr to 3 min, then level 2: HCS and the limit-order approach.',
        buildsOn: ['top-down-extraction-cycle'],
      },
    ],
  },
];

export const miscGroups: IndexGroup[] = [
  {
    id: 'mindset-discipline',
    title: 'Mindset & discipline',
    intro: 'Rationality is the base he sets beneath all trading psychology. The morality note follows it up, and Trading Psychology expands its list of distortions. Listed in the order he posted them.',
    items: [
      {
        slug: 'rationality-and-backtesting-discipline',
        summary: 'Rationality as the base beneath all trading psychology, and why backtesting must be stored as real proof of effort.',
      },
      {
        slug: 'morality-rationality-and-the-opposing-side',
        summary: 'His follow-up: why a correct morality is an edge, understanding the minds on the other side, and backtesting hours.',
      },
      {
        slug: 'trading-psychology-the-mindset-of-clarity',
        summary: 'His "psychology intensive": the practical mindset steps, and the underlying causes that shape a trader\'s mind.',
      },
    ],
  },
  {
    id: 'fundamentals-worldview',
    title: 'Fundamentals & worldview',
    intro: 'His market model first, then his wider worldview and the numbered series that builds on it. The worldview record and the series are his commentary, not trading instruction; both pages mark claims by their evidential status.',
    items: [
      {
        slug: 'fundamentals-usd-banks-and-gold',
        summary: 'His fundamental model: the USD banking system, the banks\' management of the gold price, and the link back to liquidity and FU.',
      },
      {
        slug: 'mr-casinos-worldview-banking-power-and-history',
        summary: 'His critique of the banking system, his account of Freemasonry and power, and how he reads present-day conflict.',
      },
      {
        slug: 'fundamentals-series-geopolitical-state-of-the-world',
        summary: 'His numbered series, Parts 1, 2 and 3.1, kept in his order. Parts 1 and 2 lean on the worldview page as background.',
      },
    ],
  },
  {
    id: 'progression',
    title: 'Progression',
    intro: 'How a trader progresses beyond the current team material.',
    items: [
      {
        slug: 'earning-the-advanced-stage',
        summary: 'The criteria for the invite-only advanced stage, in his words, and what is being watched.',
      },
    ],
  },
];

interface SortableEntry {
  id: string;
  data: { title: string; date: Date; order?: number };
}

export interface ResolvedItem<E> {
  entry: E;
  item: IndexItem | null;
  /** 1-based position across all configured groups (the reading number); null in the fallback group. */
  position: number | null;
}

export interface ResolvedGroup<E> {
  id: string;
  title: string;
  intro: string;
  tag?: string;
  items: ResolvedItem<E>[];
}

export const FALLBACK_GROUP_ID = 'more';

/** The entry order used before grouping existed: frontmatter order, then date, then title. */
export function compareEntries(a: SortableEntry, b: SortableEntry): number {
  return (
    (a.data.order ?? Infinity) - (b.data.order ?? Infinity) ||
    a.data.date.getTime() - b.data.date.getTime() ||
    a.data.title.localeCompare(b.data.title)
  );
}

/** Two-digit reading number, e.g. 1 -> "01". */
export const readingNumber = (position: number) => String(position).padStart(2, '0');

/**
 * Places each entry into its configured group, in configured order. Configured slugs with no entry are skipped
 * (and groups left empty are dropped); entries not configured anywhere go to a final fallback group, so no
 * page can drop off an index. Each entry appears exactly once.
 */
export function groupEntries<E extends SortableEntry>(
  entries: E[],
  groups: IndexGroup[],
  fallbackTitle: string,
): ResolvedGroup<E>[] {
  const byId = new Map(entries.map((entry) => [entry.id, entry]));
  const placed = new Set<string>();
  let position = 0;
  const resolved: ResolvedGroup<E>[] = [];

  for (const group of groups) {
    const items: ResolvedItem<E>[] = [];
    for (const item of group.items) {
      const entry = byId.get(item.slug);
      if (!entry || placed.has(item.slug)) continue;
      placed.add(item.slug);
      position += 1;
      items.push({ entry, item, position });
    }
    if (items.length > 0) resolved.push({ id: group.id, title: group.title, intro: group.intro, tag: group.tag, items });
  }

  const rest = entries.filter((entry) => !placed.has(entry.id)).sort(compareEntries);
  if (rest.length > 0) {
    resolved.push({
      id: FALLBACK_GROUP_ID,
      title: fallbackTitle,
      intro: '',
      items: rest.map((entry) => ({ entry, item: null, position: null })),
    });
  }
  return resolved;
}

/** Relationship cue for a card: free text, or "Builds on 02 Zones · 03 TFS" from earlier configured items. */
export function relationshipCue<E extends SortableEntry>(
  resolved: ResolvedGroup<E>[],
  item: IndexItem | null,
): string | null {
  if (!item) return null;
  if (item.cue) return item.cue;
  if (!item.buildsOn || item.buildsOn.length === 0) return null;
  const all = resolved.flatMap((group) => group.items);
  const parts = item.buildsOn
    .map((slug) => all.find((resolvedItem) => resolvedItem.entry.id === slug))
    .filter((found): found is ResolvedItem<E> => Boolean(found && found.position !== null))
    .map((found) => `${readingNumber(found.position!)} ${found.item?.short ?? found.entry.data.title}`);
  return parts.length > 0 ? `Builds on ${parts.join(' · ')}` : null;
}
