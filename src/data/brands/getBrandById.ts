import {BrandNode} from "../../types/brands/BrandNode"
import axios from "axios"

export async function getBrandById(id: number): Promise<BrandNode> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/brands/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
