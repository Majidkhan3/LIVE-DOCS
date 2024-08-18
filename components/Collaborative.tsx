"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";
import ActiveCollaborators from "./ActiveCollaborators";
import { Input } from "./ui/input";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  const currentUserType = "editor";
  const [loading, setloading] = useState(false);
  const [documentTitle, setdocumentTitle] = useState(roomMetadata.title);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    const handleCLickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setEditing(false);
      }
    };
    document.addEventListener("mousedown", handleCLickOutside);
    return () => {
      document.removeEventListener("mousedown", handleCLickOutside);
    };
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const updateTitleHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div
              ref={containerRef}
              className="flex w-fit items-center justify-center gap-2"
            >
              {editing && !loading ? (
                <Input
                  type="text"
                  value={documentTitle}
                  ref={inputRef}
                  placeholder="Enter Title "
                  onChange={(e) => setdocumentTitle(e.target.value)}
                  onKeyDown={updateTitleHandler}
                  disable={!editing}
                  className="document-title-input"
                />
              ) : (
                <>
                  <p className="document-title">{document.title}</p>
                </>
              )}
              {currentUserType === "editor" && !editing && (
                <Image
                  src="/assets/icons/edit.svg"
                  width={24}
                  alt="edit"
                  height={24}
                  onClick={() => setEditing(true)}
                  // className="pointer"
                />
              )}
              {currentUserType !== "editor" && !editing && (
                <p className="view-only-tag">View only</p>
              )}
              {loading && <p className="text-sm text-gray-400">saving...</p>}
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
