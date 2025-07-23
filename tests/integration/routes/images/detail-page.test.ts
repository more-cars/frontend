import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayNode} from "../../../../src/controllers/images/displayNode.ts"

jest.mock("../../../../src/controllers/images/displayNode.ts")

test('Images: Detail Page', async () => {
    (displayNode as jest.Mock).mockImplementation((req, res) => {
        res.send()
    })

    await request(app)
        .get('/images/999')
        .send()

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
