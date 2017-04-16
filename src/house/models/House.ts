import Character from '../../character/models/Character';

export default class House {
	public name: string;
	public region: string;
	public words: string;
	public titles: Array<string>;
	public currentLord: Character;
	public heir: Character;
	public swornMembers: Array<Character>;
}
