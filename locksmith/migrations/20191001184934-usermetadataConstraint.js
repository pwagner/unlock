'use strict';

const table ='UserTokenMetadata'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint(table, {
      fields: ['tokenAddress', 'userAddress'],
      type: 'unique',
      name: 'token_user_address_unique_constraint'
    })
  },

  down: async (queryInterface, Sequelize) => {

    if (queryInterface.removeContraint)
      return queryInterface.removeContraint(table, 'token_user_address_unique_constraint')
  }
};
