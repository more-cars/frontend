import axios from "axios"
import type {BrandHasCarModelRelation} from "../../types/car-models/BrandHasCarModelRelation.mts"

export async function getConnectedCarModels(brandId: number): Promise<Array<BrandHasCarModelRelation>> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/brands/${brandId}/has-car-model`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
