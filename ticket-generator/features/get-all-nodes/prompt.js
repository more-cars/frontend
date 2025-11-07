module.exports = [
    {
        type: 'input',
        name: 'nodeType',
        message: 'Create "Get all Nodes" tickets for which node type? (e.g. "Car Model")'
    }, {
        message: 'ID of the corresponding parent (epic) ticket? (e.g. "MCF-176")',
        name: 'epicId',
        type: 'input',
    },
]
