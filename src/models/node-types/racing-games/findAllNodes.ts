import type {ModelSearchParams} from "../../types/ModelSearchParams"
import {RacingGameDataFacade} from "../../../data/RacingGameDataFacade"
import {RacingGame} from "./types/RacingGame"
import {convertRacingGameNode} from "./convertRacingGameNode"

const nodeLimit = 100

export async function findAllNodes(params?: ModelSearchParams) {
    const nodes = await RacingGameDataFacade.getNodeCollection(params)

    const racingGames: RacingGame[] = []

    nodes.forEach(node => {
        racingGames.push(convertRacingGameNode(node))
    })

    return racingGames.slice(0, nodeLimit)
}
