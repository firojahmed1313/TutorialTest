"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
var createUser = function (name, hobbies, role, age) {
    if (age === void 0) { age = 34; }
    return {
        name: name,
        age: age,
        hobbies: hobbies,
        role: role
    };
};
console.log(createUser(user.name, user.hobbies, user.role, user.age));
console.log(createUser(user.name, user.hobbies, user.role));
