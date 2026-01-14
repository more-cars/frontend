---
to: tests/developer/routes/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>.test.ts
---
import {describe, expect, test, vi} from "vitest"
import {displayAllNodes} from "../../../../src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes"
import {supertestGet} from "../../supertestGet"

describe('<%= h.changeCase.title(h.inflection.pluralize(nodeType)) %>', () => {
    test('Show Node Overview Page', async () => {
        vi.mock("../../../../src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayAllNodes", () => ({
            displayAllNodes: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>')

        expect(displayAllNodes)
            .toHaveBeenCalledTimes(1)
    })
})
