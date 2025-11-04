export function wait() {
    const delay = 1000
    return new Promise(resolve => setTimeout(resolve, delay))
}