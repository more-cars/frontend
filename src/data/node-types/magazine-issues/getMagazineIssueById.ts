import {requestDataFromApi} from "../../requestDataFromApi"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {ApiMagazineIssueNode} from "./types/ApiMagazineIssueNode"
import type {MagazineIssueNode} from "./types/MagazineIssueNode"

export async function getMagazineIssueById(id: number) {
    const apiData = (await requestDataFromApi(`/magazine-issues/${id}`))

    if (!apiData || apiData?.errors) {
        return null
    }

    return convertApiNodeToDataNode(apiData as ApiMagazineIssueNode) as MagazineIssueNode
}
