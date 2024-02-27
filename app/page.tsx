"use client"
import Image from "next/image";
import bg from "./Images/Group 1.png"
import { ConnectEmbed, ConnectWallet, WalletConnect, lightTheme, useShowConnectEmbed } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const showConnect = useShowConnectEmbed()
  const router = useRouter()

  useEffect(()=>{
    if(!showConnect){
      router.push("dashboard")
    }
  },[showConnect])
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between">
      <Image className="absolute right-0 w-[80%]  h-screen" src={bg} alt="" />
      
      <div className="z-10 relative left-[-450px] top-[150px]">
        <h1 className="text-4xl font-bold text-black mb-16 text-center">Welcome to the <span className="text-[#6BA865]">REGEN</span> </h1>
      <p className="text-lg text-black text-center font-semibold mb-4 w-[380px]">Sign-up to Continue</p>    
        { showConnect ? (
          <>
        <ConnectEmbed
        theme={lightTheme({
          colors: {
            accentText: "#6BA865",
            accentButtonBg: "#6BA865",
            borderColor: "#fdfcfd",
          },
        })}
        />
        <div className="w-[300px] h-[50px] bg-white z-50 relative mt-[-55px]"></div>
        </>
      ): (
        <div>
          <p className="text-lg text-black text-center font-semibold mb-4 w-[380px]">Signed in Successfully.!! Redirecting to the dashboard..</p>
        </div>
      )}
        {/* <ConnectWallet /> */}
        

      </div>
    </main>
  );
}
