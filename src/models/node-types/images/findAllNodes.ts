import {ImageDataFacade} from "../../../data/ImageDataFacade"
import type {ImageNode} from "./types/ImageNode"

export async function findAllNodes() {
    return (await ImageDataFacade.getNodeCollection()) as ImageNode[]
}
