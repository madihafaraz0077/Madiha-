import { type ReactNode, useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowRight, ChevronRight, Phone, Sparkles } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const elements = revealRefs.current.filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const reveal = (index: number, className = '') => (element: HTMLElement | null) => {
    revealRefs.current[index] = element;
    if (element) element.className = `${element.className} rd-reveal ${className}`;
  };

  return (
    <div className="rd-page">
      <nav className="rd-nav" aria-label="Main navigation">
        <div className="rd-shell rd-nav-inner">
          <a className="rd-brand" href="#top" data-testid="link-brand">
            <span className="rd-brand-mark" aria-hidden="true"><span>R</span></span>
            <span>Roshni Drive</span>
          </a>
          <div className="rd-nav-links">
            <a href="#experience" data-testid="link-experience">The experience</a>
            <a href="#how-it-works" data-testid="link-how-it-works">How it works</a>
            <a href="#story" data-testid="link-story">A learner's story</a>
          </div>
          <a className="rd-nav-cta" href="https://wa.me/923001234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20trial%20driving%20lesson." target="_blank" rel="noopener noreferrer" data-testid="link-nav-book">
            Book a trial <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="rd-hero">
          <div className="rd-shell rd-hero-grid">
            <div className="rd-reveal" ref={reveal(0)}>
              <div className="rd-eyebrow">For first-time drivers in Peshawar</div>
              <h1 className="rd-display">The first step can feel <em>lighter.</em></h1>
              <p className="rd-hero-lede">Patient, women-friendly instructors who start at your pace — not the road's. Try one lesson before you decide on anything.</p>
              <div className="rd-hero-actions">
                <a className="rd-btn rd-btn-primary" href="https://wa.me/923001234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20trial%20driving%20lesson." target="_blank" rel="noopener noreferrer" data-testid="link-hero-whatsapp">
                  Book your trial lesson <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="rd-btn rd-btn-quiet" href="#experience" data-testid="link-hero-learn">See what is included <ChevronRight size={16} aria-hidden="true" /></a>
              </div>
              <div className="rd-price-note"><Sparkles size={14} aria-hidden="true" /><strong>Rs. 1,500</strong><span>· one lesson, no long-term commitment</span></div>
            </div>

            <div className="rd-hero-art rd-reveal rd-delay-2" ref={reveal(1)} aria-label="A calm road representing your first driving lesson">
              <div className="rd-art-card">
                <div className="rd-art-label">A calm start, every time</div>
                <div className="rd-sun" aria-hidden="true" />
                <div className="rd-route" aria-hidden="true" />
                <div className="rd-road" aria-hidden="true" />
                <div className="rd-car" aria-hidden="true"><div className="rd-car-window" /></div>
                <div className="rd-art-caption">You do not have to feel ready before you begin.</div>
              </div>
              <div className="rd-float-note"><span className="rd-float-dot" /><div><strong>Your pace.</strong><span> Our pedals, too.</span></div></div>
            </div>
          </div>
        </section>

        <section className="rd-proof-strip" aria-label="What makes Roshni Drive feel different">
          <div className="rd-shell rd-proof-grid">
            <div className="rd-proof-item"><span>01</span><p>Female instructors available on request</p></div>
            <div className="rd-proof-item"><span>02</span><p>Dual-pedal car, so you're never fully on your own</p></div>
            <div className="rd-proof-item"><span>03</span><p>Pick-up from home or a comfortable spot</p></div>
            <div className="rd-proof-item"><span>04</span><p>Serving Peshawar and nearby areas</p></div>
          </div>
        </section>

        <section className="rd-section rd-experience" id="experience">
          <div className="rd-shell rd-includes">
            <div className="rd-includes-copy rd-reveal" ref={reveal(2)}>
              <div className="rd-eyebrow">One real lesson</div>
              <h2>Not a sales pitch. A feeling of what learning can be.</h2>
              <p>We begin gently, explain as we go, and leave you with an honest plan. The point of a trial is simple: to see if this feels like the right place for you.</p>
              <a className="rd-btn rd-btn-soft" href="#book" style={{ marginTop: '28px' }} data-testid="link-experience-book">I want that first step <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="rd-feature-list rd-reveal rd-delay-1" ref={reveal(3)}>
              <article className="rd-feature">
                <div className="rd-feature-index">01</div>
                <div><h3>A calm start</h3><p>We begin in a quiet, low-traffic area — mirrors, seating, basic controls — until you're relaxed behind the wheel.</p></div>
              </article>
              <article className="rd-feature">
                <div className="rd-feature-index">02</div>
                <div><h3>Your first drive</h3><p>Slow, guided driving with the instructor talking you through every move, at a pace you set.</p></div>
              </article>
              <article className="rd-feature">
                <div className="rd-feature-index">03</div>
                <div><h3>An honest plan</h3><p>At the end, your instructor tells you what to expect next — how many lessons, what to focus on, no pressure to book more.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="rd-section rd-steps" id="how-it-works">
          <div className="rd-shell rd-steps-grid">
            <div>
              <div className="rd-eyebrow">No complicated process</div>
              <h2>Booking takes two minutes.</h2>
              <div className="rd-step-list">
                <article className="rd-step"><div className="rd-step-num">1</div><div><h3>Send your details</h3><p>Name, area, and instructor preference — on WhatsApp or by phone.</p></div></article>
                <article className="rd-step"><div className="rd-step-num">2</div><div><h3>We confirm a time</h3><p>Within a few hours, matched to an instructor near you.</p></div></article>
                <article className="rd-step"><div className="rd-step-num">3</div><div><h3>You take the wheel</h3><p>Your instructor arrives, and your first lesson begins.</p></div></article>
              </div>
            </div>
            <aside className="rd-steps-aside rd-reveal rd-delay-2" ref={reveal(4)}>
              <div className="rd-eyebrow">A small promise</div>
              <h3>You will never be rushed into the next step.</h3>
              <p>It is okay to ask the same question twice. It is okay to take a breath. That is what patient teaching looks like.</p>
            </aside>
          </div>
        </section>

        <section className="rd-section rd-trust" id="story">
          <div className="rd-shell rd-quote rd-reveal" ref={reveal(5)}>
            <div className="rd-quote-mark" aria-hidden="true">“</div>
            <blockquote>I'd failed my first attempt with another school and was scared to try again. My instructor here never made me feel behind.</blockquote>
            <cite>— Sana, trial lesson graduate</cite>
          </div>
        </section>

        <section className="rd-section rd-book" id="book">
          <div className="rd-shell rd-book-grid">
            <div>
              <div className="rd-eyebrow">When you are ready</div>
              <h2>Ready when you are.</h2>
              <p className="rd-book-copy">No pressure, no obligation — just one lesson to see if it feels right. Tell us where you are in Peshawar, and we will take it from there.</p>
            </div>
            <div className="rd-book-card rd-reveal rd-delay-1" ref={reveal(6)}>
              <h3>Take the gentlest first step.</h3>
              <p>Message us on WhatsApp and we will help you choose a comfortable time and instructor.</p>
              <a className="rd-btn rd-btn-primary" href="https://wa.me/923001234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20trial%20driving%20lesson." target="_blank" rel="noopener noreferrer" data-testid="link-book-whatsapp">
                Book on WhatsApp <ArrowRight size={17} aria-hidden="true" />
              </a>
              <div className="rd-callout"><span>Prefer to talk first?</span><a className="rd-phone" href="tel:+923001234567" data-testid="link-book-phone"><Phone size={14} aria-hidden="true" /> Call +92 300 1234567</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="rd-footer">
        <div className="rd-shell rd-footer-inner">
          <strong>Roshni Drive</strong>
          <span>Serving Peshawar and nearby areas · Trial lessons available 7 days a week</span>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
