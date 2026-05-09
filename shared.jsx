// Shared atoms for both UDAWG variations.
// Both share the same palette + type (committed system); variations are
// expressed in *layout, rhythm, and emphasis*, not color/font.

const PALETTE = {
  ink:      '#0B0A08',   // deepest
  panel:    '#14110D',   // card / inset
  panelHi:  '#1B1712',
  paper:    '#F4EFE4',   // warm bone
  paperDim: 'rgba(244,239,228,0.62)',
  paperFaint: 'rgba(244,239,228,0.35)',
  rule:     'rgba(244,239,228,0.12)',
  ruleStrong: 'rgba(244,239,228,0.22)',
  brass:    '#C8A567',   // ~oklch(0.72 0.08 75)
  brassDim: 'rgba(200,165,103,0.55)',
  walnut:   '#5A3F2A',
};

// A subtle striped placeholder for any imagery we'd otherwise hand-draw.
// Use <ImagePh caption="…" /> wherever a real photo will go but isn't yet.
function ImagePh({ caption, style }) {
  const s = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background:
      'repeating-linear-gradient(135deg, #1c1814 0 14px, #181410 14px 28px)',
    color: 'rgba(244,239,228,0.42)',
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    ...style,
  };
  return (
    <div style={s}>
      <span style={{ padding: '4px 10px', background: 'rgba(11,10,8,0.55)', border: '1px solid rgba(244,239,228,0.10)' }}>
        {caption}
      </span>
    </div>
  );
}

// Fade/slide-up reveal on intersection. Works inside an artboard because
// the artboard scrolls into the canvas viewport on pan/zoom; we also kick
// off any element already in view at mount.
function Reveal({ children, delay = 0, y = 18, as = 'div', style, ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    // Belt-and-braces: fire after a tick in case the artboard is mounted
    // already-visible inside design-canvas (IO sometimes doesn't fire).
    const t = setTimeout(() => setShown(true), 1200);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 900ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1100ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// A precise hairline brass rule. Use `len` for fixed pixel runs.
function BrassRule({ len = '100%', vertical = false, opacity = 0.5 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        background: PALETTE.brass,
        opacity,
        width: vertical ? 1 : len,
        height: vertical ? len : 1,
        verticalAlign: 'middle',
      }}
    />
  );
}

// A small monogram drawn from twelve facets — a wireframe nod to the
// dodecahedron. Pure CSS hexagon-ish — no fake hand-drawn SVG.
function Monogram({ size = 18, color = PALETTE.brass }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        position: 'relative',
        flex: '0 0 auto',
      }}
    >
      <span
        style={{
          position: 'absolute',
          inset: 0,
          border: `1px solid ${color}`,
          transform: 'rotate(15deg)',
          clipPath: 'polygon(50% 0,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          inset: 3,
          border: `1px solid ${color}`,
          opacity: 0.6,
          clipPath: 'polygon(50% 0,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 3,
          height: 3,
          background: color,
          borderRadius: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
    </span>
  );
}

// Reusable nav row used at the top of each artboard.
function TopNav({ links = ['SOUND', 'CRAFT', 'WAITLIST'], compact = false }) {
  const fontSize = compact ? 10 : 11;
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: compact ? '24px 56px' : '32px 72px',
      borderBottom: `1px solid ${PALETTE.rule}`,
      color: PALETTE.paper,
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Monogram size={16} />
        <span style={{ color: PALETTE.paper, letterSpacing: '0.32em', fontWeight: 500 }}>
          UDAWG · AUDIO
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 36, color: PALETTE.paperDim }}>
        {links.map((l) => (
          <span key={l} style={{ cursor: 'default' }}>{l}</span>
        ))}
        <span style={{
          color: PALETTE.brass,
          borderBottom: `1px solid ${PALETTE.brass}`,
          paddingBottom: 2,
        }}>
          JOIN WAITLIST →
        </span>
      </div>
    </nav>
  );
}

Object.assign(window, { PALETTE, ImagePh, Reveal, BrassRule, Monogram, TopNav });
