import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"
import {CanonicalUrlControllerFacade} from "../../../../src/controllers/CanonicalUrlControllerFacade"

afterEach(() => {
    vi.resetModules()
})

describe('Canonical URLs are not redirected', () => {
    test.each([
        ['/t-12345678'],
        ['/title-12345678'],
        ['/node-title-12345678'],
        ['/long-node-title-12345678'],
        ['/very-long-node-title-12345678'],
    ])('$0', async (path) => {
        vi.spyOn(CanonicalUrlControllerFacade, 'showNode')

        await supertestGet(path)

        expect(CanonicalUrlControllerFacade.showNode)
            .toHaveBeenCalledTimes(1)
    })
})
