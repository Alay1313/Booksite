const places = [
  {
    title: 'To Kill a Mockingbird by Harper Lee ',
    description:
      "Harper Lee’s To Kill a Mockingbird upends the quiet solitude of a segregated Southern town with a story of innocence and virtue, bigotry and hate, love and forgiveness. Eight-year-old Scout Finch and her father, Atticus, find themselves enmeshed in the trial of a Black man accused of raping a White woman.",
    imageUrl: process.env.PUBLIC_URL + '/assets/book1.png',
    genre: 'Coming-of-age-story',
    price: '12.00 USD',
    id: '00',
    time: 1500,
  },
  {
    title: 'The Fellowship of the Ring by J.R.R. Tolkien (1954)',
    description:
      'In The Fellowship of the Ring, the first book in the Lord of the Rings trilogy, journey to Middle-earth...Frodo is tasked with destroying the One Ring, the most powerful Ring in Mordor',
    imageUrl: process.env.PUBLIC_URL + '/assets/book2.png',
    genre: 'Fantasy',
    price: '9.99 USD',
    id: '01',
    time: 1500,
  },
  {
      title: 'The Handmaid’s Tale by Margaret Atwood (1985)',
      description:
        'Offred, a handmaid in the Republic of Gilead, has been removed from the home, family, and life that she knew only to be forced into service as a housemaid...As the population of Gilead falls, a woman’s value becomes contingent upon her fertility and ability to reproduce, and those who can procreate are stripped of their independence',
      imageUrl: process.env.PUBLIC_URL + '/assets/book3.png',
      genre: 'Dystopian',
      price: '10.99 USD',
      time: 1500,
    },
    {
      title: 'Dune by Frank Herbert (1965)',
      description:
        'Frank Herbert’s Dune tells the adventures of Paul Atreides—who will become known as Muad’Dib—as he and his family strive to bring humankind’s greatest dream to life while living on a desert planet.',
      imageUrl: process.env.PUBLIC_URL + '/assets/book4.png',
      genre: 'Science fiction/Fantasy',
      price: '14.99 USD',
      time: 1500,
    },
    {
      title: 'Great Expectations by Charles Dickens (1861)',
      description:
        ' Great Expectations details the life and stories of an orphan named Pip, growing up in Kent and London in the early to mid-1800s.',
      imageUrl: process.env.PUBLIC_URL + '/assets/book5.png',
      genre: 'Fictional auto-biography',
      price: '11.00 USD',
      time: 1500,
    },
    {
      title: '1984 by George Orwell (1949)',
      description:
        'Great Britain has fallen and given way to Airstrip One, a province of the fictional superstate Oceania. Airstrip One is ruled by perpetual war and Big Brother, a mysterious leader who uses omnipresent government surveillance and a cult of personality to enforce law and order. ',
      imageUrl: process.env.PUBLIC_URL + '/assets/book6.png',
      genre: 'Dystopian fiction',
      price: '9.89 USD',
      time: 1500,
    },
    {
      title: 'Fahrenheit 451 by Ray Bradbury (1953)',
      description:
        'Guy Montag’s existence in Fahrenheit 451 might hit a little close to home: He’s a fireman in a futuristic dystopian world whose job is to find and destroy the illegal commodities of a world whose sole focus is television: books. Indeed, Montag believes the printed word is dangerous—until...',
      imageUrl: process.env.PUBLIC_URL + '/assets/book7.png',
      genre: 'Dystopian fiction',
      price: '6.99 USD',
      time: 1500,
    },
    {
      title: 'Harry Potter and the Sorcerer’s Stone by J.K. Rowling (1997)',
      description:
        'Welcome to the wizarding world, muggles. In J.K. Rowling’s first installment of the beloved series, Harry Potter and the Sorcerer’s Stone, you will be introduced to many of the story’s most important—and entrancing—characters: Harry, Hermione, Ron, Dumbledore, Hagrid, and more. But before you get settled into the fun of spells and potions, the action starts right away as Harry finds himself troubled by the feeling his destiny is intertwined with his past.',
      imageUrl: process.env.PUBLIC_URL + '/assets/book8.png',
      genre: 'Fantasy fiction',
      price: '7.50 USD',
      time: 1500,
    },
    {
      title: 'The Fault in Our Stars by John Green (2012)',
      description:
        'She thought a cancer diagnosis had sealed her fate and written her life story, but a chance meeting with Augustus Waters turns Hazel Lancaster’s life upside down. Irreverent and bold, The Fault in Our Stars is a funny, captivating, and gut-wrenching story. It’s about learning to feel love, enjoy being alive, and live a bold life despite circumstances beyond your control.',
      imageUrl: process.env.PUBLIC_URL + '/assets/book9.png',
      genre: 'Young adult fiction/Romance novel',
      price: '6.99 USD',
      time: 1500,
    },
    {
      title: 'Alice’s Adventures in Wonderland & Through the Looking-Glass by Lewis Carroll (1865)',
      description:
        'If all you know of Lewis Carroll’s Wonderland is the zany but sanitized version of the 1951 Walt Disney animation, it’s time to flip your perspective on its head—much like the Cheshire Cat might flip himself. Scholars have tried to apply political, historical, and ideological theories to Alice’s Adventures in Wonderland and Through the Looking-Glass, but it’s quite simply the dreamlike story of learning to grow (or shrink) and explore, told through the eyes of a curious child',
      imageUrl: process.env.PUBLIC_URL + '/assets/book10.png',
      genre: 'Fiction/Childrens literature',
      price: '10.99 USD',
      time: 1500,
    },
];

export default places;
