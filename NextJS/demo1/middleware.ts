import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '@/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'

function getLocale(request: NextRequest): string | undefined {
    // const negotiatorHeaders: Record<string, string> = {}
    // console.log(request.headers)
    // request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
    //
    // // @ts-ignore locales are readonly
    // const locales: string[] = i18n.locales
    // const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    // console.log(languages)
    // const locale = matchLocale(languages, locales, i18n.defaultLocale)
    return i18n.defaultLocale ?? i18n.locales[0]
}

export function middleware(request: NextRequest) {
    // console.log(1111)
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        )
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
