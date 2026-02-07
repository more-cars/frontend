import {getApiRequestUrl} from "../../lib/getApiRequestUrl"
import {DataNodeType} from "../../types/DataNodeType"
import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCompanyNode} from "./types/ApiCompanyNode"
import type {CompanyNode} from "./types/CompanyNode"

export async function getAllCompanies(params?: { page: number }) {
    const url = getApiRequestUrl(DataNodeType.COMPANY, params)
    const apiData: ApiCompanyNode[] = (await requestDataFromApi(url))?.data || []
    const data: CompanyNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
