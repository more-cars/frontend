import type {ImageBelongsToNodeRelation} from "../../types/images/ImageBelongsToNodeRelation.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getConnectedNodes(imageId: number): Promise<false | Array<ImageBelongsToNodeRelation>> {
    return await requestDataFromApi(`/images/${imageId}/belongs-to-node`)
}
