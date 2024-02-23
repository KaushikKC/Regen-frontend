"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, localWallet, magicLink, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import { HederaTestnet } from "@thirdweb-dev/chains";

const inter = Inter({ subsets: ["latin"] });

// const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThirdwebProvider 
        clientId="e269eb848349f4f235be885bee179744"
        activeChain={ HederaTestnet }
        supportedWallets={[
          metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        localWallet(),
          embeddedWallet({
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            }
          }
          ),
          magicLink({apiKey:"pk_live_2D7A551BFA59AC13"})
        ]}
      >
      <body className={inter.className}>{children}</body>
      </ThirdwebProvider>
    </html>
  );
}
