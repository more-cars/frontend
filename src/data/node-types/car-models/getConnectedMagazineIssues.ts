import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import type {ApiCarModelCoveredByMagazineIssueRelationship} from "./types/ApiCarModelCoveredByMagazineIssueRelationship"
import type {CarModelCoveredByMagazineIssueRelationship} from "./types/CarModelCoveredByMagazineIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedMagazineIssues(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/covered-by-magazine-issue`)) as ApiCarModelCoveredByMagazineIssueRelationship
    const data: CarModelCoveredByMagazineIssueRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.CAR_MODEL_COVERED_BY_MAGAZINE_ISSUE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as MagazineIssueNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
