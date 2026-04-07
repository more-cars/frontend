import {requestDataFromApi} from "../requestDataFromApi"
import type {ApiNodeHasPrimeImageRelationship} from "./types/ApiNodeHasPrimeImageRelationship"
import type {NodeHasMainImageRelationship} from "./types/NodeHasMainImageRelationship"
import {DataRelationshipType} from "../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../node-types/images/types/ImageNode"
import type {Node} from "./types/Node"

export async function getMainImages(ids: number[]) {
    const apiData = (await requestDataFromApi(`/nodes/${ids.join(',')}/has-prime-image`)).data as ApiNodeHasPrimeImageRelationship[] || []
    const data: NodeHasMainImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.NODE_HAS_MAIN_IMAGE,
            source_node: convertApiRelationshipNodeToDataNode(apiItem.data.start_node) as Node,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
