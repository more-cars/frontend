import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {ApiMagazineIssuePresentsCarModelVariantRelationship} from "./types/ApiMagazineIssuePresentsCarModelVariantRelationship"
import type {MagazineIssuePresentsCarModelVariantRelationship} from "./types/MagazineIssuePresentsCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariants(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/presents-car-model-variant`)).data as ApiMagazineIssuePresentsCarModelVariantRelationship[]
    const data: MagazineIssuePresentsCarModelVariantRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MAGAZINE_ISSUE_PRESENTS_CAR_MODEL_VARIANT,
            source_node: sourceNode,
            source_node_type: DataNodeType.MAGAZINE_ISSUE,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as CarModelVariantNode,
            partner_node_type: DataNodeType.CAR_MODEL_VARIANT,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
