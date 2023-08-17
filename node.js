let kennedy = true
let count = 0
let bring = [1, 2, 3, 4, 5, 19, 281, 109, 111,22,23,24,25]
let sum = 0
while (kennedy) {

    sum += bring[count]
    console.log(sum,count,bring.length)
    count++

    if (count >= bring.length) {
        kennedy = false
        return sum
    }
}