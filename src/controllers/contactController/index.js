import express from "express";
import contactController from "./contactController"
import ContactValidator from "../../middlewares/ContactValidator"

const contactRouter = express.Router();

contactRouter.get("/", contactController.home);

contactRouter.get("/contacts", contactController.fetchContacts);

contactRouter.post("/contacts",
    ContactValidator.checkFields, 
    contactController.createContact
);

contactRouter.get("/contacts/:id",
    ContactValidator.checkParam,
    contactController.fetchSingleContact
);

contactRouter.put("/contacts/:id", 
    ContactValidator.checkParam,
    ContactValidator.checkFields,
    contactController.updateContact
);

contactRouter.delete("/contacts/:id", 
    ContactValidator.checkParam,
    contactController.deleteContact
);

module.exports = contactRouter;



