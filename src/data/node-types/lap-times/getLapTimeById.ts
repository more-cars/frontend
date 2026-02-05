import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeNode} from "./types/ApiLapTimeNode"
import type {LapTimeNode} from "./types/LapTimeNode"

export async function getLapTimeById(id: number) {
    const apiData = (await requestDataFromApi(`/lap-times/${id}`)) as ApiLapTimeNode

    if (!apiData) {
        return null
    }

    return apiData.data as LapTimeNode
}
