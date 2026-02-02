import {RacingEventDataFacade} from "../../../data/RacingEventDataFacade"
import {RacingEvent} from "./types/RacingEvent"
import {convertRacingEventNode} from "./convertRacingEventNode"

const nodeLimit = 100

export async function findAllNodes(params?: { page: number }) {
    const nodes = await RacingEventDataFacade.getNodeCollection(params)

    const racingEvents: RacingEvent[] = []

    nodes.forEach(node => {
        racingEvents.push(convertRacingEventNode(node))
    })

    return racingEvents.slice(0, nodeLimit)
}
