/* eslint-disable prettier/prettier */
/**
   Generates a JSON blob for a mocked files blob.
   @method ChecklistComponentDummy1
   @return {Object}
*/
export function ChecklistComponentDummy1() {
    return [
        {
            name: 'smss.exe',
            device: 'Stark',
            path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
            status: 'scheduled'
        },
        {
            name: 'netsh.exe',
            device: 'Targaryen',
            path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
            status: 'available'
        },
        {
            name: 'uxtheme.dll',
            device: 'Lannister',
            path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
            status: 'available',
            value: true,
            selected: true,
        },
        {
            name: 'cryptbase.dll',
            device: 'Martell',
            path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
            status: 'scheduled',
        },
        {
            name: '7za.exe',
            device: 'Baratheon',
            path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
            status: 'scheduled'
        },
    ];
}
