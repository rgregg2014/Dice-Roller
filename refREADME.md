## The Goal Here

The goal of this page is to play around with the skills I picked up in class to make an all-in-one resource for my weekly TTRPG sessions.

I am a big ol' nerd, but an organized one. And having a thousand browser pages open to run one game is a pain. I plan to make this as mobile responsive as possible to allow for easy gaming on the go. Sure, there are other sites already available, but I can cusutomize this one with tools I actually need in each session.

## The Landing Page

The first thing I'm building is a dice roller. In class, we just picked up vanilla JavaScript with a random password generator. The same methods and techniques can be applied here. I'm making this the primary landing page because, by far, the thing I do most in a session is roll dice.

The goal with this page is to allow users to roll any of the die types as many times as they want, add custom modifiers, and output both the individual die rolls and the total (dice + modifiers). I want the digital experience to be as thorough as the analog expeience.

In other words, if a user wants to roll 2 8-sided dice and add a +3 modifier after the fact, I want them to see each of the d8 rolls as well as the total with the modifier.

In terms of design, I wanna keep it really simple and uncluttered. Each die type will have a wireframe png image with the shape of the physical die to identify them at a glance. Headers and navbars will be at the top of the screen with plenty of space to male it easier to navigate to future content.

As far as color scheme goes, I'm keeping it pretty close to black and white. It's easy to read and never looks dated. And, when I'm streaming my sessions, the white browser will serve as a fill light in a dark corner of my office. Fonts will be serif to evoke an academic/literary feel in a stark, digital space

Each die type will be its own separate card on the page to allow CSS media queries to respond to screen size for ease of use.

So:

AS A USER:

WHEN I navigate to the landing page,
THEN I am shown the 7 core die types as random number generators.

WHEN I want to make a roll,
THEN I want to customize the number of dice and modifiers.

WHEN I roll the dice,
THEN I want to see each individual roll and a total with applied modifiers.

WHEN I want to make another roll,
THEN I want the fields to clear without having to refresh the page.

## Plans Beyond the Landing

I don't want this to just be a landing page. As I learn more, I want to expand the content to other resources I use in-game.

- Naming things on the fly is a pain. I'd like to make a random name generator for both NPCs and places.
- A resources page with links to other helpful pages, like the basic rules or videos on campaign-specific topics.
- A session scheduler
- A Vicious Mockery Generator
- One-Shot Mad Libs
  -Using Node.js to generate random music

I plan to expand this page as I learn more. I'm sure more ideas will come as I realize what's possible.
