import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBrandNode} from "./types/ApiBrandNode"
import type {BrandNode} from "./types/BrandNode"

export async function getAllBrands(params: { page: number }) {
    const apiData = (await requestDataFromApi('/brands?sort_by_property=name&page=' + params.page)).data as ApiBrandNode[]
    const data: BrandNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
