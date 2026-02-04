import {SessionResultDataFacade} from "../../../data/SessionResultDataFacade"
import {SessionResult} from "./types/SessionResult"
import {convertSessionResultNode} from "./convertSessionResultNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await SessionResultDataFacade.getNodeCollection(params)

    const sessionResults: SessionResult[] = []

    nodes.forEach(node => {
        sessionResults.push(convertSessionResultNode(node))
    })

    return sessionResults.slice(0, nodeLimit)
}
