import {RacingSessionDataFacade} from "../../../data/RacingSessionDataFacade"
import {RacingSession} from "./types/RacingSession"
import {convertRacingSessionNode} from "./convertRacingSessionNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await RacingSessionDataFacade.getNodeCollection(params)

    const racingSessions: RacingSession[] = []

    nodes.forEach(node => {
        racingSessions.push(convertRacingSessionNode(node))
    })

    return racingSessions.slice(0, nodeLimit)
}
