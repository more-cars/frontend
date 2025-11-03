import type {ImageNode} from "../../types/images/ImageNode"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getImageById(id: number): Promise<false | ImageNode> {
    return requestDataFromApi(`/images/${id}`)
}
