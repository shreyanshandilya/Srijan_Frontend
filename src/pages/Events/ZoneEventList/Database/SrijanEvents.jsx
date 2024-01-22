const events = [
  // {
  //   EventName: "SRIJANTHROUGH MYLENS",
  //   Zone: "CINEMATOGRAPHY",
  //   Poster: "",
  //   miniDescription:
  //     "An Online Event where participants need to capture photos related to Srijan and post it through their Instagram Story tagging handles of FotoFreaks as well as Srijan.",
  //   Description:
  //     'Discover the Art in Every Frame at Srijan. "Photography is the poetry of visuals, and Srijan is your canvas!" Join our Instagram Story Challenge, let your lens narrate tales of campus magic, and seize the chance to win fantastic prizes. Unleash your creativity, capture Srijan\'s vibrant moments, and let the snapshots speak louder than words.',
  //   Venue: "Online",
  //   Fees: 0,
  //   Contactdetails: [{ name: "Chinmay Das Kanungo", phone: "7978304396" }],
  //   Rules: [
  //     "The event is open to all college students & there isn't any participation fee, but the image captured should be of inside the campus and during Srijan.",
  //     "Story mentions from 10:00AM to 11:59 PM will be considered valid, and the image should be of that very day.",
  //     "The Instagram handle of the participant must be a public account to allow FotoFreaks to view and repost the tagged photographs.",
  //     "The photograph must be in the ratio of 9:16.",
  //     "No inclusion of Instagram stickers, any kind of marks, and other sorts of distractions are allowed.",
  //     "You can include Typography in Story to enhance the Final Look of the story.",
  //     "Participants are required to tag the official Instagram handles of Srijan (@srijaniitism) and FotoFreaks (@fotofreaks_litism).",
  //     "The Winners of each day will be declared on the following day through FotoFreaks Instagram Handle.",
  //     "In case of any dispute, the Organizers' decision will be final and binding.",
  //   ],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/1DDIU3Igy40YjuwJmuSkZLz0ZCqe-ilv4DVe5N6Ly6vM/edit?usp=drive_link",
  //   Minimummembers: 1,
  //   Maximummembers: 1,
  // },
  // {
  //   EventName: "MANIPULATION WARS",
  //   Zone: "CINEMATOGRAPHY",
  //   Poster: "",
  //   miniDescription:
  //     "A Live Photo Manipulation Contest on Adobe Photoshop where each team will be given a few stock images. The participants will have to make a composite image using these images. They can use any number of images from the given lot, however no external image is allowed.",
  //   Description:
  //     "FotoFreaks encourages all to enter the empire of creativity through the Live Photo Manipulation Contest on Adobe Photoshop. Each team will receive a curated set of stock images, challenging participants to craft a stunning composite masterpiece. With no external images permitted, participants will unleash their artistic prowess, weaving a narrative through a collage of provided visuals.",
  //   Venue: "Online",
  //   Fees: 0,
  //   Contactdetails: [{ name: "Nikhil Kumar", phone: "+91 99973 09195" }],
  //   Rules: [
  //     "The event is open to all college students & there isn't any participation fee.",
  //     "Participants will have to register through the Google Form link provided. The stock images will be revealed at the beginning of the event.",
  //     "There are no restrictions on using the number of images among the given ones. Usage of any photo other than provided will lead to direct disqualification. No typography is allowed.",
  //     "Submission should include the following: Final created image, original PSD file, and separate writeup text file describing your final composite.",
  //     "The final manipulation must be sent to 'fotofreaks@iitism.ac.in' with Subject 'Srijan Manipulation Wars 2023' along with the participant's team name, college name, contact details and a writeup text document for the composite.",
  //     "Participants need to submit screenshots of their work with time, for every hour during the event (6 screenshots) in the Google Form provided.",
  //     "Winners will be declared on 7 February from the Official Handles of Srijan, IIT ISM Dhanbad and FotoFreaks - The Photography Club Of IIT - ISM.",
  //     "The Standing Proofs of Top 10 entries will be shared at the time of result declaration to ensure fair judgment.",
  //     "In case of any dispute, the Organizers' decision will be final and binding.",
  //     "No entries will be accepted past the deadline.",
  //     "For any instant updates and announcements, follow Instagram and Facebook handles of FotoFreaks. (@fotofreaks_iitism)",
  //   ],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/1SwGwFZcESFCdB9GMPVO20Fahlxp6E7JsGPSWeOirvu0/edit?usp=drive_link",

  //   Minimummembers: 1,
  //   Maximummembers: 2,
  // },
  // {
  //   EventName: "GENRE-O-MANIA",
  //   Zone: "CINEMATOGRAPHY",
  //   Poster: "",
  //   miniDescription:
  //     "Love watching Reels?? Then you must have seen some of the extraordinary edits which makes us all in awe. So now is your time to showcase your video-making skills!!\nLightsCameraISM invite you to showcase your cinematic prowess in our thrilling event, GENRE-O-MANIA.",
  //   Description:
  //     "If you love watching reels, you must have seen some of the extraordinary edits, which make us all in awe. So now is your time to showcase your video-making skills in Genre-O-Mania, a cinematic challenge where participants create a short video incorporating various genres of videography like Hyperlapse Magic, Paper Cutout Delight, Double Trouble Drama, or Smooth Transitions Elegance. Unleash your creativity and seize the chance to win big in this exciting cinematic showcase.",
  //   Venue: "Online",
  //   Fees: 0,
  //   Contactdetails: [],
  //   Rules: [
  //     "In this challenge, participants are tasked with creating a captivating short video lasting between 10 to 25 seconds. The challenge lies in choosing and incorporating at least one of the following genres in your video:",
  //     "1) Hyperlapse Magic: Take us on a mesmerizing journey through time and space.",
  //     "2) Paper Cutout Delight: Transform your simple videos into different paper cutouts!",
  //     "3) Double Trouble Drama: Create a narrative featuring two of yourselves!",
  //     "4) Smooth Transitions Elegance: Showcase seamless transitions that leave us in awe.",
  //     "Extra points will be awarded for incorporating more than one genre in the same video!!",
  //     "*NO STOCK FOOTAGES ALLOWED IN THE VIDEO. ALL THE SHOTS SHOULD BE TAKEN DURING THE FEST BY YOUR OWN TEAM.*",
  //   ],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/1ofy6z27Up7qRx7vo1eVpkfTQtG78LICAdi95DlELqd0/edit?usp=drive_link",

  //   Minimummembers: 1,
  //   Maximummembers: 2,
  // },
  // {
  //   EventName: "VLOGSTRAVAGANZA!",
  //   Zone: "CINEMATOGRAPHY",
  //   Poster: "",
  //   miniDescription:
  //     "Participants are tasked with crafting a crazy vlog that captures every ounce of excitement, joy, and pure hilarity experienced during the event. Your mission is to create a vlog of 4-5 minutes filled with laughter, some of the performances you did, or just revelling in the festivities of Srijan and take this as a chance to\ncreate long-lasting memories.",
  //   Description:
  //     "Get ready to dive headfirst into the ultimate rollercoaster of emotions, laughter, and unfiltered fun at Srijan! Brace yourselves as participants take on the challenge of crafting a crazy vlog that captures every ounce of excitement, joy, and pure hilarity experienced during the event.\nYour mission, should you choose to accept it, is to unleash your creativity and showcase the wildest, most unforgettable moments from Srijan. Whether you're rolling with laughter, engaging in epic banter, or simply reveling in the sheer joy of the festivities – we want it all captured in your vlog.\nSo, rally your friends, grab your cameras, and let the good times roll! This challenge isn't just about documenting the fun; it's about curating the essence of the Srijan experience in a way that'll have everyone laughing, reminiscing, and eagerly awaiting the next cultural fest.",
  //   Venue: "Online",
  //   Fees: 0,
  //   Contactdetails: [],
  //   Rules: [
  //     "The individual has to shoot their experience throughout Srijan and compile it into a video. The video might contain their crazy experience, a bit of any performance they did, stupid and fun banter with their friends and all the fun they can put into one.",
  //   ],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/10whTO4FQec97xQju49eEyABZSfzYU_21WVFy9FxjmNw/edit?usp=drive_link",

  //   Minimummembers: 1,
  //   Maximummembers: 1,
  // },
  {
    EventName: "Let's Get Quizzical!",
    Zone: "Quiz",
    Poster:
      "https://res.cloudinary.com/dvlxqrbjm/image/upload/v1705731475/ueuzlblpsuy3sxiyro0b.png",
    miniDescription:
      "The quiz is a MELA quiz. Centered around fun fundas from the world of music, entertainment, literature and art.",
    Description:
      "From Monalisa to Hamlet, from Beethoven to AR Rahman, work your way through the vast world of music, literature, art and entertainment in groups of 3 where every correct answer propels you closer to the final. Participate in this one and only Mela quiz held offline this Srijan and hosted by renowned quizmaster Berty Ashley.",
    Venue: "Offline",
    Fees: 0,
    Contactdetails: [
      { name: "Avinash Verma", phone: "8572845836" },
      { name: "Harsh Mishra", phone: "6386697779" },
    ],
    Rules: [
      "Each team should consist of 3 members or less.",
      "The quiz will be conducted offline in pen-paper mode.",
      "The quiz will consist of 2 rounds.",
      "Preliminary rounds will be written. Tie-breaker will be with sudden death.",
      "Top 8-10 teams will participate in the final.",
      "Teams can be formed by students from the same year and college.",
      "No electronic devices are allowed during the quiz.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1kd1pN8Pdhzw9PBFTIo5kCTtQiuxFAKlNzj998K-Id9U/edit",

    Minimummembers: 1,
    Maximummembers: 3,
    teamName: true,
    sponsor: false,
    audio: false,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "The Usual Fundas",
    Zone: "Quiz",
    Poster:
      "https://res.cloudinary.com/dvlxqrbjm/image/upload/v1705731691/mqcuirzrt3jhcu2ymo7b.png",
    miniDescription:
      "The quiz is a general quiz about everything and anything under the sun. Hosted by Renowned QM Samanway Banerjee who is popular across the country for his quizzing prowess.",
    Description:
      "An in-person general knowledge quiz about everything and anything under the sun. Renowned quizmaster Mr Samanway Banerjee, known nationwide for his exceptional quizzing skills, will host the quiz. Form teams of up to three participants from the same college and academic year. Challenge your intellect and collaborate with fellow quizzers to find the answers to diverse questions.",
    Venue: "Offline",
    Fees: 0,
    Contactdetails: [
      { name: "Avinash Verma", phone: "8572845836" },
      { name: "Harsh Mishra", phone: "6386697779" },
    ],
    Rules: [
      "Each team should consist of 3 members or less.",
      "The quiz will be conducted offline in pen-paper mode.",
      "The quiz will consist of 2 rounds.",
      "Preliminary rounds will be written. Tie-breaker will be with sudden death.",
      "Top 8-10 teams will participate in the final.",
      "Teams can be formed by students from the same year and college.",
      "No electronic devices are allowed during the quiz.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1pV6IN_fSHVCagy9vlQ4onfQ2ByFi-oibQyGwakFg6XU/edit",

    Minimummembers: 1,
    Maximummembers: 3,
    teamName: true,
    sponsor: false,
    audio: false,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "QUEER TRIVIA",
    Zone: "Quiz",
    Poster:
      "https://res.cloudinary.com/dvlxqrbjm/image/upload/v1705731632/ohgjnyalkzubsf7va6mb.png",
    miniDescription: "Written quiz",
    Description:
      "Participants will take part in teams of 1-3 people. The event will be a written quiz with questions projected on the screen. The trivia will cover queer culture across the globe.",
    Venue: "NLHC",
    Fees: 0,
    Contactdetails: [{ name: "Anushka", phone: "8374934030" }],
    Rules: ["Each team should consist of 3 members or less."],
    RuleBookLink:
      "https://docs.google.com/document/d/1PaD0hEfsQzRlCJH50fD5l8U41G5T0GF8-ApzwjRJmbE/edit",

    Minimummembers: 1,
    Maximummembers: 3,
    teamName: true,
    sponsor: false,
    audio: false,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "GPT QUIZ",
    Zone: "Quiz",
    Poster:
      "https://res.cloudinary.com/dvlxqrbjm/image/upload/v1705732018/wnccjh9wmnfroip2x6b6.png",
    miniDescription: "In house quiz.",
    Description:
      "Teams of 3 or less, no electronics, only paper and pen, offline mode and even after all these restrictions, can you triumph over difficulties and win the Science, Business and Technology quiz hosted by our QuizClub members? Let your brains speak and propel you towards victory, this Srijan.",
    Venue: "Offline",
    Fees: 0,
    Contactdetails: [
      { name: "Avinash Verma", phone: "8572845836" },
      { name: "Harsh Mishra", phone: "6386697779" },
    ],
    Rules: [
      "Each team should consist of 3 members or less.",
      "The quiz will be conducted offline in pen-paper mode.",
      "The quiz will consist of 2 rounds.",
      "Preliminary rounds will be written. Tie-breaker will be with sudden death.",
      "Top 8-10 teams will participate in the final.",
      "Teams can be formed by students from the same year and college.",
      "No electronic devices are allowed during the quiz.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1wfWiKqkSY-LA1u9Dt6rShNmeiOcyGZDq1TKr1oUMxk4/edit",

    Minimummembers: 1,
    Maximummembers: 3,
    teamName: true,
    sponsor: false,
    audio: false,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "STREET RELOADED",
    Zone: "Dance",
    Poster:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1705652808/Street_Reloaded_siiw6e.jpg",
    miniDescription: "Solo Dance Battle",
    Description:
      "Whether your style is Hip-hop, Popping, Krumping or Breaking, Street Reloaded - Solo Dance Battle brings improvisation to a new level and challenges you to take over the floor. Unpredictable tunes, from mainstream hits to timeless classics, fire up the dancefloor, allowing dancers to showcase their skills and wow the crowd!",
    Venue: "OAT",
    Fees: 0,
    Contactdetails: [
      { name: "Shivam Pipalwa", phone: "+918799007314" },
      { name: "Deekshant Bansal", phone: "+919971975490" },
    ],
    Rules: [
      "This will be a face-off battle with the usual rules of eliminations.",
      "The following are the Street Dance styles allowed: Locking, Popping, B-boying / B-girling (breaking), Waacking / Punking, Vogueing, House Dance, Party Dances or Club Dances (trendy dances), Hip Hop Dance / Choreography, Krumping, Stepping / Gumboots, Afro.",
      "Each battle will be one round.",
      "Each round of a battle will be of 60 seconds.",
      "Qualifiers of these battles will go ahead for the next round of solo battles which will be of three rounds each of 50 seconds.",
      "The participant who will go first will be decided by a toss at the beginning of the battle and thereafter the next participant will go first in the next round and again the first participant in the third round.",
      "In each round, both participants will have to perform on the same song.",
      "The fixture will be decided according to the number of participating teams and battles/byes will be decided by picking up chits.",
      "A penalty of 10 marks will be imposed for vulgar actions. extreme aggression or doing any such inappropriate action.",
      "Naked flames & live animals are not allowed.",
      "Violation of any of the above will lead to immediate disqualification.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1g21dti6mCCQhExBYYG4dko6401UsAW2HfZCuRP-6TkQ/edit",

    Minimummembers: 1,
    Maximummembers: 1,
    teamName: false,
    sponsor: true,
    audio: false,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "STREET BEATS",
    Zone: "Dance",
    Poster:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1705652810/Street_Beats_nznboo.jpg",
    miniDescription: "Crew Dance Battle",
    Description:
      "The most awaited crew battle of the year. Be it any form or any song, Street Beats - Crew Dance Battle provides the perfect battle arena to showcase your talent. Get ready to witness a combination of exciting Judges, DJ, Emcee and of course the crews",
    Venue: "In Front of Library",
    Fees: 0,
    Contactdetails: [
      { name: "Divya Joshi", phone: "+918595632476" },
      { name: "Sumit Chourasia", phone: "+916291893977" },
    ],
    Rules: [
      "The following are the Street Dance styles allowed: Locking, Popping, B-boying / B-girling (breaking), Waacking / Punking, Vogueing, House Dance, Party Dances or Club Dances (trendy dances), Hip Hop Dance / Choreography, Krumping, Stepping / Gumboots, Afro.",
      "This will be a face-off round with the usual rules of eliminations. Some teams might get byes in this round.",
      "One battle between teams will have three rounds.",
      "Each battle will be 6 minutes each.",
      "Each round of a battle will be of 1 minute.",
      "The team that will go first will be decided by a toss at the beginning of the battle and thereafter the next team will go first in the next round and again the first team in the third round.",
      "In each round, both teams will have to perform on the same song. The third round of each battle will be a solo/duo type battle and a maximum of two switching is allowed.",
      "A penalty of 10 marks will be imposed for vulgar actions. extreme aggression or doing any such inappropriate action. Naked flames & live animals are not allowed. Violation of any of the above will lead to immediate disqualification.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1CvwP7F8zP8D9K_YSg1sTG2_0oNchpZGIW7iiomMYu4Q/edit",

    Minimummembers: 4,
    Maximummembers: 10,
    teamName: true,
    sponsor: true,
    audio: false,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "REFLECTION",
    Zone: "Dance",
    Poster:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1705653230/Reflection_lm60ke.png",
    miniDescription: "Duo",
    Description:
      "If you and your partner have outstanding synergy and coordination, then Reflection is the perfect platform to showcase your talent. Grab your partner and get the most out of this terrific chance to highlight your talent. Bear in mind that winning this competition will be quite challenging, so prepare yourself intensely and show your skills.",
    Venue: "Penman",
    Fees: 0,
    Contactdetails: [
      { name: "Praveen", phone: "+918008318685" },
      { name: "Kalpana", phone: "+919695126179" },
    ],
    Rules: [
      "Songs of all types/languages are allowed (remixes, folk, etc. are allowed)",
      "Props may be used to enhance the performance.",
      "Props used should be carried by the participating team themselves, the organizing committee will not be responsible for providing any kind of props.",
      "Props/Substances used during performance or clothing that may affect the clean dry surface of the stage and the safety of fellow competitors are prohibited. Participants using these kinds of materials may get disqualified.",
      "Performance exceeding the time limit will be penalized.",
      "Participants are requested to submit their tracks in .mp3 format well in advance as informed by the organizing committee.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1a_Of_-DirrypMGi6dDw0uC_zAs46aSEEN-XOxfQ8owA/edit",

    Minimummembers: 2,
    Maximummembers: 2,
    teamName: true,
    sponsor: false,
    audio: true,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "FOOTLOOSE",
    Zone: "Dance",
    Poster:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1705653130/Footloose_uhdneo.png",
    miniDescription: "Solo Dance",
    Description:
      "The ultimate solo dance face-off. It is for those who think they can set ablaze on the stage and steal the thunder while others stay watching with awe and jealousy! This is the ultimate quest for the greatest dancers",
    Venue: "Penman",
    Fees: 0,
    Contactdetails: [
      { name: "Praveen", phone: "+918008318685" },
      { name: "Kalpana", phone: "+919695126179" },
    ],
    Rules: [
      "Music pieces should be 2-3 minutes and it must not contain inappropriate, lewd or offensive language.",
      "Songs of all types/languages are allowed (remixes, folk, etc. are allowed)",
      "Props may be used to enhance the performance",
      "Props used should be carried by the participating team themselves, the organizing committee will not be responsible for providing any kind of props",
      "Props/Substances used during performance or clothing that may affect the clean dry surface of the stage and the safety of fellow competitors are prohibited. Participants using these kinds of materials may get disqualified",
      "Performance exceeding the time limit will be penalized.",
      "Participants are requested to submit their tracks in .mp3 format well in advance as informed by the organizing committee.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1CUdOqCi-1vkLI_1pvxAX2CC2PoO59PUlQrWvfKr7Ubk/edit?usp=drive_link",

    Minimummembers: 1,
    Maximummembers: 1,
    teamName: false,
    sponsor: true,
    audio: true,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "HUSTLE HERD",
    Zone: "Dance",
    Poster:
      "https://res.cloudinary.com/dfr1kvie3/image/upload/v1705652807/Hustle_Herd_i5hk2u.png",
    miniDescription: "Dance",
    Description:
      "Being a group is growing together and creating a sense of unity. When it comes to performances, having a united identity can be great for sharing experiences. Hustle Herd is here for you to show your teamwork and encourage these fantastic dance groups to showcase their talent.",
    Venue: "Penman",
    Fees: 0,
    Contactdetails: [
      { name: "Praveen", phone: "+918008318685" },
      { name: "Kalpana", phone: "+919695126179" },
    ],
    Rules: [
      "Songs of all types/languages are allowed (remixes, folk, etc. are allowed)",
      "Props may be used to enhance the performance.",
      "Props used should be carried by the participating team themselves, the organizing committee will not be responsible for providing any kind of props",
      "Props/Substances used during performance or clothing that may affect the clean dry surface of the stage and the safety of fellow competitors are prohibited. Participants using these kinds of materials may get disqualified.",
      "Performance exceeding the time limit will be penalized.",
      "Participants are requested to submit their tracks in .mp3 format well in advance as informed by the organizing committee.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1Q1iph9b87YA_W_zBBzwKbmqKvC9lMfNbh__FFmZTBNI/edit?usp=drive_link",

    Minimummembers: 5,
    Maximummembers: 35,
    teamName: true,
    sponsor: true,
    audio: true,
    instrument: false,
    accompanist: false,
  },
  {
    EventName: "HARMONY",
    Zone: "Music",
    Poster:
      "https://res.cloudinary.com/dvlxqrbjm/image/upload/v1705831608/ldv1fd3rzhl4fbwarsu0.png",
    miniDescription: "Music",
    Description:
      "Dive into the world of music at Harmony, where student bands bring the stage to life with captivating performances across all genres. There are no restrictions on the number of members in a team. Basic drum sets will be provided, allowing bands to focus on their musical mastery while arranging other instruments independently. Immerse in musical brilliance as student bands showcase their genre-defying talents.",
    Venue: "To be announced",
    Fees: 0,
    Contactdetails: [{ name: "Aneekesh Kumar", phone: "8439826290" }],
    Rules: [
      "Only the students and not the professional bands are allowed in the competition.",
      "There is no restriction on the genre of songs performed.",
      "The band will be given a maximum time of 15 minutes for performance + 5 minutes for sound setup",
      "Points will be deducted if time exceeds the allotted time.",
      "Drum set (basic one) will be provided to the bands. Bands need to arrange for their instruments themselves. A total prize money of Rs. 25,000 for the event No 2 bands can have the same members playing the same role.",
      "There is no restriction on the number of members in the band.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1qVgtpUZFsNC4W1tsHvSW-578uJb_DRj8-m-Hn3VRLwU/edit?usp=drive_link",

    Minimummembers: 1,
    Maximummembers: 50,
    teamName: false,
    sponsor: false,
    audio: false,
    instrument: true,
    accompanist: false,
  },
  {
    EventName: "AAROH",
    Zone: "Music",
    Poster:
      "https://res.cloudinary.com/dvlxqrbjm/image/upload/v1705831554/xfcc3g8bkycijlxgrvkv.png",
    miniDescription: "Music",
    Description:
      'Calling all singing enthusiasts! Manthan presents "Aaroh, " a solo singing competition that invites you to pour your heart out. A unique opportunity to showcase your diverse singing talent. Get ready to make a mark in the prelims and secure your spot in the final event. Join us, impress the audience, and become the singing sensation you\'ve always dreamed of!',
    Venue: "To be announced",
    Fees: 0,
    Contactdetails: [{ name: "Aneekesh Kumar", phone: "8439826290" }],
    Rules: [
      "Indian and Western Vocals will be judged separately.",
      "All the contestants will have to go through a prelims round. These participants will be judged and entry to the main event will be given based on that.",
      "Each Performer would be given a total time of 5 minutes on stage. Exceeding the time limit will cause deduction in marks.",
      "Each Performer is allowed to carry a maximum of two instrumentalists with them on stage to accompany him/her in their performance.",
      "The performer is also allowed to sing on a pre-recorded karaoke track. The performer will have to arrange for the karaoke track himself and submit it to the organizers prior to the event.",
      "Judging would only be based on the level of singing in the performance.",
      "All participants will appear in the prelims but only 30 vocalists would qualify for the finals.",
    ],
    RuleBookLink:
      "https://docs.google.com/document/d/1NypFIBw4NqfwlM2vIvFlHB7KBU8XdVa7ijXOgtlpIHI/edit?usp=drive_link",

    Minimummembers: 1,
    Maximummembers: 1,
    teamName: false,
    sponsor: false,
    audio: false,
    instrument: false,
    accompanist: true,
  },
  // {
  //   EventName: "Things the Brits Ruined(debate)",
  //   Zone: " Literary",
  //   Poster: "",
  //   miniDescription: "Debate Duels",
  //   Description:
  //     "Where Words Collide! Gather your debate partner and join the intellectual fray. In teams of two, go head-to-head on intriguing motions. Dive into rounds of riveting discussions, armed with your perspective and passion. Prepare, present, and conquer without revealing your strategy. Score points, ascend the ranks, and aim for the thrilling knockout rounds. Be Ready to turn your words into victories.",
  //   Venue: "",
  //   Fees: 0,
  //   Contactdetails: [],
  //   Rules: [],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/1f-BIk04mjMWzuo1-aLUHQ7t4bWE1UhaFQSK8GVy2X_U/edit?usp=drive_link",

  //   Minimummembers: 2,
  //   Maximummembers: 2,
  // },
  // {
  //   EventName: "The Quill Switch",
  //   Zone: " Literary",
  //   Poster: "",
  //   miniDescription: " Literary",
  //   Description:
  //     'Switch to a literary journey in pairs for "The Quill Switch." Form teams, pick a theme, and weave a cohesive story together. But here\'s the twist – every 15 mins, pass your creation to your teammate. With a minimum of 4 and a maximum of 8 exchanges, communicate solely through the written word. Silence is golden; let your story speak. Ready to switch pens and perspectives?',
  //   Venue: "",
  //   Fees: 0,
  //   Contactdetails: [],
  //   Rules: [],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/1tX0kYFnn7-vS-h-W3ULsxMrxnBwPXZTPCclOJJDiojU/edit",

  //   Minimummembers: 2,
  //   Maximummembers: 2,
  // },
  // {
  //   EventName: "Folktwist",
  //   Zone: " Literary",
  //   Poster: "",
  //   miniDescription: " Literary",
  //   Description:
  //     "An event where your imagination takes the director's chair! Ever felt a movie's ending could've been better? Here, we'll rewrite those endings together. This engaging event lets you reimagine and reshape cinematic narratives in a fun, interactive session. Come together with fellow movie enthusiasts and let your creative juices flow, ultimately leading to cinematic reinvention at 'Folk Twist.' Let's twist those tales together!",
  //   Venue: "",
  //   Fees: 0,
  //   Contactdetails: [],
  //   Rules: [
  //     "There will be 3 rounds.",
  //     "Humor and props may be used to support or illustrate the speech.",
  //     "Only the English language is allowed.",
  //     "The judges’ decision will be final and binding.",
  //     "The organizers have the right to disqualify any team at any time due to misbehavior on/off stage.",
  //     "One can participate individually or in a team (maximum 3 members).",
  //   ],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/1AuzYGZF2SP8O3EmRIijrYUVzm6IdXTw8THLLsSz81YE/edit?usp=drive_link",

  //   Minimummembers: 1,
  //   Maximummembers: 3,
  // },
  // {
  //   EventName: "Adaptation Showcase",
  //   Zone: " Literary",
  //   Poster: "",
  //   miniDescription: " Literary",
  //   Description:
  //     "The Adaptation Showcase, organised by BOOKCLUB IIT ISM for Srijan'24, invites participants to explore their favourite adaptations in media! Be it a book turned into a movie or a manga turned into an anime, come to the stage and talk about how good or horribly wrong the adaptation was—crack jokes, praise creative decisions and explore the limitations and strengths of various forms of media. The Adaptation Showcase will judge your speaking skills, creative thought and argumentative skills all while making you laugh! We look forward to your participation.",
  //   Venue: "",
  //   Fees: 0,
  //   Contactdetails: [],
  //   Rules: [
  //     "Each participant will have a maximum of 10 minutes to present their chosen adaptation",
  //     "Overtime may result in point deductions or disqualification.",
  //     "During panel discussions and participant showcases, audience members can participate in Q&A sessions.",
  //     "Entries will be judged based on creativity,depth of analysis, presentation skills, and overall engagement with the audience.",
  //     "Google Form will be circulated in whichyou have to write about your basic adaptation type before main showcase.",
  //     "Date and time will be announced till then Have fun!",
  //   ],
  //   RuleBookLink:
  //     "https://drive.google.com/file/d/1PICZf1ztZvjyX1d0L2fIEDNCNf7D8P1s/view?usp=drive_link",

  //   Minimummembers: 1,
  //   Maximummembers: 1,
  // },
  // {
  //   EventName: "Podfest",
  //   Zone: " Literary",
  //   Poster: "",
  //   miniDescription: " Literary",
  //   Description:
  //     "Experience the thrill of showcasing your quick thinking and captivating podcasting skills at PodFest, SRIJAN 2024, presented by LiveTalksISM. This event provides a platform for overcoming impromptu challenges, conquering your fears, and shining on stage, offering an enthralling experience for the audience. Join the Cultural Caravan and let your words become the wind, carrying the essence of diverse cultures to captivate the audience. Seize the opportunity to win fantastic prizes and make your mark in this exciting competition",
  //   Venue: "GJLT(Golden Jubilee Lecture Theatre)",
  //   Fees: 0,
  //   Contactdetails: [
  //     { name: "Harshita Mahbubani", phone: "9460682441" },
  //     { name: "Prajesh Anand", phone: "8503086164" },
  //   ],
  //   Rules: [
  //     "Props that will be provided: 2 tables, 5 chairs, 3 Microphones.",
  //     "No kind of absurd language or misbehaviour in the name of the character will be tolerated.",
  //     "Any team indulging in any such discrepancy will be disqualified straight away.",
  //     "The podcasts should be conducted in either English or Hindi, or both.",
  //     "You can come with a team of 2 to 4 members or come solo, and we will try to team you up with other solo participants.",
  //     "For the first round, teams will be called up randomly. Participants have the flexibility to select any theme that interests them, ranging from comedy and history to crime stories or any other topic, for their role-playing or discussion activities. They can play characters to talk related to the theme or just discuss themselves related to the genre. They will be given 5 minutes to discuss among themselves, after which each pair will conduct a podcast for 5 minutes each.",
  //     "For fun elements, each audience member will have the opportunity to ask three questions to the guests during the podcast.",
  //     "After the first round, the top 5 teams will advance to the second round.",
  //     "In the second round, you will be given themes/genres by us, and you have to act on them as a story-telling podcast. Teams will have 10 minutes to prepare for the given theme and 7 minutes to conduct the podcast.",
  //     "Penalty: 10 marks will be deducted for every additional minute. After the 12th minute, the participants will be asked to clear the stage with an overall penalty of 40 marks. The participants will be able to view a timer countdown for 5 minutes at all times. In addition, they will be given a warning when 1 minute is left on the clock.",
  //     "All the pairs would be judged on the following parameters by considering the cumulative performance of the guest and host.",
  //   ],
  //   RuleBookLink:
  //     "https://docs.google.com/document/d/1kdBTZdk7DvYNWZhc7uedtMYovMGnPrIila-ijiEksIE/edit?usp=drive_link",

  //   Minimummembers: 2,
  //   Maximummembers: 4,
  // },
];
export default events;
