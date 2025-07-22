import axios from "axios"
import type {ImageNode} from "../../types/images/ImageNode.mts"

export async function getImageById(id: number): Promise<ImageNode> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/images/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
