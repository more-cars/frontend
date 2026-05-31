import {getBookById} from "./getBookById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiBookHasImageRelationship} from "./types/ApiBookHasImageRelationship"
import type {BookHasImageRelationship} from "./types/BookHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getBookById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/books/${id}/has-image`)) as ApiBookHasImageRelationship
    const data: BookHasImageRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.BOOK_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as ImageNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
