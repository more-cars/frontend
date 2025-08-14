export const ScenarioSchema = {
    type: "object",
    properties: {
        id: {type: "string"},
        title: {type: "string"},
        type: {type: "string"},
        gherkinSteps: {
            type: "array",
            items: {
                type: "string",
            },
        },
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
        "gherkinSteps",
        "tags",
    ],
    additionalProperties: false,
}
