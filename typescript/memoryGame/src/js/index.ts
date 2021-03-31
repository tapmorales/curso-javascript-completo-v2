import { cards } from './Card'
import { Game } from './Game'

const gameDOM = document.querySelector('[data-game]') as HTMLDivElement

const game = new Game(gameDOM, cards)
game.init()

console.log(cards)
