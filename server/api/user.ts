export default defineEventHandler(async () => {
    const res = await $fetch('https://jsonplaceholder.typicode.com/users/1')
    return res
})