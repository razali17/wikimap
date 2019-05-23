exports.seed = function(knex, Promise) {
  return knex('maps').del()
    .then(function () {
      return Promise.all([
        knex('maps').insert({id: 1, title: 'Bootcamps', lattitude: 43.644204, longitude: -79.402157, created_at: 'Mon, 13 May 2019 13:20:33 GMT', updated_at: 'Mon, 20 May 2019 13:20:33 GMT'}),
        knex('maps').insert({id: 2, title: 'Foods', lattitude: 43.646379, longitude: -79.406900, created_at: 'Tue, 14 May 2019 13:20:33 GMT', updated_at: 'Tue, 21 May 2019 13:20:33 GMT'}),
        knex('maps').insert({id: 3, title: 'Malls', lattitude: 43.654382, longitude: -79.380702, created_at: 'Wed, 15 May 2019 13:20:33 GMT', updated_at: 'Wed, 22 May 2019 13:20:33 GMT'})
      ]);
    });
};
