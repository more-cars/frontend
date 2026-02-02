import {getAllRacingEvents} from "./node-types/racing-events/getAllRacingEvents"
import {getRacingEventById} from "./node-types/racing-events/getRacingEventById"
import {getConnectedMainImage} from "./node-types/racing-events/getConnectedMainImage"
import {getConnectedRacingSeries} from "./node-types/racing-events/getConnectedRacingSeries"
import {getConnectedPredecessor} from "./node-types/racing-events/getConnectedPredecessor"
import {getConnectedSuccessor} from "./node-types/racing-events/getConnectedSuccessor"

export const RacingEventDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllRacingEvents(params)
    },

    async getNodeById(id: number) {
        return getRacingEventById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedRacingSeriesNode(id: number) {
        return getConnectedRacingSeries(id)
    },

    async getConnectedPredecessorNode(id: number) {
        return getConnectedPredecessor(id)
    },

    async getConnectedSuccessorNode(id: number) {
        return getConnectedSuccessor(id)
    },
}
