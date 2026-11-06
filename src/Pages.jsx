import React from 'react';

function ContentSection({ children }) { return <section className="content-section">{children}</section>; }

export function HomePage() {
  return <>

        <ContentSection>
            <h2>Bridging the Literacy Gap in Modern Classrooms</h2>
            <p>
                Dyslexia is a neurodevelopmental condition that affects phonological processing, reading fluency, and rapid information decoding, impacting approximately 10 to 15 percent of learners worldwide. Standard academic curricula rely heavily on uniform, text-heavy reading materials that create unnecessary barriers for students with language-processing differences. Rather than reflecting an individual's intellectual potential, reading difficulties often trigger cognitive fatigue, disengagement, and academic anxiety when learners are forced to navigate poorly structured digital documents and dense print textbooks.
            </p>
            <figure>
                <img src="/images/041ce759-27ab-4c10-88e1-9d6a2d075ef0.jpg" alt="A student smiling while using a modern laptop and assistive software in a bright classroom" width="600" height="400" />
                <figcaption>Digital assistive interfaces enable learners with dyslexia to engage with complex curriculum materials with confidence.</figcaption>
            </figure>
        </ContentSection>

        <ContentSection>
            <h2>Our Proposed Assistive Framework</h2>
            <p>
                Our team proposes an integrated assistive learning environment designed to transform unapproachable study materials into flexible, multimodal educational experiences. By uniting cutting-edge artificial intelligence with proven cognitive accessibility principles, our solution adapts content directly to the individual sensory preferences of each student, ensuring that no learner is left behind due to formatting or vocabulary constraints.
            </p>

            <h3>Core Pillars of the Platform</h3>
            <ul>
                <li><strong>Dynamic AI Text Simplification:</strong> Translates dense academic sentences into straightforward clauses without altering fundamental concepts or technical rigor.</li>
                <li><strong>Interactive Audio Scaffolding:</strong> Offers conversational speech explanations, synthesized auditory walkthroughs, and real-time word tracking to bridge visual decoding obstacles.</li>
                <li><strong>Perceptual and Typographic Customization:</strong> Provides dyslexia-friendly typefaces, adjustable letter-spacing, line-height modifications, and high-contrast color overlays.</li>
                <li><strong>Multisensory Engagement:</strong> Pairs conceptual diagrams with synchronized narration to stimulate dual-channel memory retention.</li>
            </ul>
        </ContentSection>

        <ContentSection>
            <h2>Global Standards and Digital Accessibility</h2>
            <p>
                Our technological recommendations are anchored in universal design guidelines established to protect digital equity for neurodivergent individuals. To learn more about digital accessibility standards and dyslexia support protocols, explore the <a href="https://www.w3.org/WAI/cognitive/" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Initiative (WAI) Cognitive Guidelines</a>.
            </p>
        </ContentSection>
    
  </>;
}

export function AboutPage() {
  return <>

        <ContentSection>
            <h2>The Neuroscience of Phonological Decoding</h2>
            <p>
                Dyslexia is rooted in neurobiological differences in language processing networks, primarily affecting the left hemisphere's parieto-temporal and occipito-temporal reading circuits. Individuals with dyslexia face persistent difficulty connecting printed letterforms (graphemes) to their constituent speech sounds (phonemes), regardless of intellectual ability or educational access. As a result, reading remains a conscious, labor-intensive process rather than an automated subconscious skill, leading to rapid mental exhaustion during standard study routines.
            </p>
            <figure>
                <img src="/images/8c2eb2c6-3c3c-4aa8-9885-64c69fa87b3d.jpg" alt="A classroom setting showing students utilizing assistive technology to support individual reading workflows" width="600" height="400" />
                <figcaption>Targeted digital tools help bridge neurological decoding hurdles without compromising academic rigor.</figcaption>
            </figure>
        </ContentSection>

        <ContentSection>
            <h2>Universal Design for Learning (UDL) in Practice</h2>
            <p>
                Addressing dyslexia effectively requires restructuring classroom delivery around the Universal Design for Learning principles. Rather than providing retroactive accommodations only after a student falls behind, educational materials must inherently provide multiple means of representation, expression, and engagement from day one. Digital study aids allow learners to customize their reading pace, receive synchronous multi-channel input, and decouple reading speed from intellectual evaluation.
            </p>

            <h3>Essential Principles for Accessible Courseware</h3>
            <ul>
                <li><strong>Multiple Means of Representation:</strong> Presenting textual concepts alongside auditory summaries, graphic organizers, and tactile representations.</li>
                <li><strong>Reduced Working Memory Load:</strong> Breaking long, multisyllabic passages into manageable, numbered chunks with instant glossary support.</li>
                <li><strong>Predictable Document Architecture:</strong> Maintaining consistent heading structures, bulleted enumerations, and clear visual hierarchy across all study modules.</li>
            </ul>
        </ContentSection>

        <ContentSection>
            <h2>Clinical Frameworks and Diagnostic Resources</h2>
            <p>
                For in-depth clinical criteria, screening toolkits, and evidence-based interventions for educators and parents, review the resources published by the <a href="https://www.understood.org/en/articles/what-is-dyslexia" target="_blank" rel="noopener noreferrer">Understood.org Learning &amp; Thinking Differences Archive</a>.
            </p>
        </ContentSection>
    
  </>;
}

