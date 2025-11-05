import {ImageDataFacade} from "../../../data/ImageDataFacade"
import type {ImageNode} from "./types/ImageNode"

export async function findNodeById(id: number) {
    return (await ImageDataFacade.getNodeById(id)) as ImageNode
}
