import {getAllRacingSessions} from "./node-types/racing-sessions/getAllRacingSessions"
import {getRacingSessionById} from "./node-types/racing-sessions/getRacingSessionById"
import {getConnectedMainImage} from "./node-types/racing-sessions/getConnectedMainImage"

export const RacingSessionDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingSessions(params)
    },

    async getNodeById(id: number) {
        return getRacingSessionById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },
}
