import {getLapTimeById} from "./getLapTimeById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiLapTimeDocumentedInMagazineIssueRelationship} from "./types/ApiLapTimeDocumentedInMagazineIssueRelationship"
import type {LapTimeDocumentedInMagazineIssueRelationship} from "./types/LapTimeDocumentedInMagazineIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedMagazineIssue(id: number) {
    const sourceNode = await getLapTimeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/lap-times/${id}/documented-in-magazine-issue`)) as ApiLapTimeDocumentedInMagazineIssueRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: LapTimeDocumentedInMagazineIssueRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.LAP_TIME_DOCUMENTED_IN_MAGAZINE_ISSUE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as MagazineIssueNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
