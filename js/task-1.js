const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = "happy";
console.log(user);
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key}:${user[key]}`);
}

////////////-----HW 3 ------task 1-2-----

// let user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// const newUsersProps = {};
// const addNewUsersProps = (newUsersProps) => {
//     user = {
//         ...user,
//         ...newUsersProps
//     };
//     return console.table(user);
// };

// addNewUsersProps({
//     mood: "happy",
//     hobby: "skydiving",
//     premium: false
// });