// TODO: parseInt();
// * কোন একটি ভেরিয়েবলের মান স্ট্রিং থেকে সংখ্যায় রূপান্তরের জন্য এটি ব্যবহার করতে হয়।
const apple = parseInt('20')
console.log(apple);


// TODO: parseFloat();
// * কোন একটি ভেরিয়েবলের মান স্ট্রিং থেকে ভগ্নাংশ বা দশমিক সংখ্যায় রূপান্তর করতে ব্যবহৃত হয়।
const apple2 = parseFloat('20.55')
console.log(apple2);

// TODO: .toFixed(3);
// *দশমিকের পরে কয়টি সংখ্যা থাকবে সেটি নির্ধারণ করে দেওয়ার জন্য।
const total = apple+apple2
console.log(total.toFixed(5));
// =================================================================================================/

// TODO: Concepts of Conditionals

if(condition){

}

// TODO: Ttarnary condition

const age = 20;

// টার্নিয়ারি অপারেটর ব্যবহার করে চেক করা হচ্ছে সে ভোট দিতে পারবে কি না
const result = (age >= 18) ? "আপনি ভোট দিতে পারবেন!" : "আপনি এখনও ছোট, ভোট দিতে পারবেন না।";

console.log(result);