import Link from "next/link";
import "./globals.css";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "stevy.dev",
  description: "프론트엔드 개발을 하고 있는 스티비의 블로그입니다",
  metadataBase: new URL("https://stevy.dev"),
  openGraph: {
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "stevy.dev",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className} ${firaCode.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col items-center max-w-4xl mx-auto py-10 px-4">
            <header className="mb-10 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                  <Link href="/">stevy.dev</Link>
                </h1>
                <div className="flex items-center gap-4">
                  <nav className="l-auto text-sm font-medium space-x-6">
                    <Link href="/tech">Tech</Link>
                    <Link href="/essay">Essay</Link>
                    <Link href="/about">About</Link>
                  </nav>
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main className="w-full flex flex-col items-center">
              {children}
            </main>
            <footer className="mt-10 text-center">
              <p className="text-sm text-slate-500">
                stevy.dev &copy; {new Date().getFullYear()}
              </p>
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
