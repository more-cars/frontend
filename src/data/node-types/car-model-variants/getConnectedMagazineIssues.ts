import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantIsPresentedInMagazineIssueRelationship} from "./types/ApiCarModelVariantIsPresentedInMagazineIssueRelationship"
import type {CarModelVariantIsPresentedInMagazineIssueRelationship} from "./types/CarModelVariantIsPresentedInMagazineIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedMagazineIssues(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/is-presented-in-magazine-issue`)).data as ApiCarModelVariantIsPresentedInMagazineIssueRelationship[]
    const data: CarModelVariantIsPresentedInMagazineIssueRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_IS_PRESENTED_IN_MAGAZINE_ISSUE,
            source_node: sourceNode,
            source_node_type: DataNodeType.CAR_MODEL_VARIANT,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as MagazineIssueNode,
            partner_node_type: DataNodeType.MAGAZINE_ISSUE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
