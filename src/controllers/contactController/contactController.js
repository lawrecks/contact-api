import Contact from "../../database/models/contact"

export default class ContactController {
    static home (req, res) {
        res.status(200).send("Welcome to the Contacts Web Application!");
    }
    static fetchContacts (req, res) {
        res.status(200).json({
            success : true,
        });
    }
    static fetchSingleContact (req, res) {
        res.status(200).json({
            success : true,
        });

    }
    static createContact (req, res) {
        res.status(201).json({
            success : true,
        });
    }
    static updateContact (req, res) {
        res.status(200).json({
            success : true,
        });
    }
    static deleteContact (req, res) {
        res.status(200).json({
            success : true,
        });
    }
}
