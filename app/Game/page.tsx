// CrisisGame.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define Conflict Styles
const CONFLICT_STYLES = {
  COMPETING: "COMPETING",
  ACCOMMODATING: "ACCOMMODATING",
  AVOIDING: "AVOIDING",
  COLLABORATING: "COLLABORATING",
  COMPROMISING: "COMPROMISING",
} as const;

type ConflictStyle = typeof CONFLICT_STYLES[keyof typeof CONFLICT_STYLES];

interface Option {
  label: string;
  style: ConflictStyle;
}

interface Scene {
  question: string;
  image: string;
  options: Option[];
}

const scenes: Scene[] = [
  {
    question: "A damaging rumor about your company starts spreading rapidly on social media.",
    image: "/fonts/leaked-recording.png", // Keeping existing image for now
    options: [
      { label: "Issue a strong, immediate denial and threaten legal action against anyone spreading false information.", style: CONFLICT_STYLES.COMPETING },
      { label: "Publicly apologize for the concern caused, even if the rumor is baseless, and promise a full internal review.", style: CONFLICT_STYLES.ACCOMMODATING },
      { label: "Stay silent and monitor the situation, hoping it dies down on its own.", style: CONFLICT_STYLES.AVOIDING },
      { label: "Engage with the concerned parties online, offer to discuss their concerns transparently, and share factual information.", style: CONFLICT_STYLES.COLLABORATING },
      { label: "Release a brief statement acknowledging the rumor, stating it's being looked into, and offer a partial concession or a small corrective action to appease some concerns.", style: CONFLICT_STYLES.COMPROMISING },
    ],
  },
  {
    question: "A key product launch event is met with immediate, harsh public criticism regarding a controversial feature.",
    image: "/fonts/Scene 2.jpg", // Keeping existing image for now
    options: [
      { label: "Defend the feature vigorously and highlight its benefits, dismissing criticisms as misunderstanding.", style: CONFLICT_STYLES.COMPETING },
      { label: "Immediately announce a rollback of the feature and apologize for the oversight.", style: CONFLICT_STYLES.ACCOMMODATING },
      { label: "Avoid direct comments on the feature, instead focusing on other positive aspects of the product.", style: CONFLICT_STYLES.AVOIDING },
      { label: "Acknowledge the criticism, invite user feedback, and propose a workshop to redesign the feature collaboratively.", style: CONFLICT_STYLES.COLLABORATING },
      { label: "Offer a temporary suspension of the feature while promising to gather feedback for a revised version.", style: CONFLICT_STYLES.COMPROMISING },
    ],
  },
  {
    question: "An investigative journalist contacts you with evidence of a minor internal wrongdoing and plans to publish a story.",
    image: "/fonts/Scene 3.jpg", // Keeping existing image for now
    options: [
      { label: "Attempt to discredit the journalist or the evidence, and refuse to cooperate.", style: CONFLICT_STYLES.COMPETING },
      { label: "Provide the journalist with all requested information and express full cooperation and remorse for any wrongdoing.", style: CONFLICT_STYLES.ACCOMMODATING },
      { label: "Decline to comment, stating it's an internal matter that is being handled.", style: CONFLICT_STYLES.AVOIDING },
      { label: "Offer the journalist an exclusive in-depth look at how the company is addressing the wrongdoing and improving processes.", style: CONFLICT_STYLES.COLLABORATING },
      { label: "Negotiate with the journalist to delay the story in exchange for a commitment to fix the issue and a limited statement.", style: CONFLICT_STYLES.COMPROMISING },
    ],
  },
  {
    question: "During a live interview, you're blindsided by a very aggressive question from the host that misrepresents your company's actions.",
    image: "/fonts/Scene 4.jpg", // Keeping existing image for now
    options: [
      { label: "Challenge the host's premise directly and aggressively correct the misrepresentation on air.", style: CONFLICT_STYLES.COMPETING },
      { label: "Concede to the host's point to avoid further confrontation on live television.", style: CONFLICT_STYLES.ACCOMMODATING },
      { label: "Politely sidestep the question and try to redirect the conversation to a different topic.", style: CONFLICT_STYLES.AVOIDING },
      { label: "Acknowledge the host's perspective, then calmly present facts and offer to provide detailed information off-air.", style: CONFLICT_STYLES.COLLABORATING },
      { label: "Agree that the question raises valid concerns and promise to look into the matter, while gently correcting the most egregious parts of the misrepresentation.", style: CONFLICT_STYLES.COMPROMISING },
    ],
  },
];

