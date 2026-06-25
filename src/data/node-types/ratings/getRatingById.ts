import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiRatingNode} from "./types/ApiRatingNode"
import type {RatingNode} from "./types/RatingNode"

export async function getRatingById(id: number) {
    const apiData = (await requestDataFromApi(`/ratings/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiRatingNode) as RatingNode
}
