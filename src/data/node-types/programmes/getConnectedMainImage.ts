import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeById} from "./getProgrammeById"
import type {ApiProgrammeHasPrimeImageRelationship} from "./types/ApiProgrammeHasPrimeImageRelationship"
import type {ProgrammeHasMainImageRelationship} from "./types/ProgrammeHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getProgrammeById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/programmes/${id}/has-prime-image`)) as ApiProgrammeHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: ProgrammeHasMainImageRelationship = {
        id,
        name: DataRelationshipType.PROGRAMME_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.PROGRAMME,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
