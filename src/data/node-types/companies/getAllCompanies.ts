import {requestDataFromApi} from "../../requestDataFromApi"
import type {ApiCompanyNode} from "./types/ApiCompanyNode"
import type {CompanyNode} from "./types/CompanyNode"

export async function getAllCompanies(params: { page: number }) {
    const apiData = (await requestDataFromApi('/companies?sort_by_property=name&page=' + params.page)).data as ApiCompanyNode[]
    const data: CompanyNode[] = []

    apiData.forEach(apiItem => {
        data.push(apiItem.data)
    })

    return data
}
