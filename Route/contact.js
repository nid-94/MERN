// require express
const express = require("express");

// require express router
const router = express.Router();

// require schema
const Contact = require("../model/Contact");

// ------------------CRUDS------------------------//

/**
 * desription: Get
 * path:http://localhost:5000/api/contacts/test
 *
 */
router.get("/test", (req, res) => {
    res.send("haaallouuuuu ya 3alem");
});
/**
 * desription: Post
 * path:http://localhost:5000/api/contacts/
 * req.body
 */
router.post("/", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = new Contact({
            name,
            email,
            phone,
        });
        await newContact.save();
        return res.status(200).send({ msg: "contact added", newContact });
    } catch (error) {
        res.status(400).send({ msg: "canot add this contact", error });
    }
});

/**
 * desription: get all
 * path:http://localhost:5000/api/contacts/
 *
 */
router.get("/", async (req, res) => {
    try {
        const contactList = await Contact.find();
        return res.status(200).send({ msg: "voilaa hethy lista mt3k", contactList });
    } catch (error) {
        res.status(400).send({ msg: "famch listaaaa ,arj3 ghodwa", error });
    }
});

/**
 * desription: get one
 * path:http://localhost:5000/api/contacts/:_id
 * req.params
 */
router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const FoundContact = await Contact.findOne({ _id });
        return res.status(200).send({ msg: "contact found", FoundContact });
    } catch (error) {
        res.status(400).send({ msg: "famch contact ,arj3 ba3d ghodwa", error });
    }
});
/**
 * desription: update
 * path:http://localhost:5000/api/contacts/edit/:_id
 * req.params && req.body
 */
router.put("/edit/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, email, phone } = req.body;
        const EditContact = await Contact.updateOne({ _id }, { $set: { ...req.body } });

        return res.status(200).send({ msg: "rany tbadltt " });
    } catch (error) {
        res.status(400).send({ msg: "famch tabdil", error });
    }
});
/**
 * desription: delete
 * path:http://localhost:5000/api/contacts/dele/:_id
 * req.params
 */
router.delete("/dele/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteContact = await Contact.deleteOne({ _id });
        return res.status(200).send({ msg: "rany rwa7t" });
    } catch (error) {
        res.status(400).send({ msg: "mchnyyyy mrwaaaaa7", error });
    }
});

module.exports = router;
