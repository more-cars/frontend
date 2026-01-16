import express from "express"

export function determinePaginationPageNumber(req: express.Request) {
    const page = parseInt(req.query.page as string)

    if (!page || page < 1) {
        return 1
    }

    return page
}
