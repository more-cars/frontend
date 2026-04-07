import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineById} from "./getMagazineById"
import type {ApiMagazineHasPrimeImageRelationship} from "./types/ApiMagazineHasPrimeImageRelationship"
import type {MagazineHasMainImageRelationship} from "./types/MagazineHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getMagazineById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/magazines/${id}/has-prime-image`)) as ApiMagazineHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: MagazineHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.MAGAZINE_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
