"use client";
import Loader from "@/components/Loader";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      //   publicApiKey={
      //     "pk_prod_XR7tjHxeTXcl0sC3yMlzAmwXTYovbNz107NHs14U-Ay7Liz9eme1hRCt0ve4me3m"
      //   }
      authEndpoint="/api/liveblocks-auth"
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
