const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration('posts', 'quoted_by', {
    type: 'text',
    nullable: true,
    defaultTo: null
});
