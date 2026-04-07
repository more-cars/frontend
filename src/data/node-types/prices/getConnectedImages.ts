import {requestDataFromApi} from "../../requestDataFromApi"
import {getPriceById} from "./getPriceById"
import type {ApiPriceHasImageRelationship} from "./types/ApiPriceHasImageRelationship"
import type {PriceHasImageRelationship} from "./types/PriceHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getPriceById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/prices/${id}/has-image`)).data as ApiPriceHasImageRelationship[]
    const data: PriceHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.PRICE_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