export function SimplificationPage() {
  return <>

        <ContentSection>
            <h2>Adaptive AI Text Simplification for Dyslexic Learners</h2>
            <p>
                Dyslexia often hinders rapid phonological decoding and places an excessive strain on working memory, making dense academic passages, convoluted sentence clauses, and archaic vocabulary exhausting to read. Our proposed artificial intelligence module is designed to analyze complex study materials and dynamically generate simplified, syntactically clear reading passages without stripping away essential academic definitions or concepts. By restructuring passive voice into active voice and breaking down run-on sentences into bite-sized thoughts, the system minimizes extraneous cognitive load and lets students focus directly on comprehension.
            </p>
            <figure>
                <img src="/images/Gemini_Generated_Image_lqugbalqugbalqug.png" alt="A tablet showing a simplified digital textbook interface with sentence breakdown and an audio play button" width="600" height="400" />
                <figcaption>Conceptual diagram of the proposed reading interface with dynamic clause splitting and audio assistance.</figcaption>
            </figure>
        </ContentSection>

        <ContentSection>
            <h2>Multimodal Scaffolding via Contextual Audio Explanations</h2>
            <p>
                Dual-coding theory demonstrates that learners with reading differences absorb information far more effectively when auditory and visual channels reinforce each other simultaneously. Our proposed audio engine goes beyond traditional robotic text-to-speech tools by providing context-aware conversational summaries, clear phonetic pronunciations for domain-specific technical terminology, and narrative audio overviews for complex diagrams and tables. Learners can listen to high-quality synthesized speech while synchronized visual cues guide their gaze across the screen.
            </p>

            <h3>Key Features of the Proposed AI Solution</h3>
            <ul>
                <li><strong>Dynamic Sentence Restructuring:</strong> Automatically detects complex subordinate clauses and splits them into clear, sequential bullet points and shorter sentences.</li>
                <li><strong>Vocabulary Plain-Language Translator:</strong> Replaces rarely used idioms and convoluted jargon with plain-language equivalents while retaining technical terms alongside easy pop-up definitions.</li>
                <li><strong>Contextual Audio Glosser:</strong> Provides on-demand audio walkthroughs that explain dense paragraphs using intuitive real-world analogies.</li>
                <li><strong>Karaoke-Style Visual Tracking:</strong> Highlights individual words or phrases in real time as the naturalistic audio narrator reads them aloud to reinforce phoneme-grapheme mapping.</li>
            </ul>
        </ContentSection>

        <ContentSection>
            <h2>Research Background and Standard Accommodations</h2>
            <p>
                Assistive technologies for neurodivergent learners must follow structured multisensory literacy standards validated by leading cognitive science institutions. To explore research-backed diagnostic guidelines, reading accommodations, and support strategies, visit the official <a href="https://dyslexiaida.org/" target="_blank" rel="noopener noreferrer">International Dyslexia Association (IDA)</a> website.
            </p>
        </ContentSection>
    
  </>;
}

