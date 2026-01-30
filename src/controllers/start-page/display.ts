import express from "express"

export async function display(req: express.Request, res: express.Response) {
    res.render('templates/start-page/start-page', {
        page_title: 'More Cars',
        node_types: [
            {
                name: 'company',
                label: 'Companies',
                overview_page_path: '/companies',
                icon: '🏭',
                description: 'The More Cars database contains 114 car companies from 20 different countries.',
                count: 114,
            }, {
                name: 'brand',
                label: 'Brands',
                overview_page_path: '/brands',
                icon: '🛡️',
                description: 'The More Cars database contains 293 brands from 100 different companies.',
                count: 293,
            }, {
                name: 'car-model',
                label: 'Car Models',
                overview_page_path: '/car-models',
                icon: '🚘',
                description: 'The More Cars database contains 2649 car models from 200 different brands.',
                count: 2649,
            }, {
                name: 'race-track',
                label: 'Race Tracks',
                overview_page_path: '/race-tracks',
                icon: '⭖',
                description: 'The More Cars database contains 103 race tracks from 20 different countries.',
                count: 103,
            }, {
                name: 'track-layout',
                label: 'Track Layouts',
                overview_page_path: '/track-layouts',
                icon: '⮓',
                description: 'The More Cars database contains 186 layouts from 103 different race tracks.',
                count: 186,
            }, {
                name: 'racing-series',
                label: 'Racing Series',
                overview_page_path: '/racing-series',
                icon: '🏎',
                description: 'The More Cars database contains 19 racing series from all around the world.',
                count: 19,
            }, {
                name: 'image',
                label: 'Images',
                overview_page_path: '/images',
                icon: '🖼️',
                description: 'The More Cars database contains 18098 images.',
                count: 18098,
            },
        ],
    })
}
