export const FetchEpicsResponseSchema = {
    type: "array",
    items: {
        type: "object",
        properties: {
            key: {type: "string"},
            fields: {
                type: "object",
                properties: {
                    summary: {type: "string"},
                    description: {type: ["string", "null"]},
                    updated: {type: "string"},
                    created: {type: "string"},
                },
                required: [
                    "summary",
                    "description",
                    "updated",
                    "created",
                ],
                additionalProperties: false,
            },
        },
        required: [
            "key",
            "fields",
        ],
        additionalProperties: true,
    },
}
