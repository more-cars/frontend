import {getCarModelVariantById} from "./getCarModelVariantById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCarModelVariantIsCoveredByBookRelationship} from "./types/ApiCarModelVariantIsCoveredByBookRelationship"
import type {CarModelVariantIsCoveredByBookRelationship} from "./types/CarModelVariantIsCoveredByBookRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {BookNode} from "../books/types/BookNode"

export async function getConnectedBooks(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/is-covered-by-book`)) as ApiCarModelVariantIsCoveredByBookRelationship
    const data: CarModelVariantIsCoveredByBookRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_IS_COVERED_BY_BOOK,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as BookNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
