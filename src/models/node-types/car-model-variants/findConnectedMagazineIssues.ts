import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {MagazineIssue} from "../magazine-issues/types/MagazineIssue"
import {convertMagazineIssueNode} from "../magazine-issues/convertMagazineIssueNode"

export async function findConnectedMagazineIssues(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedMagazineIssueNodes(id)
    const magazineIssues: MagazineIssue[] = []

    for (const relation of relations) {
        magazineIssues.push(convertMagazineIssueNode(relation.partner_node))
    }

    return [...magazineIssues].sort((a, b) => (a.title + "").localeCompare(b.title + ""))
}
