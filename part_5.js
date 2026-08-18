
// ==========================================
// TODO: parseInt();
// * কোন একটি ভেরিয়েবলের মান স্ট্রিং থেকে পূর্ণসংখ্যায় রূপান্তরের জন্য এটি ব্যবহার করতে হয়।
// ==========================================
const apple = parseInt('20');
console.log(apple); // আউটপুট: 20


// ==========================================
// TODO: parseFloat();
// * কোন একটি ভেরিয়েবলের মান স্ট্রিং থেকে ভগ্নাংশ বা দশমিক সংখ্যায় রূপান্তর করতে ব্যবহৃত হয়।
// ==========================================
const apple2 = parseFloat('20.55');
console.log(apple2); // আউটপুট: 20.55


// ==========================================
// TODO: .toFixed(3);
// * দশমিকের পরে কয়টি সংখ্যা থাকবে সেটি নির্ধারণ করে দেওয়ার জন্য। (এটি স্ট্রিং রিটার্ন করে)
// ==========================================
const total = apple + apple2;
console.log(total.toFixed(5)); // আউটপুট: 40.55000


// ==========================================
// TODO: Concepts of Conditionals
// * সাধারণ শর্ত বা কন্ডিশন লেখার নিয়ম।
// ==========================================
/*
if (condition) {
    // শর্ত সত্যি হলে এই কোড রান করবে
} else {
    // শর্ত মিথ্যা হলে এই কোড রান করবে
}
*/


// ==========================================
// TODO: Ternary Operator (টার্নিয়ারি অপারেটর)
// * ছোট এক লাইনে if-else লেখার আধুনিক নিয়ম।
// * Syntax: (condition) ? true_result : false_result;
// ==========================================
const age = 20;

// টার্নিয়ারি অপারেটর ব্যবহার করে চেক করা হচ্ছে সে ভোট দিতে পারবে কি না
const result = (age >= 18) ? "আপনি ভোট দিতে পারবেন!" : "আপনি এখনও ছোট, ভোট দিতে পারবেন না।";

console.log(result); // আউটপুট: আপনি ভোট দিতে পারবেন!

// ==========================================
// TODO: String & Array Methods Notes
// ==========================================

// ==========================================
// 1. slice()
// * স্ট্রিং বা অ্যারের একটি নির্দিষ্ট অংশ কেটে আলাদা করতে এটি ব্যবহার করা হয়। 
// * মূল ডেটা অপরিবর্তিত থাকে। (start index, end index)
// ==========================================
let text = "Hello Bangladesh";
let slicedText = text.slice(6, 16); 
console.log(slicedText); // আউটপুট: Bangladesh


// ==========================================
// 2. join()
// * অ্যারের ভেতরের সব উপাদানকে জোড়া লাগিয়ে একটিমাত্র স্ট্রিংয়ে রূপান্তর করতে এটি ব্যবহার করা হয়।
// * ব্রাকেটের ভেতরে বলে দিতে হয় মাঝখানে কী বসবে (যেমন: কমা, স্পেস, হাইফেন)।
// ==========================================
let fruits = ["আপেল", "কলা", "আম"];
let joinedFruits = fruits.join(", "); 
console.log(joinedFruits); // আউটপুট: আপেল, কলা, আম


// ==========================================
// 3. concat()
// * দুটি বা ততোধিক স্ট্রিং কিংবা অ্যারে একসাথে যুক্ত (combine) করতে এটি ব্যবহার করা হয়।
// ==========================================
let firstName = "মোহাম্মদ ";
let lastName = "রহিম";
let fullName = firstName.concat(lastName); 
console.log(fullName); // আউটপুট: মোহাম্মদ রহিম


// ==========================================
// 4. includes()
// * কোনো নির্দিষ্ট শব্দ, অক্ষর বা উপাদান স্ট্রিং বা অ্যারের ভেতরে আছে কি না তা চেক করে।
// * ফলাফল হিসেবে true অথবা false রিটার্ন করে।
// ==========================================
let sentence = "I am learning JavaScript";
let checkWord = sentence.includes("JavaScript"); 
console.log(checkWord); // আউটপুট: true

