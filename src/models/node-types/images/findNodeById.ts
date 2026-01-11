import {ImageDataFacade} from "../../../data/ImageDataFacade"
import type {Image} from "./types/Image"

export async function findNodeById(id: number) {
    return (await ImageDataFacade.getNodeById(id)) as Image
}
