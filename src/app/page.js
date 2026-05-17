"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ZOOM_LINK = "https://zoom.us/j/349786148?pwd=008895";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [litTab, setLitTab] = useState("readings");
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);

  const dragStart = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <a className="nav-logo" href="#">
          <Image className="rounded-full" src="/logo.jpeg" alt="MA Logo" width={130} height={130} style={{ height: 130, width: "auto", objectFit: "contain" }} />
          <div className="nav-name">Menopause Anonymous<small>Women Supporting Women</small></div>
        </a>
        <div className="nav-links">
          <a href="#what-is-ma">About</a>
          <a href="#why-ma">Why MA</a>
          <a href="#what-we-offer">What We Offer</a>
          <a href="#literature">Literature</a>
          <a href="#meetings">Meetings</a>
          <a href="#meetings" className="nav-cta">Join Us</a>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#what-is-ma" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#why-ma" onClick={() => setMenuOpen(false)}>Why MA</a>
          <a href="#what-we-offer" onClick={() => setMenuOpen(false)}>What We Offer</a>
          <a href="#literature" onClick={() => setMenuOpen(false)}>Literature</a>
          <a href="#meetings" onClick={() => setMenuOpen(false)}>Meetings</a>
          <a href="#meetings" className="nav-cta" onClick={() => setMenuOpen(false)}>Join Us</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-img-side">
          <img
            src="/hero.webp"
            alt="Mature woman"
          />

        </div>
        <div className="hero-text-side">
          <div className="hero-eyebrow reveal">
            <div className="hero-eyebrow-line"></div>
            <span>Sunday Healing Circle · MAAnonymous.org</span>
          </div>
          <h1 className="hero-h1 reveal d1">
            You Are Not<br /><em>Alone</em> in<br /><strong>This Journey</strong>
          </h1>
          <div className="hero-script reveal d1">Come as you are. ✿</div>
          <p className="hero-sub reveal d2">
            A safe, anonymous space where women gather to share, understand, and navigate one of
            life&apos;s most powerful transitions — together.
          </p>
          <div className="affirm-strip reveal d2">
            <p>You are not alone.</p>
            <p>You are not &ldquo;losing it.&rdquo;</p>
            <p>You are <span>becoming.</span></p>
          </div>
          <div className="hero-btns reveal d3">
            <a className="btn-fill" href="#meetings">Find a Meeting</a>
            <a className="btn-line" href="#what-is-ma">Learn About MA</a>
          </div>
          <div className="hero-stats reveal d4">
            <div className="hstat"><span className="hstat-num">Free</span><span className="hstat-lbl">Always</span></div>
            <div className="hstat"><span className="hstat-num">Weekly</span><span className="hstat-lbl">Every Sunday</span></div>
            <div className="hstat"><span className="hstat-num">Safe</span><span className="hstat-lbl">Anonymous</span></div>
            <div className="hstat"><span className="hstat-num">4 PM</span><span className="hstat-lbl">Central Time</span></div>
          </div>
        </div>
      </section>

      {/* ── GOLD BANNER TICKER ── */}
      <div className="gold-banner">
        <div className="gold-track">
          {[0, 1].map((i) => (
            <div className="gold-item" key={i}>
              <span className="gold-gem">✦</span>Women Supporting Women
              <span className="gold-gem">✦</span>Safe &amp; Anonymous
              <span className="gold-gem">✦</span>Every Sunday 4 PM CT
              <span className="gold-gem">✦</span>Healing Circle
              <span className="gold-gem">✦</span>Come As You Are
              <span className="gold-gem">✦</span>Step Into Your Power
              <span className="gold-gem">✦</span>Free Always
              <span className="gold-gem">✦</span>No Judgment
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT IS MA ── */}
      <section id="what-is-ma" className="what-section">
        <div className="what-inner">
          <div className="what-text">
            <div className="reveal">
              <div className="section-kicker"><span>What is Menopause Anonymous?</span></div>
            </div>
            <h2 className="s-title reveal d1">
              A Place Where You<br /><em>Don&apos;t Have to Explain</em><br /><strong>Yourself</strong>
            </h2>
            <p className="what-body reveal d1">
              Menopause Anonymous (MA) is a safe, supportive space where women come together to share,
              understand, and navigate one of the most powerful transitions of life.
            </p>
            <div className="what-pull reveal d2">
              <p>
                &ldquo;Menopause is often experienced in silence. Many women feel confused, overwhelmed,
                isolated, or even afraid of what is happening to their bodies and minds. MA was created
                to change that.&rdquo;
              </p>
            </div>
            <p className="what-body reveal d2">
              This is a place where your experiences are <strong>understood</strong>. Where you can speak
              openly — or simply listen. Where you are met with compassion, not confusion.
            </p>
            <p className="what-body reveal d2">
              Because here — <strong>you are not alone.</strong>
            </p>
          </div>
          <div className="what-visual reveal d2" style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", height: 540, position: "relative", boxShadow: "0 28px 80px rgba(46,16,32,0.18)" }}>
              <img
                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=700&auto=format&fit=crop&q=85"
                alt="Woman in wellness meditation"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(46,16,32,0.45) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 0, right: 0, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-dancing), cursive", fontSize: 20, fontWeight: 700, color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                  Women Supporting Women
                </div>
              </div>
            </div>
            <div className="what-badge">
              <span className="num">Free</span>
              <span className="lbl">Always &amp; Forever</span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* ── WHY MA ── */}
      <section id="why-ma" className="why-section">
        <div className="why-inner">
          <div className="why-visual reveal" style={{ position: "relative" }}>
            <div className="why-main-img">
              <img
                src="/mmahero.webp"
                alt="Mature woman in reflection"
              />
            </div>
            <div className="why-logo-badge">
              <Image src="/logo2.jpeg" alt="MA" width={64} height={64} style={{ objectFit: "contain", borderRadius: "50%" }} />
            </div>
          </div>
          <div className="why-text">
            <div className="reveal">
              <div className="section-kicker"><span>Why MA Exists</span></div>
            </div>
            <h2 className="s-title reveal d1">
              For Too Long,<br /><em>Menopause Has</em><br /><strong>Been Hidden</strong>
            </h2>
            <p className="why-body reveal d1">
              There are support systems for so many stages of life — for new mothers, for recovery, for
              grief. But very little exists for women going through menopause.
            </p>
            <div className="why-quote reveal d2">
              <p>&ldquo;And yet, this transition affects <em>everything</em> — your body, your emotions, your memory, your very identity.&rdquo;</p>
            </div>
            <p className="why-body reveal d2">
              MA exists to bring women together in a way that is <strong>real, honest, and supportive.</strong> Not clinical. Not judgmental. Not dismissive.
            </p>
            <div className="not-list reveal d3">
              {["Not clinical", "Not judgmental", "Not dismissive", "Just women… supporting women"].map((item) => (
                <div className="not-item" key={item}>
                  <div className="not-check">✓</div>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AFFECTS STRIP ── */}
      <section className="affects-strip">
        <div className="affects-inner">
          <h2 className="s-title reveal">This Transition <em>Affects Everything</em></h2>
          <p className="s-lead reveal d1">Understanding what you&apos;re going through is the first step to healing.</p>
          <div className="affects-grid">
            {[
              { title: "Your Body", text: "Hot flashes, sleep disruption, physical changes — your body is transforming.", icon: <path d="M12 21C12 21 4 15 4 10a8 8 0 0116 0c0 5-8 11-8 11z" fill="white" opacity="0.9" /> },
              { title: "Your Emotions", text: "Mood swings, anxiety, and emotional waves are part of this journey.", icon: <path d="M12 2C8.686 2 6 4.686 6 8c0 2.97 2.01 5.44 4.73 6.21L12 22l1.27-7.79C15.99 13.44 18 10.97 18 8c0-3.314-2.686-6-6-6z" fill="white" opacity="0.9" /> },
              { title: "Your Memory", text: "Brain fog, forgetfulness, and concentration changes are common and real.", icon: <><ellipse cx="12" cy="10" rx="8" ry="7" stroke="white" strokeWidth="1.8" /><path d="M8 10h8M10 7l2 3 2-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" /><path d="M12 17v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" /></> },
              { title: "Your Identity", text: "A powerful shift in sense of self, purpose, and life direction.", icon: <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" opacity="0.9" /> },
            ].map((card, i) => (
              <div className={`affect-card reveal${i > 0 ? ` d${i}` : ""}`} key={card.title}>
                <div className="affect-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" width="26" height="26">{card.icon}</svg>
                </div>
                <div className="affect-card-title">{card.title}</div>
                <p className="affect-card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* ── WHAT WE OFFER ── */}
      <section id="what-we-offer" className="offer-section">
        <div className="offer-inner">
          <div className="reveal"><div className="section-kicker"><span>What We Offer</span></div></div>
          <h2 className="s-title reveal d1">At MA, <em>You Will Find</em></h2>
          <p className="s-lead reveal d2">Everything you need to feel supported, understood, and empowered through this transition.</p>
          <div className="offer-grid">
            {[
              { title: "A Safe Space to Speak Freely", text: "Share your experiences without fear. Everything discussed in our circle stays in the circle — complete anonymity guaranteed.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#c94e72" strokeWidth="1.8" strokeLinejoin="round" /> },
              { title: "Women Who Understand", text: "Connect with women who truly get it — no explanations needed. Built on shared experience and deep mutual understanding.", icon: <><circle cx="9" cy="7" r="4" stroke="#c94e72" strokeWidth="1.8" /><circle cx="15" cy="7" r="4" stroke="#c94e72" strokeWidth="1.8" /><path d="M2 21c0-4 3.1-7 7-7M15 14c3.9 0 7 3 7 7" stroke="#c94e72" strokeWidth="1.8" strokeLinecap="round" /></> },
              { title: "Emotional Support", text: "Receive and give support through shared stories, compassion, and the warmth of women who have walked this road.", icon: <><path d="M12 21C12 21 4 14.5 4 9a8 8 0 0116 0c0 5.5-8 12-8 12z" stroke="#c94e72" strokeWidth="1.8" /><circle cx="12" cy="9" r="3" stroke="#c94e72" strokeWidth="1.5" /></> },
              { title: "Guidance Through Change", text: "Navigate mood changes, anxiety, and life transitions with community support and the wisdom of shared experience.", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#c94e72" strokeWidth="1.8" strokeLinecap="round" /> },
              { title: "Rest, Reflect & Reconnect", text: "Slow down, reflect on your journey, and reconnect with who you are and who you're becoming.", icon: <path d="M12 3v3M6.3 6.3l2.1 2.1M3 12h3M6.3 17.7l2.1-2.1M12 21v-3M17.7 17.7l-2.1-2.1M21 12h-3M17.7 6.3l-2.1 2.1" stroke="#c94e72" strokeWidth="1.8" strokeLinecap="round" /> },
              { title: "Come As You Are", text: "No right words needed. No need to have it figured out. You are welcome exactly as you are — wherever you are in this journey.", icon: <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#c94e72" strokeWidth="1.8" strokeLinejoin="round" /> },
            ].map((card, i) => (
              <div className={`offer-card reveal${i % 3 > 0 ? ` d${i % 3}` : ""}`} key={card.title}>
                <div className="offer-icon">
                  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">{card.icon}</svg>
                </div>
                <div className="offer-title">{card.title}</div>
                <p className="offer-text">{card.text}</p>
              </div>
            ))}
            {/* Quote card */}
            <div className="offer-span3 reveal" style={{ background: "linear-gradient(135deg,var(--blush),rgba(255,255,255,0.7))", borderRadius: 20, padding: "40px 56px", border: "1px solid var(--rose-pale)", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(20px,2.5vw,30px)", fontStyle: "italic", color: "var(--rose-deep)", lineHeight: 1.55 }}>
                &ldquo;You can come as you are. You don&apos;t have to have the right words.<br />
                You don&apos;t have to have it all figured out.{" "}
                <strong style={{ color: "var(--rose)", fontStyle: "normal" }}>Just show up. We&apos;ll be here.</strong>&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* ── LITERATURE & STEP WORKING JOURNAL ── */}
      <section id="literature" className="lit-section">
        <div className="lit-inner">
          <div className="reveal"><div className="section-kicker"><span>Resources &amp; Literature</span></div></div>
          <h2 className="s-title reveal d1">Step Working Journal <em>&amp; Literature</em></h2>
          <p className="s-lead reveal d2">Tools to support your healing journey — a personal journal, meeting readings, and books to guide you.</p>
          <div className="lit-grid">

            {/* ── STEP WORKING JOURNAL PANEL ── */}
            <div className="lit-journal reveal d1">
              <div className="lit-journal-badge">Available on Amazon</div>
              <div className="lit-journal-kicker">Step Working Journal</div>
              <div className="lit-journal-title">The MA Step Working Journal</div>
              <p className="lit-journal-body">
                A guided journal designed specifically for women in Menopause Anonymous — walk through
                all 12 steps with reflection prompts, space to write your story, and affirmations to
                support your healing at every stage of this transition.
              </p>
              <a
                className="lit-journal-btn"
                href="https://www.amazon.com/s?k=menopause+anonymous+step+working+journal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Get it on Amazon
              </a>
            </div>

            {/* ── LITERATURE WINDOW ── */}
            <div className="lit-window reveal d2">
              <div className="lit-window-tabs">
                {[
                  { key: "readings", label: "Meeting Readings" },
                  { key: "books", label: "Books" },
                  { key: "resources", label: "Resources" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    className={`lit-tab-btn${litTab === key ? " active" : ""}`}
                    onClick={() => setLitTab(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="lit-tab-content ">
                {litTab === "readings" &&
                  [
                    {
                      title: "The MA READINGS",
                      img: "/reading.jpg",
                      desc: "A set of 12 readings that guide the themes of our meetings and provide a framework for understanding our experiences.",
                    },
                    {
                      title: "The MA Preamble",
                      img: "/preamble.jpg",
                      desc: "A brief statement read at the opening of every MA meeting to welcome all women and set the tone of the circle.",
                    },
                    {
                      title: "The 12 Steps of MA",
                      img: "/12steps.jpg",
                      desc: "The guiding principles of Menopause Anonymous — a structured path through acceptance, healing, and personal growth.",
                    },
                    {
                      title: "MA 12 Cornerstone",
                      img: "/12cornerstones.webp",
                      desc: "The foundational pillars that support our community structure, ensuring a safe, respectful, and enduring space for all members.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 ${openAccordion === i ? "border-[#e8bfab]" : "border-[#e8d7c8]"
                        }`}
                    >
                      {/* Header */}
                      <button
                        onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#fff8f6] transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`min-w-9 w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${openAccordion === i
                                ? "bg-[#7d2948] text-white"
                                : "bg-[#fdf0ea] text-[#7d2948]"
                              }`}
                          >
                            {i + 1}
                          </div>
                          <h3 className="text-[15px] font-medium text-[#3d1124] leading-snug">
                            {item.title}
                          </h3>
                        </div>

                        <svg
                          className={`w-4 h-4 text-[#7d2948] flex-shrink-0 transition-transform duration-300 ${openAccordion === i ? "rotate-180" : "rotate-0"
                            }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      {/* Divider */}
                      <div
                        className={`mx-5 transition-colors duration-300 ${openAccordion === i ? "h-px bg-[#e8bfab]" : "h-px bg-[#f3e3d7]"
                          }`}
                      />

                      {/* Content — grid trick for smooth height animation */}
                      <div
                        className={`grid transition-all  duration-350 ease-in-out ${openAccordion === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-[68px] pr-5 pb-5 pt-3">
                            <p className="text-sm text-[#8a6d74] leading-7 max-w-xl">
                              {item.desc}
                            </p>

                            {item.img && (
                              <div className="mt-4">
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  className="w-full rounded-xl border border-[#e8d7c8] cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                                  onClick={() => {
                                    setSelectedImage(item.img);
                                    setZoom(1);
                                    setPosition({ x: 0, y: 0 });
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {litTab === "books" && [
                  { title: "The MA Step Working Journal", desc: "The official companion journal for working through all 12 steps of Menopause Anonymous. Available on Amazon.", link: "https://www.amazon.com/s?k=menopause+anonymous+step+working+journal", linkLabel: "Find on Amazon" },
                  { title: "More Titles Coming Soon", desc: "Additional recommended reading for women navigating the menopause transition will be listed here." },
                ].map((item, i) => (
                  <div className="lit-item" key={item.title}>
                    <div className="lit-item-num">{i + 1}</div>
                    <div>
                      <div className="lit-item-title">{item.title}</div>
                      <div className="lit-item-desc">{item.desc}</div>
                      {item.link && (
                        <a className="lit-item-link" href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.linkLabel}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                {litTab === "resources" && [
                  { title: "Weekly Sunday Meeting", desc: "Every Sunday at 4:00 PM Central Time via Zoom. Meeting ID: 349 786 148 · Password: 008895.", link: ZOOM_LINK, linkLabel: "Join on Zoom" },
                  { title: "MA Website", desc: "Visit MAAnonymous.org for news, updates, and more information about Menopause Anonymous.", link: "https://maanonymous.org", linkLabel: "Visit MAAnonymous.org" },
                ].map((item, i) => (
                  <div className="lit-item" key={item.title}>
                    <div className="lit-item-num">{i + 1}</div>
                    <div>
                      <div className="lit-item-title">{item.title}</div>
                      <div className="lit-item-desc">{item.desc}</div>
                      {item.link && (
                        <a className="lit-item-link" href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.linkLabel}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* ── MEETINGS ── */}
      <section id="meetings" className="meeting-section">
        <div className="meeting-inner">
          <div className="reveal"><div className="section-kicker"><span>Join a Meeting</span></div></div>
          <h2 className="s-title reveal d1">Our Sunday <em>Healing Circle</em></h2>
          <p className="s-lead reveal d2">Every week, women gather to support one another. No agenda, no pressure — just honest, healing connection.</p>
          <div className="meeting-card reveal d2">
            <div className="mc-logo">
              <Image className="rounded-full" src="/logo.jpeg" alt="Menopause Anonymous" width={150} height={150} style={{ width: 150, height: "auto", objectFit: "contain" }} />
              <p>Every Sunday<br />4:00 PM Central</p>
            </div>
            <div className="mc-divider" />
            <div className="mc-details">
              <div className="mc-h3">✿ Meeting Details</div>
              {[
                { label: "When", value: "Every Sunday", icon: <><rect x="3" y="4" width="18" height="18" rx="3" stroke="white" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round" /></> },
                { label: "Time", value: "4:00 PM — Central Time", icon: <><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" /><path d="M12 7v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" /></> },
                { label: "Platform", value: "Zoom Online Meeting", icon: <><rect x="2" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="2" /><path d="M16 7l-4 4-4-4" stroke="white" strokeWidth="2" strokeLinecap="round" /></> },
                { label: "Meeting ID", value: "349 786 148", icon: <><rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" /><path d="M8 12h8M8 8h8M8 16h5" stroke="white" strokeWidth="2" strokeLinecap="round" /></> },
                { label: "Password", value: "008895", icon: <><rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="2" /><path d="M8 11V7a4 4 0 018 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" /></> },
              ].map(({ label, value, icon }) => (
                <div className="drow" key={label}>
                  <div className="dbox">
                    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">{icon}</svg>
                  </div>
                  <div><span className="dl">{label}</span><span className="dv">{value}</span></div>
                </div>
              ))}
              <a className="mc-btn" href={ZOOM_LINK} target="_blank" rel="noopener noreferrer">
                Join the Circle
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="values-inner">
          <div className="values-text">
            <div className="reveal"><div className="section-kicker"><span>Our Values</span></div></div>
            <h2 className="s-title reveal d1">What Makes<br /><em>MA Different</em></h2>
            <p className="what-body reveal d1">Modeled after the proven principles of 12-step recovery — a structured approach to healing built on community, honesty, and mutual support.</p>
            <div className="values-list reveal d2">
              {[
                { title: "Anonymous", desc: "No last names, no labels. Just your first name and your story.", icon: <path d="M12 3L4 7v5c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V7L12 3z" fill="white" opacity="0.9" /> },
                { title: "Confidential", desc: "What is shared in the circle stays in the circle — always.", icon: <><rect x="3" y="11" width="18" height="11" rx="2" fill="white" opacity="0.9" /><path d="M7 11V7a5 5 0 0110 0v4" stroke="white" strokeWidth="2" /></> },
                { title: "Women Only", desc: "A space designed entirely for women, by women.", icon: <><circle cx="12" cy="8" r="5" fill="white" opacity="0.9" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" /></> },
                { title: "Always Free", desc: "Healing and community should never have a price tag.", icon: <><path d="M12 21C12 21 4 14 4 9a8 8 0 0116 0c0 5-8 12-8 12z" fill="white" opacity="0.9" /><circle cx="12" cy="9" r="2.5" fill="rgba(255,255,255,0.5)" /></> },
                { title: "Non-Judgmental", desc: "Every experience is valid. Every emotion is welcome here.", icon: <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" opacity="0.9" /> },
              ].map(({ title, desc, icon }) => (
                <div className="val-item" key={title}>
                  <div className="val-icon"><svg viewBox="0 0 24 24" fill="none" width="18" height="18">{icon}</svg></div>
                  <div><div className="val-title">{title}</div><div className="val-desc">{desc}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="values-visual reveal d2" style={{ position: "relative" }}>
            <div className="val-main-img">
              <Image src="/MMAX.png" alt="Background" width={600} height={560} style={{ width: "100%", height: 560, objectFit: "cover", objectPosition: "center", display: "block" }} />
            </div>
            <div className="val-float">
              <div className="val-float-label">Our Commitment</div>
              <div className="val-float-text">&ldquo;Step into your power, together.&rdquo;</div>
            </div>
            <div className="val-logo-float">
              <Image src="/logo2.jpeg" alt="MA" width={78} height={78} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/logo2.jpeg"
            alt="Pink roses"
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
          <div className="cta-overlay" />
        </div>
        <div className="cta-inner">
          <div className="cta-logos reveal">

          </div>
          <h2 className="cta-title reveal d1">You Are Welcome<br /><strong>Exactly As You Are.</strong></h2>
          <div className="cta-affirmations reveal d1">
            <div className="cta-aff">&ldquo;You are not alone.&rdquo;</div>
            <div className="cta-aff">&ldquo;You are not losing it.&rdquo;</div>
            <div className="cta-aff">&ldquo;You are becoming.&rdquo;</div>
          </div>
          <p className="cta-sub reveal d2">Come as you are. Leave feeling supported. Step into your power.</p>
          <div className="cta-btns reveal d3">
            <a className="cta-btn-w" href="#meetings">Find a Meeting</a>
            <a className="cta-btn-o" href="#what-is-ma">Learn More About MA</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Image className="rounded-full" src="/logo.jpeg" alt="Menopause Anonymous" width={64} height={64} style={{ height: 100, width: "100px" }} />
            <p>Menopause Anonymous is a safe, supportive, and anonymous space where women come together to navigate one of the most powerful transitions of life.</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-h">Quick Links</div>
            <a href="#what-is-ma">What is MA?</a>
            <a href="#why-ma">Why MA Exists</a>
            <a href="#what-we-offer">What We Offer</a>
            <a href="#literature">Literature &amp; Journal</a>
            <a href="#meetings">Find a Meeting</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-h">Join Us</div>
            <p>Every Sunday</p>
            <p>4:00 PM Central Time</p>
            <p>Meeting ID: 349 786 148</p>
            <p>Password: 008895</p>
            <a href={ZOOM_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "var(--rose-pale)", fontWeight: 600, marginTop: 6 }}>
              Join on Zoom →
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="fcopy">© 2026 Menopause Anonymous · MAAnonymous.org</div>
          <div className="fheart">♥ Women Supporting Women ♥</div>
        </div>
      </footer>
      {/* Fullscreen Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] overflow-hidden"
          onMouseMove={(e) => {
            if (!dragging) return;

            setPosition({
              x: e.clientX - dragStart.current.x,
              y: e.clientY - dragStart.current.y,
            });
          }}
          onMouseUp={() => setDragging(false)}
          onClick={() => setSelectedImage(null)}
        >
          {/* Controls */}
          <div className="absolute top-5 right-5 flex gap-3 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((prev) => Math.max(prev - 0.2, 1));
              }}
              className="w-10 h-10 bg-white rounded-full text-2xl"
            >
              −
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((prev) => Math.min(prev + 0.2, 5));
              }}
              className="w-10 h-10 bg-white rounded-full text-2xl"
            >
              +
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="w-10 h-10 bg-red-500 text-white rounded-full text-2xl"
            >
              ×
            </button>
          </div>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage}
              alt="preview"
              draggable={false}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => {
                setDragging(true);

                dragStart.current = {
                  x: e.clientX - position.x,
                  y: e.clientY - position.y,
                };
              }}
              className={`select-none ${dragging ? "cursor-grabbing" : "cursor-grab"
                }`}
              style={{
                transform: `
            translate(${position.x}px, ${position.y}px)
            scale(${zoom})
          `,
                transition: dragging ? "none" : "transform 0.2s ease",
                maxWidth: "90%",
                maxHeight: "90%",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
