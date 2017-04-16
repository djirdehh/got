import House from '../../house/models/House';

export type Gender = 'male' | 'female';

export default class Character {
	public name: string;
	public gender: Gender;
	public titles: Array<string>;
	public allegiances: Array<House>;
}
