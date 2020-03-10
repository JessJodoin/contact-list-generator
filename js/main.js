var listContacts = function (contacts) {
  document.write('<h1>Planetary peeps</h1>');

  contacts.forEach(function (item) {
    document.wirte(`<h2>${item.name}</h2>`)
  });
};

listContacts(peepe);