// ==========================================
// 16_4: Reverse a String in Three Different Ways
// ==========================================

// Way 1: Using built-in methods (split, reverse, join)
function reverseString1(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString1("Hello")); // আউটপুট: olleH


// Way 2: Using a for...of loop
function reverseString2(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
console.log(reverseString2("JavaScript")); // আউটপুট: tpircSavaJ


// Way 3: Using a traditional for loop
function reverseString3(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString3("Bangladesh")); // আউটপুট: hsedalgnaB



// ==========================================
// 16_5: Introduction to Objects, Properties, and Values
// ==========================================

// অবজেক্ট (Object) হলো কী (Key) এবং ভ্যালু (Value) এর একটি জোড়া (Key-Value pair) সংগ্রহ।
const student = {
    name: "রহিম",      // name হলো Property (Key), "রহিম" হলো Value
    age: 22,         // age হলো Property, 22 হলো Value
    isStudent: true  // isStudent হলো Property, true হলো Value
};

console.log(student);



// ==========================================
// 16_6: What is Object (Conceptual)
// ==========================================
/* 
   বাস্তব জগতের কোনো কিছুর বৈশিষ্ট্য (Properties) এবং কাজের (Methods) ডিজিটাল রূপই হলো অবজেক্ট।
   যেমন: একটি ল্যাপটপ অবজেক্টের প্রপার্টি হতে পারে brand, color, price ইত্যাদি।
*/



// ==========================================
// 16_7: Multiple Ways to Get & Set Object Properties
// ==========================================

const person = {
    name: "করিম",
    age: 25,
    "home address": "ঢাকা" // স্পেস থাকলে ডট নোটেশন কাজ করে না
};

// --- GET (মান পাওয়ার উপায়) ---
// ১. Dot Notation (.)
console.log(person.name); // আউটপুট: করিম

// ২. Bracket Notation ([])
console.log(person["age"]); // আউটপুট: 25
console.log(person["home address"]); // স্পেস থাকলে ব্র্যাকেট নোটেশন ব্যবহার করতে হয়

// --- SET (মান পরিবর্তন বা নতুন সেট করার উপায়) ---
// ১. Dot Notation দিয়ে
person.age = 26; 

// ২. Bracket Notation দিয়ে
person["name"] = "আব্দুল করিম";

// ৩. নতুন প্রপার্টি যোগ করা
person.country = "বাংলাদেশ";

console.log(person);



// ==========================================
// 16_8: Keys, Values, Nested Objects, and Delete
// ==========================================

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    // Nested Object (অবজেক্টের ভেতর অবজেক্ট)
    engine: {
        type: "Hybrid",
        horsepower: 121
    }
};

// ১. Keys পাওয়া (সব প্রপার্টির নাম একটি অ্যারেতে দেখাবে)
const keys = Object.keys(car);
console.log(keys); // ['brand', 'model', 'year', 'engine']

// ২. Values পাওয়া (সব মান একটি অ্যারেতে দেখাবে)
const values = Object.values(car);
console.log(values);

// ৩. Nested Object থেকে ডেটা এক্সেস করা
console.log(car.engine.type); // আউটপুট: Hybrid

// ৪. প্রপার্টি ডিলিট করা (delete keyword)
delete car.year;
console.log(car); // year প্রপার্টি আর থাকবে না



// ==========================================
// 16_9: Loop an Object and Ways to Declare an Object
// ==========================================

// --- Ways to Declare an Object (অবজেক্ট ঘোষণার বিভিন্ন উপায়) ---
// ১. Object Literal (সবচেয়ে বেশি ব্যবহৃত)
const obj1 = { name: "সাকিব", age: 30 };

// ২. Object Constructor
const obj2 = new Object();
obj2.name = "তামিম";

// ۳. Object.create()
const obj3 = Object.create(null);


// --- Loop Through an Object (অবজেক্টের ওপর লুপ চালানো) ---
const user = {
    name: "ফাহিম",
    role: "Developer",
    salary: 50000
};

// for...in লুপ ব্যবহার করে অবজেক্টের কি এবং ভ্যালু প্রিন্ট করা
for (let key in user) {
    console.log(key, ":", user[key]);
}