import express from "express";
import contactController from "./contactController"

const contactRouter = express.Router();

contactRouter.get("/", contactController.home);

contactRouter.get("/contacts", contactController.fetchContacts);

contactRouter.post("/contacts", contactController.createContact);

contactRouter.get("/contacts/:id", contactController.fetchSingleContact);

contactRouter.put("/contacts/:id", contactController.updateContact);

contactRouter.delete("/contacts/:id", contactController.deleteContact);

module.exports = contactRouter;



