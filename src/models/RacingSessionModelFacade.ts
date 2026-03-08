import {findAllNodes} from "./node-types/racing-sessions/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/racing-sessions/findNodeById"
import {findConnectedMainImage} from "./node-types/racing-sessions/findConnectedMainImage"
import {findConnectedRacingEvent} from "./node-types/racing-sessions/findConnectedRacingEvent"
import {findConnectedImages} from "./node-types/racing-sessions/findConnectedImages"
import {findConnectedSessionResults} from "./node-types/racing-sessions/findConnectedSessionResults"

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
}
