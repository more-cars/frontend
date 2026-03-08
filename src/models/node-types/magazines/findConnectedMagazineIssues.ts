import {MagazineDataFacade} from "../../../data/MagazineDataFacade"
import {MagazineIssue} from "../magazine-issues/types/MagazineIssue"
import {convertMagazineIssueNode} from "../magazine-issues/convertMagazineIssueNode"

export async function findConnectedMagazineIssues(id: number) {
    const relations = await MagazineDataFacade.getConnectedMagazineIssueNodes(id)
    const magazineIssues: MagazineIssue[] = []

    for (const relation of relations) {
        magazineIssues.push(convertMagazineIssueNode(relation.partner_node))
    }

    return [...magazineIssues].sort((a, b) => (b.issue_year + '-' + b.issue_number + "").localeCompare(a.issue_year + '-' + a.issue_number + ""))
}
