import {requestDataFromApi} from "../../requestDataFromApi"
import {getRacingSeriesById} from "./getRacingSeriesById"
import type {ApiRacingSeriesHasImageRelationship} from "./types/ApiRacingSeriesHasImageRelationship"
import type {RacingSeriesHasImageRelationship} from "./types/RacingSeriesHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getRacingSeriesById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-series/${id}/has-image`)).data as ApiRacingSeriesHasImageRelationship[]
    const data: RacingSeriesHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.RACING_SERIES_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.RACING_SERIES,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
