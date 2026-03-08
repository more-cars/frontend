import {getAllRacingGames} from "./node-types/racing-games/getAllRacingGames"

export const RacingGameDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingGames(params)
    },
}
