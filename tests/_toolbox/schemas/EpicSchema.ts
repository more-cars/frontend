export const EpicSchema = {
    type: "object",
    properties: {
        id: {type: "string"},
        title: {type: "string"},
        description: {type: ["string", "null"]},
        updated_at: {type: "string"},
        created_at: {type: "string"},
    },
    required: [
        "id",
        "title",
        "description",
        "updated_at",
        "created_at",
    ],
    additionalProperties: false,
}
