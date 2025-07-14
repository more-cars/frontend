import type {CarModelNode} from "../../types/car-models/CarModelNode.mts"
import axios from "axios"

export async function getCarModelById(id: number): Promise<CarModelNode> {
    try {
        const response = await axios
            .get(`http://${process.env.API_HOST}:${process.env.API_PORT}/car-models/${id}`)
        return response.data
    } catch (error) {
        console.error(`Error: ${error.code}`)
    }
}
