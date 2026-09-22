import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Moon, Copy, CheckCircle2, Heart, ArrowRight,
  Wallet, QrCode, Send, Sparkles, Globe, CreditCard,
  Users, Zap, ExternalLink
} from 'lucide-react';

const THREAD_TWEETS = [
  {
    id: 1,
    text: `🌙 What if tipping your favorite creator was as easy as scanning a QR code?

No banks. No borders. No minimum payout thresholds.

Just $MOONY → creator's wallet → done.

Meet @molokoprotocol's Moony + @flipcash_app Tip Cards — the permissionless tipping stack on Solana. 🧵👇`,
  },
  {
    id: 2,
    text: `First, what IS $MOONY?

• Fixed-supply digital currency on Solana
• Built for peer-to-peer payments
• Available on Flipcash
• Sub-cent transaction fees
• <1 second settlement

Think of it as internet-native cash designed specifically for rewarding creators — no intermediaries taking 30% cuts.`,
  },
  {
    id: 3,
    text: `Now here's where it gets cool: Flipcash Tip Cards.

Every Flipcash account comes with a personal Tip Card — a unique link + QR code that anyone can use to send you $MOONY.

It's your universal tip jar that works:
📝 In blog posts
🎨 On artwork
🎬 In video content
📱 On your X profile

No signup required to tip.`,
  },
  {
    id: 4,
    text: `How to send $MOONY to a creator in 60 seconds:

Step 1: Open the creator's Tip Card link (or scan their QR)
Step 2: Connect your Solana wallet (Phantom, Solflare, etc.)
Step 3: Enter the amount of $MOONY to send
Step 4: Confirm → $MOONY arrives instantly in their Flipcash wallet

That's it. No approval process. No waiting 30 days for a payout. Permissionless.`,
  },
  {
    id: 5,
    text: `For creators — here's how to set up your Tip Card:

1. Download Flipcash & create an account
2. Go to your profile → find your Tip Card
3. Copy the link or export the QR code
4. Add it to your:
   - X bio
   - YouTube descriptions
   - Newsletter footer
   - Art watermarks (as overlay)
   - Livestream screens

You now accept $MOONY tips from anyone, anywhere on Earth.`,
  },
  {
    id: 6,
    text: `Why this matters:

Traditional creator tipping is broken:
❌ YouTube takes 30% of Super Chats
❌ Twitch takes 50% of subscriptions
❌ Patreon charges 5-12% + payment fees
❌ PayPal holds funds for 21 days

$MOONY + Flipcash:
✅ 0% platform fee
✅ <$0.001 transaction cost
✅ Instant settlement
✅ Creator gets 100% of every tip
✅ Works in every country`,
  },
  {
    id: 7,
    text: `The bigger picture:

$MOONY isn't just a token — it's the beginning of a permissionless creator economy on Solana.

Imagine a world where:
• A writer in Lagos tips an artist in Jakarta with $MOONY
• A fan in São Paulo tips a streamer in Kyiv
• No banks, no borders, no middlemen

That world exists today. On Flipcash. With $MOONY.

Get your Tip Card: flipcash.app
Learn about Moony: @molokoprotocol 🌙`,
  },
];

