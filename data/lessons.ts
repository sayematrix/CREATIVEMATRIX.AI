
import { Lesson } from '../types';

export const ALL_LESSONS: Lesson[] = [
  {
    id: '1',
    title: 'The psychology of color in personal branding',
    description: 'How to use color theory to influence perception and build emotional resonance with your audience.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    tag: 'Branding',
    content: 'Color is the first thing our brain perceives before it even processes a shape or a word. In personal branding, color acts as a silent messenger, conveying your values and personality in milliseconds. Red can signal passion and urgency, while blue evokes trust and stability. When we talk about "The Matrix" of branding, we refer to the systematic alignment of these visual signals with your core message. Without a cohesive color strategy, your brand identity remains fragmented and forgettable. Mastery of this module means moving beyond "I like this color" to "This color achieves this specific psychological result."',
    learningObjective: 'Master the strategic use of color to communicate brand values and trigger specific emotional responses in viewers.',
    corePrinciples: [
      'Color Association: Understanding cultural and psychological triggers of primary and secondary hues.',
      'Contrast Theory: Using weight and saturation to guide the eye through visual hierarchy.',
      'The 60-30-10 Rule: Balancing brand palettes for professional visual harmony.'
    ],
    actionBreakdown: [
      'Audit your current visual presence and list the top 3 emotions you want to project.',
      'Select a primary anchor color based on your industry archetype.',
      'Create a "Brand Color Matrix" consisting of 1 primary, 2 secondary, and 2 accent colors.',
      'Apply this palette to your 3 most frequent content templates.'
    ]
  },
  {
    id: '2',
    title: 'How AI enhances—not replaces—creativity',
    description: 'Shifting the mindset from fear to collaboration. Learn how to use LLMs as brainstorming partners.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tag: 'AI Strategy',
    content: 'The fear that AI will replace the human creator is a misunderstanding of what creativity actually is. Creativity isn\'t just production; it\'s taste, curation, and the ability to ask the right questions. AI is a "stochastic parrot" that can generate billions of permutations, but it lacks the "human ghost" required to judge what is meaningful. By treating AI as an intern or a high-speed brainstorming partner, you free yourself from the mechanical labor of creation and ascend to the role of a Creative Director. The Matrix is about leveraging these machine layers to amplify your human potential, not substitute it.',
    learningObjective: 'Develop a synergistic workflow where AI handles technical grunt work while you maintain creative direction.',
    corePrinciples: [
      'Iterative Prompting: Moving from "one-shot" generation to conversational refinement.',
      'The Human-in-the-Loop: Identifying the specific points where human taste is irreplaceable.',
      'Tool Agnosticism: Choosing AI tools based on workflow needs rather than hype.'
    ],
    actionBreakdown: [
      'Identify one repetitive task in your workflow that takes more than 30 minutes.',
      'Use an LLM to generate 10 variations of a single concept in under 2 minutes.',
      'Curate and refine the best 2 variations using your own aesthetic judgment.',
      'Document the "Prompt Chain" used for future consistency.'
    ]
  },
  {
    id: '3',
    title: 'My 3-step system to find creative flow instantly',
    description: 'A practical framework for triggering the flow state whenever you sit down to create.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tag: 'Productivity',
    content: 'Flow is not a magical event that happens to you; it is a physiological state that can be engineered. Most creators wait for "inspiration," but the pro-level Matrix hustler builds a "Flow Trigger" system. This module breaks down the transition from the chaotic real world into the focused creative world. By managing your environment and your cognitive load, you can significantly reduce the "friction to start." Once the friction is gone, flow becomes inevitable. This system is about creating a predictable ritual that signals to your brain that it is time to perform at its peak.',
    learningObjective: 'Eliminate creative block by establishing a repeatable ritual that signals the brain to enter deep work.',
    corePrinciples: [
      'Environmental Priming: Using sensory cues to anchor creative focus.',
      'Cognitive Load Management: Clearing mental clutter before beginning high-output tasks.',
      'Incremental Momentum: Starting with "micro-wins" to bypass resistance.'
    ],
    actionBreakdown: [
      'Select a "Work-Only" audio track or frequency (Lo-fi, Brown Noise).',
      'Set a 5-minute timer for a "Brain Dump" to clear non-essential thoughts.',
      'Commit to just 2 minutes of the task (The 2-Minute Rule).',
      'Maintain a "No-Notification" zone for the subsequent 90 minutes.'
    ]
  },
  {
    id: '4',
    title: 'Why constraints breed creativity',
    description: 'Exploring the paradox of choice and how limiting your tools can lead to your best work.',
    image: 'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?auto=format&fit=crop&q=80&w=800',
    tag: 'Philosophy',
    content: 'The blank canvas is a nightmare because it offers infinite possibilities. When everything is possible, nothing is certain. True innovation often happens when the "easy way" is blocked. By imposing artificial constraints—limiting your time, your tools, or your palette—you force your brain to find unconventional solutions. This is the core of the SAYEMATRIX philosophy: structure provides the freedom to excel. When you stop worrying about "what" you could do and focus on "how" to do it within a box, the quality of your output skyrockets.',
    learningObjective: 'Leverage self-imposed limitations to force innovative problem-solving and unique stylistic choices.',
    corePrinciples: [
      'The Paradox of Choice: Too many options lead to paralysis; fewer options lead to action.',
      'Resourcefulness over Resources: Using what you have in unconventional ways.',
      'Forced Innovation: When the standard path is blocked, the mind finds a more creative one.'
    ],
    actionBreakdown: [
      'Pick a project and limit yourself to just 2 tools or 2 colors.',
      'Set a time limit 50% shorter than your usual production time.',
      'Solve the "Missing Feature" problem: If you lack a tool, mimic its effect using a different one.',
      'Review the result and identify one technique you discovered only because of the limit.'
    ]
  },
  {
    id: '5',
    title: 'The “Moodboard Ritual” for clarity',
    description: 'Moving from vague ideas to concrete visual directions using curated moodboards.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
    tag: 'Design',
    content: 'Clarity is the antidote to creative hesitation. Before a single pixel is moved or a word is written, the "vibe" must be locked in. A moodboard is more than a collection of pretty pictures; it is a visual vocabulary that dictates the boundaries of a project. It ensures that every subsequent creative decision is filtered through a pre-defined aesthetic logic. The ritual of curation allows you to process thousands of inputs and distill them into a single, cohesive "North Star." This module teaches you to stop guessing and start curating with intent.',
    learningObjective: 'Bridge the gap between abstract thoughts and visual execution through systematic curation.',
    corePrinciples: [
      'Visual Synthesis: Finding the common thread between disparate images.',
      'Atmospheric Anchoring: Defining "Vibe" through texture, light, and composition.',
      'Non-Literal Inspiration: Looking outside your industry for creative metaphors.'
    ],
    actionBreakdown: [
      'Collect 20 images that represent the *feeling* of your project, not the result.',
      'Categorize them by Color, Texture, and Typography.',
      'Delete 10 images until only the absolute "Core Essence" remains.',
      'Write a 3-word "Visual North Star" based on the final board.'
    ]
  },
  {
    id: '6',
    title: 'How to repurpose one idea into 5 content types',
    description: 'Maximizing your creative output by turning a single core insight into a multi-platform strategy.',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
    tag: 'Content',
    content: 'Most creators fail because they are on a "hamster wheel" of constant new creation. The smart creator treats one deep insight as a raw resource that can be refined into multiple products. This "Content Matrix" approach turns one hour of deep thinking into a week\'s worth of high-value social presence. By breaking an idea down into its atoms and re-assembling them for different platform psychologies, you achieve omnipresence without burnout. This isn\'t about spamming; it\'s about respecting the different ways your audience consumes value.',
    learningObjective: 'Increase authority and visibility without increasing workload through strategic content transformation.',
    corePrinciples: [
      'Atomization: Breaking a large concept into its smallest actionable parts.',
      'Contextual Adaptation: Matching the format to the platform’s native psychology.',
      'The Content Pillar Strategy: One deep-dive piece feeding multiple sub-pieces.'
    ],
    actionBreakdown: [
      'Write one 500-word "Master Lesson" or article.',
      'Extract 3 specific quotes for social graphics.',
      'Turn the "Action Breakdown" into a checklist or carousel.',
      'Record a 60-second summary video highlighting the main takeaway.',
      'Draft a newsletter intro that links to the original Master Lesson.'
    ]
  },
  {
    id: '7',
    title: 'Behind the scenes: my creative workflow',
    description: 'A deep dive into the actual software stack and daily habits used at CreativeMatrix.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tag: 'Systems',
    content: 'Amateurs focus on tools; pros focus on systems. My workflow is a carefully designed machine that minimizes the distance between an idea popping into my head and it being ready for the world. Every app and habit is a gear in this machine. If a tool doesn\'t talk to the rest of the system, it is removed. This module takes you inside the actual "Operating System" used to build CreativeMatrix.AI. It is not about the specific apps I use, but the *logic* behind why they are used together. Build a system, and the work builds itself.',
    learningObjective: 'Implement a professional-grade technical stack that minimizes friction between idea and execution.',
    corePrinciples: [
      'Minimal Friction: Every tool must serve a specific, non-redundant purpose.',
      'Automatic Backup: Protecting creative assets through redundant cloud systems.',
      'Asynchronous Flow: Designing a schedule that respects deep work cycles.'
    ],
    actionBreakdown: [
      'List every tool you use and identify any overlaps or "dead weight."',
      'Set up an automated folder syncing system (e.g., Dropbox/Google Drive).',
      'Create "Project Templates" in your design or writing software.',
      'Batch your administrative tasks into one 2-hour window per week.'
    ]
  },
  {
    id: '8',
    title: 'The link between creativity and emotion',
    description: 'Understanding how your internal state dictates the quality and tone of your output.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
    tag: 'Psychology',
    content: 'We often think of creativity as a purely logical or technical skill, but the best work is always anchored in an emotional truth. If you create while angry, the rhythm of your work changes. If you create while inspired, the color palette shifts. The Matrix isn\'t just about external tools; it\'s about managing your internal state. By becoming aware of the link between how you feel and what you make, you can begin to "perform" different emotional states to suit different projects. This module explores the deep psychology of the creative act.',
    learningObjective: 'Harness your emotional state to produce more authentic and resonant work.',
    corePrinciples: [
      'Emotional Resonance: Transferring your feeling to the viewer through color and rhythm.',
      'Authenticity over Accuracy: Why "Feeling Right" matters more than technical perfection.',
      'The Vulnerability Edge: Using personal truth to connect with an audience.'
    ],
    actionBreakdown: [
      'Identify the dominant emotion you are feeling right now.',
      'Choose one medium (text, image, audio) to express that emotion without words.',
      'Create a "Vibe Map" for your next project based on a specific memory.',
      'Share a piece of work that feels "too personal" and track the engagement.'
    ]
  },
  {
    id: '9',
    title: '10 creative prompts to overcome burnout',
    description: 'Low-stakes exercises designed to reignite the spark when the tank is empty.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    tag: 'Wellness',
    content: 'Burnout happens when your "output" exceeds your "input" for too long. When you are a professional creator, you can\'t just stop; you need a way to refuel the tank while still staying in the game. These 10 prompts are "Creative First Aid." They are designed to be low-stakes, high-fun, and purely for exploration. By removing the pressure of "excellence," you allow your brain to play again. Play is the engine of creativity. This module is your emergency kit for when the Matrix feels heavy and the ideas stop flowing.',
    learningObjective: 'Recover creative energy through "Productive Play" and non-commercial exploration.',
    corePrinciples: [
      'Zero-Pressure Production: Creating without the intent of publishing or selling.',
      'Sensory Redirection: Switching from digital to physical creation.',
      'The "Beginner Mind" Reset: Trying a craft you are intentionally bad at.'
    ],
    actionBreakdown: [
      'Go for a 15-minute walk without any devices and observe 3 textures.',
      'Doodle for 10 minutes using your non-dominant hand.',
      'Write a "Terrible Idea List": 20 ideas that would never work.',
      'Pick one "Terrible Idea" and find one interesting thing about it.'
    ]
  },
  {
    id: '10',
    title: 'The minimal design mindset',
    description: 'Learning the art of subtraction to create impactful and timeless visuals.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800',
    tag: 'Design',
    content: 'In the Matrix, noise is the enemy. Most beginners try to fix a bad design by adding more to it. The master designer fixes a bad design by taking things away until only the truth remains. Minimalism is not about "empty space"; it is about "intentional space." Every element on a page should have a job to do. If it doesn\'t have a job, it is a distraction. By mastering the art of subtraction, you create work that is easier to process, harder to ignore, and impossible to forget. This module teaches you to be ruthless with your visuals.',
    learningObjective: 'Master the "Less is More" philosophy to create clearer communication and stronger visual impact.',
    corePrinciples: [
      'Negative Space as an Element: Using "empty" space to create balance.',
      'Functional Hierarchy: Every element must justify its presence.',
      'Typographic Purity: Focus on legibility and character over ornamentation.'
    ],
    actionBreakdown: [
      'Take an existing design and remove 3 elements without losing its meaning.',
      'Limit your next design to one typeface and two weights.',
      'Ensure the "Most Important" element is 3x larger than anything else.',
      'Review your work from 10 feet away; if it’s not clear, simplify more.'
    ]
  },
  {
    id: '11',
    title: 'How to turn your passion into a visual brand',
    description: 'Bridging the gap between what you love and how the world sees your work.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    tag: 'Branding',
    content: 'A "Passion Project" only becomes a "Brand" when it develops a consistent visual language that outsiders can recognize. You might love what you do, but if your visual presentation is inconsistent, the world won\'t know what you stand for. Branding is the process of translating your internal passion into external signals. It is about choosing a "tribe" and speaking their visual dialect. This module teaches you how to map your values onto colors, fonts, and shapes so that your passion finally looks as good as it feels.',
    learningObjective: 'Translate internal values into an external identity that attracts a like-minded community.',
    corePrinciples: [
      'Archetypal Alignment: Finding the "Personality Type" of your passion.',
      'Visual Consistency: Building a recurring language of shapes and colors.',
      'Value-Driven Narrative: Telling the story of "Why" before "What".'
    ],
    actionBreakdown: [
      'Write down 3 core values your passion stands for.',
      'Find 3 symbols or icons that represent those values.',
      'Define a "Brand Voice": Is it a teacher, a rebel, or a friend?',
      'Create 1 piece of content where the value is the headline, not the product.'
    ]
  },
  {
    id: '12',
    title: 'Creative energy boosters (non-coffee edition)',
    description: 'Natural ways to maintain high-frequency creative energy throughout the day.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    tag: 'Wellness',
    content: 'Caffeine is a debt you pay later with interest. For long-term creative consistency, you need to understand the biological Matrix of energy. Your brain is an organ that requires specific inputs to function at a high frequency. Energy management is about more than just "getting enough sleep"; it\'s about movement, hydration, and light. By optimizing these natural levers, you can sustain a higher level of creative focus without the crashes. This module is a manual for treating your body like the high-performance creative engine it is.',
    learningObjective: 'Optimize your biological rhythms to support sustained creative focus and endurance.',
    corePrinciples: [
      'Circadian Optimization: Matching tasks to peak energy windows.',
      'The Movement-Spark: Using physical motion to unlock mental blocks.',
      'Dopamine Management: Avoiding cheap digital highs that drain long-term drive.'
    ],
    actionBreakdown: [
      'Track your energy levels every hour for one full day.',
      'Schedule your hardest creative task for your highest energy window.',
      'Perform 2 minutes of stretching every 60 minutes of deep work.',
      'Hydrate with electrolytes to maintain cognitive firing speed.'
    ]
  },
  {
    id: '13',
    title: 'Building a personal aesthetic system',
    description: 'Developing a unique visual signature that makes your work instantly recognizable.',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=800',
    tag: 'Design',
    content: '"Taste" is often seen as something you are born with, but in the Matrix, we treat it as a database of preferences that can be codified. A personal aesthetic system is a set of "Creative Presets" that define how you process visuals. When you have a system, you don\'t have to start from scratch every time; you simply apply your "Lens" to a new subject. This leads to the legendary level of consistency seen in top-tier artists. This module helps you dig through your own preferences to find the DNA of your unique style.',
    learningObjective: 'Codify your creative "Taste" into a repeatable system that scales your production.',
    corePrinciples: [
      'The Recurring Motif: A specific shape, texture, or angle that you repeat.',
      'Signature Processing: A specific way of editing or finishing your work.',
      'Taste-Curation: Systematically collecting what you love to define what you do.'
    ],
    actionBreakdown: [
      'Select 5 of your favorite past works and find one common visual trait.',
      'Create a "Style Guide" for yourself: define your 2 favorite fonts and 1 specific grain/filter.',
      'Apply this system to your next 3 projects without exception.',
      'Ask a peer to identify your work from a group of 10 images.'
    ]
  },
  {
    id: '14',
    title: 'How to structure your week as a creator',
    description: 'Time-blocking for deep work versus administrative tasks and community engagement.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    tag: 'Productivity',
    content: 'The biggest threat to a creator isn\'t a lack of ideas; it\'s the "death by a thousand small tasks." If your day is fragmented by emails, DMs, and meetings, you will never have the long blocks of time required for deep creative output. High-performance creation requires a "Themed Week" approach. By grouping similar mental activities together, you minimize the "switching cost" that drains your brainpower. This module teaches you how to build a calendar that protects your creative soul while still getting the "business" of being a creator done.',
    learningObjective: 'Transition from "Reactionary" work to "Intentional" creation through strategic weekly design.',
    corePrinciples: [
      'The Maker/Manager Split: Separating high-creative time from low-brainpower admin.',
      'The Content Factory Day: Batching similar tasks to maintain focus.',
      'The Maintenance Buffer: Planning for the inevitable "Matrix glitches" or emergencies.'
    ],
    actionBreakdown: [
      'Assign "Deep Work" blocks to your mornings (or your peak time).',
      'Choose one day per week for "Batch Production" of social content.',
      'Limit all administrative emails and DMs to a single 1-hour block.',
      'Reserve Sunday for "System Review" and planning the upcoming week.'
    ]
  },
  {
    id: '15',
    title: 'Why perfectionism kills originality',
    description: 'The "Good Enough" principle and why shipping fast beats shipping perfect.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    tag: 'Philosophy',
    content: 'Perfectionism is just procrastination in a fancy suit. It is the ego\'s way of protecting itself from being judged. But in the creative Matrix, the only thing that matters is the "Feedback Loop." You cannot get better at something you haven\'t shipped. The best creators aren\'t the ones who make perfect things; they are the ones who make *enough* things to eventually stumble upon perfection. This module is a psychological intervention designed to help you lower your bar for "starting" so that you can finally raise your bar for "finishing."',
    learningObjective: 'Overcome the paralysis of perfection to build momentum and find your true voice through volume.',
    corePrinciples: [
      'Quantity over Quality (Initially): Volume leads to skill, skill leads to quality.',
      'The 80/20 of Impact: 80% of the value comes from 20% of the effort.',
      'Iterative Feedback: Shipping is the only way to get real-world data.'
    ],
    actionBreakdown: [
      'Set a "Deadline of No Return" for your current project (max 4 hours).',
      'Commit to a "B-" effort on a low-stakes piece of content.',
      'Publish your work as soon as it is "Functionally Complete."',
      'Identify 3 "imperfections" in your published work and realize they don’t matter to the audience.'
    ]
  },
  {
    id: '16',
    title: '3 apps every digital artist should master',
    description: 'A breakdown of the essential toolkit for modern digital creation.',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=800',
    tag: 'Tools',
    content: 'You don\'t need 50 apps; you need 3 apps that you know like the back of your hand. Software mastery is about moving beyond the buttons and understanding the "Logic" of the tool. When you reach "Power User" status, the tool disappears, and your thoughts flow directly onto the screen. This module identifies the three most critical categories of software for the modern creator and provides the roadmap for mastering them. If you want to move at the speed of the Matrix, you need to stop fighting your tools and start commanding them.',
    learningObjective: 'Master the "Power User" features of the industry-standard creative stack.',
    corePrinciples: [
      'Technical Proficiency: Understanding the underlying logic of your software.',
      'Workflow Integration: How to pass files between apps without data loss.',
      'Shortcut Muscle Memory: Reducing the gap between thought and tool action.'
    ],
    actionBreakdown: [
      'Choose your "Primary App" and learn 10 new keyboard shortcuts today.',
      'Set up a "Workspace Layout" optimized for your most frequent task.',
      'Practice a "Round-Trip" workflow: Export from App A, refine in App B, finish in App A.',
      'Join one specialized community forum for your chosen tool.'
    ]
  },
  {
    id: '17',
    title: 'The “idea vault” method for creators',
    description: 'Building a second brain to capture and organize creative sparks before they fade.',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800',
    tag: 'Systems',
    content: 'Ideas are like dreams; if you don\'t write them down the second you have them, they vanish forever. A professional creator doesn\'t rely on their memory; they rely on their "Vault." This is a central database of everything you find interesting—colors, quotes, textures, concepts. When it comes time to create, you don\'t stare at a blank page; you go "shopping" in your own Vault. This module teaches you how to build a "Second Brain" that works for you even when you aren\'t working. Never run out of ideas again.',
    learningObjective: 'Eliminate "Blank Page Syndrome" by building a curated library of seeds for future projects.',
    corePrinciples: [
      'Capture Anywhere: The tool must be accessible in 5 seconds or less.',
      'Tagging for Retrieval: Organizing by "Action" or "Context" rather than topic.',
      'The Incubation Period: Allowing ideas to sit and combine with others over time.'
    ],
    actionBreakdown: [
      'Choose one app for your "Vault" (Notion, Obsidian, Apple Notes).',
      'Create 3 main tags: #Seeds, #Drafts, #Assets.',
      'Capture 5 "Micro-Ideas" today (a color, a word, a feeling).',
      'Review your "Seeds" once a week to see what is ready to grow.'
    ]
  },
  {
    id: '18',
    title: 'How to build a content identity',
    description: 'Defining your voice, tone, and visual pillars for social media consistency.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tag: 'Content',
    content: 'Content identity is the "Gravity" that keeps your audience coming back. If you post random things, your gravity is weak. If you post within a defined identity, your gravity becomes an irresistible force. An identity is built on three pillars: what you say, how you say it, and how it looks. When these three things are in sync, you move from "just another creator" to "an authority." This module helps you define the "Matrix Identity" that will differentiate you from the millions of other voices on the internet.',
    learningObjective: 'Establish a clear, recognizable presence that builds trust and authority with your niche.',
    corePrinciples: [
      'Core Pillars: Identifying 3 main topics you will always talk about.',
      'The "Same-But-Different" Rule: Consistent structure with novel content.',
      'Tone Consistency: Using a specific vocabulary and rhythm in your writing.'
    ],
    actionBreakdown: [
      'List 3 things you want to be "The Person" for in your industry.',
      'Write a "Content Mission Statement": I help [X] do [Y] through [Z].',
      'Choose 1 specific greeting or sign-off to use in all your videos/emails.',
      'Audit your last 5 posts: do they look like they came from the same person?'
    ]
  },
  {
    id: '19',
    title: 'The art of storytelling through visuals',
    description: 'Techniques for conveying complex narratives using single images or short sequences.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    tag: 'Design',
    content: 'A picture might be worth a thousand words, but a *story* is worth a million. Visual storytelling is the skill of using composition, light, and symbolism to imply a sequence of events. You aren\'t just showing an object; you are showing a "Moment" in a larger drama. When you master this, your work stops being "pretty" and starts being "profound." Storytelling is the "Secret Code" that connects directly with the human subconscious. This module teaches you how to embed narrative into every visual asset you produce.',
    learningObjective: 'Use composition, lighting, and symbolism to tell stories that bypass the analytical mind.',
    corePrinciples: [
      'Visual Metaphor: Using objects to represent abstract concepts (e.g., a broken clock for loss).',
      'Pathos through Light: Using shadow and color to dictate the mood of the story.',
      'Implicit Motion: Creating a sense of "What happened before" and "What happens next".'
    ],
    actionBreakdown: [
      'Take an existing photo and crop it to change the narrative focus.',
      'Use "Leading Lines" to point the viewer directly to the emotional core.',
      'Color grade an image using only "Cold" or "Warm" tones and observe the story shift.',
      'Create a 3-panel visual story: Problem, Action, Resolution.'
    ]
  },
  {
    id: '20',
    title: 'Using AI tools like Midjourney and Runway for creators',
    description: 'A practical guide to integrating generative images and video into your projects.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    tag: 'AI Strategy',
    content: 'Generative AI is the "Superpower" of the modern era. Tools like Midjourney and Runway allow a single person to produce work that previously required a whole studio and a million-dollar budget. But these tools are only as good as the person driving them. This module is a high-level guide to the "Advanced Controls" of generative AI. We move beyond simple prompts and look at how to control style, consistency, and motion. This is the technical edge of the SAYEMATRIX ecosystem. If you can imagine it, you can now build it in seconds.',
    learningObjective: 'Unlock new creative possibilities by mastering advanced generative AI workflows.',
    corePrinciples: [
      'Latent Space Exploration: Seeing AI as a "Camera for the Mind."',
      'Seed Control: Using reference images to maintain stylistic consistency.',
      'The Remix Mindset: Combining multiple AI outputs with traditional design.'
    ],
    actionBreakdown: [
      'Generate a base image using a "Style Reference" tag.',
      'Use "In-painting" to change one specific detail of the image.',
      'Animate the result using a video-gen tool like Runway.',
      'Composite the AI video into a traditional edit for a high-end feel.'
    ]
  },
  {
    id: '21',
    title: '7 underrated creative habits that changed my work',
    description: 'Small, daily actions that lead to massive compounding creative growth.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tag: 'Productivity',
    content: 'Big changes come from small hinges. You don\'t need a massive life overhaul to become a top-tier creator; you need a set of small, boring habits that work in the background. Most people ignore these because they aren\'t "exciting," but these habits are the "Compounding Interest" of the creative world. Over a year, they differentiate the master from the amateur. This module reveals the seven specific daily actions that have had the biggest impact on my output. Adopt them, and watch the Matrix work in your favor.',
    learningObjective: 'Implement high-impact, low-effort daily habits that build a long-term creative edge.',
    corePrinciples: [
      'The Power of Volume: One small thing daily beats one big thing monthly.',
      'Active Consumption: Taking notes on everything you watch/read.',
      'Creative Solitude: Scheduling time to be bored and alone with your thoughts.'
    ],
    actionBreakdown: [
      'Start a "Daily 100": 100 words, one sketch, or one 15-second clip daily.',
      'Always keep a physical notebook within arm’s reach.',
      'Spend 10 minutes a day "deconstructing" someone else’s great work.',
      'Go to sleep 30 minutes earlier to protect morning creative energy.'
    ]
  },
  {
    id: '22',
    title: 'Designing your studio environment for flow',
    description: 'Ergonomics, lighting, and spatial organization for peak performance.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    tag: 'Wellness',
    content: 'Your physical environment is the hardware that your creative software runs on. If your hardware is "buggy"—bad lighting, uncomfortable chair, messy desk—your software will crash. Designing your studio is about removing the "Micro-Frictions" that pull you out of focus. It is about creating a space that feels like an extension of your mind. Every object in your field of vision should either inspire you or serve a functional purpose. This module teaches you how to engineer your workspace for maximum "Flow Density."',
    learningObjective: 'Create a physical sanctuary that subconsciously triggers focus and creative expression.',
    corePrinciples: [
      'The Path of Least Resistance: Designing your space so tools are ready to use.',
      'Sensory Engineering: Using light and scent to anchor specific work modes.',
      'Ergonomic Health: Protecting the body to protect the mind.'
    ],
    actionBreakdown: [
      'Clear your desk of every object that doesn’t help your current project.',
      'Position your primary monitor at eye level to prevent neck strain.',
      'Add one "Inspiration Object" to your field of vision (a plant, a print).',
      'Set up "Work Lighting" (Cool/Bright) vs "Creative Lighting" (Warm/Dim).'
    ]
  },
  {
    id: '23',
    title: 'How to think in visuals',
    description: 'Training your brain to translate abstract concepts into powerful visual metaphors.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800',
    tag: 'Philosophy',
    content: 'Most people think in words, but the Matrix operates in visuals. Thinking in visuals means being able to see an abstract problem as a geometry or a relationship between objects. It is the core skill of every great architect, director, and designer. When you can "see" your ideas, you can manipulate them in your mind much faster than you can with words. This module is a workout for your mind\'s eye, designed to help you translate the complex world into simple, powerful visual structures.',
    learningObjective: 'Develop the "Director’s Eye" to communicate complex ideas through simple, powerful imagery.',
    corePrinciples: [
      'Literal vs Metaphorical: Moving beyond showing what is, to showing what it *means*.',
      'Spatial Reasoning: Organizing ideas in space to show relationships.',
      'Simplicity is Strength: One powerful image beats ten confusing ones.'
    ],
    actionBreakdown: [
      'Think of an abstract word (e.g., "Growth") and sketch 5 ways to show it without using a plant.',
      'Study "Icon Design": how can you represent a complex action in 2 shapes?',
      'Watch a movie on mute and try to understand the story through the visuals only.',
      'Re-design a text-heavy slide into a single, impactful graphic.'
    ]
  },
  {
    id: '24',
    title: 'Creative confidence = creative consistency',
    description: 'Overcoming imposter syndrome by focusing on the process rather than the outcome.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    tag: 'Psychology',
    content: 'The "Imposter Syndrome" is a virus in the creative Matrix. It tells you that you aren\'t ready, that you are a fraud, and that everyone else is better than you. The only cure for this virus is action. Confidence doesn\'t come from "feeling good"; it comes from "having a track record." When you show up every day and do the work, regardless of how you feel, your brain eventually realizes that you are a pro. This module is about building a psychological "Armor" of consistency that protects you from the noise of your own doubt.',
    learningObjective: 'Build an unshakeable creative identity based on effort and learning rather than external validation.',
    corePrinciples: [
      'Process-Orientation: Success is showing up, not the "likes" the work gets.',
      'The Growth Mindset: Every "failure" is just a data point in the Matrix.',
      'Comparison Detox: Comparing your "Day 1" to someone else’s "Day 1000".'
    ],
    actionBreakdown: [
      'Write down your "Creative Wins" from the last 30 days.',
      'Identify one thing you’re afraid to try and commit to 15 minutes of it today.',
      'Mute or Unfollow accounts that make you feel "Not Good Enough."',
      'Celebrate the "Attempt": Tell someone about something you tried and failed at.'
    ]
  },
  {
    id: '25',
    title: '“Build. Break. Rebuild.” — the creative evolution cycle',
    description: 'Why you should regularly destroy your old methods to make room for the new.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tag: 'Systems',
    content: 'The final lesson of the Matrix is that nothing is permanent. The systems that made you successful yesterday will eventually become the chains that hold you back tomorrow. True mastery is the ability to purposefully "Break" your own successful systems so that you can rebuild them into something better. This is the "Build, Break, Rebuild" cycle. It is the engine of evolution. This module teaches you how to recognize when a system is finished and gives you the courage to destroy it and start again. Stay liquid.',
    learningObjective: 'Embrace creative destruction as the only path to true mastery and stylistic evolution.',
    corePrinciples: [
      'Anti-Fragility: Growing stronger through chaos and disruption.',
      'Kill Your Darlings: Being willing to abandon what worked yesterday to find what works tomorrow.',
      'Recursive Mastery: Re-visiting foundations with advanced eyes.'
    ],
    actionBreakdown: [
      'Identify one part of your workflow that feels "safe" but stale.',
      'Delete one "Style" preset you’ve used for more than 6 months.',
      'Attempt your next project using a technique you previously thought was "wrong."',
      'Document what you learned from "Breaking" your own system.'
    ]
  }
];
