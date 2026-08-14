const request = require("supertest");
const mongoose = require("mongoose");
const { Rental } = require("../../models/rental");
const { User } = require("../../models/user");

describe("/api/returns", () => {
  let server;
  let customerId;
  let movieId;
  let rental;

  beforeEach(async () => {
    server = require("../../index");

    customerId = mongoose.Types.ObjectId();
    movieId = mongoose.Types.ObjectId();
    rental = new Rental({
      customer: {
        _id: customerId,
        name: "12345",
        phone: "12345",
      },
      movie: {
        _id: movieId,
        title: "12345",
        dailyRentalRate: 2,
      },
    });
    await rental.save();
  });

  afterEach(async () => {
    await server.close();
    await Rental.remove({});
  });

  it("should return 401 if client is no logged in", async () => {
    const res = await request(server).post("/api/returns").send({
      customerId,
      movieId,
    });

    expect(res.status).toBe(401);
  });

  it("should return 400 if customerId is not provided", async () => {
    const token = new User().generateAuthToken();

    const res = await request(server)
      .post("/api/returns")
      .set("x-auth-token", token)
      .send({ movieId });

    expect(res.status).toBe(401);
  });

  it("should return 400 if movieId is not provided", async () => {
    const token = new User().generateAuthToken();

    const res = await request(server)
      .post("/api/returns")
      .set("x-auth-token", token)
      .send({ customerId });

    expect(res.status).toBe(401);
  });
});
