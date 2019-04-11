const db = require("../data/dbConfig");
const Hobbits = require("./hobbitsModel");

//returns 201
//inserts hobbit
describe("hobbits model", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("hobbits").truncate();
    });
    it("should insert the hobbits", async () => {
      await Hobbits.insert({ name: "gaffer" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
    });
    it("should insert the single hobbit", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");
    });
  });
});

// /const db = require('../data/dbConfig.js');
// const Hobbits = require('./hobbitsModel.js');

// // returns 201
// // insert the hobbit
// describe('hobbits model', () => {
//   beforeEach(async () => {
//     await db('hobbits').truncate();
//   });

//   describe('insert()', () => {
//     it('should insert the provided hobbits', async () => {
//       await Hobbits.insert({ name: 'gaffer' });
//       await Hobbits.insert({ name: 'aragorn' });
//       await Hobbits.insert({ name: 'gandalf' });

//       const hobbits = await db('hobbits');
//       expect(hobbits).toHaveLength(3);
//     });

//     it('should insert the provided hobbit', async () => {
//       let hobbit = await Hobbits.insert({ name: 'gaffer' });
//       expect(hobbit.name).toBe('gaffer');

//       hobbit = await Hobbits.insert({ name: 'sam' });
//       expect(hobbit.name).toBe('sam');
//     });
//   });
// });
