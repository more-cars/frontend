import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSeriesHasPrimeImageRelationship} from "./types/ApiRacingSeriesHasPrimeImageRelationship"
import {getRacingSeriesById} from "./getRacingSeriesById"
import type {RacingSeriesHasMainImageRelationship} from "./types/RacingSeriesHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getRacingSeriesById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/racing-series/${id}/has-prime-image`)) as ApiRacingSeriesHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: RacingSeriesHasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.RACING_SERIES_HAS_MAIN_IMAGE,
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
