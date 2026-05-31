import express from "express"
import {BookModelFacade} from "../../../models/BookModelFacade"
import {getNodeProperties} from "../../../specification/getNodeProperties"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {sendResponse200} from "../../responses/sendResponse200"
import {sendResponse404} from "../../responses/sendResponse404"

export async function displayNode(req: express.Request, res: express.Response) {
    const bookId = parseInt(req.params.id)
    const book = await BookModelFacade.getNodeById(bookId)

    if (!book) {
        return sendResponse404(res)
    }

    res.render('templates/node-types/books/book-detail-page', {
        page_title: `${book.fields.title} - Book`,
        node: {
            data: book,
            title: BookModelFacade.getNodeTitle(book),
            sub_title: BookModelFacade.getNodeSubTitle(book),
            node_properties: getNodeProperties(ControllerNodeType.BOOK),
            main_image: await BookModelFacade.getConnectedMainImage(bookId),
        },
        relationships: {},
    }, (_, html) => {
        sendResponse200(html, res)
    })
}
