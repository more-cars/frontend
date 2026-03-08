import {getAllRacingGames} from "./node-types/racing-games/getAllRacingGames"
import {getRacingGameById} from "./node-types/racing-games/getRacingGameById"

export const RacingGameDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingGames(params)
    },

    async getNodeById(id: number) {
        return getRacingGameById(id)
    },
}
