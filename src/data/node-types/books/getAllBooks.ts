import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiBookNode} from "./types/ApiBookNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {BookNode} from "./types/BookNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllBooks(params: DataSearchParams = {}) {
    params.sortByProperty ??= 'title'

    const url = getApiRequestUrl(DataNodeType.BOOK, params)
    const apiData: ApiBookNode[] = (await requestDataFromApi(url))?.data || []
    const data: BookNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as BookNode)
    })

    return data
}
