import {RacingGameNode} from "../../../data/node-types/racing-games/types/RacingGameNode"
import {RacingGame} from "./types/RacingGame"

export function convertRacingGameNode(dataNode: RacingGameNode) {
    const racingGame: RacingGame = {
        id: dataNode.id,
        name: dataNode.name,
        release_year: dataNode.release_year || null,
        developer: dataNode.developer || null,
        publisher: dataNode.publisher || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return racingGame
}
