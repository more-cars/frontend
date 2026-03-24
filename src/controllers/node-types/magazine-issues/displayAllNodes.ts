import express from "express"
import {determinePaginationPageNumber} from "../../lib/determinePaginationPageNumber"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {MagazineIssueModelFacade} from "../../../models/MagazineIssueModelFacade"
import {getMagazineIssueThumbnails} from "./getMagazineIssueThumbnails"
import {getAllNodeTitles} from "../../lib/getAllNodeTitles"
import {ControllerNodeType} from "../../types/ControllerNodeType"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    const page = determinePaginationPageNumber(req)
    const magazineIssues = await MagazineIssueModelFacade.getAllNodes({page})

    res.render('templates/node-types/magazine-issues/magazine-issue-overview-page', {
        page_title: 'All Magazine Issues',
        main_headline: 'All Magazine Issues',
        node_type: ControllerNodeType.MAGAZINE_ISSUE,
        node_collection: magazineIssues,
        node_titles: getAllNodeTitles(magazineIssues, MagazineIssueModelFacade.getNodeTitle),
        thumbnails: await getMagazineIssueThumbnails(magazineIssues),
        node_properties: getNodeProperties(DataNodeType.MAGAZINE_ISSUE),
        pagination: {
            page,
            total: await MagazineIssueModelFacade.getTotalNodeCount(),
        },
    })
}
