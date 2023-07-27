export function styles(value: string) {
    return function (target) {
        target.prototype._styles = () => {
            return value
        }
    }
}

export function tag(value: string) {
    return function(target) {
        customElements.define(value, target)
    }
}