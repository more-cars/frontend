import {getAllRacingEvents} from "./node-types/racing-events/getAllRacingEvents"
import {getRacingEventById} from "./node-types/racing-events/getRacingEventById"

export const RacingEventDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingEvents(params)
    },

    async getNodeById(id: number) {
        return getRacingEventById(id)
    },
}
