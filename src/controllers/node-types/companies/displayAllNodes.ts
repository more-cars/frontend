import express from "express"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const companies = await CompanyModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/companies/company-overview-page', {
        page_title: 'All Companies',
        main_headline: 'All Companies',
        node_type: ControllerNodeType.COMPANY,
        node_collection: companies,
        thumbnails: await getNodeThumbnails(companies),
        node_properties: getNodeProperties(ControllerNodeType.COMPANY),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await CompanyModelFacade.getTotalNodeCount(),
        },
    })
}


