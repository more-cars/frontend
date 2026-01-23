module.exports = [
    {
        message: "Creating 'NODE detail page - 1:n Relationship' code for which node type?",
        name: 'nodeType',
        type: 'input',
    }, {
        message: 'What is the node type of the relationship partner? (e.g. "Car Model Variant")',
        name: 'partnerNodeType',
        type: 'input',
    }, {
        message: 'What is the name of the corresponding relationship in the API? (e.g. "has car model variant")',
        name: 'relationshipName',
        type: 'input',
    },
]
