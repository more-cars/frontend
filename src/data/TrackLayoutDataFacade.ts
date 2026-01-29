import {getAllTrackLayouts} from "./node-types/track-layouts/getAllTrackLayouts"
import {getTrackLayoutById} from "./node-types/track-layouts/getTrackLayoutById"
import {getConnectedMainImage} from "./node-types/track-layouts/getConnectedMainImage"

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
}
