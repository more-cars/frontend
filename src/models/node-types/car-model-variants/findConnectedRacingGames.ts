import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {RacingGame} from "../racing-games/types/RacingGame"
import {convertRacingGameNode} from "../racing-games/convertRacingGameNode"

export async function findConnectedRacingGames(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedRacingGameNodes(id)
    const racingGames: RacingGame[] = []

    for (const relation of relations) {
        racingGames.push(convertRacingGameNode(relation.partner_node))
    }

    return [...racingGames].sort((a, b) => (a.fields.name + "").localeCompare(b.fields.name + ""))
}
