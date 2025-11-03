import type {ImageBelongsToNodeRelation} from "../../types/images/ImageBelongsToNodeRelation"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getConnectedNodes(imageId: number): Promise<false | Array<ImageBelongsToNodeRelation>> {
    return (await requestDataFromApi(`/images/${imageId}/belongs-to-node`)).data
}
