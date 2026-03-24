import {RacingGameNode} from "../../../data/node-types/racing-games/types/RacingGameNode"
import {RacingGame} from "./types/RacingGame"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertRacingGameNode(dataNode: RacingGameNode) {
    const racingGame: RacingGame = {
        type: ModelNodeType.RACING_GAME,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            release_year: dataNode.data.release_year || null,
            developer: dataNode.data.developer || null,
            publisher: dataNode.data.publisher || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return racingGame
}
