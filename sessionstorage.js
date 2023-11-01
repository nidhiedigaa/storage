sessionStorage.setItem('name','monika')
sessionStorage.setItem('age','22')
sessionStorage.setItem('skills','["html"],[\"css\"],[\"javascript\"]')

console.log(sessionStorage.length)
console.log(sessionStorage.getItem('skills'))
sessionStorage.removeItem('name')
sessionStorage.clear()