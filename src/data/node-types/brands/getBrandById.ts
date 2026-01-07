import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBrandNode} from "./types/ApiBrandNode"
import type {BrandNode} from "./types/BrandNode"

export async function getBrandById(id: number) {
    const apiData = (await requestDataFromApi(`/brands/${id}`)) as ApiBrandNode

    if (!apiData) {
        return null
    }

    return apiData.data as BrandNode
}
