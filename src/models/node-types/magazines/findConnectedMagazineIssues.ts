import {MagazineDataFacade} from "../../../data/MagazineDataFacade"
import {MagazineIssue} from "../magazine-issues/types/MagazineIssue"
import {convertMagazineIssueNode} from "../magazine-issues/convertMagazineIssueNode"

export async function findConnectedMagazineIssues(id: number) {
    const relations = await MagazineDataFacade.getConnectedMagazineIssueNodes(id)
    const magazineIssues: MagazineIssue[] = []

    for (const relation of relations) {
        magazineIssues.push(convertMagazineIssueNode(relation.partner_node))
    }

    return [...magazineIssues].sort((a, b) => (b.fields.issue_year + '-' + b.fields.issue_number + "").localeCompare(a.fields.issue_year + '-' + a.fields.issue_number + ""))
}
