import type {MagazineIssue} from "./types/MagazineIssue"

export function getNodeSubTitle(node: MagazineIssue) {
    return `Issue ${node.issue_number}/${node.issue_year} | ${node.pages} pages`
}
