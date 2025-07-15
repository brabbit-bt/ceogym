import CEONews from "@/components/CEONews";
import Legacy from "@/components/Legacy";
import Recommendations from "@/components/Recommendations";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import DailyPractice from "@/components/DailyPractice";
import Reflection from "@/components/Reflection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col items-center py-10 px-4">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-700 mb-2 text-center">CEOgym</h1>
        <p className="text-lg text-gray-600 text-center">Your daily mindset and learning warmup for future CEOs</p>
      </header>
      <main className="w-full max-w-2xl flex flex-col gap-6">
        <CEONews />
        <Legacy />
        <Recommendations />
        <QuoteOfTheDay />
        <DailyPractice />
        <Reflection />
      </main>
    </div>
  );
}
