import {requestDataFromApi} from "../requestDataFromApi"
import type {ApiNodeHasPrimeImageRelationship} from "./types/ApiNodeHasPrimeImageRelationship"
import type {NodeHasMainImageRelationship} from "./types/NodeHasMainImageRelationship"
import {DataRelationshipType} from "../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../lib/convertApiRelationshipNodeToDataNode"
import {ApiNodeType} from "../types/ApiNodeType"
import type {ImageNode} from "../node-types/images/types/ImageNode"

export async function getMainImages(ids: number[]) {
    if (ids.length === 0) {
        return []
    }

    const response = (await requestDataFromApi(`/nodes/${ids.join(',')}/has-prime-image`)) as ApiNodeHasPrimeImageRelationship
    const data: NodeHasMainImageRelationship[] = []

    response.data.forEach(apiItem => {
        data.push({
            name: DataRelationshipType.NODE_HAS_MAIN_IMAGE,
            source_node_id: apiItem.data?.start_node.data.id || apiItem.attributes.start_node_id,
            partner_node: convertApiRelationshipNodeToDataNode({data: apiItem.attributes, node_type: ApiNodeType.IMAGE}) as ImageNode,
        })
    })

    return data
}
