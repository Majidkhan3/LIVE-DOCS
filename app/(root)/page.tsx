import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { SignedIn, SignIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import AddDocumentBtn from "@/components/AddDocumentBtn";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
console.log("Changes According to you");
const Home = async () => {
  const clerkUser = await currentUser();
  console.log(clerkUser);
  if (!currentUser) redirect("sign-in");
  const documents: any[] = [];
  console.log(documents, " here");
  return (
    <main className="home-container">
      <Header className="sticky">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification here{" "}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {documents.length > 0 ? (
        <div></div>
      ) : (
        <div className="document-list-empty">
          <Image
            src="/assets/icons/doc.svg"
            alt="Document"
            width={40}
            height={40}
            className="mx-auto"
          />
          <AddDocumentBtn
            userId={clerkUser?.id}
            email={clerkUser?.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
