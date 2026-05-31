import express from "express"
import {determineSearchParams} from "../../lib/determineSearchParams"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {BookModelFacade} from "../../../models/BookModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {sendResponse200} from "../../responses/sendResponse200"
import {sendResponse400} from "../../responses/sendResponse400"

export async function displayAllNodes(req: express.Request, res: express.Response) {
    let searchParams
    try {
        searchParams = determineSearchParams(req, ControllerNodeType.BOOK)
    } catch (error) {
        console.error(error)
        return sendResponse400(res)
    }

    const books = await BookModelFacade.getAllNodes(searchParams)

    res.render('templates/node-types/books/book-overview-page', {
        page_title: 'All Books',
        main_headline: 'All Books',
        node_type: ControllerNodeType.BOOK,
        node_collection: books,
        node_properties: getNodeProperties(ControllerNodeType.BOOK),
        search_data: {
            page: searchParams.page,
            sort_by_property: searchParams.sortByProperty,
            sort_direction: searchParams.sortDirection,
            total: await BookModelFacade.getTotalNodeCount(),
        },
    }, (_, html) => {
        sendResponse200(html, res)
    })
}
