import type {ImageNode} from "../../types/images/ImageNode"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getAllImages(): Promise<false | Array<ImageNode>> {
    return (await requestDataFromApi('/images')).data
}
