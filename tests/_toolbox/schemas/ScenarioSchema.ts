export const ScenarioSchema = {
    type: "object",
    properties: {
        id: {type: "string"},
        title: {type: "string"},
        type: {type: "string"},
        gherkin: {type: "string"},
        tags: {
            type: "array",
            items: {
                type: "string",
            },
        },
    },
    required: [
        "id",
        "title",
        "type",
        "gherkin",
        "tags",
    ],
    additionalProperties: false,
}
