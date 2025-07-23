import axios from "axios"
import type {CarModelHasImageRelation} from "../../types/car-models/CarModelHasImageRelation.mts"

export async function getConnectedImages(carModelId: number): Promise<Array<CarModelHasImageRelation>> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/car-models/${carModelId}/has-image`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return []
}
