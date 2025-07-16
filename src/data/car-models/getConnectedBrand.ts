import axios from "axios"
import type {CarModelBelongsToBrandRelation} from "../../types/brands/CarModelBelongsToBrandRelation.mts"

export async function getConnectedBrand(carModelId: number): Promise<CarModelBelongsToBrandRelation> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/car-models/${carModelId}/belongs-to-brand`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
