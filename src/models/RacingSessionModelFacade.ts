import {findAllNodes} from "./node-types/racing-sessions/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/racing-sessions/findNodeById"
import type {RacingSession} from "./node-types/racing-sessions/types/RacingSession"
import {getNodeTitle} from "./node-types/racing-sessions/getNodeTitle"
import {getNodeSubTitle} from "./node-types/racing-sessions/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/racing-sessions/findConnectedMainImage"
import {findConnectedRacingEvent} from "./node-types/racing-sessions/findConnectedRacingEvent"
import {findConnectedImages} from "./node-types/racing-sessions/findConnectedImages"
import {findConnectedSessionResults} from "./node-types/racing-sessions/findConnectedSessionResults"
import {findConnectedVideos} from "./node-types/racing-sessions/findConnectedVideos"

export const RacingSessionModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.RACING_SESSION)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: RacingSession) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: RacingSession) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedRacingEvent(id: number) {
        return findConnectedRacingEvent(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedSessionResults(id: number) {
        return findConnectedSessionResults(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
