import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import type {ApiCarModelCoveredByMagazineIssueRelationship} from "./types/ApiCarModelCoveredByMagazineIssueRelationship"
import type {CarModelCoveredByMagazineIssueRelationship} from "./types/CarModelCoveredByMagazineIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedMagazineIssues(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/covered-by-magazine-issue`)).data as ApiCarModelCoveredByMagazineIssueRelationship[]
    const data: CarModelCoveredByMagazineIssueRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_COVERED_BY_MAGAZINE_ISSUE,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as MagazineIssueNode,
            partner_node_type: DataNodeType.MAGAZINE_ISSUE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
