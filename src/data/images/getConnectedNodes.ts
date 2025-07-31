import axios from "axios"
import type {ImageBelongsToNodeRelation} from "../../types/images/ImageBelongsToNodeRelation.mts"
import {getApiBaseUrl} from "../getApiBaseUrl.ts"

export async function getConnectedNodes(imageId: number): Promise<Array<ImageBelongsToNodeRelation>> {
    try {
        const response = await axios
            .get(`${getApiBaseUrl()}/images/${imageId}/belongs-to-node`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
