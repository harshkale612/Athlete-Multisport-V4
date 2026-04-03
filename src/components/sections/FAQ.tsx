/**
 * FAQ — Server Component
 *
 * Fully server-rendered FAQ section for maximum SEO and LLM discoverability.
 * Pairs with the FAQPage JSON-LD injected in app/page.tsx.
 * No client JS required — pure semantic HTML.
 */

import { athleteProfile } from '../../data/athleteProfile';

const faqs = [
  {
    question: `Who is ${athleteProfile.name}?`,
    answer: `${athleteProfile.name} is a multi-disciplinary athlete based in ${athleteProfile.location} who competes at an elite level in Chess, Football, Cricket, Basketball, and Tennis. He holds a National Master chess title with a rating of 2350, has scored 34 goals as a Football Attacking Midfielder, accumulated 3,200 runs as a Cricket Top-order Batsman, and competes at university level in Basketball and Tennis. He was named Multi-Sport Athlete of the Year by the city council in 2023.`,
  },
  {
    question: `What sports does ${athleteProfile.name} play?`,
    answer: `${athleteProfile.name} plays five sports: Chess (National Master, rated 2350), Football (Attacking Midfielder, Semi-Pro level, 120 matches, 34 goals, 58 assists), Cricket (Top-order Batsman, Club Level A, 85 matches, 3200 runs), Basketball (Point Guard, University Team, 15.2 PPG), and Tennis (Singles Player, Regional Circuit, 72% win rate).`,
  },
  {
    question: `What are ${athleteProfile.name}'s major achievements?`,
    answer: `${athleteProfile.name}'s major achievements include: National Youth Chess Champion 2023 (undefeated across 9 games), FIDE Master Title Norm 2024 (achieved at International Open), Golden Boot – Regional League 2024 (22 goals in 18 matches), State Cricket Selection 2022 (selected for U-17 State Squad after scoring 3 centuries), and Multi-Sport Athlete Award 2023 (recognised by the city council for excellence across three sporting disciplines).`,
  },
  {
    question: `What is ${athleteProfile.name}'s chess rating?`,
    answer: `${athleteProfile.name} holds a FIDE chess rating of 2350, has earned the National Master title, and achieved his first FIDE Master title norm at the International Open in 2024. He has competed in over 45 tournaments with a best ranking of #12 at the state level.`,
  },
  {
    question: `Which clubs and teams is ${athleteProfile.name} affiliated with?`,
    answer: `${athleteProfile.name} is affiliated with: Bay Area Strikers FC (Football, Attacking Midfielder, since 2020), State Chess Federation (Professional Association, Lifetime Member since 2016), Apex Cricket Club (League Division 1, Top-order Batsman, since 2019), and San Francisco University Athletics (Football Team Captain since 2022).`,
  },
  {
    question: `Who coaches ${athleteProfile.name}?`,
    answer: `${athleteProfile.name} is coached and mentored by: Viktor Korchnoi (Chess Mentor, Grandmaster with 40+ years experience), Coach Carter (Head Football Coach, FIFA Licensed with 15 years experience), and Rahul Dravid (Batting Consultant, Former Cricket Captain with 20 years experience).`,
  },
  {
    question: `How can I contact or collaborate with ${athleteProfile.name}?`,
    answer: `You can reach ${athleteProfile.name} for sponsorships, partnerships, or media inquiries via email. He is also active on Instagram, LinkedIn, and YouTube. Contact details are available on his YouInSports athlete profile page.`,
  },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-contrast-alpha/5"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text"
          >
            Frequently Asked{' '}
            <span className="text-transparent text-edge-outline">Questions</span>
          </h2>
        </header>

        <dl className="space-y-0 divide-y divide-contrast-alpha/10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-8 group">
              <dt className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors">
                {faq.question}
              </dt>
              <dd className="text-text-muted leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
