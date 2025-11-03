import type {BrandNode} from "../../types/brands/BrandNode"
import {requestDataFromApi} from "../requestDataFromApi"

export async function getAllBrands(): Promise<false | Array<BrandNode>> {
    return (await requestDataFromApi('/brands')).data
}
