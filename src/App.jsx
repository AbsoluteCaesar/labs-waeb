import React, { useState } from 'react';
import { HomePage, AboutPage, SimplificationPage, AudioPage, VisualPage, ContrastPage } from './Pages.jsx';

const pages = [
  { id: 'home', label: 'Home', description: 'An overview of inclusive learning and assistive technology.', component: HomePage },
  { id: 'about', label: 'About Dyslexia', description: 'Understanding dyslexia and accessible education.', component: AboutPage },
  { id: 'simplification', label: 'AI Simplification', description: 'Making complex text easier to read.', component: SimplificationPage },
  { id: 'audio', label: 'Audio Assistance', description: 'Supporting reading with spoken explanations.', component: AudioPage },
  { id: 'visual', label: 'Visual Accessibility', description: 'Typography and visual reading adjustments.', component: VisualPage },
  { id: 'contrast', label: 'Contrast & Rulers', description: 'Color overlays and line tracking.', component: ContrastPage },
];

function Header({ activePage, onNavigate }) {
  return <header className="site-header">
    <div className="header-inner">
      <div className="brand"><span className="brand-icon" aria-hidden="true">✦</span><div><strong>Inclusive Learning</strong><span>TOOLS FOR EVERY MIND</span></div></div>
      <nav aria-label="Main navigation"><ul>{pages.map(page => <li key={page.id}>
        <button type="button" onClick={() => onNavigate(page.id)} aria-current={activePage === page.id ? 'page' : undefined}>{page.label}</button>
      </li>)}</ul></nav>
    </div>
  </header>;
}

function ReadingSettings({ largeText, onLargeTextChange, warmBackground, onWarmBackgroundChange }) {
  return <aside className="settings" aria-label="Reading preferences">
    <div><strong>Make it comfortable</strong><p>Adjust the reading experience to suit you.</p></div>
    <div className="settings-controls">
      <label><input type="checkbox" checked={largeText} onChange={event => onLargeTextChange(event.target.checked)} /> Larger text</label>
      <label><input type="checkbox" checked={warmBackground} onChange={event => onWarmBackgroundChange(event.target.checked)} /> Warm background</label>
    </div>
  </aside>;
}

function TopicCard({ page, onNavigate }) {
  return <li className="topic-card"><button type="button" onClick={() => onNavigate(page.id)}><span>{page.label}</span><small>{page.description}</small><span className="arrow" aria-hidden="true">↗</span></button></li>;
}

function TopicExplorer({ onNavigate }) {
  const [query, setQuery] = useState('');
  const matchingPages = pages.filter(page => `${page.label} ${page.description}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="explorer" aria-labelledby="explore-title">
    <div className="explorer-heading"><div><p className="eyebrow">FIND YOUR WAY</p><h2 id="explore-title">Explore the hub</h2></div><div className="search"><label htmlFor="topic-search">Search topics</label><input id="topic-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try audio or contrast" /></div></div>
    <p className="results" role="status">{matchingPages.length} {matchingPages.length === 1 ? 'topic' : 'topics'} found</p>
    {matchingPages.length ? <ul className="topic-grid">{matchingPages.map(page => <TopicCard key={page.id} page={page} onNavigate={onNavigate} />)}</ul> : <p>No topics found. Try another search.</p>}
  </section>;
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [largeText, setLargeText] = useState(false);
  const [warmBackground, setWarmBackground] = useState(false);
  const page = pages.find(item => item.id === activePage);
  const Page = page.component;
  function navigate(id) { setActivePage(id); window.scrollTo({ top: 0, behavior: 'auto' }); }
  return <div className={`app ${largeText ? 'large-text' : ''} ${warmBackground ? 'warm-background' : ''}`}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header activePage={activePage} onNavigate={navigate} />
    <main id="main-content">
      <div className="intro"><p className="eyebrow">LEARN IN A WAY THAT WORKS FOR YOU</p><h1>{activePage === 'home' ? 'Learning is for everyone.' : page.label}</h1><p>{activePage === 'home' ? 'Explore ideas and tools that make learning more accessible for students with dyslexia.' : page.description}</p></div>
      <ReadingSettings largeText={largeText} onLargeTextChange={setLargeText} warmBackground={warmBackground} onWarmBackgroundChange={setWarmBackground} />
      {activePage === 'home' && <TopicExplorer onNavigate={navigate} />}
      <div className="article-content"><Page /></div>
    </main>
    <footer><div><strong>Inclusive Learning</strong><p>Accessible education, designed for every mind.</p></div><p>© 2026 Inclusive Learning Team Project</p></footer>
  </div>;
}
