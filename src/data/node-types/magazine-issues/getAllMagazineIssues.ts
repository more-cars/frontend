import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiMagazineIssueNode} from "./types/ApiMagazineIssueNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {MagazineIssueNode} from "./types/MagazineIssueNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllMagazineIssues(params?: { page: number }) {
    const urlParams = {page: params?.page, sortByProperty: 'title'}
    const url = getApiRequestUrl(DataNodeType.MAGAZINE_ISSUE, urlParams)
    const apiData: ApiMagazineIssueNode[] = (await requestDataFromApi(url))?.data || []
    const data: MagazineIssueNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem.attributes, apiItem.id) as MagazineIssueNode)
    })

    return data
}
