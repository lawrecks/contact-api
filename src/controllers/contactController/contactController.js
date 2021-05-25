import models from "../../database/models";
import errorHandler from "../../helpers/errorHandler"

export default class ContactController {

    static home (req, res) {
        res.status(200).send("Welcome to the Contacts Web Application!");
    }

    static async fetchContacts (req, res) {
        try {
            const contacts = await models.Contact.findAll({
                order: [["createdAt", "DESC"]]
            });
            if (contacts.length < 1) {
                errorHandler.handleError("No contact found", 404, res);
            }

            return res.status(200).json({
                success: true,
                message: "Contacts found",
                contacts
            });
        } 
        catch (error) {
            errorHandler.handleError(error.message, 500, res);
        }
    }

    static async fetchSingleContact (req, res) {
        try {
            const { id } = req.params;

            const foundContact = await models.Contact.findOne({
                where : { id }
            });

            if (!foundContact) {
                return res.status(404).json({
                    success : false,
                    message : "Contact not found"
                });
            }

            return res.status(200).json({
                success : true,
                message : "Contact found successfully",
                contact : foundContact
            })
        }
        catch (error) {
            errorHandler.handleError(error.message, 500, res);

        }

    }

    static async createContact (req, res) {
            try {
                const { fname, lname, email, phone } = req.body;   

                const foundContact = await models.Contact.findOne({
                    where : { email }
                });

                if (foundContact) {
                    errorHandler.handleError("User already exists", 409, res);
                    return;
                }
                
                const createdContact = await models.Contact.create({
                    fname,
                    lname,
                    email,
                    phone
                });

                if (createdContact) {
                    return res.status(201).json({
                        success : true,
                        message : "Contact created successfully",
                        contact : createdContact
                    });
                }
            }
            catch (error) {
                errorHandler.handleError(error.message, 500, res);
            }
    }

    static async updateContact (req, res) {
        try {
            const { fname, lname, email, phone } = req.body;
            const { id } = req.params;

            const foundContact = await models.Contact.findOne({
                where : { id }
            });

            if (!foundContact) {
                return res.status(404).json({
                    success : false,
                    message : "Contact not found"
                });
            }

            const updatedContact = await foundContact.update({
                fname,
                lname,
                email,
                phone
            });

            return res.status(200).json({
                success : true,
                message : "Contact Successfully Updated",
                contact : updatedContact
            });
        } 
        catch (error) {
            errorHandler.handleError(error.message, 500, res);
        }
    }
    
    static async deleteContact (req, res) {
        try {
            const { id } = req.params;

            const foundContact = await models.Contact.findOne({
                where : { id }
            });

            if (!foundContact) {
                return res.status(404).json({
                    success : false,
                    message : "Contact not found"
                });
            }

            await foundContact.destroy();

            return res.status(200).json({
                success : true,
                message : "Contact deleted successfully"
            });

        }
        catch (error) {
            errorHandler.handleError(error.message, 500, res);
        }
    }
}
