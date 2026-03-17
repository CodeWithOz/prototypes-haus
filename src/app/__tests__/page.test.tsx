import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '../page';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns the element that acts as the "Active Builds" section container.
 * Located by heading text so the test is not tied to a specific tag or class.
 */
function getActiveBuildsSection() {
  const heading = screen.getByRole('heading', { name: /active builds/i });
  return heading.closest('section') as HTMLElement;
}

/**
 * Returns the element that acts as the Graveyard section container.
 * Located by the "GRAVEYARD" heading.
 */
function getGraveyardSection() {
  const heading = screen.getByRole('heading', { name: /^graveyard$/i });
  return heading.closest('section') as HTMLElement;
}

// ---------------------------------------------------------------------------
// Fixtures — kept in sync with the data in page.tsx so regressions surface
// ---------------------------------------------------------------------------

const ACTIVE_PROTOTYPE_NAMES = [
  'Fluide',
  'Parle',
  'Listen Better',
  'Artenee',
  'Content Matcher',
  'PairMaster',
  'My Bookshelf',
  'SPREEDR!',
] as const;

const ABANDONED_PROTOTYPES = [
  {
    name: 'GeldTrail',
    epitaph: 'Bad performance; picked wrong tech stack.',
    decommissionedYear: 2026,
  },
  {
    name: 'Compass',
    epitaph: 'Lack of clarity about what I wanted to build and what I wanted to use.',
    decommissionedYear: 2026,
  },
] as const;

// ---------------------------------------------------------------------------
// Tests — Active Builds section
// ---------------------------------------------------------------------------

