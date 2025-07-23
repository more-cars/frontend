import request from 'supertest'
import {app} from "../../../../../src/app.ts"
import {Brand} from "../../../../../src/models/Brand.ts"

test('Brands - Detail Page - Node found', async () => {
    Brand.findById = jest.fn().mockReturnValue({
        id: 12345,
        name: "dummy",
        full_name: "dummy",
        founded: 1234,
        defunct: 1234,
        wmi: "dummy",
        hsn: "dummy",
        created_at: "dummy",
        updated_at: "dummy",
    })
    Brand.findConnectedCarModels = jest.fn().mockReturnValue([])
    Brand.findConnectedImages = jest.fn().mockReturnValue([])

    const response = await request(app)
        .get('/brands/12345')
        .send()

    expect(response.statusCode)
        .toBe(200)
})
