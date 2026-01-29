import {getAllRacingSeries} from "./node-types/racing-series/getAllRacingSeries"

export const RacingSeriesDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingSeries(params)
    },
}
