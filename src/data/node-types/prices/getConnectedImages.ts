import {requestDataFromApi} from "../../requestDataFromApi"
import {getPriceById} from "./getPriceById"
import type {ApiPriceHasImageRelationship} from "./types/ApiPriceHasImageRelationship"
import type {PriceHasImageRelationship} from "./types/PriceHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
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
            id,
            name: DataRelationshipType.PRICE_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.PRICE,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
