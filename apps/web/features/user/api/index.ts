export const fetchUserData = async () => {
    // 'use server'
    try {
        const num = Math.floor(Math.random() * (10 - 1) + 1)
        const res = await fetch('https://dummyjson.com/products/' + num)
        const result = await res.json()
        return result.title
    } catch {
        return null
    }
}
