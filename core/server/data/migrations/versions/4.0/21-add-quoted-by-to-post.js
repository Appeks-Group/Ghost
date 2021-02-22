const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration('`post', 'quoted_by', {
    type: 'text',
    nullable: true,
    defaultTo: null
});
