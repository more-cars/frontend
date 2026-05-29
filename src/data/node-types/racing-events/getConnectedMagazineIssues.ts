import {getRacingEventById} from "./getRacingEventById"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiRacingEventCoveredByMagazineIssueRelationship} from "./types/ApiRacingEventCoveredByMagazineIssueRelationship"
import type {RacingEventCoveredByMagazineIssueRelationship} from "./types/RacingEventCoveredByMagazineIssueRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {MagazineIssueNode} from "../magazine-issues/types/MagazineIssueNode"

export async function getConnectedMagazineIssues(id: number) {
    const sourceNode = await getRacingEventById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/racing-events/${id}/covered-by-magazine-issue`)) as ApiRacingEventCoveredByMagazineIssueRelationship
    const data: RacingEventCoveredByMagazineIssueRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.RACING_EVENT_COVERED_BY_MAGAZINE_ISSUE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as MagazineIssueNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
