import {requestDataFromApi} from "../requestDataFromApi"
import type {ApiImageNode} from "./types/ApiImageNode"
import type {ImageNode} from "./types/ImageNode"

export async function getAllImages() {
    const apiData = (await requestDataFromApi('/images')).data as ApiImageNode[]
    const data: ImageNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
