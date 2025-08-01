import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';

// 💖 DATA TO CUSTOMIZE 💖

const FRIEND_NAME = "Kashish"; 
const YOUR_NAME = "Shiv";

const JOKE_DATA = [
    { prompt: "That one time with the street food...", punchline: "And we swore we'd never eat there again! 😂" },
    { prompt: "Remember our 'master plan' in college?", punchline: "Good thing we have other talents. 😉" },
    { prompt: "The 'blue scooter' incident.", punchline: "I'm still not letting you drive next time." },
    { prompt: "Just two words: 'Project Presentation'.", punchline: "We somehow passed. A true miracle!" }
];

const COUPON_DATA = [
  { title: "One Movie Night", description: "Your choice of movie, my treat for snacks!" },
  { title: "Expert Advice Giver", description: "Redeem for one session of my (questionably) brilliant advice." },
  { title: "Coffee on Me", description: "For the next time we need a caffeine boost and a long chat." },
];

const SECRET_MESSAGE = "Happy Friendship Day, for real! I hope this little website made you smile. You mean the world to me, and I can't wait to make so many more amazing memories with you. Love you always!";

const TIMELINE_DATA = [
  { date: "August 2020", text: "The day we first met and instantly clicked!" },
  { date: "May 2021", text: "Our First Fight🚗" },
  { date: "Today", text: "Celebrating the best friendship a person could ask for. Happy Friendship Day!" }
];

const REASONS_DATA = [
  "You have the most contagious laugh.", "You give the absolute best advice.",
  "You're always there for me.", "You inspire me to be a better person."
];

const FUTURE_ADVENTURES_DATA = [
    "Go on a spontaneous weekend trip.",
    "Finally learn how to make pasta from scratch.",
    "See our favorite band live in concert."
];

const QUIZ_QUESTIONS = [
    { questionText: 'Where did we first meet?', answerOptions: [ { answerText: 'In a class', isCorrect: true }, { answerText: 'At a party', isCorrect: false }, ], },
    { questionText: 'What is our go-to comfort food?', answerOptions: [ { answerText: 'Pizza', isCorrect: false }, { answerText: 'Ice Cream', isCorrect: true }, ], },
];


// ---------- COMPONENT DEFINITIONS (No need to edit below) ----------

const JokeItem = ({ joke }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="joke-item">
            <p className="joke-prompt">{joke.prompt}</p>
            {!isRevealed && (
                <button onClick={() => setIsRevealed(true)} className="joke-reveal-btn">
                    Reveal
                </button>
            )}
            {isRevealed && <p className="joke-punchline">{joke.punchline}</p>}
        </div>
    );
};

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-08-03T00:00:00") - +new Date();
        let timeLeft = {};
        if (difference > 0) { timeLeft = { days: Math.floor(difference / (1000 * 60 * 60 * 24)), hours: Math.floor((difference / (1000 * 60 * 60)) % 24), minutes: Math.floor((difference / 1000 / 60) % 60), seconds: Math.floor((difference / 1000) % 60), }; }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => { const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000); return () => clearTimeout(timer); });
    return ( <div className="countdown"> {Object.keys(timeLeft).length > 0 ? ( Object.entries(timeLeft).map(([unit, value]) => ( <div className="countdown-box" key={unit}> <span>{value}</span><p>{unit}</p> </div> )) ) : ( <p style={{fontSize: '1.5rem', color: '#fff'}}>Happy Friendship Day!</p> )} </div> );
};

const FriendshipQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const handleAnswerClick = (isCorrect) => { if (isCorrect) { setScore(score + 1); } const nextQuestion = currentQuestion + 1; if (nextQuestion < QUIZ_QUESTIONS.length) { setCurrentQuestion(nextQuestion); } else { setShowScore(true); setShowConfetti(true); } };
    return ( <div className="quiz-container"> {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />} {showScore ? ( <div className="quiz-score"> You scored {score} out of {QUIZ_QUESTIONS.length}! <br/> But who's counting? You're the best friend ever, and that's all that matters! 💖 </div> ) : ( <> <div className="quiz-question">{QUIZ_QUESTIONS[currentQuestion].questionText}</div> <div className="quiz-options"> {QUIZ_QUESTIONS[currentQuestion].answerOptions.map((option, index) => ( <button key={index} onClick={() => handleAnswerClick(option.isCorrect)} className="quiz-button"> {option.answerText} </button> ))} </div> </> )} </div> );
};

const GiftBox = ({ onOpen }) => {
  return ( <div className="gift-container" onClick={onOpen}> <h2 className="font-cursive" style={{ fontSize: '3rem' }}>A Surprise For You...</h2> <div className="gift-box"></div> <p style={{ color: 'white', marginTop: '20px' }}>Click to open!</p> </div> );
};

const MainSite = () => {
  const [showSecret, setShowSecret] = useState(false);
  useEffect(() => {
    const today = new Date();
    const friendshipDay = new Date('2025-08-03T00:00:00');
    if (today >= friendshipDay) { setShowSecret(true); }
  }, []);

  return (
    <>
      <header className="section">
        <h1 className="font-cursive">Happy Friendship Day, {FRIEND_NAME}!</h1>
        <p>A little surprise to celebrate the best person I know... you! 🎉</p>
        <Countdown />
      </header>

      <main>
        <section className="section" id="timeline">
          <h2 className="font-cursive">Our Friendship Timeline</h2>
          <div className="timeline">
            {TIMELINE_DATA.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content"><p>{item.text}</p></div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="section" id="reasons">
          <h2 className="font-cursive">A Few Reasons You're the Best</h2>
          <ul className="icon-list reasons-list">
              {REASONS_DATA.map((reason, index) => <li key={index}>{reason}</li>)}
          </ul>
        </section>

        <section className="section" id="joke-vault">
            <h2 className="font-cursive">The Inside Joke Vault</h2>
            <p>Some of our greatest hits that probably make zero sense to anyone else.</p>
            <div className="joke-vault">
                {JOKE_DATA.map((joke, index) => (
                    <JokeItem key={index} joke={joke} />
                ))}
            </div>
        </section>

        <section className="section" id="adventures">
            <h2 className="font-cursive">Our Future Adventures</h2>
            <p>A wishlist of all the amazing things we still have to do together!</p>
            <ul className="icon-list adventures-list">
                {FUTURE_ADVENTURES_DATA.map((adventure, index) => <li key={index}>{adventure}</li>)}
            </ul>
        </section>

        <section className="section" id="coupons">
            <h2 className="font-cursive">Friendship Coupon Book</h2>
            <p>A few IOUs for our future shenanigans. Consider them redeemable anytime!</p>
            <div className="coupon-book">
                {COUPON_DATA.map((coupon, index) => (
                    <div className="coupon-item" key={index}>
                        <p className="coupon-title">{coupon.title}</p>
                        <p className="coupon-description">{coupon.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="section" id="quiz">
          <h2 className="font-cursive">The Official Friendship Quiz!</h2>
          <FriendshipQuiz />
        </section>
        
        {showSecret && (
          <section className="section secret-message">
            <h2 className="font-cursive">P.S. A Special Note for Today...</h2>
            <p>{SECRET_MESSAGE}</p>
          </section>
        )}
      </main>

      <footer>
        <p className="font-cursive" style={{fontSize: '2rem', color: '#fff'}}>Made with ❤️ by {YOUR_NAME}</p>
      </footer>
    </>
  );
};

// Main App Component that handles the "unwrapping"
function App() {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  
  if (!isUnwrapped) {
    return <GiftBox onOpen={() => setIsUnwrapped(true)} />;
  }

  return (
    <div className="App">
      <MainSite />
    </div>
  );
}

export default App;