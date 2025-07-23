import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayNode} from "../../../../src/controllers/car-models/displayNode.ts"

jest.mock("../../../../src/controllers/car-models/displayNode.ts")

test('Car Models: Detail Page', async () => {
    (displayNode as jest.Mock).mockImplementation((req, res) => {
        res.send()
    })

    await request(app)
        .get('/car-models/999')
        .send()

    expect(displayNode)
        .toHaveBeenCalledTimes(1)
})
