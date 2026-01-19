---
inject: true
to: tests/developer/routes/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>.test.ts
before: \}\)\n\}\)
skip_if: Show Node Detail Page
---
    })

    test('Show Node Detail Page', async () => {
        vi.mock("../../../../src/controllers/node-types/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/displayNode", () => ({
            displayNode: vi.fn((req, res) => res.status(200).end())
        }))

        await supertestGet('/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>/999')

        expect(displayNode)
            .toHaveBeenCalledTimes(1)