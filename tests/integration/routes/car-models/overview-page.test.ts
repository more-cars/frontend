import request from 'supertest'
import {app} from "../../../../src/app.ts"
import {displayAllNodes} from "../../../../src/controllers/car-models/displayAllNodes.ts"

jest.mock("../../../../src/controllers/car-models/displayAllNodes.ts")

test('Car Models: Overview Page', async () => {
    (displayAllNodes as jest.Mock).mockImplementation((req, res) => {
        res.send()
    })

    await request(app)
        .get('/car-models')
        .send()

    expect(displayAllNodes)
        .toHaveBeenCalledTimes(1)
})
