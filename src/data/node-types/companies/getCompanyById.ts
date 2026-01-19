import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCompanyNode} from "./types/ApiCompanyNode"
import type {CompanyNode} from "./types/CompanyNode"

export async function getCompanyById(id: number) {
    const apiData = (await requestDataFromApi(`/companies/${id}`)) as ApiCompanyNode

    if (!apiData) {
        return null
    }

    return apiData.data as CompanyNode
}
