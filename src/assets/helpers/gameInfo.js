import Tetris from '../imgs/tetris.jpeg';
import Wordle from '../imgs/wordle.webp';
import Klotski from '../imgs/sliderPuzzle.png';
import Chess from '../imgs/chess.png';

export const GamesInfo = [
    {
        id: 0,
        title: 'Tetris',
        img: `${Tetris}`,
        link: '/tetris',
        history: "The first playable version of Tetris was created on June 6, 1984 by Alexey Pajitnov of the Soviet Union. In 1988 Nintendo gained access to the rights of Tetris and brought it to the masses where it sold millions of copies for the GameBoy and many other platforms.",
        objective: "In most versions, the speed of the falling pieces increases with each level. The player can clear multiple lines at once. If the player cannot make the blocks disappear quickly enough, the field will start to fill; when the pieces reach the top of the field and prevent the arrival of additional pieces, the game ends. At the end of each game, the player receives a score based on the number of lines that have been completed. The game never ends with the player's victory. The player can complete only as many lines as possible, before an inevitable loss.",
        wikiLink: "https://en.wikipedia.org/wiki/Tetris",
    },
    {
        id: 1,
        title: 'Wordle',
        img: `${Wordle}`,
        link: '/wordle',
        history: "A web-based word game created and developed by Welsh software engineer Josh Wardle.  It was bought by the New York Times company in 2022 for an undisclosed seven-figure amount.",
        objective: "Every day, a five-letter word is chosen which players aim to guess within six tries. After every guess, each letter is marked as either green, yellow or gray: green indicates that letter is correct and in the correct position, yellow means it is in the answer but not in the right position, while gray indicates it is not in the answer at all.",
        wikiLink: "https://en.wikipedia.org/wiki/Wordle",
    },
    {
        id: 2,
        title: 'Klotski',
        img: `${Klotski}`,
        link: '/klotski',
        history: "A Polish game that is a sliding block puzzle which is rumored to have originated in the early 20th century.  While this game has seen various iterations and names. 'Klotski' is the correct original name of the sliding block puzzle game.",
        objective: "Like other sliding-block puzzles, several different-sized block pieces are placed inside a box, which is normally 4×5 in size. Among the blocks, there is a special one (usually the largest) which must be moved to a special area designated by the game board. The player is not allowed to remove blocks, and may only slide blocks horizontally and vertically. Common goals are to solve the puzzle with a minimum number of moves or in a minimum amount of time.",
        wikiLink: "https://en.wikipedia.org/wiki/Klotski",
    },
    {
        id: 3,
        title: 'Chess',
        img: `${Chess}`,
        link: '/chess',
        history: "",
        objective: "",
        wikiLink: "",
    },
]