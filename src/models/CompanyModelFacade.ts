import {findAllNodes} from "./node-types/companies/findAllNodes"
import {getTotalNodeCount} from "../data/nodes/getTotalNodeCount"
import {DataNodeType} from "../data/types/DataNodeType"
import {findNodeById} from "./node-types/companies/findNodeById"
import {findConnectedMainImage} from "./node-types/companies/findConnectedMainImage"
import {findConnectedBrands} from "./node-types/companies/findConnectedBrands"
import {findConnectedImages} from "./node-types/companies/findConnectedImages"

export const CompanyModelFacade = {
    async getAllNodes(params: { page: number }) {
        return findAllNodes(params)
    },

    async getTotalNodeCount() {
        return getTotalNodeCount(DataNodeType.COMPANY)
    },

    async getNodeById(id: number) {
        return findNodeById(id)
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
}
