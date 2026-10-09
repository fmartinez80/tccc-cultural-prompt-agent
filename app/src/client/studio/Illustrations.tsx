// Monochrome line illustrations for the home intro's three features. Drawn in
// the ink colour on a white fill, so overlapping shapes hide what is behind.
// No branding on any container.

const ink = { fill: 'var(--neo-card)', stroke: 'currentColor', strokeWidth: 3, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const };
const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

/** A can, a 12 oz contour bottle and a 1 L bottle in profile, the 12 oz in front. */
export function ProductsIllustration() {
  return (
    <svg viewBox="0 0 240 160" role="img" aria-label="A can, a small glass bottle and a large bottle, side by side">
      <path {...line} d="M24 146 H216" />
      {/* Can, back left */}
      <path {...ink} d="M56 62 Q76 56 96 62 L98 68 V118 Q76 126 54 118 V68 Z" />
      <path {...line} d="M56 62 Q76 68 96 62" />
      <path {...line} d="M54 74 H98 M54 112 H98" />
      {/* 1 L bottle, back right */}
      <path {...ink} d="M158 16 H174 V26 H158 Z" />
      <path {...ink} d="M159 26 H173 V34 C184 42 190 52 190 64 V116 Q166 126 142 116 V64 C142 52 148 42 159 34 Z" />
      <path {...line} d="M142 76 H190 M142 98 H190 M146 108 Q166 112 186 108" />
      {/* 12 oz contour bottle, front centre */}
      <path {...ink} d="M113 31 H127 V39 H113 Z" />
      <path
        {...ink}
        d="M114 39 H126 C127 52 128 60 132 72 C136 84 136 94 133 104 C131 112 136 122 136 132 V140 Q120 146 104 140 V132 C104 122 109 112 107 104 C104 94 104 84 108 72 C112 60 113 52 114 39 Z"
      />
      <path {...line} d="M109 84 Q120 88 131 84 M108 124 Q120 128 132 124" />
    </svg>
  );
}

/** A frying pan from above, with a hand pinching seasoning over the food. */
export function SeasoningIllustration() {
  return (
    <svg viewBox="0 0 240 160" role="img" aria-label="A frying pan seen from above, with a hand adding seasoning">
      <path {...ink} d="M152 78 L224 72 Q232 84 224 96 L152 90 Z" />
      <circle {...ink} cx="100" cy="86" r="58" />
      <circle {...line} cx="100" cy="86" r="48" />
      {/* Food in the pan */}
      <ellipse {...line} cx="80" cy="96" rx="12" ry="7" transform="rotate(-20 80 96)" />
      <ellipse {...line} cx="116" cy="104" rx="11" ry="6" transform="rotate(25 116 104)" />
      <ellipse {...line} cx="122" cy="76" rx="9" ry="6" transform="rotate(-35 122 76)" />
      <circle {...line} cx="96" cy="114" r="5" />
      <circle {...line} cx="72" cy="72" r="5" />
      <circle {...line} cx="132" cy="94" r="4" />
      {/* Seasoning falling from the pinch */}
      {[
        [104, 58],
        [99, 64],
        [107, 67],
        [101, 72],
        [109, 76],
        [96, 80],
        [104, 84],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill="currentColor" />
      ))}
      {/* Hand, coming in from the top left: thumb and index pinching */}
      <path {...ink} d="M14 0 H50 L64 24 L36 38 Z" />
      <path {...ink} d="M36 38 C38 26 54 18 66 22 L88 34 C96 39 100 46 97 52 C94 57 86 58 80 58 L60 58 C50 56 40 48 36 38 Z" />
      <path {...ink} d="M66 22 C80 18 94 28 101 42 C103 47 101 51 97 51" />
      <path {...ink} d="M80 58 C88 60 96 58 99 54 C101 51 99 48 96 49" />
      <path {...line} d="M46 50 C50 56 56 58 62 57 M56 55 C60 60 68 61 72 58 M70 34 L84 42 M64 40 L78 48" />
    </svg>
  );
}

/** A node workflow: boxes wired together, a soda bottle node in the mix, ending in a picture. */
export function WorkflowIllustration() {
  return (
    <svg viewBox="0 0 240 160" role="img" aria-label="Boxes joined by lines, with a soda bottle in one box, ending in a picture">
      {/* Wires */}
      <path {...line} d="M54 34 C72 34 72 72 90 72" />
      <path {...line} d="M54 122 C72 122 72 72 90 72" />
      <path {...line} d="M134 72 C150 72 150 80 166 80" />
      <path {...line} d="M134 124 C150 124 150 80 166 80" />
      <path {...line} d="M54 122 C72 122 72 124 90 124" />
      {/* Prompt boxes */}
      <rect {...ink} x="10" y="20" width="44" height="28" rx="3" />
      <path {...line} d="M18 30 H46 M18 38 H38" />
      <rect {...ink} x="10" y="108" width="44" height="28" rx="3" />
      <path {...line} d="M18 118 H46 M18 126 H34" />
      {/* Soda bottle node */}
      <rect {...ink} x="90" y="52" width="44" height="40" rx="3" />
      <path
        {...ink}
        strokeWidth={2}
        d="M109 58 H115 V62 C115 66 118 69 118 74 C118 78 116 80 117 84 V86 Q112 88 107 86 V84 C108 80 106 78 106 74 C106 69 109 66 109 62 Z"
      />
      <rect {...ink} x="90" y="110" width="44" height="28" rx="3" />
      <path {...line} d="M98 120 H126 M98 128 H118" />
      {/* Ports */}
      {[
        [54, 34],
        [54, 122],
        [90, 72],
        [134, 72],
        [90, 124],
        [134, 124],
        [166, 80],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="currentColor" />
      ))}
      {/* The finished picture */}
      <rect {...ink} x="166" y="44" width="66" height="72" rx="3" />
      <rect {...line} x="172" y="50" width="54" height="52" />
      <path {...line} d="M172 86 H226" />
      <ellipse {...line} cx="192" cy="86" rx="12" ry="4" />
      <path {...line} d="M212 86 V76 C212 74 214 72 214 69 V64 H218 V69 C218 72 220 74 220 76 V86" />
      <path {...line} d="M174 108 H200" />
    </svg>
  );
}
