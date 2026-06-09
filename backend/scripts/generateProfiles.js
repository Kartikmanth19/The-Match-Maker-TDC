const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

const cities = [
    "Pune",
    "Mumbai",
    "Bangalore",
    "Delhi",
    "Hyderabad",
    "Chennai",
    "Kolkata"
];

const profiles = [];

for (let i = 1; i <= 200; i++) {
    const gender = i <= 100 ? "Male" : "Female";

    profiles.push({
        id: i,

        firstName:
            gender === "Male"
                ? faker.person.firstName("male")
                : faker.person.firstName("female"),

        lastName: faker.person.lastName(),

        gender,

        photo:
            gender === "Male"
                ? `https://randomuser.me/api/portraits/men/${i % 99}.jpg`
                : `https://randomuser.me/api/portraits/women/${i % 99}.jpg`,

        dob: faker.date.birthdate({
            min: 24,
            max: 35,
            mode: "age"
        }),

        age: faker.number.int({
            min: 24,
            max: 35
        }),

        email: faker.internet.email(),

        phone: faker.phone.number(
            "9#########"
        ),

        city:
            cities[
            Math.floor(
                Math.random() *
                cities.length
            )
            ],

        country: "India",

        height:
            gender === "Male"
                ? faker.number.int({
                    min: 165,
                    max: 190
                })
                : faker.number.int({
                    min: 150,
                    max: 175
                }),

        college:
            faker.helpers.arrayElement([
                "COEP Pune",
                "MIT WPU",
                "VIT Pune",
                "IIT Bombay",
                "BITS Pilani"
            ]),

        degree:
            faker.helpers.arrayElement([
                "B.Tech",
                "M.Tech",
                "MBA",
                "MCA"
            ]),

        income:
            faker.number.int({
                min: 400000,
                max: 2500000
            }),

        company:
            faker.helpers.arrayElement([
                "Infosys",
                "TCS",
                "Wipro",
                "Accenture",
                "Google",
                "Microsoft"
            ]),

        designation:
            faker.helpers.arrayElement([
                "Software Engineer",
                "Business Analyst",
                "Consultant",
                "Product Manager"
            ]),

        maritalStatus: "Never Married",

        languages: [
            "English",
            "Hindi"
        ],

        siblings:
            faker.number.int({
                min: 0,
                max: 3
            }),

        religion: "Hindu",

        caste:
            faker.helpers.arrayElement([
                "Brahmin",
                "Maratha",
                "Rajput",
                "Jain"
            ]),

        motherTongue:
            faker.helpers.arrayElement([
                "Hindi",
                "Marathi",
                "English"
            ]),

        diet:
            faker.helpers.arrayElement([
                "Vegetarian",
                "Non Vegetarian"
            ]),

        smoking:
            faker.helpers.arrayElement([
                "No",
                "Occasionally"
            ]),

        drinking:
            faker.helpers.arrayElement([
                "No",
                "Occasionally"
            ]),

        familyType:
            faker.helpers.arrayElement([
                "Nuclear",
                "Joint"
            ]),

        familyValues:
            faker.helpers.arrayElement([
                "Traditional",
                "Moderate"
            ]),

        manglik:
            faker.helpers.arrayElement([
                "Yes",
                "No"
            ]),

        wantKids:
            faker.helpers.arrayElement([
                "Yes",
                "No",
                "Maybe"
            ]),

        openToRelocate:
            faker.helpers.arrayElement([
                "Yes",
                "No",
                "Maybe"
            ]),

        openToPets:
            faker.helpers.arrayElement([
                "Yes",
                "No",
                "Maybe"
            ]),

        partnerExpectations:
            "Family oriented and career focused",

        status:
            faker.helpers.arrayElement([
                "Profile Review",
                "Actively Matching",
                "Meeting Scheduled",
                "Matched"
            ])
    });
}

const outputPath = path.join(
    __dirname,
    "../data/customers.json"
);

fs.writeFileSync(
    outputPath,
    JSON.stringify(
        profiles,
        null,
        2
    )
);

console.log(
    "200 profiles generated successfully"
);