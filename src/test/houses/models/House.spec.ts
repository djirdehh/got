import 'mocha';
import * as chai from 'chai';
import House from '../../../house/models/House';

const expect = chai.expect;

describe("House", () => {
    it('should instantiate a class of type House', () => {
        expect(new House()).to.be.an.instanceof(House);
    });
});
