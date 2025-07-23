import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayAllNodes} from "../../../../src/controllers/images/displayAllNodes.ts"

jest.mock("../../../../src/controllers/images/displayAllNodes.ts")

test('Images: Overview Page', async () => {
    (displayAllNodes as jest.Mock).mockImplementation((req, res) => {
        res.send()
    })

    await request(app)
        .get('/images')
        .send()

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
