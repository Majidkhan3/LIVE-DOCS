import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { SignedIn, SignIn, UserButton } from "@clerk/nextjs";

const Home = () => {
  const document = [];
  return (
    <main className="home-container">
      <Header className="sticky">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification{" "}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
    </main>
  );
};

export default Home;
