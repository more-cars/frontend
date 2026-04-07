import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineIssueBelongsToMagazineRelationship} from "./types/ApiMagazineIssueBelongsToMagazineRelationship"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {MagazineIssueBelongsToMagazineRelationship} from "./types/MagazineIssueBelongsToMagazineRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {MagazineNode} from "../magazines/types/MagazineNode"

export async function getConnectedMagazine(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/belongs-to-magazine`)) as ApiMagazineIssueBelongsToMagazineRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: MagazineIssueBelongsToMagazineRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.MAGAZINE_ISSUE_BELONGS_TO_MAGAZINE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as MagazineNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return data
}
