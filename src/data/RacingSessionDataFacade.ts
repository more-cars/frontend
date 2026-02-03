import {getAllRacingSessions} from "./node-types/racing-sessions/getAllRacingSessions"

export const RacingSessionDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingSessions(params)
    },
}
