import {findAllNodes} from "./node-types/track-layouts/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/track-layouts/findNodeById"
import {findConnectedMainImage} from "./node-types/track-layouts/findConnectedMainImage"
import {findConnectedImages} from "./node-types/track-layouts/findConnectedImages"
import {findConnectedRaceTrack} from "./node-types/track-layouts/findConnectedRaceTrack"
import {findConnectedRacingEvents} from "./node-types/track-layouts/findConnectedRacingEvents"

export const TrackLayoutModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.TRACK_LAYOUT)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedRaceTrack(id: number) {
        return findConnectedRaceTrack(id)
    },

    async getConnectedRacingEvents(id: number) {
        return findConnectedRacingEvents(id)
    },
}
