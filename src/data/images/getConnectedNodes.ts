import axios from "axios"
import type {ImageBelongsToNodeRelation} from "../../types/images/ImageBelongsToNodeRelation.mts"

export async function getConnectedNodes(imageId: number): Promise<Array<ImageBelongsToNodeRelation>> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/images/${imageId}/belongs-to-node`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
