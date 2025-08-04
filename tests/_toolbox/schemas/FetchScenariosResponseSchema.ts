export const FetchScenariosResponseSchema = {
    type: "object",
    properties: {
        getTests: {
            type: "object",
            properties: {
                total: {type: "integer"},
                results: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            issueId: {type: "string"},
                            scenarioType: {type: "string"},
                            gherkin: {type: "string"},
                            jira: {
                                type: "object",
                                properties: {
                                    key: {type: "string"},
                                    summary: {type: "string"},
                                    issuelinks: {type: "array"},
                                    labels: {type: "array"},
                                },
                                required: [
                                    "key",
                                    "summary",
                                    "issuelinks",
                                    "labels",
                                ],
                                additionalProperties: false,
                            },
                        },
                        required: [
                            "issueId",
                            "scenarioType",
                            "gherkin",
                            "jira",
                        ],
                        additionalProperties: false,
                    },
                },
            },
            required: [
                "total",
                "results",
            ],
            additionalProperties: false,
        },
    },
    required: [
        "getTests",
    ],
    additionalProperties: false,
}
