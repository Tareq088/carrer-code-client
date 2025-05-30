// ekhane sorasori user.email bosaite parbo na karon ekhane user nai. tai amra function kore korbo
export const myApplicationPromise = (email) => {
    return fetch(`http://localhost:5000/applications?email=${email}`).then(res=>res.json())
}