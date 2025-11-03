import {getImageById} from "../../data/images/getImageById"

export async function findNodeById(id: number) {
    return getImageById(id)
}
