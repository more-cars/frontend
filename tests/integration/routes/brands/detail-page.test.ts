import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayNode} from "../../../../src/controllers/brands/displayNode.ts"

jest.mock("../../../../src/controllers/brands/displayNode.ts")

test('Brands: Detail Page', async () => {
    (displayNode as jest.Mock).mockImplementation((req, res) => {
        res.send()
    })

    await request(app)
        .get('/brands/999')
        .send()

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
