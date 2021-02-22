const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration('`post', 'quoted_at', {
    type: 'text',
    nullable: true,
    defaultTo: null
});
