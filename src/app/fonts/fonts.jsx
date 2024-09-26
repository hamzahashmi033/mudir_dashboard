import { Inter, Roboto_Mono, Fira_Sans_Condensed } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})
export const fira_sans = Fira_Sans_Condensed({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-fira',
    weight: ["100", "500","400"]
})
export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})