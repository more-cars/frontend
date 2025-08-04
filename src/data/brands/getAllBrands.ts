import type {BrandNode} from "../../types/brands/BrandNode.mts"
import {requestDataFromApi} from "../requestDataFromApi.ts"

export async function getAllBrands(): Promise<false | Array<BrandNode>> {
    return await requestDataFromApi('/brands')
}
