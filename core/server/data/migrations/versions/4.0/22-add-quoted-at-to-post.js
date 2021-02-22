const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration('posts', 'quoted_at', {
    type: 'text',
    nullable: true,
    defaultTo: null
});