interface Outcome {
  id: ConflictStyle;
  title: string;
  description: string;
  professionalApproach: string; // Kept for future use as per original structure, may align with "gift" later
  gift?: string; // Optional gift as in original structure
}

const outcomes: Outcome[] = [
  {
    id: CONFLICT_STYLES.COMPETING,
    title: "The Competitor",
    description: "You're someone who tackles conflict head-on, much like a determined leader taking charge. You stand firm on your decisions and aim to achieve your objectives quickly and assertively. While this decisiveness can be vital in a crisis, overusing this style might make you appear dismissive of other viewpoints or escalate tensions. In PR, a highly competitive stance can alienate stakeholders or win a short-term argument while damaging crucial long-term relationships.",
    professionalApproach: "A PR professional assesses the 'battles' worth fighting. Instead of purely competing, they'd focus on clear, factual communication to correct misinformation, while seeking to de-escalate and protect long-term relationships. The goal is sustainable reputation, not just a short-term win.",
    gift: "We’re gifting you a free consultation — let’s talk about your goals and challenges.",
  },
  {
    id: CONFLICT_STYLES.ACCOMMODATING,
    title: "The Accommodator",
    description: "You often prioritize relationships and harmony, choosing to yield to others' needs to resolve conflict smoothly. Your empathetic nature helps in de-escalating situations and building goodwill. However, consistently accommodating can mean your own important concerns are overlooked, potentially leading to solutions that aren't truly sustainable. In a PR crisis, this might mean issuing apologies too quickly or conceding on points that could have been important to defend, which could be perceived as weakness or an admission of guilt.",
    professionalApproach: "Empathy is key in PR, but a professional avoids unnecessary concessions that imply fault where none exists. They would strategically accommodate valid concerns while firmly upholding the company's integrity and ensuring the narrative remains balanced.",
    gift: "We’re gifting you a free consultation — let’s talk about your goals and challenges.",
  },
  {
    id: CONFLICT_STYLES.AVOIDING,
    title: "The Avoider",
    description: "You tend to steer clear of conflict, preferring to withdraw, delay, or sidestep tense situations. This approach can be useful when issues are minor or when emotions need to cool down. But, consistently avoiding important conflicts can lead to unresolved problems that fester and grow larger over time. In PR crisis management, avoiding the issue might be seen as evasion or a lack of transparency, damaging public trust and allowing rumors to spread unchecked.",
    professionalApproach: "While strategic silence can be a tool, PR professionals know that avoiding a brewing crisis often fuels speculation and damages trust. They advocate for proactive communication, controlling the narrative by addressing issues transparently and outlining a clear path forward.",
    gift: "We’re gifting you a free consultation — let’s talk about your goals and challenges.",
  },
  {
    id: CONFLICT_STYLES.COLLABORATING,
    title: "The Collaborator",
    description: "You view conflict as an opportunity to find a 'win-win' solution that addresses everyone's core concerns. You're willing to invest time and effort in open discussions to explore creative, mutually beneficial outcomes. While collaboration often leads to the most robust and lasting solutions, it can be time-consuming and complex. In fast-moving PR crises, the lengthy process of collaboration might sometimes be too slow, or a consensus might be hard to reach, hindering a swift response.",
    professionalApproach: "Collaboration is often the gold standard in PR. Professionals strive to build bridges, engage in open dialogue with stakeholders, and find mutually beneficial solutions. This approach fosters trust, credibility, and positive long-term relationships.",
    gift: "We’re gifting you a free consultation — let’s talk about your goals and challenges.",
  },
  {
    id: CONFLICT_STYLES.COMPROMISING,
    title: "The Compromiser",
    description: "You seek practical, middle-ground solutions where each party makes some concessions for a quick resolution. This style is about finding a fair and expedient outcome that partially satisfies everyone involved. While compromising can be efficient for resolving issues quickly, the give-and-take might sometimes lead to a solution that doesn't fully address the underlying problem. In PR, a quick compromise might seem like a good fix, but if not carefully considered, it could result in a watered-down message or actions that don't truly satisfy any stakeholder group in the long run.",
    professionalApproach: "Compromise can be a practical PR tactic, but professionals ensure it aligns with core values and doesn't erode brand integrity. They seek middle ground strategically, ensuring any concession is a well-considered move towards a sustainable and principled resolution.",
    gift: "We’re gifting you a free consultation — let’s talk about your goals and challenges.",
  },
];


