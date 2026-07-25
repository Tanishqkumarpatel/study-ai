'use client'

import { signIn } from "next-auth/react"

export default function DemoBttn() {
    return (
        <button 
            onClick={() => signIn('credentials', {
                email: 'demo@canvasai.com',
                password: 'demo123',
                callbackUrl: '/dashboard'
            })} 
            className="w-full sm:w-auto flex items-center justify-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-800 transition">
            Try Demo Account
        </button>
    )
}