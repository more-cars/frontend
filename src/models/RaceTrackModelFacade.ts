import {findAllNodes} from "./node-types/race-tracks/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/race-tracks/findNodeById"
import type {RaceTrack} from "./node-types/race-tracks/types/RaceTrack"
import {getNodeTitle} from "./node-types/race-tracks/getNodeTitle"
import {getNodeSubTitle} from "./node-types/race-tracks/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/race-tracks/findConnectedMainImage"
import {findConnectedImages} from "./node-types/race-tracks/findConnectedImages"
import {findConnectedTrackLayouts} from "./node-types/race-tracks/findConnectedTrackLayouts"
import {findConnectedRacingEvents} from "./node-types/race-tracks/findConnectedRacingEvents"
import {findConnectedVideos} from "./node-types/race-tracks/findConnectedVideos"

export const RaceTrackModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.RACE_TRACK)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: RaceTrack) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: RaceTrack) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedTrackLayouts(id: number) {
        return findConnectedTrackLayouts(id)
    },

    async getConnectedRacingEvents(id: number) {
        return findConnectedRacingEvents(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
