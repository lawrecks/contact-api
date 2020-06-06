import { Contact } from "../models";

const seeder = {

    emptyUserTable(done) {
        Contact.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
        }).then(() => done());
    },

}

export default seeder;