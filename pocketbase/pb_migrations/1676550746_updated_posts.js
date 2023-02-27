migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p5xcqlf8f0j2icj")

  // remove
  collection.schema.removeField("5virs77g")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p5xcqlf8f0j2icj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5virs77g",
    "name": "date_created",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
