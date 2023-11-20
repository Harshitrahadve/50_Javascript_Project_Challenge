const input = document.querySelector('input')

const lowercase = document.querySelector('#lowerCase')
const uppercase = document.querySelector('#upperCase')
const camelcase = document.querySelector('#camelCase')
const pascalcase = document.querySelector('#pascalCase')
const snakecase = document.querySelector('#snakeCase')
const kababcase = document.querySelector('#kababCase')
const trim = document.querySelector('#trim')

function capatilizeFirstLatter(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}

function toCamelCase(string) {
    const finalArray = string.toLowerCase()
        .split(' ')
        .map((word, i) => {
            if (i === 0) return word
            return capatilizeFirstLatter(word)
        })

    return finalArray.join('')
}

function toPascalCase(string) {
    const finalArray = string.toLowerCase()
        .split(' ')
        .map((word) => {
            return capatilizeFirstLatter(word)
        })

    return finalArray.join('')
}


function updateInuput() {
    lowercase.innerText = input.value.toLowerCase();
    uppercase.innerText = input.value.toUpperCase();
    camelcase.innerText = toCamelCase(input.value.trim());
    pascalcase.innerText = toPascalCase(input.value.trim());
    snakecase.innerText = input.value.split(' ').join('_')
    kababcase.innerText = input.value.split(' ').join('-')
    trim.innerText = input.value.split(' ').join('')

}



input.addEventListener('input', updateInuput)