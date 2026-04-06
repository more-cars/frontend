import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {ApiMagazineIssueCoversCarModelRelationship} from "./types/ApiMagazineIssueCoversCarModelRelationship"
import type {MagazineIssueCoversCarModelRelationship} from "./types/MagazineIssueCoversCarModelRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelNode} from "../car-models/types/CarModelNode"

export async function getConnectedCarModels(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/covers-car-model`)).data as ApiMagazineIssueCoversCarModelRelationship[]
    const data: MagazineIssueCoversCarModelRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MAGAZINE_ISSUE_COVERS_CAR_MODEL,
            source_node: sourceNode,
            source_node_type: DataNodeType.MAGAZINE_ISSUE,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as CarModelNode,
            partner_node_type: DataNodeType.CAR_MODEL,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
