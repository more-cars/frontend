import type {BrandNode} from "../../types/brands/BrandNode.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getBrandById(id: number): Promise<false | BrandNode> {
    return requestDataFromApi(`/brands/${id}`)
}
