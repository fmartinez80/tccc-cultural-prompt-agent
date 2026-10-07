// The product roadmap shown on the home screen. Edit the text here; the
// module renders whatever is listed. `current` marks the phase we're in.

export type RoadmapPhase = { title: string; label: string; current?: boolean; items: string[] };

export const ROADMAP: RoadmapPhase[] = [
  {
    title: 'Phase 1',
    label: 'Alpha',
    current: true,
    items: [
      'Alpha live for a small group of invited testers; their feedback shapes Phase 2',
      'Knowledge base: first-pass guides for the top TCCC markets, still in expert review',
      'One hero meal per scene, for one or two place settings',
      'A handful of core Coca-Cola SKUs',
      '16:9 scenes',
      'No people on screen',
      'Node workspace for advanced edits, with limited capability',
    ],
  },
  {
    title: 'Phase 2',
    label: 'Beta',
    items: [
      'Deeper knowledge base: richer venue backgrounds and cultural insight, expert-reviewed',
      'More lens, camera and photography controls',
      'More scene customization',
      '16:9, 4:5 and 1:1 crops',
      'Two dishes per scene',
      'Limited people: hands only',
      'Wider Coca-Cola range, plus selected portfolio brands (Sprite, Fanta and more)',
      'Stronger creative-director check on every image',
      'Improved experience and interface',
    ],
  },
  {
    title: 'Phase 3',
    label: 'Scale',
    items: [
      'Three or more dishes per scene',
      'On-screen talent, with wardrobe selection',
      'Basic video generation',
      'Exploration of alternate image models',
      'Migration to WPP Open',
    ],
  },
  {
    title: 'Phase 4',
    label: 'To be defined',
    items: ['Shaped by what we learn in Phases 1 to 3'],
  },
];
