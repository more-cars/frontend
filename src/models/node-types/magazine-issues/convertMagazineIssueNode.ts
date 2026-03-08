import {MagazineIssueNode} from "../../../data/node-types/magazine-issues/types/MagazineIssueNode"
import {MagazineIssue} from "./types/MagazineIssue"

export function convertMagazineIssueNode(dataNode: MagazineIssueNode) {
    const magazineIssue: MagazineIssue = {
        id: dataNode.id,
        title: dataNode.title,
        consecutive_number: dataNode.consecutive_number || null,
        issue_number: dataNode.issue_number || null,
        issue_year: dataNode.issue_year || null,
        release_date: dataNode.release_date || null,
        single_copy_price: dataNode.single_copy_price || null,
        single_copy_price_unit: dataNode.single_copy_price_unit || null,
        pages: dataNode.pages || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return magazineIssue
}
