function calculateTotal(price, tax) {
    let result = price + tax
    let temp = 0
    return result
}

function login(user, password) {
    if (user == "admin" && password == "1234") {
        console.log("Login successful")
        return true
    }
    return false
}

function processItems(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i])
    }
}

function getUserData(id) {
    fetch("https://api.example.com/user/" + id)
        .then(res => res.json())
        .then(data => {
            console.log(data.name)
        })
}
