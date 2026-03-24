import {findAllNodes} from "./node-types/car-model-variants/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/car-model-variants/findNodeById"
import type {CarModelVariant} from "./node-types/car-model-variants/types/CarModelVariant"
import {getNodeTitle} from "./node-types/car-model-variants/getNodeTitle"
import {getNodeSubTitle} from "./node-types/car-model-variants/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/car-model-variants/findConnectedMainImage"
import {findConnectedCarModel} from "./node-types/car-model-variants/findConnectedCarModel"
import {findConnectedMagazineIssues} from "./node-types/car-model-variants/findConnectedMagazineIssues"
import {findConnectedRatings} from "./node-types/car-model-variants/findConnectedRatings"
import {findConnectedPrices} from "./node-types/car-model-variants/findConnectedPrices"
import {findConnectedProgrammeEpisodes} from "./node-types/car-model-variants/findConnectedProgrammeEpisodes"
import {findConnectedLapTimes} from "./node-types/car-model-variants/findConnectedLapTimes"
import {findConnectedSessionResults} from "./node-types/car-model-variants/findConnectedSessionResults"
import {findConnectedRacingGames} from "./node-types/car-model-variants/findConnectedRacingGames"
import {findConnectedModelCars} from "./node-types/car-model-variants/findConnectedModelCars"
import {findConnectedMotorShows} from "./node-types/car-model-variants/findConnectedMotorShows"
import {findConnectedImages} from "./node-types/car-model-variants/findConnectedImages"

export const CarModelVariantModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.CAR_MODEL_VARIANT)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: CarModelVariant) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: CarModelVariant) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedCarModel(id: number) {
        return findConnectedCarModel(id)
    },

    async getConnectedMagazineIssues(id: number) {
        return findConnectedMagazineIssues(id)
    },

    async getConnectedRatings(id: number) {
        return findConnectedRatings(id)
    },

    async getConnectedPrices(id: number) {
        return findConnectedPrices(id)
    },

    async getConnectedProgrammeEpisodes(id: number) {
        return findConnectedProgrammeEpisodes(id)
    },

    async getConnectedLapTimes(id: number) {
        return findConnectedLapTimes(id)
    },

    async getConnectedSessionResults(id: number) {
        return findConnectedSessionResults(id)
    },

    async getConnectedModelCars(id: number) {
        return findConnectedModelCars(id)
    },

    async getConnectedRacingGames(id: number) {
        return findConnectedRacingGames(id)
    },

    async getConnectedMotorShows(id: number) {
        return findConnectedMotorShows(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },
}
