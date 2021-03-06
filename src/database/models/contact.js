'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName: 'contacts'
  });
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};