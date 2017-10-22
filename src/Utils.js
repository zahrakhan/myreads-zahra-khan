function groupBy(items, getItemGroupOnValue) {
    const groups = {}
    for (let item of items) {
        const group = getItemGroupOnValue(item)
        groups[group] = groups[group] || []
        groups[group].push(item)
    }
    return groups
}
export function groupItems(items = [], groupOn = '') {
    return groupBy(items, (item => item[groupOn]))
    //Promise.resolve(groupBy(items, (item => item[groupOn])))
}