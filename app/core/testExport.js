// export let test = 'jack';
export default function test() {
    this.name = "jack";
};
// export { test };
// exports = test;

// exports.test = function() {
//     this.name = "jack";
//     console.log('..................');
// }


// module.exports = test;

// exports = test;

// export function sayHello() {
//     console.log('hello world!');
// }

function sayHello() {
    console.log('hello world!');
}

export { sayHello };