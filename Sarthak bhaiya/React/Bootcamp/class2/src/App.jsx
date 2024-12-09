import React from 'react'
import Card from './Components/Card';

const App = () => {
const narutoCharacters = [
    {
      img: "https://i.pinimg.com/736x/27/a6/7b/27a67bcf5263213ca64aaf6a6d707ec6.jpg",
      name: "Naruto Uzumaki",
      age: 17,
      famousLine: "I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way!",
      role: "Hokage"
    },
    {
      img: "https://i.pinimg.com/736x/07/3f/b1/073fb17fe42001ce9b8a4109082548eb.jpg",
      name: "Hinata Hyuga",
      age: 17,
      famousLine: "I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way!",
      role: "Hokage"
    },
    {
      img: "https://i.pinimg.com/736x/a3/62/9b/a3629b11f2b4d634dbedb8dfc2a0c8b8.jpg",
      name: "Sasuke Uchiha",
      age: 17,
      famousLine: "I have long since closed my eyes… My only goal is in the darkness.",
      role: "Rogue Ninja"
    },
    {
      img: "https://i.pinimg.com/736x/6d/25/96/6d2596b4650527880113c1b493fd2f6e.jpg",
      name: "Sakura Haruno",
      age: 17,
      famousLine: "A smile is the easiest way out of a difficult situation.",
      role: "Medical Ninja"
    },
    {
      img: "https://i.pinimg.com/736x/4c/aa/dc/4caadc1130f54ad2a1d551dea4745f58.jpg",
      name: "Kakashi Hatake",
      age: 30,
      famousLine: "In the ninja world, those who break the rules are scum, but those who abandon their friends are worse than scum.",
      role: "Jonin/Team 7 Leader"
    },
    {
      img: "https://example.com/image5.jpg",
      name: "Shikamaru Nara",
      age: 17,
      famousLine: "Sometimes I wish I was just a cloud, floating along.",
      role: "Tactician"
    }, {
      img: "https://i.pinimg.com/236x/34/fc/cc/34fccc2715b5aa63baf55e81fb7e4492.jpg",
      name: "Lady Tsunade",
      age: 55,
      famousLine: "People become stronger because they have memories they can’t forget.",
      role: "Fifth Hokage"
    },
    {
      img: "https://example.com/image7.jpg",
      name: "Jiraiya",
      age: 54,
      famousLine: "A person grows up when they're able to overcome hardships. Protection is important, but there are some things a person must learn on their own.",
      role: "Legendary Sannin"
    },
    {
      img: "https://example.com/image8.jpg",
      name: "Obito Uchiha",
      age: 31,
      famousLine: "Those who abandon their friends are even worse than scum.",
      role: "Akatsuki Member"
    },
    {
      img: "https://i.pinimg.com/236x/34/fc/cc/34fccc2715b5aa63baf55e81fb7e4492.jpg",
      name: "Madara Uchiha",
      age: 90, // Technically immortal through reincarnation
      famousLine: "Wake up to reality! Nothing ever goes as planned in this accursed world.",
      role: "Founder of the Uchiha Clan"
    },
    {
      img: "https://example.com/image10.jpg",
      name: "Pain (Nagato)",
      age: 35,
      famousLine: "Feel pain. Contemplate pain. Accept pain. Those who do not know pain can never know true peace.",
      role: "Leader of Akatsuki"
    }
  ];
  
  return (
    <div className='flex flex-wrap gap-5  w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar p-10 bg-slate-400'>
{narutoCharacters.map(function (character){
  return(
    <Card character={character}/>
  )
})}
    </div>
  )
}

export default App