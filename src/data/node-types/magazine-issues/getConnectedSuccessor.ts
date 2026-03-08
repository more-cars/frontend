import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineIssueFollowedByIssueRelationship} from "./types/ApiMagazineIssueFollowedByIssueRelationship"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {MagazineIssueFollowedByIssueRelationship} from "./types/MagazineIssueFollowedByIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {MagazineIssueNode} from "./types/MagazineIssueNode"

export async function getConnectedSuccessor(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/followed-by-issue`)) as ApiMagazineIssueFollowedByIssueRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: MagazineIssueFollowedByIssueRelationship = {
        id,
        name: DataRelationshipType.MAGAZINE_ISSUE_FOLLOWED_BY_ISSUE,
        source_node: sourceNode,
        source_node_type: DataNodeType.MAGAZINE_ISSUE,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node.data) as MagazineIssueNode,
        partner_node_type: DataNodeType.MAGAZINE_ISSUE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
