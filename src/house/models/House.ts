import Character from '../../character/models/Character';

export default class House {
    public id: number;
    public name: string;
    public region: string;
    public words: string;
    public titles: Array<string>;
    public currentLord: Character;
    public heir: Character;
    public swornMembers: Array<Character>;
    public image: string;
}
