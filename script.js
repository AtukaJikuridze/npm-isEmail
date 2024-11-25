import validator from "validator";

const email = "test@test.com";
const email2 = "test";

if (validator.isEmail(email)) console.log("Correct Email");
else {
  console.log("InCorrect email");
}
if (validator.isEmail(email2)) console.log("Correct Email");
else {
  console.log("InCorrect email");
}

// node .
// ამ კოდით მუშაობს მაგრამ ბრაუზერში ერორია
