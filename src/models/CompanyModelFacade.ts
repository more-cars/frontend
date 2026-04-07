import type {ModelSearchParams} from "./types/ModelSearchParams"
import {findAllNodes} from "./node-types/companies/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/companies/findNodeById"
import type {Company} from "./node-types/companies/types/Company"
import {getNodeTitle} from "./node-types/companies/getNodeTitle"
import {getNodeSubTitle} from "./node-types/companies/getNodeSubTitle"
import {findConnectedMainImage} from "./node-types/companies/findConnectedMainImage"
import {findConnectedBrands} from "./node-types/companies/findConnectedBrands"
import {findConnectedImages} from "./node-types/companies/findConnectedImages"
import {findConnectedVideos} from "./node-types/companies/findConnectedVideos"

export const CompanyModelFacade = {
    async getAllNodes(params?: ModelSearchParams) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.COMPANY)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
    },

    getNodeTitle(node: Company) {
        return getNodeTitle(node)
    },

    getNodeSubTitle(node: Company) {
        return getNodeSubTitle(node)
    },

    async getConnectedMainImage(id: number) {
        return findConnectedMainImage(id)
    },

    async getConnectedBrands(id: number) {
        return findConnectedBrands(id)
    },

    async getConnectedImages(id: number) {
        return findConnectedImages(id)
    },

    async getConnectedVideos(id: number) {
        return findConnectedVideos(id)
    },
}
