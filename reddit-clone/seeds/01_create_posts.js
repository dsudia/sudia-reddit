
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({title: 'Aspens in Fall', date: 'Fri Apr 01 2016 13:48:43', description: 'Me non paenitet nullum festiviorem excogitasse ad hoc. Quam temere in vitiis, legem sancimus haerentia. At nos hinc posthac, sitientis piros Afros. Ut enim ad minim veniam, quis nostrud exercitation. Donec sed odio operae, eu vulputate felis rhoncus. Paullum deliquit, ponderibus modulisque suis ratio utitur.', image: 'http://cdn.c.photoshelter.com/img-get/I0000GRPQNvuZYwo/s/850/850/IMG-6681-Aspens-Fall-Color.jpg', author: 'Dave'}),
    knex('posts').insert({title: 'Yosemite', date: 'Thu Mar 31 2016 13:49:06', description: 'Quisque ut dolor gravida, placerat libero vel, euismod. Gallia est omnis divisa in partes tres, quarum. Ab illo tempore, ab est sed immemorabili. Nihil hic munitissimus habendi senatus locus, nihil horum?', image: 'http://anseladams.com/wp-content/uploads/2012/03/1901006-2-412x300.jpg', author: 'Ansel'}),
    knex('posts').insert({title: 'Yellowstone', date: 'Fri Mar 25 2016 13:49:25', description: 'Ab illo tempore, ab est sed immemorabili. Qui ipsorum lingua Celtae, nostra Galli appellantur. Plura mihi bona sunt, inclinet, amari petere vellent. Quo usque tandem abutere, Catilina, patientia nostra? Donec sed odio operae, eu vulputate felis rhoncus.', image: 'http://static.travel.usnews.com/images/destinations/7/new_main_cropped_445x280.jpg', author: 'Anonymous'})
  );
};
