import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "InterviewAI - Master Your Interview Skills with AI",
  description: "Prepare for your next interview with AI-powered mock interviews, real-time voice interaction, and personalized feedback. Practice confidently and improve your performance with our intelligent interview preparation platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="antialiased"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
        }}
      >
        <div className="fixed inset-0 z-0" />
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
