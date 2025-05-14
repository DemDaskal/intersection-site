// pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Leader = {
  nickname: string;
  trust: number;
  rank: string;
};

export default function Home() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    fetch('https://aegis.onrender.com/leaderboard')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length >= 10) {
          setLeaders(data.slice(0, 10));
          setShowLeaderboard(true);
        }
      })
      .catch((err) => console.error('Failed to load leaderboard:', err));
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {showLeaderboard && (
        <section className="py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Top Contributors</h1>
          <ul className="max-w-xl mx-auto space-y-3">
            {leaders.map((user, i) => (
              <li
                key={user.nickname}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow"
              >
                <span className="font-semibold">{i + 1}. {user.nickname}</span>
                <span className="text-sm text-gray-600">
                  {user.rank} • Trust: {user.trust}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Intersection Logo" width={120} height={120} />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Intersection
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          One step ahead of every corner.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg shadow hover:bg-gray-800 transition">
          Launching Soon
        </button>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div>
            <div className="text-5xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">Turn on Engage</h3>
            <p className="text-gray-600">Start the app while driving. It auto-detects intersections.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🟢</div>
            <h3 className="text-xl font-semibold mb-2">Get Live Signals</h3>
            <p className="text-gray-600">See who has the right-of-way in real time.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Dispute Mistakes</h3>
            <p className="text-gray-600">If something’s wrong, submit a dispute instantly.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🏁</div>
            <h3 className="text-xl font-semibold mb-2">Improve the Network</h3>
            <p className="text-gray-600">Earn trust points and help train the map.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <div className="text-5xl mb-4">📡</div>
            <h3 className="text-xl font-semibold mb-2">Live Signal Guidance</h3>
            <p className="text-gray-600">See clear, real-time directions at intersections.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Logic</h3>
            <p className="text-gray-600">Every signal is calculated based on driver flow and patterns.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Trust-Based Disputes</h3>
            <p className="text-gray-600">Disputes are ranked by contributor credibility.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Privacy-First Design</h3>
            <p className="text-gray-600">No location is stored — only verified movement vectors.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Rank & Rewards</h3>
            <p className="text-gray-600">Get recognized and climb the leaderboard with accurate signals.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">📲</div>
            <h3 className="text-xl font-semibold mb-2">Lightweight App</h3>
            <p className="text-gray-600">Optimized for minimal data, battery, and distraction.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50 text-left">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Is this app legal to use while driving?</h3>
            <p className="text-gray-600">Yes. Intersection runs in the background and does not require interaction while driving.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How does the app know who has the right of way?</h3>
            <p className="text-gray-600">It uses driver patterns, trust scores, and dispute validation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What if the signal is wrong?</h3>
            <p className="text-gray-600">Submit a dispute. If confirmed, the map updates and your trust score improves.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Does it track or store my GPS data?</h3>
            <p className="text-gray-600">No — only real-time vector movement is analyzed anonymously.</p>
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">About the Creator</h2>
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/DemDaskal.jpeg"
            alt="Demosthenes Daskaleas"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <p className="max-w-xl text-gray-700 text-lg">
            <strong>Dem Daskal</strong> is a private tour and taxi driver. Intersection was born from driving experience in the Athenian cityscape and a vision for safer streets.
          </p>
          <p className="text-blue-600 underline">
            <a href="mailto:support@intersectionapp.com">support@intersectionapp.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="/privacy" className="text-sm text-gray-500 underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