export function AudioPage() {
  return <>

        <ContentSection>
            <h2>The Science of Bimodal Auditory Scaffolding</h2>
            <p>
                Bimodal presentation—the simultaneous delivery of written text and synchronized audio speech—dramatically reduces the phonological decoding barrier faced by students with dyslexia. When visual graphemes and acoustic phonemes are processed in tandem, working memory is freed from the mechanical strain of letter recognition, allowing cognitive bandwidth to shift entirely toward semantic comprehension and critical analysis. Studies show that multimodal input significantly boosts vocabulary acquisition and reading stamina across dense curriculum subjects.
            </p>
            <figure>
                <img src="/images/fe5b4815-6724-4219-b397-efec510635e1.jpg" alt="A tablet showing a simplified digital reading interface with an interactive audio player and highlighted words" width="600" height="400" />
                <figcaption>Synchronized audio narration reinforces phonemic awareness and maintains active focus during complex reading tasks.</figcaption>
            </figure>
        </ContentSection>

        <ContentSection>
            <h2>Next-Generation Neural Speech Features</h2>
            <p>
                Standard robotic screen readers often present flat, monotonous vocal cadences that induce cognitive fatigue and fail to convey semantic nuances. Our proposed audio engine leverages advanced neural text-to-speech models that introduce natural inflection, pitch contouring, and adaptive prosody tailored specifically to pedagogical content. Learners can listen to narrative explanations that clarify dense figures, pronounce irregular technical terms, and guide them through multi-step assignments.
            </p>

            <h3>Core Audio Scaffolding Capabilities</h3>
            <ul>
                <li><strong>Karaoke Word Tracking:</strong> Visually highlights each word or sentence in real time as the naturalistic narrator reads it aloud.</li>
                <li><strong>Adaptive Pacing Control:</strong> Allows students to modulate playback speeds from 0.75x to 1.5x without robotic pitch distortion or loss of clarity.</li>
                <li><strong>Contextual Audio Glossaries:</strong> Provides instant, on-demand audio pronunciations and plain-language spoken definitions for unfamiliar terms.</li>
                <li><strong>Conversational Overviews:</strong> Delivers friendly audio recaps that summarize lengthy academic chapters into quick, relatable audio walkthroughs.</li>
            </ul>
        </ContentSection>

        <ContentSection>
            <h2>Assistive Technology Guidelines &amp; Clinical Evidence</h2>
            <p>
                Integrating multimodal audio tools aligns with universal reading accommodation protocols validated by cognitive learning specialists. To learn more about how text-to-speech tools empower neurodivergent readers in academic environments, read the guidelines on the <a href="https://www.readingrockets.org/topics/assistive-technology/articles/assistive-technology-kids-learning-disabilities-overview" target="_blank" rel="noopener noreferrer">Reading Rockets Assistive Technology Overview</a>.
            </p>
        </ContentSection>
    
  </>;
}

export function VisualPage() {
  return <>

        <ContentSection>
            <h2>Optimizing Typography and Reducing Visual Crowding</h2>
            <p>
                Visual crowding occurs when adjacent characters, compact line spacing, and dense typography blur together, causing letters to appear distorted, rotated, or transposed on the page. Standard serif typefaces with high stroke contrast and mirrored letterforms (such as lowercase "b", "d", "p", and "q") substantially increase the cognitive burden of decoding. By adopting specialized fonts with weighted baselines, distinct letter shapes, and generous character tracking, learners with dyslexia can navigate text lines without losing their reading place.
            </p>
            <figure>
                <img src="/images/c629b5ab-acd8-4b86-9b84-465299f130c2.jpg" alt="A digital tablet displaying dyslexia-friendly typography with custom spacing, a warm cream tint, and a guided reading ruler" width="600" height="400" />
                <figcaption>Digital visual aids: specialized font geometry, customized tracking, and guided focus rulers mitigate visual stress.</figcaption>
            </figure>
        </ContentSection>

        <ContentSection>
            <h2>Adaptive Contrast, Tinted Overlays, and Focus Guides</h2>
            <p>
                Many individuals with reading differences also experience symptoms of visual stress (scotopic sensitivity), where high-contrast black text on bright white screens causes glare, rapid eye fatigue, and perceptual movement of words. Introducing customizable background tints—such as warm cream, pastel peach, or muted gray—softens the luminance contrast without sacrificing legibility. Paired with digital reading rulers and line masks that dim peripheral paragraphs, readers can maintain continuous focus on a single sentence at a time.
            </p>

            <h3>Essential Visual Customization Features</h3>
            <ul>
                <li><strong>Dyslexia-Optimized Typefaces:</strong> Integration of specialized fonts (such as OpenDyslexic and Lexend) featuring heavy bottom gravity and non-symmetrical letter structures.</li>
                <li><strong>Dynamic Kerning and Line Spacing:</strong> Flexible controls allowing readers to expand line height up to 1.5–2.0 times and widen letter spacing to prevent visual blurring.</li>
                <li><strong>Customizable Color Overlays:</strong> A spectrum of soft pastel background washes designed to eliminate harsh screen glare and alleviate symptoms of visual stress.</li>
                <li><strong>Digital Focus Rulers:</strong> Interactive screen-overlay bars that highlight the active reading line while softly shading the surrounding content.</li>
            </ul>
        </ContentSection>

        <ContentSection>
            <h2>Typographic Standards and Style Recommendations</h2>
            <p>
                Creating accessible educational materials requires adhering to research-backed graphic design and typography guidelines established by accessibility experts. To view official recommendations on font choice, layout margins, and color combinations for neurodiverse learners, consult the <a href="https://www.bdadyslexia.org.uk/advice-and-support/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide" target="_blank" rel="noopener noreferrer">British Dyslexia Association (BDA) Dyslexia Friendly Style Guide</a>.
            </p>
        </ContentSection>
    
  </>;
}

