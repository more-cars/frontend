import {requestDataFromApi} from "../requestDataFromApi"
import type {ApiImageNode} from "./types/ApiImageNode"
import type {ImageNode} from "./types/ImageNode"

export async function getImageById(id: number) {
    const apiData = (await requestDataFromApi(`/images/${id}`)) as ApiImageNode

    return apiData.data as ImageNode
}
