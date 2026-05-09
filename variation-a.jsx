// Variation A — "Editorial Atelier"
// Magazine-spread sensibility: full-bleed cinematic hero, three numbered
// "Movements" of philosophy with breathing room, a quiet spec strip, and
// a single-line waitlist anchor. Serif does the heavy lifting.

const A_W = 1320;

function VariationA() {
  const Eyebrow = ({ children, color = PALETTE.brass }) => (
    <div style={{
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase',
      color, display: 'flex', alignItems: 'center', gap: 12,
    }}>{children}</div>
  );

  return (
    <div style={{
      width: A_W, background: PALETTE.ink, color: PALETTE.paper,
      fontFamily: '"Geist", -apple-system, sans-serif',
      overflow: 'hidden',
    }}>
      <TopNav />

      {/* HERO — full-bleed photo with cinematic type lockup */}
      <section style={{
        position: 'relative',
        height: 880,
        background: PALETTE.ink,
        borderBottom: `1px solid ${PALETTE.rule}`,
      }}>
        <image-slot
          id="udawg-a-hero"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            display: 'block',
          }}
          shape="rect"
          placeholder="Drop a hero shot — dodecahedron speaker in a styled room, low key lighting"
        ></image-slot>

        {/* Vignette + scrim for type legibility */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background:
            'linear-gradient(180deg, rgba(11,10,8,0.55) 0%, rgba(11,10,8,0.0) 28%, rgba(11,10,8,0.0) 55%, rgba(11,10,8,0.85) 100%),' +
            'radial-gradient(120% 80% at 50% 90%, rgba(11,10,8,0.45), rgba(11,10,8,0) 60%)',
        }} />

        {/* Bottom-anchored editorial lockup */}
        <div style={{
          position: 'absolute', left: 72, right: 72, bottom: 64,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 64,
        }}>
          <Reveal style={{ maxWidth: 760 }}>
            <Eyebrow>
              <span style={{ width: 28, height: 1, background: PALETTE.brass }} />
              <span>EST. 2026 · ONE WORKSHOP · TWELVE FACES</span>
            </Eyebrow>
            <h1 style={{
              fontFamily: '"Instrument Serif", "EB Garamond", serif',
              fontWeight: 400, fontStyle: 'italic',
              fontSize: 116, lineHeight: 0.95, letterSpacing: '-0.02em',
              margin: '24px 0 0 0', color: PALETTE.paper,
              textWrap: 'pretty',
            }}>
              A speaker that knows<br/>
              <span style={{ fontStyle: 'normal' }}>what it is.</span>
            </h1>
          </Reveal>

          <Reveal delay={180} style={{ flex: '0 0 280px', textAlign: 'right' }}>
            <div style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: 11, letterSpacing: '0.18em', color: PALETTE.paperDim,
              lineHeight: 1.9, textTransform: 'uppercase',
            }}>
              MODEL · D-XII / 01<br/>
              FINISH · BLACK HIGHGLOSS<br/>
              BUILT · MALMÖ, SE
            </div>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 36, height: 1, background: PALETTE.brass }} />
              <span style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                color: PALETTE.brass, letterSpacing: '0.3em',
              }}>SCROLL</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO STATEMENT — short, sits on its own */}
      <section style={{ padding: '120px 72px 80px' }}>
        <Reveal>
          <Eyebrow color={PALETTE.paperDim}>
            <span>I — </span><span>The underdog hypothesis</span>
          </Eyebrow>
          <p style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: 46, lineHeight: 1.18, letterSpacing: '-0.012em',
            color: PALETTE.paper, maxWidth: 980, margin: '32px 0 0 0',
            textWrap: 'pretty',
          }}>
            Two people, one bench, a dodecahedron and three legs.
            We make speakers the long way because the short way already
            sounds like everything else. <span style={{ color: PALETTE.brassDim, fontStyle: 'italic' }}>
            Craftsmanship before profit — </span> and the room hears the difference.
          </p>
        </Reveal>
      </section>

      <div style={{ height: 1, background: PALETTE.rule, margin: '0 72px' }} />

      {/* SOUND PHILOSOPHY — three movements */}
      <section style={{ padding: '110px 72px 100px' }}>
        <Reveal>
          <Eyebrow>
            <span style={{ width: 28, height: 1, background: PALETTE.brass }} />
            <span>SOUND · PHILOSOPHY</span>
          </Eyebrow>
          <h2 style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: 76, lineHeight: 1.0, letterSpacing: '-0.018em',
            color: PALETTE.paper, margin: '24px 0 80px 0',
            maxWidth: 880,
          }}>
            Three movements,<br/>
            <span style={{ fontStyle: 'italic', color: PALETTE.brass }}>one quiet idea.</span>
          </h2>
        </Reveal>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 56,
        }}>
          {[
            {
              num: 'I',
              title: 'Twelve faces, one voice.',
              spec: '12 PENTAGONAL PANELS · 0° STANDING WAVES',
              body: 'A dodecahedron has no parallel walls. Inside the cabinet, that means no standing waves and no boxy resonance — the driver speaks into a room of its own first, and yours second.',
            },
            {
              num: 'II',
              title: 'Carpentry, not casting.',
              spec: '18MM BALTIC BIRCH · HAND-LACQUERED · 14 COATS',
              body: 'Each shell is mitered, glued, sanded, sealed, sanded again. Fourteen coats of pigmented lacquer, wet-flatted between, until the surface stops being a finish and becomes a mirror.',
            },
            {
              num: 'III',
              title: 'Quiet conviction.',
              spec: '40 Hz – 22 kHz · ±2dB · 88dB / 1W / 1m',
              body: 'No DSP, no smile curve, no apology. A single full-range driver in a non-resonant body, voiced in a small workshop by people who would rather get one thing right than ten things louder.',
            },
          ].map((m, i) => (
            <Reveal key={m.num} delay={i * 140}>
              <div style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 44, color: PALETTE.brass, lineHeight: 1,
                marginBottom: 22,
              }}>{m.num}</div>
              <div style={{ height: 1, background: PALETTE.rule, marginBottom: 22 }} />
              <h3 style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 30, lineHeight: 1.12, letterSpacing: '-0.01em',
                color: PALETTE.paper, margin: '0 0 18px 0', fontWeight: 400,
              }}>{m.title}</h3>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 10, letterSpacing: '0.18em', color: PALETTE.brassDim,
                margin: '0 0 18px 0', textTransform: 'uppercase',
              }}>{m.spec}</div>
              <p style={{
                fontSize: 15, lineHeight: 1.6, color: PALETTE.paperDim,
                margin: 0, fontWeight: 400, letterSpacing: '0.005em',
              }}>{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DUAL IMAGERY — workshop / detail */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr',
        borderTop: `1px solid ${PALETTE.rule}`,
        borderBottom: `1px solid ${PALETTE.rule}`,
        background: PALETTE.panel,
      }}>
        <div style={{ height: 460, position: 'relative' }}>
          <image-slot
            id="udawg-a-shop"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', display:'block' }}
            shape="rect"
            placeholder="Workshop shot — hands at the bench, sawdust, warm light"
          ></image-slot>
        </div>
        <div style={{
          padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderLeft: `1px solid ${PALETTE.rule}`,
        }}>
          <Reveal>
            <Eyebrow><span>FROM THE BENCH</span></Eyebrow>
            <p style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 30, lineHeight: 1.28, color: PALETTE.paper,
              margin: '20px 0 0 0', fontStyle: 'italic',
              textWrap: 'pretty',
            }}>
              "We don't have a marketing budget. We have a thickness planer
              and a tube of glue and a stubborn opinion about what a midrange
              should feel like in your chest."
            </p>
            <div style={{
              marginTop: 28, fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10, letterSpacing: '0.22em', color: PALETTE.paperDim,
            }}>— UDAWG, FOUNDERS</div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
              borderTop: `1px solid ${PALETTE.rule}`, paddingTop: 28, marginTop: 56,
            }}>
              {[
                ['BATCH SIZE', '12 / quarter'],
                ['LEAD TIME', '10 – 14 weeks'],
                ['DRIVER', 'Custom 5″ FR'],
                ['IMPEDANCE', '8Ω nominal'],
              ].map(([k,v]) => (
                <div key={k}>
                  <div style={{
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 9.5,
                    letterSpacing: '0.2em', color: PALETTE.paperFaint, marginBottom: 6,
                  }}>{k}</div>
                  <div style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: 22,
                    color: PALETTE.paper,
                  }}>{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WAITLIST */}
      <section style={{ padding: '120px 72px 100px', textAlign: 'center' }}>
        <Reveal>
          <Eyebrow color={PALETTE.brass}>
            <span style={{ width: 28, height: 1, background: PALETTE.brass }} />
            <span>BATCH NO. 01 · OPEN</span>
            <span style={{ width: 28, height: 1, background: PALETTE.brass }} />
          </Eyebrow>
          <h2 style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: 88, lineHeight: 1.0, letterSpacing: '-0.02em',
            margin: '24px 0 16px 0', color: PALETTE.paper,
          }}>
            Twelve pairs.<br/>
            <span style={{ fontStyle: 'italic', color: PALETTE.brass }}>Not a pair more.</span>
          </h2>
          <p style={{
            color: PALETTE.paperDim, maxWidth: 540, margin: '0 auto 40px',
            fontSize: 15, lineHeight: 1.55,
          }}>
            We open the waitlist quarterly. No deposit. Just your name, the
            room you'd put them in, and the patience to wait for them.
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'stretch', minWidth: 480,
            border: `1px solid ${PALETTE.ruleStrong}`,
          }}>
            <input
              placeholder="you@somewhere.com"
              style={{
                flex: 1, background: 'transparent', border: 0, outline: 'none',
                color: PALETTE.paper, padding: '18px 22px',
                fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
                letterSpacing: '0.04em',
              }}
              readOnly
            />
            <button style={{
              background: PALETTE.brass, color: PALETTE.ink, border: 0,
              padding: '0 32px', cursor: 'pointer', fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase',
              fontWeight: 600,
            }}>Reserve →</button>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '36px 72px', borderTop: `1px solid ${PALETTE.rule}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
        letterSpacing: '0.22em', color: PALETTE.paperFaint, textTransform: 'uppercase',
      }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Monogram size={14} color={PALETTE.paperDim} />
          <span>© UDAWG AUDIO MMXXVI</span>
        </div>
        <div>BUILT IN MALMÖ · NOT BY ROBOTS</div>
      </footer>
    </div>
  );
}

window.VariationA = VariationA;
