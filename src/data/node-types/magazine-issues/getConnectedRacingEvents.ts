import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {ApiMagazineIssueCoversRacingEventRelationship} from "./types/ApiMagazineIssueCoversRacingEventRelationship"
import type {MagazineIssueCoversRacingEventRelationship} from "./types/MagazineIssueCoversRacingEventRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {RacingEventNode} from "../racing-events/types/RacingEventNode"

export async function getConnectedRacingEvents(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/covers-racing-event`)).data as ApiMagazineIssueCoversRacingEventRelationship[]
    const data: MagazineIssueCoversRacingEventRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MAGAZINE_ISSUE_COVERS_RACING_EVENT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as RacingEventNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
