import {getBookById} from "./getBookById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBookCoversCarModelVariantRelationship} from "./types/ApiBookCoversCarModelVariantRelationship"
import type {BookCoversCarModelVariantRelationship} from "./types/BookCoversCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariants(id: number) {
    const sourceNode = await getBookById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/books/${id}/covers-car-model-variant`)) as ApiBookCoversCarModelVariantRelationship
    const data: BookCoversCarModelVariantRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.BOOK_COVERS_CAR_MODEL_VARIANT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as CarModelVariantNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
