import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## User APIs', () => {

  describe('# GET /api/search', () => {
    it('should find some books', (done) => {
      request(app)
        .get(`/api/search?q="cracking%20the%20coding%20interview`)
        .expect(httpStatus.OK)
        .then((res) => {
          debugger;
          //expect(res.body.username).to.equal(user.username);
          //expect(res.body.mobileNumber).to.equal(user.mobileNumber);
          done();
        })
        .catch(done);
    });
  });
});
