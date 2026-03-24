import {MagazineIssueNode} from "../../../data/node-types/magazine-issues/types/MagazineIssueNode"
import {MagazineIssue} from "./types/MagazineIssue"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertMagazineIssueNode(dataNode: MagazineIssueNode) {
    const magazineIssue: MagazineIssue = {
        type: ModelNodeType.MAGAZINE_ISSUE,
        fields: {
            id: dataNode.data.id,
            title: dataNode.data.title,
            consecutive_number: dataNode.data.consecutive_number || null,
            issue_number: dataNode.data.issue_number || null,
            issue_year: dataNode.data.issue_year || null,
            release_date: dataNode.data.release_date || null,
            single_copy_price: dataNode.data.single_copy_price || null,
            single_copy_price_unit: dataNode.data.single_copy_price_unit || null,
            pages: dataNode.data.pages || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return magazineIssue
}
