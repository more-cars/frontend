import {requestDataFromApi} from "../../requestDataFromApi"
import {getMagazineIssueById} from "./getMagazineIssueById"
import type {ApiMagazineIssueHasPrimeImageRelationship} from "./types/ApiMagazineIssueHasPrimeImageRelationship"
import type {MagazineIssueHasMainImageRelationship} from "./types/MagazineIssueHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getMagazineIssueById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/magazine-issues/${id}/has-prime-image`)) as ApiMagazineIssueHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: MagazineIssueHasMainImageRelationship = {
        id: apiData.data.relationship_id,
        name: DataRelationshipType.MAGAZINE_ISSUE_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.MAGAZINE_ISSUE,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
