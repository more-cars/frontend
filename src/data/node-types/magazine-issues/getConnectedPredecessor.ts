import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineIssueFollowsIssueRelationship} from "./types/ApiMagazineIssueFollowsIssueRelationship"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {MagazineIssueFollowsIssueRelationship} from "./types/MagazineIssueFollowsIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedPredecessor(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/follows-issue`)) as ApiMagazineIssueFollowsIssueRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: MagazineIssueFollowsIssueRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.MAGAZINE_ISSUE_FOLLOWS_ISSUE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as MagazineIssueNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
