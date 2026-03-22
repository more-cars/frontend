import {requestDataFromApi} from "../requestDataFromApi"
import type {ApiNode} from "./types/ApiNode"

export async function getApiNodeById(id: number) {
    const apiData = (await requestDataFromApi(`/nodes/${id}`)) as ApiNode

    if (!apiData) {
        return null
    }

    return apiData
}
