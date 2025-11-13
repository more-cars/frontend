---
to: ticket-generator/_temp/ticketTree.json
---
{
    "epic": {
        "jiraId": "<%= h.changeCase.upper(h.changeCase.kebab(epicId)) %>",
        "dataStructure": null,
        "stories": [{
            "title": "<%= h.changeCase.upper(nodeType) %> overview page - Essentials",
            "userStory": "As a visitor\nI want to see a list of all <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>\nSo I can get a general idea of the different types that exist\nAnd by scrolling through them find interesting ones",
            "specificationList": [
                "The overview page displays a subset of all <%= h.changeCase.upper(nodeType) %> nodes. → Status Code `200`",
                "When there exist more than 100 <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %> then only the first 100 are displayed.",
                "The <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %> are sorted `ascending` by their `name`.",
                "Each node is presented with its primary information.",
                "Each node contains a thumbnail image.",
                "Each node links to the respective <%= h.changeCase.upper(nodeType) %> detail page.",
                "An error message is shown when there exist no <%= h.changeCase.upper(nodeType) %> nodes (edge case, mainly relevant for testing purposes). → Status Code `200`"
            ],
            "apiPath": "/<%= h.changeCase.kebab(h.inflection.pluralize(nodeType)) %>",
            "responseOptions": [
                "200"
            ],
            "acceptanceCriteria": [
                {
                    "title": "The overview page displays a list of <%= h.changeCase.upper(nodeType) %> nodes",
                    "description": "",
                    "responseCode": "200",
                    "tests": [
                        {
                            "title": "Expecting a list of <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %> to be displayed on the <%= h.changeCase.upper(nodeType) %> overview page",
                            <%
                                gherkin = []
                                gherkin.push('Given there exist \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                                gherkin.push('When the user visits the \\"' + h.changeCase.upper(nodeType) + '\\" overview page')
                                gherkin.push('Then the page should display a \\"' + h.changeCase.upper(nodeType) + '\\" node collection')
                            %>
                            "gherkin": "<%- gherkin.join('\\n') %>"
                        }
                    ]
                }, {
                    "title": "A warning is displayed when there are no <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %> to display",
                    "description": "",
                    "responseCode": "200",
                    "tests": [
                        {
                            "title": "Expecting a warning message when there exist no <%= h.changeCase.upper(nodeType) %> nodes",
                            <%
                                gherkin = []
                                gherkin.push('Given there exist no \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                                gherkin.push('When the user visits the \\"' + h.changeCase.upper(nodeType) + '\\" overview page')
                                gherkin.push('Then the page should display no \\"' + h.changeCase.upper(nodeType) + '\\" node collection')
                                gherkin.push('And a message should inform the user that there are no \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                            %>
                            "gherkin": "<%- gherkin.join('\\n') %>"
                        }
                    ]
                }, {
                    "title": "The overview page displays a list of at most 100 <%= h.changeCase.upper(h.inflection.pluralize(nodeType)) %>",
                    "description": "",
                    "responseCode": "200",
                    "tests": [
                        {
                            "title": "Having more than 100 <%= h.changeCase.upper(nodeType) %> nodes",
                            <%
                                gherkin = []
                                gherkin.push('Given there exist more than 100 \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                                gherkin.push('When the user visits the \\"' + h.changeCase.upper(nodeType) + '\\" overview page')
                                gherkin.push('Then the page should display a \\"' + h.changeCase.upper(nodeType) + '\\" node collection with 100 nodes')
                            %>
                            "gherkin": "<%- gherkin.join('\\n') %>"
                        }
                    ]
                }, {
                    "title": "The <%= h.changeCase.upper(nodeType) %> list is sorted by name, ascending",
                    "description": "",
                    "responseCode": "200",
                    "tests": [
                        {
                            "title": "Expecting a sorted <%= h.changeCase.upper(nodeType) %> list when visiting the overview page",
                            <%
                                gherkin = []
                                gherkin.push('Given there exist \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                                gherkin.push('When the user visits the \\"' + h.changeCase.upper(nodeType) + '\\" overview page')
                                gherkin.push('Then the items in the \\"' + h.changeCase.upper(nodeType) + '\\" node collection should be sorted by \\"name\\" in \\"ascending\\" order')
                            %>
                            "gherkin": "<%- gherkin.join('\\n') %>"
                        }
                    ]
                }, {
                    "title": "Each <%= h.changeCase.upper(nodeType) %> list item contains the primary information",
                    "description": "",
                    "responseCode": "200",
                    "tests": [
                        {
                            "title": "Expecting primary information for each <%= h.changeCase.upper(nodeType) %> node in the list",
                            <%
                                gherkin = []
                                gherkin.push('Given there exist \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                                gherkin.push('When the user visits the \\"' + h.changeCase.upper(nodeType) + '\\" overview page')
                                gherkin.push('Then each item in the \\"' + h.changeCase.upper(nodeType) + '\\" node collection should contain primary information')
                            %>
                            "gherkin": "<%- gherkin.join('\\n') %>"
                        }
                    ]
                }, {
                    "title": "Each <%= h.changeCase.upper(nodeType) %> list item contains a thumbnail image",
                    "description": "",
                    "responseCode": "200",
                    "tests": [
                        {
                            "title": "Expecting a thumbnail image for each <%= h.changeCase.upper(nodeType) %> node in the list",
                            <%
                                gherkin = []
                                gherkin.push('Given there exist \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                                gherkin.push('When the user visits the \\"' + h.changeCase.upper(nodeType) + '\\" overview page')
                                gherkin.push('Then each item in the \\"' + h.changeCase.upper(nodeType) + '\\" node collection should contain a thumbnail image')
                            %>
                            "gherkin": "<%- gherkin.join('\\n') %>"
                        }
                    ]
                }, {
                    "title": "Each <%= h.changeCase.upper(nodeType) %> list item links to the respective <%= h.changeCase.upper(nodeType) %> detail page",
                    "description": "",
                    "responseCode": "200",
                    "tests": [
                        {
                            "title": "Expecting a link to the detail page for each <%= h.changeCase.upper(nodeType) %> node in the list",
                            <%
                                gherkin = []
                                gherkin.push('Given there exist \\"' + h.changeCase.upper(nodeType) + '\\" nodes')
                                gherkin.push('When the user visits the \\"' + h.changeCase.upper(nodeType) + '\\" overview page')
                                gherkin.push('Then each item in the \\"' + h.changeCase.upper(nodeType) + '\\" node collection should link to its detail page')
                            %>
                            "gherkin": "<%- gherkin.join('\\n') %>"
                        }
                    ]
                }
            ]
        }]
    }
}
