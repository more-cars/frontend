import type {MagazineIssue} from "./types/MagazineIssue"

export function getNodeSubTitle(node: MagazineIssue) {
    const issue = node.fields.issue_number
    const year = node.fields.issue_year
    const pages = node.fields.pages

    const subtitleParts = []

    if (issue && year) {
        subtitleParts.push(`Issue ${issue}/${year}`)
    }

    if (!issue && year) {
        subtitleParts.push(year)
    }

    if (pages) {
        subtitleParts.push(`${node.fields.pages} pages`)
    }

    return subtitleParts.join(' | ')
}
