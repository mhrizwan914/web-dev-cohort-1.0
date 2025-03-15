let my_score = [25, 100, 5, 42]

// console.log(my_score.length)

// at() method ek integer value leta hai jo array ke kisi index ka element return karta hai. Positive index start se count hota hai, negative index end se (reverse indexing). Array ka start count 0 index say hota hai.
// console.log(my_score.at(2))
// console.log(my_score.at(-2))

// concat() method ek ya ek se zyada arrays ko merge karne ke liye use hota hai. Yeh ek new array return karta hai bina original arrays ko modify kiye.
// let extra_score = my_score.concat([55, 99])

// copyWithin() method ek modifying method hai jo existing array ke kisi ek element ko copy karke kisi doosre index par paste kar deta hai bina array ki length change kiye.
// my_score.copyWithin(1, 0, 3)

// entries() method ek iterator return karta hai jo har element ki key/value pair provide karta hai.
// let iterator_array = my_score.entries()
// console.log(iterator_array.next().value)

// every() method ek condition har element par check karta hai. Agar sabhi elements condition ko match karein, to true return hota hai, warna false.
// let check_positive = my_score.every((element) => element > 0)

// fill() method array ke saare ya kuch specific elements ko ek fixed value se replace karne ke liye use hota hai. Ye original array ko modify karta hai.
// my_score.fill(2, 2, 3)

// filter() method ek test run karta hai jo matching elements ka ek new array return karta hai.
// let even = my_score.filter((element) => element % 2 === 0)

// findLast() method array ke har element ko reverse order mai ek given condition ke against check karta hai aur sirf pehla matching element return karta hai.
// let lastFirstEven = my_score.findLast(num => num % 2 === 0)

// findLastIndex() method array ke har element ko reverse order mai ek given condition ke against check karta hai aur jo sabse pehla matching element mile, uska index return karta hai.
// let lastFirstEvenIndex = my_score.findLastIndex(num => num % 2 === 0)

// flat() method nested arrays ko ek single level par flatten karta hai.
// my_score.push([25, 69, 58])
// let single_arr = my_score.flat()

// flatMap() method map() aur flat(1) ka combination hai jo ek level tak flatten karta hai.
// let flaten = my_score.flatMap((element) => (element === 12 ? [12, 12] : 1))

// forEach() method har element par provided function ko run karta hai.
// my_score.forEach((e) => console.log("Hello", e))

// includes() method check karta hai ke koi specific element array ke andar mojood hai ya nahi.
// console.log(my_score.includes(12))

// indexOf() method kisi element ka index return karta hai, warna -1 return hota hai.
// console.log(my_score.indexOf(12))

// join() method array ke sabhi elements ko ek string me convert karta hai.
// let joinOne = my_score.join()

// keys() method ek iterator return karta hai jo array keys provide karta hai.
// let iterator = my_score.keys()
// for (const key of iterator) {
//     console.log(key)
// }

// lastIndexOf() method kisi element ka last index return karta hai agar wo array me mojood ho.
// console.log(my_score.lastIndexOf(12))

// map() ek array ke har element par function apply karta hai aur ek naya array return karta hai.
// let squared = my_score.map(num => num * num)

// pop() method array se last element remove karta hai.
// my_score.pop()

// push() method array me last me ek ya zyada elements add karta hai.
// my_score.push(12)

// reduce() method array kay elements ko process karke ek single value return karta hai.
// const sum = my_score.reduce((acc, num) => acc + num, 0)

// reduceRight() reduce() jaisa hi kaam karta hai, lekin right se left process karta hai.
// const sum = my_score.reduceRight((acc, num) => acc + num, 0)

// reverse() method array ke order ko ulta kar deta hai.
// console.log(my_score.reverse())

// shift() method array ke first element ko remove karta hai.
// my_score.shift()

// slice() method ek specific range ka copy bana kar ek new array return karta hai.
// let new_arr = my_score.slice(2, 4)

// some() method check karta hai agar koi ek bhi element condition satisfy kare to true return hota hai.
// let less_scroe = my_score.some((element) => (element < 10))

// sort() method array elements ko sort karta hai. Default behavior string-wise sorting hota hai.
// my_score.sort((a, b) => a - b)

// splice() method se elements remove, replace ya insert kiye ja sakte hain.
// let new_arr = my_score.splice(2, 0, 12, 25)

// toLocaleString() method array ya number ko locale-based formatted string me convert karta hai.
// console.log([1234567.89].toLocaleString("en-PK"))

// toReversed() method ek reversed copy return karta hai bina original array modify kiye.
// console.log(my_score.toReversed())

// toSorted() method ek sorted copy return karta hai bina original array ko modify kiye.
// let sortedNumbers = my_score.toSorted((a, b) => a - b)

// toSpliced() method ek modified copy return karta hai bina original array change kiye.
// let new_arr = my_score.toSpliced(2, 0, 12, 25)

// toString() method array ko ek comma-separated string me convert karta hai.
// let str_arr = my_score.toString()

// unshift() method array ke start me ek ya zyada elements add karta hai.
// my_score.unshift("element1", "element2")

// values() method ek iterator return karta hai jo array values provide karta hai.
// let iterator = my_score.values()
// for (const value of iterator) {
//     console.log(value)
// }

// with() method ek immutable method hai jo kisi index par value replace karta hai bina original array modify kiye.
// let new_arr = my_score.with(1, 99)

console.log(my_score)