import type {ImageNode} from "../../types/images/ImageNode.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getImageById(id: number): Promise<false | ImageNode> {
    return requestDataFromApi(`/images/${id}`)
}
