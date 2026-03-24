import type {MagazineIssue} from "./types/MagazineIssue"

export function getNodeTitle(node: MagazineIssue) {
    return node.fields.title
}
