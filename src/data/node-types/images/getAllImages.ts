import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiImageNode} from "./types/ApiImageNode"
import type {ImageNode} from "./types/ImageNode"

export async function getAllImages(params: { page: number }) {
    const apiData = (await requestDataFromApi('/images?sort_by_property=name&page=' + params.page)).data as ApiImageNode[]
    const data: ImageNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
