import {findAllNodes} from "./node-types/track-layouts/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/track-layouts/findNodeById"
import type {TrackLayout} from "./node-types/track-layouts/types/TrackLayout"
import {getNodeTitle} from "./node-types/track-layouts/getNodeTitle"
import {getNodeSubTitle} from "./node-types/track-layouts/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/track-layouts/findConnectedMainImage"
import {findConnectedRaceTrack} from "./node-types/track-layouts/findConnectedRaceTrack"
import {findConnectedRacingEvents} from "./node-types/track-layouts/findConnectedRacingEvents"
import {findConnectedRacingGames} from "./node-types/track-layouts/findConnectedRacingGames"
import {findConnectedImages} from "./node-types/track-layouts/findConnectedImages"
import {findConnectedVideos} from "./node-types/track-layouts/findConnectedVideos"

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

    getNodeTitle(node: TrackLayout) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: TrackLayout) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedRaceTrack(id: number) {
        return findConnectedRaceTrack(id)
    },

    async getConnectedRacingEvents(id: number) {
        return findConnectedRacingEvents(id)
    },

    async getConnectedRacingGames(id: number) {
        return findConnectedRacingGames(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
