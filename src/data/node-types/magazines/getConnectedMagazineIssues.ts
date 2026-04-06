import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineById} from "./getMagazineById"
import type {ApiMagazineHasIssueRelationship} from "./types/ApiMagazineHasIssueRelationship"
import type {MagazineHasIssueRelationship} from "./types/MagazineHasIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedMagazineIssues(id: number) {
    const sourceNode = await getMagazineById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazines/${id}/has-issue`)).data as ApiMagazineHasIssueRelationship[]
    const data: MagazineHasIssueRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MAGAZINE_HAS_ISSUE,
            source_node: sourceNode,
            source_node_type: DataNodeType.MAGAZINE,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as MagazineIssueNode,
            partner_node_type: DataNodeType.MAGAZINE_ISSUE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
