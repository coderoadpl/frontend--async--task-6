// const TIME = 1000

// setTimeout(
//     () => {
//         setTimeout(
//             () => {
//                 setTimeout(
//                     () => {
//                         // debugger
//                         console.log('Inside 3rd timeout!')
//                     },
//                     TIME
//                 )
//                 console.log('Inside 2nd timeout!')
//             },
//             TIME
//         )
//         console.log('Inside 1st timeout!')
//     },
//     TIME
// )

// console.log('Outside timeout!')

const wait = (time) => (callback) => new Promise((resolve) => {
    setTimeout(
        resolve,
        time
    )
})

const wait1s = wait(1000)

// wait1s()
//     .then(() => {

//         wait1s().then(() => {

//             wait1s().then(() => {

//                 console.log('Inside 3rd timeout!')

//             })
//             console.log('Inside 2nd timeout!')

//         })
//         console.log('Inside 1st timeout!')

//     })


// wait1s()
//     .then(() => {
//         console.log('Inside 1st timeout!')
//         return wait1s()
//     })
//     .then(() => {
//         console.log('Inside 2st timeout!')
//         return wait1s()
//     })
//     .then(() => console.log('Inside 3st timeout!'))

wait1s()
    .then(() => console.log('Inside 1st timeout!'))
    .then(wait1s)
    .then(() => console.log('Inside 2st timeout!'))
    .then(wait1s)
    .then(() => console.log('Inside 3st timeout!'))

console.log('Outside timeout!')