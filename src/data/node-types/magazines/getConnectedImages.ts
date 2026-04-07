import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineById} from "./getMagazineById"
import type {ApiMagazineHasImageRelationship} from "./types/ApiMagazineHasImageRelationship"
import type {MagazineHasImageRelationship} from "./types/MagazineHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getMagazineById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazines/${id}/has-image`)).data as ApiMagazineHasImageRelationship[]
    const data: MagazineHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MAGAZINE_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
