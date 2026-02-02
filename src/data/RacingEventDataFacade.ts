import {getAllRacingEvents} from "./node-types/racing-events/getAllRacingEvents"

export const RacingEventDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingEvents(params)
    },
}
