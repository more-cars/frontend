import {BrandNode} from "../../types/brands/BrandNode"
import axios from "axios"

export async function getAllBrands(): Promise<false | Array<BrandNode>> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/brands`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return false
}
