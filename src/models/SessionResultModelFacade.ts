import {findAllNodes} from "./node-types/session-results/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/session-results/findNodeById"
import type {SessionResult} from "./node-types/session-results/types/SessionResult"
import {getNodeTitle} from "./node-types/session-results/getNodeTitle"
import {findConnectedMainImage} from "./node-types/session-results/findConnectedMainImage"
import {findConnectedRacingSession} from "./node-types/session-results/findConnectedRacingSession"
import {findConnectedImages} from "./node-types/session-results/findConnectedImages"
import {findConnectedLapTimes} from "./node-types/session-results/findConnectedLapTimes"
import {findConnectedCarModelVariant} from "./node-types/session-results/findConnectedCarModelVariant"

export const SessionResultModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.SESSION_RESULT)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: SessionResult) {
        return getNodeTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedRacingSession(id: number) {
        return findConnectedRacingSession(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedLapTimes(id: number) {
        return findConnectedLapTimes(id)
    },

    async getConnectedCarModelVariant(id: number) {
        return findConnectedCarModelVariant(id)
    },
}
