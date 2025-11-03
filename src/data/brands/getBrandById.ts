import type {BrandNode} from "../../types/brands/BrandNode"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getBrandById(id: number): Promise<false | BrandNode> {
    return requestDataFromApi(`/brands/${id}`)
}
