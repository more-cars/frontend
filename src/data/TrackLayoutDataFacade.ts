import {getAllTrackLayouts} from "./node-types/track-layouts/getAllTrackLayouts"
import {getTrackLayoutById} from "./node-types/track-layouts/getTrackLayoutById"
import {getConnectedMainImage} from "./node-types/track-layouts/getConnectedMainImage"
import {getConnectedImages} from "./node-types/track-layouts/getConnectedImages"
import {getConnectedRaceTrack} from "./node-types/track-layouts/getConnectedRaceTrack"
import {getConnectedRacingEvents} from "./node-types/track-layouts/getConnectedRacingEvents"

export const TrackLayoutDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllTrackLayouts(params)
    },

    async getNodeById(id: number) {
        return getTrackLayoutById(id)
    },

    async getConnectedMainImageNode(id: number) {
        return getConnectedMainImage(id)
    },

    async getConnectedImageNodes(id: number) {
        return getConnectedImages(id)
    },

    async getConnectedRaceTrackNode(id: number) {
        return getConnectedRaceTrack(id)
    },

    async getConnectedRacingEventNodes(id: number) {
        return getConnectedRacingEvents(id)
    },
}
