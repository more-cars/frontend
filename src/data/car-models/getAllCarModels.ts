import axios from "axios"
import type {CarModelNode} from "../../types/car-models/CarModelNode.mts"

export async function getAllCarModels(): Promise<false | Array<CarModelNode>> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/car-models`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }

    return false
}
