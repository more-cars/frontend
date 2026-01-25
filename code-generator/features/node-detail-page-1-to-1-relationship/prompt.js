module.exports = [
    {
        message: "Creating 'NODE detail page - 1:1 Relationship' code for which node type? (e.g. Brand)",
        name: 'nodeType',
        type: 'input',
    }, {
        message: 'What is the node type of the relationship partner? (e.g. Company)',
        name: 'partnerNodeType',
        type: 'input',
    }, {
        message: 'What is the name of the corresponding relationship in the API? (e.g. "belongs to company")',
        name: 'relationshipName',
        type: 'input',
    },
]
