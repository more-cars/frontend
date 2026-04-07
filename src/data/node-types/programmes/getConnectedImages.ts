import {requestDataFromApi} from "../../requestDataFromApi"
import {getProgrammeById} from "./getProgrammeById"
import type {ApiProgrammeHasImageRelationship} from "./types/ApiProgrammeHasImageRelationship"
import type {ProgrammeHasImageRelationship} from "./types/ProgrammeHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getProgrammeById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/programmes/${id}/has-image`)).data as ApiProgrammeHasImageRelationship[]
    const data: ProgrammeHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.PROGRAMME_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
