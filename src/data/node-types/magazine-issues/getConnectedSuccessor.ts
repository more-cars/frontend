import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineIssueFollowedByIssueRelationship} from "./types/ApiMagazineIssueFollowedByIssueRelationship"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {MagazineIssueFollowedByIssueRelationship} from "./types/MagazineIssueFollowedByIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.MAGAZINE_ISSUE_FOLLOWED_BY_ISSUE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as MagazineIssueNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
