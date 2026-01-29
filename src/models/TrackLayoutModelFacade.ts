import {findAllNodes} from "./node-types/track-layouts/findAllNodes"
import {findNodeById} from "./node-types/track-layouts/findNodeById"
import {findConnectedMainImage} from "./node-types/track-layouts/findConnectedMainImage"
import {findConnectedImages} from "./node-types/track-layouts/findConnectedImages"
import {findConnectedRaceTrack} from "./node-types/track-layouts/findConnectedRaceTrack"

export const TrackLayoutModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return await findConnectedMainImage(id)
    },

    async getConnectedImages(id: number) {
        return await findConnectedImages(id)
    },

    async getConnectedRaceTrack(id: number) {
        return await findConnectedRaceTrack(id)
    },
}
