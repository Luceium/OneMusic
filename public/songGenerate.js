const cohere = require('cohere-ai');
cohere.init('{apiKey}');
(async () => {
  const response = await cohere.generate({
    model: 'large',
    prompt: 'Given a genre and keywords, this program will generate song openings. Here are some examples:\n\nGenre: Pop\nKeywords: dating, love, complicated\nOpening Verse: \nNice to meet you, where you been?\nI could show you incredible things\nMagic, madness, heaven, sin\nSaw you there and I thought\n\"Oh, my God, look at that face\nYou look like my next mistake\nLove\'s a game, wanna play?\" Ay\n--\nGenre: Rap\nKeywords: money, girls, drugs\nOpening Verse: \nWoah... Heh\nChaseTheMoney, ChaseTheMoney!\nBitch be for real\nLet\'s make a deal\nBitch be for real\nIs you off a pill? Okay\n--\nGenre: Pop\nKeywords: flirting, call, face\nOpening Verse: \nI caught it bad yesterday\nYou hit me with a call to your place\nAin\'t been out in a while anyway\nWas hoping I could catch you throwing smiles in my face\n--\nGenre: Pop\nKeywords: money, wealth, diamonds\nOpening Verse: \nYeah, breakfast at Tiffany\'s and bottles of bubbles\nGirls with tattoos who like getting in trouble\nLashes and diamonds, ATM machines\nBuy myself all of my favourite things, yeah\nBeen through some bad shit, I should be a sad bitch\nWho would have thought it\'d turn me to a savage?\nRather be tied up with calls and not strings\nWrite my own checks like I write what I sing, yeah\n--\nGenre: Rap\nKeywords: sexy, ass, wealth\nOpening Verse: \nI said my face bomb, ass tight\nRacks stack up Shaq height\nJewelry on me, flashlight\nI been lit since last night\nHit him with that good-good\nMake a man act right\nBroke boys don\'t deserve no cat (I know that\'s right!)\n--\nGenre: Pop\nKeywords: lesbian, stars, love\nOpening Verse:\nWe fell in love in October\nThat\'s why, I love fall\nLooking at the stars\nAdmiring from afar\nMy girl, my girl, my girl\nYou will be my girl\n--\nGenre: Pop\nKeywords: lesbian, kiss, love\nOpening Verse:\nI hate it when dudes try to chase me\nBut I love it when you try to save me\n\'Cause I\'m just a lady\nI love it when we play 1950\nSo cold that your stare\'s \'bout to kill me\nI\'m suprised when you kiss me\n--\nGenre: Rap\nKeywords: revenge, money, bluff\nOpening Verse:\nBitch better have my money\nY\'all should know me well enough\nBitch better have my money\nPlease don\'t call me on my bluff\nPay me what you owe me\nBallin\' bigger than LeBron\nBitch, give me your money\nWho y\'all think y\'all frontin\' on?\n--\nGenre: Pop\nKeywords: sexy, confidence, flirting\nOpening Verse:\nGive me your, give me your, give me your attention, baby (attention, baby)\nI got to tell you a little something about yourself (self)\nYou\'re wonderful, flawless, ooh, you a sexy lady (sexy lady)\nBut you walk around here like you wanna be someone else (else)\n--\nGenre: Pop\nKeywords: dating, stars, piano\nOpening Verse:',
    max_tokens: 50,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  });
  console.log(`Prediction: ${response.body.generations[0].text}`);
})();
