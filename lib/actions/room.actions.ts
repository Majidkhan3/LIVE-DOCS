"user server"

import { revalidatePath } from "next/cache";
import { liveblocks } from "../liveblocks";
import { parseStringify } from "../utils";

import {nanoid} from "nanoid"

export const createDocument = async ({userId,email}
CreateDocumentParams)=>{
    const roomId = nanoid();
    try {
        const metadata = {
            creatorId :userId,
            email,
            title:"Untitled"
        }
        const userAccesses = RoomAccesses={
            [email]:['room:write']
        }
        const room = await liveblocks.createRoom("roomIds", {
           metadata,
           usersAccesses,
           defaultAccesses:[]
          });
          revalidatePath('/')
          return parseStringify(room)
    } catch (error) {
        console.log(`Error happened while creatinf a room ${error}`)
    }
}