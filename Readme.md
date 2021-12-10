# Schema and models

In mongoose, a schema represents the structure of a particular document, either completely or just a portion of the document. It's a way to express expected properties and values as well as constraints and indexes. A model defines a programming interface for interacting with the database (read, insert, update, etc). So a schema answers "what will the data in this collection look like?" and a model provides functionality like "Are there any records matching this query?" or "Add a new document to the collection".

In straight RDBMS, the schema is implemented by DDL statements (create table, alter table, etc), whereas there's no direct concept of a model, just SQL statements that can do highly flexible queries (select statements) as well as basic insert, update, delete operations.