import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineIssueNode} from "./types/ApiMagazineIssueNode"
import {convertApiNodeToDataNode} from "../../lib/convertApiNodeToDataNode"
import type {MagazineIssueNode} from "./types/MagazineIssueNode"

export async function getMagazineIssueById(id: number) {
    const apiData = (await requestDataFromApi(`/magazine-issues/${id}`)) as ApiMagazineIssueNode

    if (!apiData) {
        return null
    }

    return convertApiNodeToDataNode(apiData) as MagazineIssueNode
}
