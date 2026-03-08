import {findAllNodes} from "./node-types/racing-events/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/racing-events/findNodeById"
import {findConnectedMainImage} from "./node-types/racing-events/findConnectedMainImage"
import {findConnectedRacingSeries} from "./node-types/racing-events/findConnectedRacingSeries"
import {findConnectedPredecessor} from "./node-types/racing-events/findConnectedPredecessor"
import {findConnectedSuccessor} from "./node-types/racing-events/findConnectedSuccessor"
import {findConnectedRaceTrack} from "./node-types/racing-events/findConnectedRaceTrack"
import {findConnectedTrackLayout} from "./node-types/racing-events/findConnectedTrackLayout"
import {findConnectedImages} from "./node-types/racing-events/findConnectedImages"
import {findConnectedRacingSessions} from "./node-types/racing-events/findConnectedRacingSessions"

export const RacingEventModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.RACING_EVENT)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedRacingSeries(id: number) {
        return findConnectedRacingSeries(id)
    },

    async getConnectedPredecessor(id: number) {
        return findConnectedPredecessor(id)
    },

    async getConnectedSuccessor(id: number) {
        return findConnectedSuccessor(id)
    },

    async getConnectedRaceTrack(id: number) {
        return findConnectedRaceTrack(id)
    },

    async getConnectedTrackLayout(id: number) {
        return findConnectedTrackLayout(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedRacingSessions(id: number) {
        return findConnectedRacingSessions(id)
    },
}
