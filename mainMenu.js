module.exports = [

    {
        label: "Electron",
        submenu: [
            {
                label: 'Item 1',
                submenu: [
                    { label: 'Submenu 1.1', enabled: false }
                ]
            },
            { label: 'Item 2' }
        ]
    },

    {
        label: "Actions",
        submenu: [
            {
                label: 'Action 1',
                click: () => {
                    console.log("Hello from menu")
                },
                accelerator: 'Shift+Alt+G'
            },
            {
                label: 'Toogle Developer Tools',
                role: 'toggledevtools'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },

    {
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {role: 'copy'},
            {role: 'paste'}
        ]
    }
]