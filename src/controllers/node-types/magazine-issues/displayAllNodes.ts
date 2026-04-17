import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {MagazineIssueModelFacade} from "../../../models/MagazineIssueModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeThumbnails} from "../../lib/getNodeThumbnails"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const magazineIssues = await MagazineIssueModelFacade.getAllNodes({page})

    res.render('templates/node-types/magazine-issues/magazine-issue-overview-page', {
        page_title: 'All Magazine Issues',
        main_headline: 'All Magazine Issues',
        node_type: ControllerNodeType.MAGAZINE_ISSUE,
        node_collection: magazineIssues,
        thumbnails: await getNodeThumbnails(magazineIssues),
        node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
        pagination: {
            page,
            total: await MagazineIssueModelFacade.getTotalNodeCount(),
        },
    })
}
