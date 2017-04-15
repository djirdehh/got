import 'mocha';
import * as chai from 'chai';
import House from '../../../houses/models/House';
import HouseFactory from '../../../houses/factories/HouseFactory';

const expect = chai.expect;

describe("HouseFactory", () => {
    it('should create a user', () => {
        expect(HouseFactory.create()).to.be.an.instanceof(House);
    });
});
