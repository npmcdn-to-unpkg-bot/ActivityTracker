
exports.up = function(knex, Promise) {
 return knex.schema.createTable('kids', function(t){
   t.increments();
   t.string('facebook_id');
   t.string('kid_name');
   t.text('kid_pic');
   t.float('total_hours')
 })
};




exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('kids');
}
