import {Component} from '@angular/core';
import {games} from './data';
import {Corporation, Game, Player, PlayerName, playersColors, primaryColor} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly playersColors: Record<PlayerName, string> = playersColors;
  readonly primaryColor: string = primaryColor;

  get players(): PlayerName[] {
    return Object.values(PlayerName);
  }

  get corporations(): Corporation[] {
    return Object.values(Corporation);
  }

  get last3Games(): Game[] {
    return games.slice(-3).reverse();
  }

  getPlayerStatsInGame(playerName: PlayerName, game: Game): Player | undefined {
    return game.find((p: Player) => p.name === playerName);
  }

  sortByWinRate<T>(arr: T[]): T[] {
    return arr.sort((a, b) => {
      return this.getWinRate(b) - this.getWinRate(a)
    })
  }

  getWinRate(entityName: any): number {
    const won: number = this.gamesWon(entityName);
    const played: number = this.gamesPlayed(entityName);
    return Math.round(won / played * 100);
  }

  gamesPlayed(entityName: any): number {
    return games.reduce((acc: number, next: Game) => {
      return acc + (this.isInGame(next, entityName) ? 1 : 0);
    }, 0)
  }

  gamesWon(entityName: any): number {
    return games.reduce((acc: number, next: Game) => {
      return acc + (this.isWinner(next, entityName) ? 1 : 0);
    }, 0)
  }

  getTopScore(): number {
    return Math.max(...this.merge(games).map(({VP}) => VP));
  }

  getTopPlayer(): Player {
    return <Player> this.merge(games).find(({VP}) => VP === this.getTopScore());
  }

  isWinner(game: Game, entityName: PlayerName | Corporation): boolean {
    const maxVP = Math.max(...game.map((player: Player) => player.VP));

    return !!game.find((player: Player) => {
      return Object.values(player).includes(entityName) && Object.values(player).includes(maxVP);
    })
  }

  private merge<T>(arr: T[][]): T[] {
    return arr.reduce((acc: T[], next: T[]) => ([...acc, ...next]), []);
  }

  private isInGame(game: Game, entityName: any): boolean {
    return !!game.find((player: Player) => {
      return Object.values(player).includes(entityName);
    })
  }
}

