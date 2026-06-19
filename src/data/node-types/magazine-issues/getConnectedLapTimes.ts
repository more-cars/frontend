import {getMagazineIssueById} from "./getMagazineIssueById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiMagazineIssueDocumentsLapTimeRelationship} from "./types/ApiMagazineIssueDocumentsLapTimeRelationship"
import type {MagazineIssueDocumentsLapTimeRelationship} from "./types/MagazineIssueDocumentsLapTimeRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {LapTimeNode} from "../lap-times/types/LapTimeNode"

export async function getConnectedLapTimes(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/documents-lap-time`)) as ApiMagazineIssueDocumentsLapTimeRelationship
    const data: MagazineIssueDocumentsLapTimeRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.MAGAZINE_ISSUE_DOCUMENTS_LAP_TIME,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as LapTimeNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