describe('Home page — Active Builds section', () => {
  it('renders the ACTIVE BUILDS heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /active builds/i }),
    ).toBeInTheDocument();
  });

  it.each(ACTIVE_PROTOTYPE_NAMES)(
    'renders "%s" inside the active builds section',
    (name) => {
      render(<Home />);
      const section = getActiveBuildsSection();
      expect(within(section).getByText(name)).toBeInTheDocument();
    },
  );

  it.each(ABANDONED_PROTOTYPES)(
    'does NOT render abandoned project "$name" inside the active builds section',
    ({ name }) => {
      render(<Home />);
      const section = getActiveBuildsSection();
      expect(within(section).queryByText(name)).not.toBeInTheDocument();
    },
  );

  it('shows status badges (ALPHA, BETA, or STABLE) on active cards', () => {
    render(<Home />);
    const section = getActiveBuildsSection();
    // Use queryAllByText to handle multiple cards with the same badge label.
    const alphas = within(section).queryAllByText('ALPHA');
    const betas = within(section).queryAllByText('BETA');
    const stables = within(section).queryAllByText('STABLE');
    expect(alphas.length + betas.length + stables.length).toBeGreaterThan(0);
  });

  it('renders an EXPLORE BUILD link on active cards', () => {
    render(<Home />);
    const section = getActiveBuildsSection();
    const links = within(section).getAllByText(/explore build/i);
    expect(links.length).toBeGreaterThanOrEqual(ACTIVE_PROTOTYPE_NAMES.length);
  });

  it('each active card is an anchor that links to its URL', () => {
    render(<Home />);
    const section = getActiveBuildsSection();
    const cardLinks = within(section).getAllByRole('link');
    expect(cardLinks.length).toBeGreaterThanOrEqual(ACTIVE_PROTOTYPE_NAMES.length);
    cardLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });

  it('does NOT show "Decommissioned YYYY" labels in the active builds section', () => {
    render(<Home />);
    const section = getActiveBuildsSection();
    const decommissioned = within(section).queryAllByText(/decommissioned/i);
    expect(decommissioned).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Tests — Graveyard section heading
// ---------------------------------------------------------------------------

describe('Home page — Graveyard section heading', () => {
  it('renders the "GRAVEYARD" heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /^graveyard$/i }),
    ).toBeInTheDocument();
  });

  it('renders the graveyard section after the active builds section in document order', () => {
    render(<Home />);
    const activeHeading = screen.getByRole('heading', { name: /active builds/i });
    const graveyardHeading = screen.getByRole('heading', { name: /^graveyard$/i });

    // compareDocumentPosition bit 4 means "the argument follows the reference".
    const position = activeHeading.compareDocumentPosition(graveyardHeading);
    expect(position & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// Tests — Abandoned project cards
// ---------------------------------------------------------------------------

describe('Home page — Abandoned project cards', () => {
  it('renders the expected number of abandoned cards in the graveyard section', () => {
    render(<Home />);
    const graveyardSection = getGraveyardSection();
    // One "Decommissioned YYYY" label per abandoned card.
    const decommissionedLabels = within(graveyardSection).queryAllByText(
      /decommissioned/i,
    );
    expect(decommissionedLabels).toHaveLength(ABANDONED_PROTOTYPES.length);
  });

  it.each(ABANDONED_PROTOTYPES)(
    'renders "$name" inside the graveyard section',
    ({ name }) => {
      render(<Home />);
      const graveyardSection = getGraveyardSection();
      expect(within(graveyardSection).getByText(name)).toBeInTheDocument();
    },
  );

  it.each(ABANDONED_PROTOTYPES)(
    'shows "Decommissioned $decommissionedYear" on the $name card',
    ({ name, decommissionedYear }) => {
      render(<Home />);
      const graveyardSection = getGraveyardSection();
      // The text may be split across sibling text nodes ("Decommissioned " + "2024"),
      // so we match on each part separately to be DOM-structure-agnostic.
      const cardHeading = within(graveyardSection).getByText(name);
      // Walk up to the card element (the <a> ancestor).
      const card = cardHeading.closest('a') as HTMLElement;
      expect(card).toBeInTheDocument();
      expect(card.textContent).toMatch(/decommissioned/i);
      expect(card.textContent).toContain(String(decommissionedYear));
    },
  );

  it.each(ABANDONED_PROTOTYPES)(
    'shows the epitaph for "$name" instead of a description',
    ({ name, epitaph }) => {
      render(<Home />);
      const graveyardSection = getGraveyardSection();
      expect(within(graveyardSection).getByText(epitaph)).toBeInTheDocument();
    },
  );

  it('does NOT show ALPHA / BETA / STABLE status badges in the graveyard section', () => {
    render(<Home />);
    const graveyardSection = getGraveyardSection();
    expect(within(graveyardSection).queryAllByText('ALPHA')).toHaveLength(0);
    expect(within(graveyardSection).queryAllByText('BETA')).toHaveLength(0);
    expect(within(graveyardSection).queryAllByText('STABLE')).toHaveLength(0);
  });

  it('renders a "VIEW CARCASS" link on every abandoned card', () => {
    render(<Home />);
    const graveyardSection = getGraveyardSection();
    const links = within(graveyardSection).getAllByText(/view carcass/i);
    expect(links.length).toBeGreaterThanOrEqual(ABANDONED_PROTOTYPES.length);
  });

  it('"VIEW CARCASS" links on abandoned cards are styled with muted zinc-500 colour, not orange', () => {
    render(<Home />);
    const graveyardSection = getGraveyardSection();
    const ctaLinks = within(graveyardSection).getAllByText(/view carcass/i);
    ctaLinks.forEach((linkText) => {
      const wrapper = linkText.closest('div') ?? linkText.parentElement;
      const classes = wrapper?.className ?? '';
      expect(classes).not.toMatch(/text-orange-500/);
      expect(classes).toMatch(/zinc-500/);
    });
  });

  it('abandoned cards are each wrapped in an anchor linking to a URL', () => {
    render(<Home />);
    const graveyardSection = getGraveyardSection();
    const cardLinks = within(graveyardSection).getAllByRole('link');
    expect(cardLinks.length).toBeGreaterThanOrEqual(ABANDONED_PROTOTYPES.length);
    cardLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });
});

// ---------------------------------------------------------------------------
// Tests — Regression: existing active prototypes unaffected
// ---------------------------------------------------------------------------

describe('Home page — regression: active prototypes still render correctly', () => {
  it('does not render any abandoned project epitaphs in the active builds section', () => {
    render(<Home />);
    const section = getActiveBuildsSection();
    ABANDONED_PROTOTYPES.forEach(({ epitaph }) => {
      expect(within(section).queryByText(epitaph)).not.toBeInTheDocument();
    });
  });

  it('renders the page title "PROTOTYPES"', () => {
    render(<Home />);
    expect(screen.getByText('PROTOTYPES')).toBeInTheDocument();
  });

  it('renders the page subtitle "HAUS"', () => {
    render(<Home />);
    expect(screen.getByText('HAUS')).toBeInTheDocument();
  });
});
