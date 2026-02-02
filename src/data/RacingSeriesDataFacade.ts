import {getAllRacingSeries} from "./node-types/racing-series/getAllRacingSeries"
import {getRacingSeriesById} from "./node-types/racing-series/getRacingSeriesById"
import {getConnectedMainImage} from "./node-types/racing-series/getConnectedMainImage"
import {getConnectedImages} from "./node-types/racing-series/getConnectedImages"
import {getConnectedRacingEvents} from "./node-types/racing-series/getConnectedRacingEvents"

export const RacingSeriesDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingSeries(params)
    },

    async getNodeById(id: number) {
        return getRacingSeriesById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedRacingEventNodes(id: number) {
        return getConnectedRacingEvents(id)
    },
}
