import {getAllMagazineIssues} from "./node-types/magazine-issues/getAllMagazineIssues"

export const MagazineIssueDataFacade = {
    async getNodeCollection(params?: { page: number }) {
        return getAllMagazineIssues(params)
    },
}
