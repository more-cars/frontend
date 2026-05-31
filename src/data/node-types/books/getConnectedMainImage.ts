import {requestDataFromApi} from "../../requestDataFromApi"
import {getBookById} from "./getBookById"
import type {ApiBookHasPrimeImageRelationship} from "./types/ApiBookHasPrimeImageRelationship"
import type {BookHasMainImageRelationship} from "./types/BookHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getBookById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/books/${id}/has-prime-image`)) as ApiBookHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: BookHasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.BOOK_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.BOOK,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
