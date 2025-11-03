import {getBrandById} from "../../data/brands/getBrandById"

export async function findNodeById(id: number) {
    return getBrandById(id)
}
