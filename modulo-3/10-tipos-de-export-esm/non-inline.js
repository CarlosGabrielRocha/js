function group() {
    console.log('Export nomeado não-inline (agrupado)')
}

function group2() {
    console.log('Export nomeado não-inline (agrupado)')
}


function exportDefault() {
    console.log('Export default não-inline')
}

export { group, group2 }

export default exportDefault