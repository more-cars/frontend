import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiImageNode} from "./types/ApiImageNode"
import type {ImageNode} from "./types/ImageNode"

export async function getImageById(id: number) {
    const apiData = (await requestDataFromApi(`/images/${id}`)) as ApiImageNode

    if (!apiData) {
        return null
    }

    return apiData.data as ImageNode
}
