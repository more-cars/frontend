import {getCarModelById} from "../../data/car-models/getCarModelById"

export async function findNodeById(id: number) {
    return getCarModelById(id)
}
