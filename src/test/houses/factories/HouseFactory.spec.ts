import 'mocha';
import * as chai from 'chai';
import House from '../../../house/models/House';
import HouseFactory from '../../../house/factories/HouseFactory';

const expect = chai.expect;

describe("HouseFactory", () => {
    it('should create a user', () => {
        expect(HouseFactory.create()).to.be.an.instanceof(House);
    });
});
