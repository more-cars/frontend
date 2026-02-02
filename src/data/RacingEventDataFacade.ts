import {getAllRacingEvents} from "./node-types/racing-events/getAllRacingEvents"
import {getRacingEventById} from "./node-types/racing-events/getRacingEventById"
import {getConnectedMainImage} from "./node-types/racing-events/getConnectedMainImage"
import {getConnectedRacingSeries} from "./node-types/racing-events/getConnectedRacingSeries"
import {getConnectedPredecessor} from "./node-types/racing-events/getConnectedPredecessor"
import {getConnectedSuccessor} from "./node-types/racing-events/getConnectedSuccessor"
import {getConnectedRaceTrack} from "./node-types/racing-events/getConnectedRaceTrack"
import {getConnectedTrackLayout} from "./node-types/racing-events/getConnectedTrackLayout"
import {getConnectedImages} from "./node-types/racing-events/getConnectedImages"

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

    async getConnectedRaceTrackNode(id: number) {
        return getConnectedRaceTrack(id)
    },

    async getConnectedTrackLayoutNode(id: number) {
        return getConnectedTrackLayout(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },
}