export default function App() {
  const [copiedThread, setCopiedThread] = useState(false);
  const [copiedSingle, setCopiedSingle] = useState(false);

  const copyFullThread = () => {
    const text = THREAD_TWEETS.map(t => t.text).join('\n\n---\n\n');
    navigator.clipboard.writeText(text);
    setCopiedThread(true);
    setTimeout(() => setCopiedThread(false), 2500);
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
  };

  const copySinglePost = () => {
    const singlePost = `🌙 Your favorite creator deserves 100% of your tip — not 70% after platform fees.

$MOONY on @flipcash_app makes permissionless tipping real:

1️⃣ Creator shares their Tip Card (link or QR)
2️⃣ Fan scans → connects wallet → sends $MOONY
3️⃣ Creator receives 100% instantly

No banks. No borders. No 30% cuts.

Fixed-supply token on Solana. Sub-cent fees. <1s settlement.

The permissionless creator economy starts here.

@molokoprotocol 🌙`;
    navigator.clipboard.writeText(singlePost);
    setCopiedSingle(true);
    setTimeout(() => setCopiedSingle(false), 2500);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-zinc-100 selection:bg-indigo-500/30">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-indigo-950/40 border-b border-indigo-500/20 px-4 py-2 text-center text-xs text-indigo-300 flex items-center justify-center space-x-2">
        <Moon className="w-3.5 h-3.5 text-indigo-400" />
        <span className="font-semibold">Moony Tips with Flipcash — X Thread Bounty</span>
        <span className="text-zinc-400">·</span>
        <span className="text-zinc-300">$300 USDC Prize Pool · Permissionless Creator Tipping on Solana</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#090D16]/90 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                <Moon className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base text-white tracking-tight">Moony Tips Thread</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 font-mono">
                  X POST
                </span>
              </div>
              <p className="text-[9px] text-zinc-400 font-mono">$MOONY × FLIPCASH TIP CARDS — PERMISSIONLESS CREATOR TIPPING</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={copySinglePost}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 flex items-center space-x-1.5 cursor-pointer border border-zinc-700"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedSingle ? 'Copied!' : 'Copy Single Post'}</span>
            </button>
            <button
              onClick={copyFullThread}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-extrabold text-xs flex items-center space-x-1.5 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-indigo-500/20"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedThread ? 'Thread Copied!' : 'Copy Full Thread (7 tweets)'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Key Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-indigo-500/30 space-y-1">
            <CreditCard className="w-5 h-5 text-indigo-400" />
            <span className="text-[10px] font-bold text-indigo-400 font-mono uppercase">100% to Creator</span>
            <p className="text-[10px] text-zinc-300">Zero platform fees</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-emerald-500/30 space-y-1">
            <Zap className="w-5 h-5 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-400 font-mono uppercase">Instant</span>
            <p className="text-[10px] text-zinc-300">&lt;1 second settlement</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-amber-500/30 space-y-1">
            <Globe className="w-5 h-5 text-amber-400" />
            <span className="text-[10px] font-bold text-amber-400 font-mono uppercase">Borderless</span>
            <p className="text-[10px] text-zinc-300">Works everywhere</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-rose-500/30 space-y-1">
            <QrCode className="w-5 h-5 text-rose-400" />
            <span className="text-[10px] font-bold text-rose-400 font-mono uppercase">QR Tip Cards</span>
            <p className="text-[10px] text-zinc-300">Scan → Send → Done</p>
          </div>
        </div>

        {/* Thread Timeline */}
        <div className="space-y-0">
          {THREAD_TWEETS.map((tweet, idx) => (
            <div key={tweet.id} className="relative pl-8">
              {idx < THREAD_TWEETS.length - 1 && (
                <div className="absolute left-3.5 top-10 bottom-0 w-px bg-indigo-500/20" />
              )}
              <div className="absolute left-1.5 top-5 w-4 h-4 rounded-full bg-indigo-500/30 border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>
              <div className="p-5 mb-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-indigo-400">
                    Tweet {tweet.id}/{THREAD_TWEETS.length}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{tweet.text.length} chars</span>
                </div>
                <p className="text-sm text-zinc-100 leading-relaxed whitespace-pre-line font-sans">
                  {tweet.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-[#070A11] mt-16 py-8 text-center text-xs text-zinc-500">
        <p className="font-semibold text-zinc-400">Moony Tips X Thread — Permissionless Creator Tipping on Solana</p>
        <p className="font-mono mt-1 text-[10px] text-zinc-600">Built for Superteam Earn ($300 USDC) · 7-Tweet Thread + Single Post · Tags @molokoprotocol @flipcash_app</p>
      </footer>
    </div>
  );
}
