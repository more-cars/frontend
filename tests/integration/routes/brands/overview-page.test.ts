import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayAllNodes} from "../../../../src/controllers/brands/displayAllNodes.ts"

jest.mock("../../../../src/controllers/brands/displayAllNodes.ts")

test('Brands: Overview Page', async () => {
    (displayAllNodes as jest.Mock).mockImplementation((req, res) => {
        res.send()
    })

    await request(app)
        .get('/brands')
        .send()

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
