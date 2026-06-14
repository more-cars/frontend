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

    const chunkSize = 100
    const data: NodeHasMainImageRelationship[] = []

    for (let i = 0; i < ids.length; i += chunkSize) {
        const chunk = ids.slice(i, i + chunkSize)
        const response = (await requestDataFromApi(`/nodes/${chunk.join(',')}/has-prime-image`)) as ApiNodeHasPrimeImageRelationship

        response.data.forEach(apiItem => {
            data.push({
                name: DataRelationshipType.NODE_HAS_MAIN_IMAGE,
                source_node_id: apiItem.data?.start_node.data.id || apiItem.attributes.start_node_id,
                partner_node: convertApiRelationshipNodeToDataNode({data: apiItem.attributes, node_type: ApiNodeType.IMAGE}) as ImageNode,
            })
        })
    }

    return data
}