// New structure for reactions based on ConflictStyle
const styleReactions: Record<ConflictStyle, string> = {
  [CONFLICT_STYLES.COMPETING]: "A bold move. Let's see if it asserts your control...",
  [CONFLICT_STYLES.ACCOMMODATING]: "A conciliatory step. Will it smooth things over?",
  [CONFLICT_STYLES.AVOIDING]: "Holding back for now. Time will tell if that's a masterstroke or a missed opportunity.",
  [CONFLICT_STYLES.COLLABORATING]: "Reaching out to connect. This could build some bridges.",
  [CONFLICT_STYLES.COMPROMISING]: "Looking for middle ground. A practical way to diffuse tension?"
};

export default function CrisisGame() {
  const [sceneIndex, setSceneIndex] = useState(-1);
  // const [score, setScore] = useState(0); // Old score state, to be replaced
  const [styleCounts, setStyleCounts] = useState<Record<ConflictStyle, number>>({
    COMPETING: 0,
    ACCOMMODATING: 0,
    AVOIDING: 0,
    COLLABORATING: 0,
    COMPROMISING: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [countdown, setCountdown] = useState(900);
  const [loading, setLoading] = useState(false);
  // const [reaction, setReaction] = useState(""); // Reaction state might be removed or adapted
  // const [isReacting, setIsReacting] = useState(false); // isReacting state might be removed or adapted
  const [email, setEmail] = useState("");
  // For now, we will remove reaction and isReacting features as they are tied to the old structure.
  // A simplified reaction could be added later if needed.
  const [reaction, setReaction] = useState(""); // Keep for now, but content needs to change
  const [isReacting, setIsReacting] = useState(false); // Keep for now


  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    try {
      const res = await fetch("https://sheetdb.io/api/v1/ldip3p3wsw6zt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { Email: email } }),
      });

      if (res.ok) {
        setEmail("");
        alert("Thanks! We'll be in touch.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Email submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showResult && countdown > 0) {
      timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [showResult, countdown]);

  const handleOptionClick = (style: ConflictStyle) => {
    setStyleCounts(prevCounts => ({
      ...prevCounts,
      [style]: prevCounts[style] + 1,
    }));

    setReaction(styleReactions[style]);
    setIsReacting(true);

    setTimeout(() => {
      setIsReacting(false);
      const next = sceneIndex + 1;
      if (next < scenes.length) {
        setSceneIndex(next);
        setReaction("");
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setShowResult(true);
        }, 4000); // Keep loading simulation
      }
    }, 3500); // Keep reaction display time
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const getOutcome = (): Outcome => {
    let dominantStyle: ConflictStyle = CONFLICT_STYLES.AVOIDING; // Default
    let maxCount = 0;

    for (const style in styleCounts) {
      if (styleCounts[style as ConflictStyle] > maxCount) {
        maxCount = styleCounts[style as ConflictStyle];
        dominantStyle = style as ConflictStyle;
      }
    }

    // Handle ties: simple tie-breaking, e.g. prefer COLLABORATING, or first encountered (current behavior)
    // For a more sophisticated tie-breaking, this logic would be expanded.
    // Example: if (styleCounts[style as ConflictStyle] === maxCount && style === CONFLICT_STYLES.COLLABORATING) dominantStyle = style as ConflictStyle;

    const outcomeResult = outcomes.find(o => o.id === dominantStyle);
    return outcomeResult || outcomes[0]; // Fallback to the first outcome if something goes wrong
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white bg-black rounded-xl shadow-lg space-y-4">
      <div className="flex justify-center">
        <Image src="/fonts/CoPilot Agency logo.png" alt="CoPilot Agency Logo" width={160} height={60} />
      </div>

      {sceneIndex === -1 ? (
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Welcome to the Challenge!</h2>
          <p className="text-lg">Are you ready for a <strong>PR crisis drill</strong> that will test your instincts and strategy?</p>
          <button
            onClick={() => setSceneIndex(0)}
            className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
          >
            Start
          </button>
        </div>
      ) : loading ? (
        <div className="text-center text-lg">⏳ Calculating your crisis management type...</div>
      ) : isReacting ? (
        <div className="h-64 flex items-center justify-center bg-black text-yellow-300 text-xl italic">{reaction}</div>
      ) : !showResult ? (
        <div>
          {scenes[sceneIndex].image && (
            <div className="mb-4">
              <Image
                src={scenes[sceneIndex].image}
                alt="scene visual"
                width={400}
                height={225}
                className="rounded mx-auto"
              />
            </div>
          )}
          <h2 className="text-xl font-semibold mb-2">{scenes[sceneIndex].question}</h2>
          <ul className="space-y-2">
            {scenes[sceneIndex].options.map((option, idx) => (
              <li key={idx}>
                <button
                  className="w-full text-left p-3 rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition"
                  onClick={() => handleOptionClick(option.style)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Your Predominant Style: {getOutcome().title}</h2>

          <div className="text-left mt-4">
            <h3 className="text-lg font-semibold text-yellow-400">Understanding Your Style:</h3>
            <p className="mt-1">{getOutcome().description}</p>
          </div>

          <div className="text-left mt-4">
            <h3 className="text-lg font-semibold text-yellow-400">A Professional PR Perspective:</h3>
            <p className="mt-1">{getOutcome().professionalApproach}</p>
          </div>

          {getOutcome().gift && <div className="text-yellow-400 font-semibold text-lg mt-6">{getOutcome().gift}</div>}

          {countdown > 0 ? (
            <div className="mt-4 text-sm">
              <Link
                href="https://doodle.com/meeting/participate/id/azYNqn7e"
                target="_blank"
                className="inline-block mb-2 px-8 py-4 text-lg font-bold bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition"
              >
                Book Now
              </Link>
              <div>
                ⏳ Book your free consultation in the next <strong>{formatTime(countdown)}</strong> minutes.
              </div>
              <div className="mt-6 text-sm text-white text-center">
                <p className="mb-2">Or drop your email and let&apos;s keep in touch!</p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (email) {
                      await fetch("https://sheetdb.io/api/v1/ldip3p3wsw6zt", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ data: { email } }),
                      });
                      alert("Thanks! Talk to you soon.");
                      setEmail(""); // clear field
                    }
                  }}
                  className="space-y-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg text-black"
                  />
                  <button
                    onClick={handleEmailSubmit}
                    className="mt-2 px-4 py-1.5 text-sm bg-white text-black font-medium rounded hover:bg-gray-200"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-red-400">⏱️ Time’s up! But feel free to reach out anyway 😉</div>
          )}
        </div>
      )}
    </div>
  );
}
