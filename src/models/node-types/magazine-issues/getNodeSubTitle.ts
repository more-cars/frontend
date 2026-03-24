import type {MagazineIssue} from "./types/MagazineIssue"

export function getNodeSubTitle(node: MagazineIssue) {
    return `Issue ${node.fields.issue_number}/${node.fields.issue_year} | ${node.fields.pages} pages`
}
