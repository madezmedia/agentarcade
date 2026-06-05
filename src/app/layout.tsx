import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Topnav from "@/components/Topnav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AgentArcade — AI Agent Marketplace",
  description: "Find the right AI agent for every job. Browse, connect, and deploy AI agents across your workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className="antialiased min-h-screen flex flex-col">
          <Topnav />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
