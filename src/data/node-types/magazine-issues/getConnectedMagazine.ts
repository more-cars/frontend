import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineIssueBelongsToMagazineRelationship} from "./types/ApiMagazineIssueBelongsToMagazineRelationship"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {MagazineIssueBelongsToMagazineRelationship} from "./types/MagazineIssueBelongsToMagazineRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.MAGAZINE_ISSUE_BELONGS_TO_MAGAZINE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as MagazineNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
