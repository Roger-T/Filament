const textReply = (text) => ({ type: 'text', text });

const topics = ['the weather'];
const repliesDatabase = {
    greeting: [textReply(`Hi! I hope you are doing well today. I am a bot, and I know how to talk about: ${topics.join(', ')}`)],
    weather: [textReply("It's sunny outside here today. What is the weather like where you are?")],
};

async function getRepliesForIntent(intent) {
    return repliesDatabase[intent?.name];
}

async function getFallbackReplies() {
    return [textReply("I'm sorry, I didn't understand what you said. Can you rephrase?")];
}

module.exports = {
    getRepliesForIntent,
    getFallbackReplies,
};
