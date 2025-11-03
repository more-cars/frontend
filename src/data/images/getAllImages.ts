import type {ImageNode} from "../../types/images/ImageNode.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getAllImages(): Promise<false | Array<ImageNode>> {
    return (await requestDataFromApi('/images')).data
}
