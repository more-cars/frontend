import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {CompanyModelFacade} from "../../../models/CompanyModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const companies = await CompanyModelFacade.getAllNodes({page})

    res.render('templates/node-types/companies/company-overview-page', {
        page_title: 'All Companies',
        main_headline: 'All Companies',
        node_type: ControllerNodeType.COMPANY,
        node_collection: companies,
        node_titles: getAllNodeTitles(companies, CompanyModelFacade.getNodeTitle),
        thumbnails: await getNodeThumbnails(companies),
        node_properties: getNodeProperties(DataNodeType.COMPANY),
        pagination: {
            page,
            total: await CompanyModelFacade.getTotalNodeCount(),
        },
    })
}


