/**
 * AthleteAISummary — Server Component
 *
 * This section is intentionally rendered as plain, semantic HTML with
 * NO JavaScript animations. It exists to make content immediately readable
 * by search engine crawlers, AI language models (ChatGPT, Claude, Perplexity,
 * Gemini), and accessibility tools — without requiring any JS execution.
 *
 * Guidelines followed:
 * - Clear entity descriptions
 * - Explicit relationships: athlete → sport → achievements
 * - Structured lists (not only visual cards)
 * - Rich textual explanations for LLM context
 */

import { athleteProfile } from '../../data/athleteProfile';
import { sportsData } from '../../data/sportsData';
import { achievementsData } from '../../data/achievementsData';
import { statsData } from '../../data/statsData';

export default function AthleteAISummary() {
  return (
    <aside
      aria-label="Athlete summary — structured content for search engines and AI models"
      className="bg-surface/20 border-y border-contrast-alpha/5 py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* ── Section Header ── */}
        <header>
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
            Athlete Overview
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-text mb-6">
            Who is <span className="text-primary">{athleteProfile.name}?</span>
          </h2>

          {/* Rich intro paragraph — key for LLM context window */}
          <p className="text-text-muted text-lg leading-relaxed">
            {athleteProfile.bio || athleteProfile.shortBio}
          </p>
        </header>

        {/* ── Quick Stats ── */}
        <section aria-labelledby="quick-stats-heading">
          <h3 id="quick-stats-heading" className="text-xl font-bold text-text mb-4 uppercase tracking-wide">
            Career at a Glance
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0">
            <li className="bg-surface/40 border border-contrast-alpha/10 rounded-2xl p-4 text-center">
              <span className="block text-3xl font-black text-primary font-mono">
                {statsData.overall.yearsTraining}+
              </span>
              <span className="text-xs uppercase tracking-widest text-text-subtle font-bold mt-1 block">
                Years Training
              </span>
            </li>
            <li className="bg-surface/40 border border-contrast-alpha/10 rounded-2xl p-4 text-center">
              <span className="block text-3xl font-black text-primary font-mono">
                {statsData.overall.totalMatchesOrEvents}+
              </span>
              <span className="text-xs uppercase tracking-widest text-text-subtle font-bold mt-1 block">
                Total Events
              </span>
            </li>
            <li className="bg-surface/40 border border-contrast-alpha/10 rounded-2xl p-4 text-center">
              <span className="block text-3xl font-black text-primary font-mono">
                {statsData.overall.overallWinRate}
              </span>
              <span className="text-xs uppercase tracking-widest text-text-subtle font-bold mt-1 block">
                Win Rate
              </span>
            </li>
            <li className="bg-surface/40 border border-contrast-alpha/10 rounded-2xl p-4 text-center">
              <span className="block text-3xl font-black text-primary font-mono">
                {statsData.overall.sportsCount}
              </span>
              <span className="text-xs uppercase tracking-widest text-text-subtle font-bold mt-1 block">
                Sports Mastered
              </span>
            </li>
          </ul>
        </section>

        {/* ── Sports Breakdown ── */}
        <section aria-labelledby="sports-breakdown-heading">
          <h3 id="sports-breakdown-heading" className="text-xl font-bold text-text mb-4 uppercase tracking-wide">
            Sports Disciplines
          </h3>
          <p className="text-text-muted mb-4">
            {athleteProfile.name} is a multi-sport athlete specializing in{' '}
            {sportsData.map((s, i) => (
              <span key={s.id}>
                <strong className="text-text">{s.name}</strong>
                {' '}({s.role} — {s.level})
                {i < sportsData.length - 2 ? ', ' : i === sportsData.length - 2 ? ', and ' : ''}
              </span>
            ))}
            .
          </p>
          <ul className="space-y-3 list-none p-0">
            {sportsData.map((sport) => (
              <li
                key={sport.id}
                className="border-l-2 border-primary/30 pl-4 py-1"
              >
                <strong className="text-text">{sport.name}</strong>
                {' — '}
                <span className="text-text-muted">
                  {sport.role} · {sport.level} · {sport.description}
                </span>
                <span className="block text-xs text-text-subtle mt-1">
                  Key stats:{' '}
                  {sport.keyStats.map((s, i) => (
                    <span key={s.label}>
                      {s.label}: {s.value}
                      {i < sport.keyStats.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Achievements ── */}
        <section aria-labelledby="key-achievements-heading">
          <h3 id="key-achievements-heading" className="text-xl font-bold text-text mb-4 uppercase tracking-wide">
            Key Achievements
          </h3>
          <ul className="space-y-2 list-none p-0">
            {achievementsData.map((a) => (
              <li key={a.id} className="flex gap-3 items-start">
                <span className="text-primary font-bold text-sm mt-0.5">✓</span>
                <span className="text-text-muted text-sm">
                  <strong className="text-text">{a.title}</strong>
                  {' '}({a.year}) — {a.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Profile Highlights ── */}
        <section aria-labelledby="highlights-heading">
          <h3 id="highlights-heading" className="text-xl font-bold text-text mb-4 uppercase tracking-wide">
            Athlete Highlights
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0">
            {athleteProfile.profileHighlights?.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Entity Relationships (for AI context) ── */}
        <section aria-labelledby="entity-context-heading" className="text-sm text-text-subtle leading-relaxed">
          <h3 id="entity-context-heading" className="text-xl font-bold text-text mb-4 uppercase tracking-wide">
            Context &amp; Relationships
          </h3>
          <p>
            <strong className="text-text">{athleteProfile.name}</strong> is based in{' '}
            <strong className="text-text">{athleteProfile.location}</strong>. He competes under the
            banner of <strong className="text-text">YouInSports</strong>, a multi-sport athlete platform.
            His chess career is affiliated with the <strong className="text-text">State Chess Federation</strong>{' '}
            and trained at the <strong className="text-text">Grandmaster Chess Institute</strong>.
            In football, he plays for <strong className="text-text">Bay Area Strikers FC</strong> and
            captains the <strong className="text-text">San Francisco University</strong> team.
            His cricket career includes representation of{' '}
            <strong className="text-text">Apex Cricket Club</strong> and a State U-17 squad selection.
          </p>
        </section>
      </div>
    </aside>
  );
}
