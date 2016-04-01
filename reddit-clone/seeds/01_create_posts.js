
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({title: , date: 'Fri Apr 01 2016 13:48:43 GMT-0600 (MDT)', description: 'Me non paenitet nullum festiviorem excogitasse ad hoc. Quam temere in vitiis, legem sancimus haerentia. At nos hinc posthac, sitientis piros Afros. Ut enim ad minim veniam, quis nostrud exercitation. Donec sed odio operae, eu vulputate felis rhoncus. Paullum deliquit, ponderibus modulisque suis ratio utitur.', image: , author: }),
    knex('posts').insert({title: , date: 'Thu Mar 31 2016 13:49:06 GMT-0600 (MDT)', description: 'Quisque ut dolor gravida, placerat libero vel, euismod. Gallia est omnis divisa in partes tres, quarum. Ab illo tempore, ab est sed immemorabili. Nihil hic munitissimus habendi senatus locus, nihil horum?', image: , author: }),
    knex('posts').insert({title: , date: 'Fri Mar 25 2016 13:49:25 GMT-0600 (MDT)', description: 'Ab illo tempore, ab est sed immemorabili. Qui ipsorum lingua Celtae, nostra Galli appellantur. Plura mihi bona sunt, inclinet, amari petere vellent. Quo usque tandem abutere, Catilina, patientia nostra? Donec sed odio operae, eu vulputate felis rhoncus.', image: , author: }),
  );
};
