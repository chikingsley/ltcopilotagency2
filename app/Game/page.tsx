// CrisisGame.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const scenes = [
  {
    question: "An internal voice message leaks, where you sound dismissive about employee job security.",
    image: "/fonts/leaked-recording.png",
    options: [
      { label: "Issue an internal document defending your intent", points: 1 },
      { label: "Stay silent and hope it will pass", points: 0 },
      { label: "Publish a public apology explaining the context", points: 2 },
    ],
  },
  {
    question: "You get a call from an LNK journalist asking for a live TV interview.",
    image: "/journalists.jpg",
    options: [
      { label: "Agree to the interview and explain the situation", points: 1 },
      { label: "Decline the interview", points: 0 },
      { label: "Offer to respond in writing", points: 2 },
    ],
  },
  {
    question: "The next day, DELFI publishes an article shaming you, also, with some false information.",
    image: "/delfi-article.jpg",
    options: [
      { label: "Publish a values-based statement", points: 2 },
      { label: "Hold an all-hands internal meeting", points: 1 },
      { label: "Ask the legal team to issue a correction demand", points: 0 },
    ],
  },
  {
    question: "The pressure is mounting. Investors ask for immediate action.",
    image: "/investors-roundtable.jpg",
    options: [
      { label: "Present a transparent recovery plan highlighting lessons learned", points: 1 },
      { label: "Try to find out who leaked the voice note and fire them", points: 0 },
      { label: "Call CoPilot Agency to lead recovery.", points: 2 },
    ],
  },
];

const outcomes = [
  {
    title: "Hold My Beer",
    description:
      "You dove into the crisis with fearless energy and a ‘let’s do this’ spirit. While that bravado turned heads, it also stirred up a few waves. But even the boldest leaders benefit from reflection. In crisis management, **calmness and caution often win the war.**",
    gift:
      "We’re gifting you a **free 30-minute consultation** on crisis recovery and reputation management—because your courage deserves a solid strategy behind it.",
  },
  {
    title: "Bold Firefighter",
    description:
      "You tackled the crisis head-on with boldness and grit—which takes serious courage. Sure, a little smoke escaped, but your instinct to act is exactly what real leaders are made of. With a touch more strategy and refinement, you’re well on your way to mastering calm under pressure.",
    gift:
      "We’re offering a **free 30-minute consultation** on crisis communication strategy—because great instincts deserve smart backup.",
  },
  {
    title: "Crisis Commander",
    description:
      "You navigated the crisis like a seasoned sea captain—steady hands, sharp eyes, and a clear course. Your transparency and strategic thinking turned turbulence into opportunity. With skills like these, you should be sharing your leadership wisdom far and wide.",
    gift:
      "We’re gifting you a **free 30-minute consultation** on leadership personal branding to help you amplify your voice and grow your influence even further.",
  },
];

const reactions = [
  [
    "An internal memo, bold move — but will your team buy it?",
    "Silence is golden... or is it just suspicious?",
    "Owning the moment — let’s see how the public responds.",
  ],
  [
    "Live TV? Brave. Hope you brought your media training.",
    "No comment? Let’s hope silence doesn’t speak too loud.",
    "Smart. You’ll have time to weigh your words.",
  ],
  [
    "Turning to purpose — a classy (and clever) response.",
    "You’re going in-house first — let’s see if it holds.",
    "You lawyered up — just hope it doesn’t backfire.",
  ],
  [
    "Strong pivot — transparency helps calm investors.",
    "Uh-oh. Retaliation might rattle your internal culture.",
    "Smart call — you’ve got experienced hands at the wheel.",
  ],
];

export default function CrisisGame() {
  const [sceneIndex, setSceneIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [countdown, setCountdown] = useState(900);
  const [loading, setLoading] = useState(false);
  const [reaction, setReaction] = useState("");
  const [isReacting, setIsReacting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showResult && countdown > 0) {
      timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [showResult, countdown]);

  const handleOptionClick = (points: number, optionIdx: number) => {
    setScore(score + points);
    setReaction(reactions[sceneIndex][optionIdx]);
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
        }, 4000);
      }
    }, 2000);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const getOutcome = () => {
    if (score <= 3) return outcomes[0];
    if (score <= 6) return outcomes[1];
    return outcomes[2];
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white bg-black rounded-xl shadow-lg space-y-4">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="CoPilot Agency Logo" width={160} height={60} />
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
              <Image src={scenes[sceneIndex].image} alt="scene visual" width={500} height={50} className="rounded" />
            </div>
          )}
          <h2 className="text-xl font-semibold mb-2">{scenes[sceneIndex].question}</h2>
          <ul className="space-y-2">
            {scenes[sceneIndex].options.map((option, idx) => (
              <li key={idx}>
                <button
                  className="w-full text-left p-3 rounded-lg bg-yellow-400 text-black hover:bg-yellow-300 transition"
                  onClick={() => handleOptionClick(option.points, idx)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">{getOutcome().title}</h2>
          <p>{getOutcome().description}</p>
          <div className="text-yellow-400 font-semibold text-lg mt-4">{getOutcome().gift}</div>

          {countdown > 0 ? (
            <div className="mt-4 text-sm">
              ⏳ Book your free consultation in the next <strong>{formatTime(countdown)}</strong> minutes:
              <div className="mt-2">
                <Link
                  href="https://doodle.com/meeting/participate/id/azYNqn7e"
                  target="_blank"
                  className="inline-block mt-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300"
                >
                  Book Now
                </Link>
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
