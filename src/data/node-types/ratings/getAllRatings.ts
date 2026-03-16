import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiRatingNode} from "./types/ApiRatingNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {RatingNode} from "./types/RatingNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllRatings(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'rating_value'}
    const url = getApiRequestUrl(DataNodeType.RATING, urlParams)
    const apiData: ApiRatingNode[] = (await requestDataFromApi(url))?.data || []
    const data: RatingNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem.attributes, apiItem.id) as RatingNode)
    })

    return data
}
