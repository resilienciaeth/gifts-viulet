export interface Artwork {
  id: number;
  slug: string;
  title: string;
  image: string;
  wallpaperLink: string; // You'll add these links later
  mirrorLink: string; // You'll add these links later
  mirrorsWhisper: string; // You'll add these texts later
  soldOut: boolean;
  eventName: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    slug: "the-girl-who-burned",
    title: "The Girl Who Burned",
    image: "/images/girl.png",
    wallpaperLink: "/gifts/Benjamin Viulet - The Girl Who Burned (An Elegy For Ice)  - Wallpaper Edition.jpg",
    mirrorLink: "https://mirrorsbyviulet.com/products/the-girl-who-burned?utm_source=giftspage&utm_medium=wallpapers&utm_campaign=giftslink&utm_id=1",
    mirrorsWhisper: `The Mirror's Whisper is the voice behind the creation.

This is what The Girl Who Burned (An Elegy For Ice) has to say:

"How many years have you been playing dead while still alive?
Smiling when you wanted to scream.
Shrinking when every bone ached to take space.
Telling everyone "it's fine" while your chest burned with a truth you never spoke.

Do you even remember who first told you you were "too much"?
Do you remember how quickly you believed them?
How you bent your spine into something smaller, neater, easier to swallow…
and called it love, called it strength, called it survival?

You laughed quieter so no one would see the crack in your ribs.
You swallowed grief like medicine and said, "at least it makes me good."
You learned to be calm, controlled, polite,
while inside, your fire clawed the walls of your throat begging to be let out.

And tell me you not tired?
Tired of carrying winters that never end.
Tired of freezing your own heartbeat to make them comfortable.
Tired of pretending that ice is peace when it is really just numbness.

This is where the lie dies.

Because the blaze you have feared your whole life,
the one they told you would make you crazy, difficult, unlovable,
that fire is not your enemy.
It is your hearth.
It is the only thing that will ever keep you warm.
Because it is you. Your essence. Your Heart.

You are not here to torch yourself.
You are here to burn the frost that kept you bowed, muted, erased.
Wear the black, this is an Elegy For Ice.
And rise baptized in water and flame
a communion with your own soul.

Yes, it might hurt to thaw.
Yes, you will cry like the first time you were told to "calm down."
But when the tears are done, what remains is only ever light.
What remains is your own sacred climate.

You are not too much.
You are too enclosed.
Your flame was never dangerous,
it was only waiting for you to embrace it.

This is the funeral of your frost.
Thank the ice for protecting you.
And leave it in the snow.

Because you,
you are the Girl Who Burned.
The woman who finally surrendered to her own heat.
The soul who stopped apologizing for being alive.

So laugh without shrinking.
Cry without shame.

The fire within you is not your punishment.
It is your home.
It is your Self.

I see you. I know you. I love you.
Now burn, and live."

BV`,
    soldOut: false,
    eventName: "click_the_girl_who_burned",
  },
  {
    id: 2,
    slug: "the-courage-of-the-coward",
    title: "The Courage Of The Coward",
    image: "/images/courage.png",
    wallpaperLink: "/gifts/Benjamin Viulet - The Courage Of The Coward - Wallpaper Edition.jpg",
    mirrorLink: "https://mirrorsbyviulet.com/products/the-courage-of-the-coward?utm_source=giftspage&utm_medium=wallpapers&utm_campaign=giftslink&utm_id=1",
    mirrorsWhisper: `The Mirror's Whisper is the voice behind the creation.

This is what The Courage Of The Coward has to say:

"There you kneel, trembling in the water. You know the truth already, don't you?
You've known it for years.
It sits beneath your ribs like a caged animal, pacing, whispering: "move".

But the mind—oh, the mind—writes its letters of comfort: Stay. Wait. Be reasonable.
It calls fear logic, and safety wisdom.
It feeds you sweet poison in the language of maturity.
It says, "Don't bleed, not yet. Don't speak, not now."
And so you sink, waiting for permission that never comes.

You have been standing in this same water far too long, have you not?
You have told yourself you are patient, but what you really are is paralyzed.
You have stayed where your soul was already gone,
because leaving looked like dying.

And yet, every day you perish a little more by staying.
The coward is not the one who trembles;
the coward is the one who hears the call and builds a theory to ignore it.
You have been that coward.
So have I.

But look, there, at your own hand.
It's shaking, yes, but it is reaching forth.
You take the blade of words, the blade of truth. You bleed.
And for the first time, the blood feels clean.

Because truth always cuts before it heals.
Because endings are not cruelty, they are clarity.
Because love, real love, begins the moment you stop pretending.

So let it pierce you. Let it spill. Let it end what must end.
Do not wait for the pain to leave; it is the proof you are alive again.

Bleed, and let the flowers grow.
Because flowers do not bloom despite the wound, they bloom through it.
Petals burst where the cut once stung. Roots take hold where you thought only pain lived.
Every tear that falls waters the soil of your becoming.
Every tremor, every gasp, shapes the garden you will one day stand in.

To choose the one cut that frees you over the thousand small wounds of delay.
To choose truth, even when it shakes you.
To watch your own blood become a seed,
and your own hurt become a bloom that feeds the world.

Do not fear the flowers. They are you.
Do not fear the blood. It is not an ending; it is the beginning of warmth remembered.

This is the day you follow that knowing deep within your bones.
The day the Coward dies in the name of Courage.

I see you.
I know you.
I love you."

—BV`,
    soldOut: false,
    eventName: "click_the_courage_of_the_coward",
  },
  {
    id: 3,
    slug: "the-noxious-orchard-of-vice",
    title: "The Noxious Orchard Of Vice",
    image: "/images/noxious.png",
    wallpaperLink: "/gifts/Benjamin Viulet - The Noxious Orchard Of Vice- Wallpaper Edition.jpg",
    mirrorLink: "https://mirrorsbyviulet.com/products/the-noxious-orchard-of-vice-mirror?utm_source=giftspage&utm_medium=wallpapers&utm_campaign=giftslink&utm_id=1",
    mirrorsWhisper: `The Mirror's Whisper is the voice behind the creation.

This is what The Noxious Orchard of Vice has to say:

Once someone told me the definition of Hell: On your last day on Earth, the person you could have been will meet the person you ended up being.

And day by day, you water your Orchard.

With every Habit, Every Vice.

So now, close your eyes and with presence ask, what things am I doing in my daily life that I KNOW will ruin it in the long run? The answer is instantaneous. There it is. You always knew. Maybe it's what you eat. Maybe it's the hours on your phone before sleeping. Maybe it's attitudes. Maybe it's people who surround you. But you asked, and consciously you know! You already know what is keeping you from reaching greater happiness and experience!

But do you change?

No.

You keep watering Your Noxious Orchard of Vice. And you continue. And continue. And the days pass. The months pass. And suddenly it's 2023.

What happened? With the gym? With the Language? With that course? How much did you water the Tree of Habit? It grew a lot. The rope is tightening. This time you realize. You have to stop watering it. You know it's ruining you, but still, you keep succumbing to it.

But do you change? Do you stop watering it? No.

And years go by. Each day taller, more rooted, your Noxious Orchard of Vice. And the rope already cuts off your air. And as time is, the years go. You are 80 and all this time you watered it. You are dissatisfied, you grumble at life. And how can you not grumble if there's a rope cutting your air?

It's your last day and you are already hanging by the neck.

You see someone approaching. Wow, how much they look like you. But no. They smile, stand taller, walk with an air of love.

Who knows what that person achieved to walk like that?

You envy them. You hate them.

They look you in the eye and you understand. That person you could have been. But you decided to water Your Toxic Habit.

And with a tear of regret,

you leave this world.

Or, if you have some wisdom, you stop watering Your Noxious Orchard, thank the great Viulet, and by simply ceasing to succumb to those habits you know only kill you and bring nothing but unhappiness and brief disconnection and oblivion, you start to notice how your life improves.

And Your Noxious Orchard of Vice.

dies in the drought.

BV`,
    soldOut: false,
    eventName: "click_the_noxious_orchard_of_vice",
  },
  {
    id: 4,
    slug: "the-winter-between-us",
    title: "The Winter Between Us",
    image: "/images/winter.png",
    wallpaperLink: "/gifts/Benjamin Viulet - The Winter Between Us (A Plea To Turn) - Wallpaper Edition.jpg",
    mirrorLink: "https://mirrorsbyviulet.com/products/the-winter-between-us?utm_source=giftspage&utm_medium=wallpapers&utm_campaign=giftslink&utm_id=1",
    mirrorsWhisper: `The Mirror's Whisper is the voice behind the creation.

This is what The Winter Between Us (A Plea To Turn) has to say:

"There you are.
And the winter is between you.

Not between lovers.
Between you and Love itself.

Two good people, inches apart, miles away.
You learned your roles and called them love.
Both of you said I'm fine. Both of you froze.

You freeze bare-chested in the storm.
And you freeze wrapped in furs.
It makes no difference for numbness does not come from the cold,
It comes from the structures within.

You have mistaken structure for safety.
You have called performance love.
You have followed the script so tightly
that your heart forgot how to speak.

As a man, you were taught the myth:
"I will suffer for her, and that will make me worthy."
"I will endure, and in my pain I will prove devotion."
So you tighten your jaw and call it strength.

How long will you keep dying in the name of being dependable?
How long will you confuse pride with love?

As a woman, you were taught a softer cage:
"I will be calm. I will not need. I will wait to be asked."
"If I smile, he will feel better, and that is care."
You call your distance grace.
You freeze, and tell yourself, I'll turn when he asks.

How long will you keep pretending composure is compassion?
How long will you freeze in politeness,
while your hands ache to turn and hold him?

He mistook endurance for devotion; she mistook silence for grace… and both called it peace.

You both stand in a storm of shoulds,
obedient, admirable, dying. Like a brainwashed soldier.

You kept your vows, but not your warmth.
You learned to perform love so perfectly you forgot how to feel it.
You called it maturity. It was fear wearing nice words.

The saddest part is, you both wanted the same thing: To turn. And neither moved first.

The umbrella has become a wall.
The coat a costume.
The snow your shared silence.

You have been lied to.
Love does not demand suffering.
Love does not require permission.
Love does not live in roles…
It lives in truth.

So let it burn through the scripts.
Let it tear through the etiquette.
Let it melt the distance you've built in the name of dignity.

Turn.
Not forward, toward.
Move the umbrella. Share the coat.

Do not wait to be asked.
Do not wait to be safe.
It was never about enduring the cold,
it was about building a fire… together."

—BV`,
    soldOut: false,
    eventName: "click_the_winter_between_us",
  },
  {
    id: 5,
    slug: "the-war-within",
    title: "The War Within",
    image: "/images/warwithin.png",
    wallpaperLink: "/gifts/Benjamin Viulet - The War Within  - Wallpaper Edition.jpg",
    mirrorLink: "https://mirrorsbyviulet.com/products/the-war-within?utm_source=giftspage&utm_medium=wallpapers&utm_campaign=giftslink&utm_id=1",
    mirrorsWhisper: `The Mirror's Whisper is the voice behind the creation.

This is what The War Within has to say:

There is a war inside you.
You already know this.

Not the kind that shouts—
the kind that waits.
That bleeds quietly.
That you carry everywhere, even when you smile.

The mind always speaks first
"Stay here."
"Be smart."
"Stay where applause is guaranteed."

It makes sense.

And God, how much you've tried to make sense.

You've folded yourself into logic
so many times
you forgot what your shape used to be.

But sense is not the same as peace.
And you know that too.

Then comes the beat
It doesn't speak.

It shakes.
It burns.
It aches.

It doesn't tell you what to do—
it asks if you remember.

"Is this really it?"
"Is this the life you promised yourself?"

You hear it.

But it doesn't come with proof.
Only a pulse.
A rawness.
A pull.

But fear is fluent
"You don't have enough money."
"They'll leave."
"You'll fail."

It's convincing, isn't it?

How it sounds like your voice.
How it uses your mother's tone.
Your father's silence.
Your culture's shame.

So what now?
Do you choose the voice that kept you safe—
or the one that never stopped shaking?

Do you honor the traditions
that built your prison—
or the feeling
you've buried beneath decades of being "reasonable"?

There's no right answer here.
Only one that leaves you dead while breathing,
and one that burns everything you thought you were.

You already know which one you're avoiding.

And maybe—
it's time to ask yourself why.

Choose now.
Because if you don't—
you will wake in ten years
and not recognize your own reflection.

You will hear a voice laugh in your chest,
and it will not be joy.
It will be grief.
Grief for all the songs you never sang.
Grief for all the oceans you never swam.
Grief for the self you exiled
in the name of being acceptable.

But if you leap—
you will not land where you think.

You will land where you've always belonged:
in the center of your own becoming.

Raw. Unplanned. Infinite.

Not a product of perfection,
but a testimony of truth.

So go.
Not because it's easy—
but because your soul is already halfway there,
screaming at the edge of your ribcage:

"I didn't come here to watch.
I came here to burn."

i love you,
bv`,
    soldOut: false,
    eventName: "click_the_war_within",
  },
  {
    id: 6,
    slug: "letters-to-the-subconscious",
    title: "Letters To The Subconscious",
    image: "/images/letters.png",
    wallpaperLink: "/gifts/Benjamin Viulet - Letters To The Subconscious - Wallpaper Edition.jpg",
    mirrorLink: "https://mirrorsbyviulet.com/products/letters-to-the-subconscious?utm_source=giftspage&utm_medium=wallpapers&utm_campaign=giftslink&utm_id=1",
    mirrorsWhisper: `You are not broken.
You are not behind.
You are not too late.

You are simply—buried.

Buried under years of fear, forgetting, and trying to survive in a world that taught you to shrink.
But still, you are here.

And yet, you feel trapped—not by walls, but by the storm inside you.
A storm made of thoughts you didn't ask for, patterns you didn't choose, and stories you've believed for far too long.

The waves crash, the winds scream, and you sit inside a cage.
Not locked.
Not sealed.
But familiar. Safe, even.

A cage built of old memories and self-protection.
But today, something stirs.
You look down.
In your hand is a brush—shaking, but still yours.
Covered in colors that whisper of pain,
of hope,
of truth.

And still, you paint.

Why?
Because something deep inside you remembers:
The world outside mirrors the world within.

And if the storm began within you,
so too can the calm.

Every moment of insecurity,
every heartbreak,
every self-sabotage—
it wasn't punishment.
It was a reflection.

A letter from your subconscious, begging to be rewritten.

You've told yourself,
"I'm not enough. I'm too much. I'll always be alone."
And so, life mirrored those beliefs.
Not because they were true—
but because you believed them.

But now,
you're allowed to change the script.
You're allowed to stop writing letters soaked in fear—and start sending messages of love,
of power,
of possibility.

Today, you pick up the brush again.
You paint not the storm, but the sunlight after it.
You paint the version of you that's always been waiting:
bold,
beautiful,
whole.

And day by day,
stroke by stroke,
the cage dissolves.

Until one day, you see it clearly:
You were never the storm.
You were always the artist.
You were always the light.

So breathe.
Stand tall.
Paint a new beginning.

I see you.
I know you.
I love you.
BV.`,
    soldOut: false,
    eventName: "click_letters_to_the_subconscious",
  },
];

