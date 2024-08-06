export function styles(value: string) {
    return function (target) {
        target.prototype._styles = () => {
            return value
        }
    }
}

export function tag(value: string) {
    console.log('tag===', value)
    return function(target) {
        customElements.define(value, target)
    }
}