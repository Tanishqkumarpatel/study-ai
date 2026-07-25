import DemoBttn from "@/components/forms/DemoBttn"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">

      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
            AI
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">StudyAssistant</span>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          Powered by Advanced AI & Canvas Integration
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-tight">
          Transform your course materials into <span className="text-blue-600">active learning</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Instantly generate quizzes, smart summaries, flashcards, and chat directly with your course documents and syllabus.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          
          <DemoBttn />
          
          <Link 
            href="/auth" 
            className="w-full sm:w-auto flex items-center justify-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            Log in to account
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              💬
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Course Chat</h3>
            <p className="mt-2 text-sm text-slate-600">Cut through the reading load by chatting directly with your course documents for answers.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
              📝
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Smart Summaries</h3>
            <p className="mt-2 text-sm text-slate-600">Get key concepts, definitions, and high-yield exam insights instantly.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-4">
              ❓
            </div>
            <h3 className="font-bold text-slate-900 text-lg">AI Quizzes</h3>
            <p className="mt-2 text-sm text-slate-600">Test your knowledge with multiple choice, true/false, and problem sets.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
              🃏
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Flashcards</h3>
            <p className="mt-2 text-sm text-slate-600">Reinforce your memory with automatically generated Q&A pairs from course files.</p>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 border-t border-slate-200 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} StudyAssistant. All rights reserved.
      </footer>
    </div>
  )
}