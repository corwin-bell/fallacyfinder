// import OpenAI from "openai"; this doesn't work unless the file is a module
// using require instead
const OpenAI = require("openai");
const openai = new OpenAI();

async function main() {
    const text = `The University of Mississippi recently passed a policy banning smoking on campus. 
    I am a smoker, and I have a lot of friends who are smokers, and we all agree that this policy should be overturned. 
    This policy is framed in terms of health outcomes and promoting individual well-being, but the University has not instituted policies regarding many other behaviors related to health, such as exercising. 
    Furthermore, the University does nothing to sanction other forms of air pollution, such as automobile exhaust.
    Smoking is a right, and Americans have rights, so the smoking ban is wrong. What’s next? Will we ban potato chips and Cokes on campus? 
    Will we force-feed broccoli and carrots to first-year students? People eighteen years old and up are adults and have the ability to make their own decisions regarding their health and habits. 
    The policy also states, “All members of the university community share in the responsibility for adhering to and enforcing this policy.” That type of language asks students and faculty to be informants against each other.
    A college campus is a place for free expression of ideas and behaviors. It’s simple: either we are a freedom-loving campus or we aren’t. 
    I choose freedom, and I believe all of America’s veterans would agree with me. Perhaps the Chancellor has an ulterior motive for instituting the ban and is using smokers as a scapegoat.`

    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: "Please quantify the number of logical fallacies by fallacy type and extract the specific sentences containing them." 
            },
            { 
                role: "user", 
                content: text,
            },
        ],
        model: "gpt-3.5-turbo",
        temperature: 1
    });

  console.log(completion.choices[0].message.content);
}

main();