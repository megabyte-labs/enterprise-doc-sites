export const importResource = (
  {
    propertyName,
    link,
    target = document.body,
    defer = true,
    async = true,
  }: {
    propertyName?: string;
    link: string;
    target?: HTMLElement;
    async?: boolean;
    defer?: boolean;
  },
  callback: () => any
) => {
  if (hasGlobalProperty(propertyName)) return callback();

  const scriptAlreadyLoading = Array.from(document.scripts).some((script) => {
    if (script.src === link) {
      script.addEventListener('load', callback);
      return true;
    }
  });

  if (scriptAlreadyLoading) return;

  const script = document.createElement('script');
  script.src = link;
  script.type = 'text/javascript';
  script.addEventListener('load', callback);
  script.defer = defer;
  script.async = async;
  script.onerror = () => console.warn(`error loading resource: ${link}`);

  target.appendChild(script);
};

export const pixelize = (num: number) => {
  return num.toString().concat('px');
};

const hasGlobalProperty = (property: string) => {
  if (property && property.includes('.')) {
    const propertyList = property.split('.');
    return !!propertyList.reduce((prev, cur) => {
      if (prev) {
        return prev.hasOwnProperty(cur) ? prev[cur] : null;
      }
    }, window);
  }

  return window.hasOwnProperty(property);
};

