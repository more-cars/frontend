import express from "express"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {MagazineIssueModelFacade} from "../../../models/MagazineIssueModelFacade"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"
import {determineSearchParams} from "../../lib/determineSearchParams"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const searchParams = determineSearchParams(req)
    const magazineIssues = await MagazineIssueModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/magazine-issues/magazine-issue-overview-page', {
        page_title: 'All Magazine Issues',
        main_headline: 'All Magazine Issues',
        node_type: ControllerNodeType.MAGAZINE_ISSUE,
        node_collection: magazineIssues,
        thumbnails: await getNodeThumbnails(magazineIssues),
        node_properties: getNodeProperties(ControllerNodeType.MAGAZINE_ISSUE),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await MagazineIssueModelFacade.getTotalNodeCount(),
        },
    })
}
