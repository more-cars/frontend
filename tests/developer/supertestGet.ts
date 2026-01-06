import request from 'supertest'

export async function supertestGet(path: string) {
    const {app} = await import("../../src/app")

    return await request(app)
        .get(path)
}