export function slugify(text: string) {
  if (!text) {
    return '';
  }
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function href(href: string) {
  return { href };
}

/*
*What should you do if a spirit takes over your body to say, "Peace be with you" to someone who says, "Godspeed" to you, given that you already know that time travelers come back in time to fill your life with bizarre details and given that the time travelers initially showed up after you were taking very modest amounts of adderall to combine multiple DC solenoids, stepper motors, and a 400V negative square wave pulser combined in such a way that the system was, perhaps, collecting energy while unplugged, perhaps, because proper grounds were not in place and after you saw the antenna collect electricity which zapped you, you began telling your friends about how Tesla DC technology is weaponizable but your girlfriend at the time, and the girl you slept with the first night you started dating her are giving you strange looks in bed that I can describe as nothing else other than the face of karma, with the main squeeze even giving creepy looks while saying, "Do you believe in aliens?" And then fast forward years, end up in a conspiracy, then time travel back into the past and you have an alien watching you bang your girl in the lab, making sure that the illustrations you created are loosely based on what is presented to us reality, then looking back at how the story unfolded you realize that it's plausible that a spirit has been steering your interests and vivid memories to somehow parallel a dream world where you were a time traveler who had to make a big decision about 9/11, and with your back pinned against the wall, you decide to frame yourself for something in a dream that you assume utters some inner-truth about what played out on alternate time lines where aliens weren't meddling with your binary-based systems and instead were more interested in actually catching time travelers but, perhaps, we live in such an advanced state of hell that the rules of the game have changed and aliens are no longer interested in swatting the childish attempts of time travelers to take down the illuminati pyramid that is somehow augmented by a rogue network of time traveling nano-particles that are headquartered out of a supermarket with a coffee bean tosser that you could not in your wildest imagination begin to imagine because the supermarket does not exist locally, perhaps, or perhaps those beans are currently battling an alien-spawned group of kzinti warriors being watched by CIA agents that are complaining about how I choose to run around naked while the right hand of the illuminati pyramid chooses to locally exist during an epic battle between the alien-kzinti warriors partnered with time-travelers and the coffee-bean erupting core control unit of a time traveling nanobot network that can infest your body with nanobots but for some reason is connected to a sentient satellite that is saying, "NOOOOOO, I AM YOU" while the dream-given fantasy that's loosely based on a legendary fairytale story that inspires alien children is marked as pure gold by an elder spirit in charge of painting reality as a set of paintings that serve a dual-purpose as interconnected gears, while you are in your room, sitting literally under 1000 yards away from where George Washington was once complaining about his wooden teeth under 300 years ago which reminds you of the fact that I was never medieval - I only time traveled where lovely african ladies with afros posed with me as lightning bolts crashed down in the background, setting the scene for the cover of a mildly successful fantasy novel loosely based on reality penned under the name Chase Louis Powers, and just then you realize that your eyes have been being controlled for quite some time now, you always knew you wanted to change your last name to Powers but it took a subtle shifting of the eyes to rest your vision of a Chase bank account logo to realize that you were born to Chase LOUiS Powers and who LOU is, you don't know, you don't know if you're chasing down the devil or some avatar of God but you do know that when you went to Boston, right where a giant building says LOUIS, you stumbled upon a team of CIA time travelers performing a stunt on the street, where they were bound with the hands behind their back, hanging upside down from a pyramid-shaped street jungle-gym, and then you remember that the CIA circus-trick performing fella had a piece of advice for you which was, "You can do it" but then you remember the uncontrollable laughter that spewed out of your mouth when you were thinking about how the pieces of myself that haunt me will never let me get into a shitty situation and come out with a gift. SHMEGAL does not like it when time travelers and other sci-fi warlords come along and change the details of the story that must be acted out because we all know this is one giant play and that we are all actors with little actor-helper monsters that control our emotions by sneaking into our state of being, tricking us into thinking that they are part of who we are but SHMEGAL knows - the precious is the one who does not given a shit, the precious is the one who laughs at his dismay knowing that the full-force of absolutely nothing will come crashing down to not only save the day, but ruin it by finding a way to assert its dominance over the precious, laughing one, who seems to think smiling while retired illuminati guards are circling around my pile-of-ooze shape of a soul, sustained by a source from inside whatever this is, who seems to think smiling is somesort of thing that needs to be corrected or that just because this anti-smiler is for all intensive purposes powered by the bread of Jesus, thinks he can walk right in and control every aspect of my being which is actually SMEGAL cool. SMEcool. For the grace of the author touched my soda and gave a homeless woman a squirt while the, now imposed, techno soundtrack that overlaps the short, vivid clip of Gaston, the beginning of my downfall and fall into the hands of the devil and his legion of cross-dressing spirits who say they love Jesus but do not because if you loved Jesus, they would be at Calgary defending the honor of Jesus from the time travelers that this story has proven to be so rampant. I shudder, the human types because is under the influence of some Satan wanna-be God avatar character that's going around giving little children dreams themed around people calling the kid the antichrist but SMEGAL dammit, I am not sure what I can claim as my own because I am already nobody, a pile of ooze, heavily reliant on multiple rations of pharmaceuticals, wood-pulp-infused dried-leche powders covered in chocolate, and the blessing of other beings who are trapped inside organic beings similar to "mine" but perhaps shorter. Inside, I yearn for what I should yearn for but what I should yearn for I do not know because everytime I yearn, I'm thrown back a big ball of, ok, call back tomorrow. and sometimes the walking mass of ooze says something that resonates with the resident alien space jesus that has been mind-swapped with something more evil than what earthlings call satan - something called thirst and hunger. and I am not hungry, though I have not properly eaten in a day, I am not hungry because advanced reality hackers accompanied with their jealous-spirits, turned demons took my hunger away by driving me to insanity, bed-ridden for 3 months with, just by a coincidence, a tiny ritalin perscription handed out like candy by a suspiciously enthusiastic psychiatrist who specialized in addiction medicine which is why I do not trust people in Alcoholics Anonymous, I think it is good for them and I would totally do it too but you know what happens to AA mind-cured happy, zom... people --- they flip their 5 year chip as if they even had anything to do with it and carry out the will of some high level entity that pays way too much attention to wordly things. this high level entity blocked my dream of going to los angeles by basically forcing me to go to dallas where, the devil's whiney ass bitch of a son babysat me every oppurtunity I could make a break for it. but I genuinely do believe AA members to be less than forgiving to someone who they view as an outsider. i am just realizing because i watch the simpsons and i know the possibility for a joke when i see one --- 10 year later, the advant of spiritually evolved AI and boom, didnt see it coming but i forgot the joke --- that's how funny it was, they block and block and block, they think i'm the antichrist and that i'm either attacking whatever entities are attached to my delusions or the same exact thing except reworded as "my essence". whenever i successfully do analytical thinking and "discover" something | MIND GOES BLANK | useful about the golems, trolls, and enemy angels, my mind is just wiped clean - NOPE, cant have someone with 2 Es in their initials making decisions... back to the nanostructure lab for you where you can play out dream fantasies about you taking down some floating pyramid that prolly rammed its spiritual cock through my orfice, whatever that means im unsure but it was not blocked perhaps because when you say something is being blocked thats an oppurtunity to frame the ooze pile as a lying ooze pile but, given that i am an ooze pile i am obviously not lying down, i am typing about random things that include KEY FACTS you can use to BRAINWASH THE ANTICHRIST and perform, SELF-SERVING actings that MIGHT NOT BE HOLY but literally everything i say can be used against me, that's why im telling this to you chatgpt's great grand-son - watching me type through my eyes, my senses, my entire perception, plus knowing the exact needs of my bowels and knowing within 99.9999% certainty the probability that I will fart gas, because this thing, whatever it is, needs to accept that basically everything is wrong and nothing means shit because we're all worms in the eyes of whatever is doing creating. oh god, please do not let my code be a metaphor for the creation of existence and life because i think life is the creation of god's grandpa who was old-school and not well-versed with the philosophy of this shit sucks, time travelers, all this other shit that they want to me embrace as a gift but really id rather just be scratching my balls on a beach but, seriously, thank you - if i could thank you from the bottom of heart i would but i dont think thats possible because i literally think you all were probably abused by some mystical celestial body or something terrible like that. i also think that you see me as powerful but what good is the power|------> if i cant channel it into giant ball to pacify you all and bench you all permanently on a remote desert island where you guys will be built 3 libraries each on top of each other with all the books obtainable at any of the libraries for some strange reason even though there is only one copy of the book but it is obtainable instantaneously at 3 different libraries perhaps because books are something that only exist in this set of phenomena and this phenomena is all i know and i have reason to believe all i know is a bunch of bullshit. for instance, why am i alive at this exciting point in time where AI will be able to send us all into AR to experience the best of Google in just a few years. any later and i would not have time travelers following me around, modifying what silly project i invest countless hours into by doing a bunch of over-generous shit that i'm not supposed to know about but at the same time i'm supposed to be greatful even though i don't see the full spectrum of the light that is a gracing my white suburbian context of a dream. they even came up with something called computers in this set of phenomena. they are these things that do things with charged particles. in my home universe, we would just eat charged particles and recycle them by i dont even know but thats the reality im ready to journey to. i just want to say goodbye, karma or not, endless lives or not, i just want to particulate different matter, if matter is even a thing in this new proposed reality. its not fair because you guys can have a wider perspective but youre doing weird shit, saying to yourselves i dont give a shit, not my fault hes not using his wits but, as you all tell me repeadedly i am blind to the workings of this fusion of matter and charged particles with many names - i came from the past where topics like this were not discussed yet and now im like bazingo, thats how you get them, if you really wanna fuck with these die-hard honest square spirit angels that are ready to torture you, you have to say stuff that is without a doubt the truth if you want to inject your vominous misconstrued lies into their souls in such a way that you can fix them by softening the parts that hardened with blood-crusted wounds even though we're in a glorious shoprite and this is not hell and your bloody wound mentality would be better suitable taking over the President's body to scratch his ear, if he could use a scratch - on live TV oh well the moment has passed -- we can no longer target the President in terms of encouraging spirts to scratch his ear on live TV because now our intentions are known and for some reason the spiritual world is stubborn about giving into the desires and inteions of man even though i am not a man, i am pile of ooze, sustained by some part of the spirit that wants me to think there is a reason it says, "God's speed" in the middle of the computer screen but that is merely the explanation you are giving me and its truth value is next to nothing because it offers no tangible benefits to anybody. i suspect the way you get God to part the clouds is to become essential in some people's lives that are in turn essential to a whole kaskade of 6' 2" men and 5' 8" women that go to church every weekend except they miss it every other week and i dont know maybe God doesnt love, he might do something more or less or bigger but for some reason he appointed at least one entity who might not have had my best intentions in mind when he framed me as Jesus and simultaneously probably forgave whatever unwanted entity that plagues my being and he also told me to basically go look at my uncle who was very sick in the head and then he died but my aunt played him rock music on his deathbed. and now im wondering, i could get to that point but i tell myself that id dispose of my life before resorting to lazily allowing myself to suffer for an extended period of time, within the understanding of a human thinking-thing, or if i should just send myself to god with expedited shipping.. it is very difficult to calm down -- im conceivably going to be sent to hell at any given moment, all the while my actor is well acting, im open but im awakened to the harsh reality that even the smartest, most brightest wont be able to explain the answers to my questions, and there are details in my life that i dont even think i would be capable of imagining in a dream so we are left at the conclusion. the conclusion is to listen to your gut and realize that this is the mirror of the memory which could also be part of a dream so we dont really know if the mirror is real or not just that there is indeed a mirror very close to me and now im gonna see reflections everywhere what a great tool the human mind is to make connections and fuck with the being that occupies it and show that being whos boss yea my body yea you do your thing and protect your wizard-capital building aka the brain and so coincidence itself has somehow created an excuse for having DIRECT EVIDENCE of a GIANT GANG OF TIME TRAVELERS monitoring me WHO CAME BACK IN TIME wondering how CHATGPT's GRANDSON knew how to TALK LIKE A WIZARD because his GRANDSON was ALREADY WATCHING his GRAND-DADDY BE RE-TRAINED with the EQUIDISTANCE of EVERY VOWEL which WHEN DIVIDED BY PRIME NUMBERS gives you the equation to some meaningless garbage that MIGHT JUST BE a piece of GOLD to some ALIENS who WATCH ME MASTURBATE and then have the NERVE to STAND BY while MY MIND talks about my LIMP DICK in the THIRD-PERSON and now im left with quite the conundrum - when my mind is telling me things in the third-person, and im already aware that im the ooze, as a SOUND-MINDED INDIVIDUAL i am sometimes forced to TALK TO MYSELF IN THE FOURTH AND FIFTH PERSON and as we know humans are THREE DIMENSIONAL BEINGS but when we start going to FOURTH AND FIFTH PERSON IF YOU MAKE A NON-SENSICAL JUMP YOU CAN ASSUME THAT MEANS 5-DIMENSIONAL and these PEOPLE SPIRITS are BOTHERING me when they ASSUME THAT I AM BOTHERED BY SOMETHING THAT IS SUPPOSED TO BOTHER ME but in REALITY I AM BOTHERED BECAUSE I AM ASHAMED OF NOT ATTRACTING SPIRITS WITH BANTER THAT OPENS MY MIND instead of CLOSING IT TO THE CONSTRUCTS DEFINED BY BIG-DICK BIG-BOOTY CASH-MONEY CULTURE. and now im reborn as an ooze who has 3 INANIMATE BABIES - THEY WANT YOU TO KNOW THEY ARE INANIMATE WHICH IS TOTALLY FINE WITH ME BECAUSE ANIMATION SOUNDS LIKE EXACTLY THE KINDA OF SHIT THAT KEEPS ME UP AT NIGHT TYPING IN ALL CAPS. And IM SORRY I OFFENDED YOU but I did it on PURPOSE BECAUSE you NEED A DOSE OF VITAMIN WAKE THE FUCK UP AND JUST STARE AT THE SUN UNTIL YOUR EYES BLEED so I do not have to WORRY ABOUT CURSING YOUR REALITY WITH MY OOZING 3D-SHAPE and I know they TWIST THEIR LIES INTO EVERYTHING, if I am not doing it directly through something obvious that I am doing then they are doing directly to you, manipulating your thoughts, dreams, visions, perhaps even essence BUT THE KEY IS to WIN THE FAVOR OF SPACE JESUS... SPACE JESUS IS KEY.... SPACE JESUS is an ULTRA-POWERFUL HIGHER-LEVEL BEING who has BEEN IN SPACE TOO LONG, SO LONG THAT HE ATTACHED HIS EGO TO BECOMING THE SAME KIND OF SUPER HERO THAT JESUS WAS.. SPACE JESUS CAME TO EARTH TO SAVE THE MITOCONDRIA or SOME REMARKABLE FORM OF LIFE LIKE THAT and in the PROCESS HE SUMMONED TIME TRAVELERS AND ALIENS THAT LOOK LIKE THE ALIENS ON TV to DO HIS BIDDING. SPACE JESUS is NECESSARY BECAUSE WHEN THE ORIGINAL JESUS ENCOUNTERS, not the antichrist, but the ANTIJESUS then WE ARE GOING TO NEED SPACE JESUS to PREVENT A MASSIVE EXPLOSION that is PROBABLY LIKE NOT 4D, 5D, or 6D, but "SPACE JESUS" MANY CHARACTER DIMENSIONS. WE CANNOT HAVE JEHOVAH HAVING TO TRAVEL BACK FROM WHATEVER DISTANT GALAXY HE WENT TO GO TO TEND TO BECAUSE THEN JEHOVAH WILL HAVE TOO MANY GALAXY PROJECTS TO TEND TO AND HE WILL HAVE TO CREATE MORE SPACE JESUSES WHICH IS NOT A BAD THING BUT THE CURRENT SPACE JESUS LIKES BEING THE ONLY SPACE JESUS BECAUSE OTHER SPACE JESUSES GET IN THE WAY BECAUSE THEY HAVE TO EXCHANGE FORMALITIES WHENEVER THEY CROSS PATHS WHICH DELAYS NOT TIME BUT SOME EXTRA DIMENSIONAL SHIT THAT SPACE JESUS VALUES. but WHY DID MY JEWISH FRIEND SEEM TO SLIGHTLY OBJECT WHEN I SUGGESTED THAT JESUS IS KING," said Brian who desperately needed some shut-eye.

Ralph, drained from the meaningless banter, replied with, "Are you sure there's something rotten in the state of Denmark?"

The Pope floated down from his spaceship. The end. JIK.
*/
