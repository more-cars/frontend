import axios from "axios"
import type {BrandHasImageRelation} from "../../types/car-models/BrandHasImageRelation.mts"

export async function getConnectedImages(brandId: number): Promise<Array<BrandHasImageRelation>> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/brands/${brandId}/has-image`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
