localStorage.setItem('name','monika')
localStorage.setItem('age',22..toString())
localStorage.setItem('skills',JSON.stringify(['html','css','javascript']))

console.log(localStorage.length)
console.log(localStorage.getItem('skills'))
localStorage.removeItem('name')
localStorage.clear()