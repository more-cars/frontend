import type {DataSearchParams} from "../../types/DataSearchParams"
import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import type {ApiMagazineIssueNode} from "./types/ApiMagazineIssueNode"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {MagazineIssueNode} from "./types/MagazineIssueNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"

export async function getAllMagazineIssues(params?: DataSearchParams) {
    if (!params?.sortByProperty) {
        params = {sortByProperty: 'title'}
    }

    const url = getApiRequestUrl(DataNodeType.MAGAZINE_ISSUE, params)
    const apiData: ApiMagazineIssueNode[] = (await requestDataFromApi(url))?.data || []
    const data: MagazineIssueNode[] = []

    apiData.forEach(apiItem => {
        data.push(convertApiNodeToDataNode(apiItem) as MagazineIssueNode)
    })

    return data
}
