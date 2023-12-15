import express from "express";
import db from "../mockdb/index";

const router = express.Router();

router.get(`/:id?`, async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;
    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }

});

router.post("/", async (req, res, next) => {
  //The json file has already been "opened up" by our express.json
  // () middleware, back in the server.js file
  try {
    const newUser = req.body;
    //.add() inserts the newUser into the mock database, and then
    //returns the newUser object
    const data = await db.add(newUser);

    res.json(data);
  } catch (error) {
    next(erorr);
  }
});

router.put(`/:id`, async (req, res, next) => {
  console.log("this is the put request");
  try {
    const { id } = req.params;
    const updateUser = req.body;
    const data = await db.update(id, updateUser);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete(`/:id`, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await db.remove(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
