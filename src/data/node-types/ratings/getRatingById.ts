import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRatingNode} from "./types/ApiRatingNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {RatingNode} from "./types/RatingNode"

export async function getRatingById(id: number) {
    const apiData = (await requestDataFromApi(`/ratings/${id}`)) as ApiRatingNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as RatingNode
}
