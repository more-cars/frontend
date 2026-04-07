import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {MagazineIssue} from "./types/MagazineIssue"
import {convertMagazineIssueNode} from "./convertMagazineIssueNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await MagazineIssueDataFacade.getNodeCollection(params)

    const magazineIssues: MagazineIssue[] = []

    nodes.forEach(node => {
        magazineIssues.push(convertMagazineIssueNode(node))
    })

    return magazineIssues.slice(0, nodeLimit)
}
