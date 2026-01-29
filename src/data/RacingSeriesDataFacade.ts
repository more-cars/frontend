import {getAllRacingSeries} from "./node-types/racing-series/getAllRacingSeries"
import {getRacingSeriesById} from "./node-types/racing-series/getRacingSeriesById"

export const RacingSeriesDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingSeries(params)
    },

    async getNodeById(id: number) {
        return getRacingSeriesById(id)
    },
}
