'use client'

import { signIn } from 'next-auth/react'

export default function AuthForm() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-[#f8fafc] px-4'>
      <div className='flex flex-col gap-6 bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm w-full max-w-md'>
        
        {/* Header / Branding */}
        <div className='flex flex-col items-center text-center gap-2'>
          <div className='h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20 mb-2'>
            AI
          </div>
          <h1 className='text-2xl font-extrabold tracking-tight text-slate-900'>Canvas AI</h1>
          <p className='text-sm text-slate-600'>Your AI study companion</p>
        </div>

        {/* Google Sign In Button */}
        <button
          className='w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-semibold py-3.5 px-4 rounded-xl shadow-sm transition duration-200'
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          <svg className='h-5 w-5' viewBox='0 0 24 24'>
            <path
              fill='#4285F4'
              d='M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z'
            />
            <path
              fill='#34A853'
              d='M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.95H1.19v3.15C3.17 21.36 7.23 24 12 24z'
            />
            <path
              fill='#FBBC05'
              d='M5.28 14.25c-.25-.72-.38-1.49-.38-2.25s.13-1.53.38-2.25V6.6H1.19C.43 8.15 0 9.92 0 12s.43 3.85 1.19 5.4l4.09-3.15z'
            />
            <path
              fill='#EA4335'
              d='M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.64 1.19 6.6l4.09 3.15c.95-2.84 3.6-4.95 6.72-4.95z'
            />
          </svg>
          Continue with Google
        </button>

      </div>
    </div>
  )
}