export function ContrastPage() {
  return <>

        <ContentSection>
            <h2>Mitigating Visual Stress with Color Overlays</h2>
            <p>
                Visual stress (often termed Meares-Irlen syndrome) frequently co-occurs with dyslexia, causing words to appear as though they are vibrating, blurring, or drifting across stark white digital backgrounds. Severe luminance contrast triggers rapid eye fatigue, migraines, and reading hesitation. Applying soft chromatic filters—such as pastel peach, sage green, cool aqua, or warm cream—softens harsh screen glare and balances light transmission, enabling students to sustain reading comfort over extended study sessions.
            </p>
            <figure>
                <img src="/images/46325821-bac9-4fcc-8565-bea29f93ee77.jpg" alt="A digital tablet displaying an interactive reading ruler and tinted screen overlay for dyslexia" width="600" height="400" />
                <figcaption>Digital overlays and guided focus rulers isolate text lines and stabilize character perception.</figcaption>
            </figure>
        </ContentSection>

        <ContentSection>
            <h2>Guided Line Tracking and Focus Masking</h2>
            <p>
                Unstructured reading layouts often cause learners with dyslexia to skip lines, accidentally re-read paragraphs, or lose their position when jumping between sentences. Digital reading rulers function as interactive straightedges that illuminate the active line while applying semi-transparent masking to the surrounding text. By narrowing the visible window down to a single thought unit, students can maintain continuous linear tracking without feeling overwhelmed by dense blocks of text.
            </p>

            <h3>Key Features of Contrast and Tracking Tools</h3>
            <ul>
                <li><strong>Customizable Chromatic Palettes:</strong> Dynamic tint adjustments with opacity sliders tailored to individual visual sensitivity.</li>
                <li><strong>Interactive Reading Rulers:</strong> Movable horizontal highlight bands that guide eye movements across lengthy rows of words.</li>
                <li><strong>Peripheral Focus Masking:</strong> Letterbox overlays that softly shade preceding and succeeding paragraphs to eliminate visual distractions.</li>
                <li><strong>Inverted High-Contrast Modes:</strong> Specialized dark and high-contrast color schemes engineered to eliminate glare and eye strain.</li>
            </ul>
        </ContentSection>

        <ContentSection>
            <h2>Clinical Evidence &amp; Visual Accommodation Standards</h2>
            <p>
                Implementing custom screen tints and reading guides adheres directly to universal accessibility principles for neurodivergent learners. To explore evidence-based research on visual accommodations and spectral filters, visit the official <a href="https://www.bdadyslexia.org.uk/advice-and-support/living-with-dyslexia/adults/eyes-and-dyslexia" target="_blank" rel="noopener noreferrer">British Dyslexia Association Eyes and Dyslexia Guide</a>.
            </p>
        </ContentSection>
    
  </>;
}
