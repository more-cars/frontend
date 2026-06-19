import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeById} from "./getProgrammeById"
import type {ApiProgrammeHasPrimeImageRelationship} from "./types/ApiProgrammeHasPrimeImageRelationship"
import type {ProgrammeHasMainImageRelationship} from "./types/ProgrammeHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
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
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.PROGRAMME_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ImageNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
