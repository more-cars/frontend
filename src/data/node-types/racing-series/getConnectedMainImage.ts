import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingSeriesHasPrimeImageRelationship} from "./types/ApiRacingSeriesHasPrimeImageRelationship"
import {getRacingSeriesById} from "./getRacingSeriesById"
import type {RacingSeriesHasMainImageRelationship} from "./types/RacingSeriesHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
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

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: RacingSeriesHasMainImageRelationship = {
        id,
        name: DataRelationshipType.RACING_SERIES_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.RACING_SERIES,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node.data) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
