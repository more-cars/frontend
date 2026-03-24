import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantHasPrimeImageRelationship} from "./types/ApiCarModelVariantHasPrimeImageRelationship"
import type {CarModelVariantHasMainImageRelationship} from "./types/CarModelVariantHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/has-prime-image`)) as ApiCarModelVariantHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: CarModelVariantHasMainImageRelationship = {
        id,
        name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.CAR_MODEL_VARIANT,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
