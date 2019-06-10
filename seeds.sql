-- Usuarios
INSERT INTO Usuarios VALUES (0, "Bruno Camargo", 0, "46873176", "1995-11-18", "Ituzaingo M233 S10, El Pinar", "bcamargo@correo.um.edu.uy", "bruno123");
INSERT INTO Usuarios VALUES (0, "Adolfo Scalabrini", 1, "46895534", "1996-08-12", "Av. Francisco Soca 1223", "ascalabrini@correo.um.edu.uy", "ado123");
INSERT INTO Usuarios VALUES (0, "Guillermo Cola", 1, "48406814", "1996-06-28", "Pedro Berro 676 esq 21 de Septiembre", "gcola@correo.um.edu.uy", "guille123");

-- Autores

INSERT INTO Autores VALUES (0, "Paul K. Feyerabend");
INSERT INTO Autores VALUES (0, "Alfredo Traversoni");
INSERT INTO Autores VALUES (0, "Victor Bersanelli");
INSERT INTO Autores VALUES (0, "Alicia Haber");
INSERT INTO Autores VALUES (0, "Claude Villee");
INSERT INTO Autores VALUES (0, "Isabel Allende");
INSERT INTO Autores VALUES (0, "Alfred Adler");
INSERT INTO Autores VALUES (0, "Rafael Alberti");
INSERT INTO Autores VALUES (0, "Antonio Anzalone");
INSERT INTO Autores VALUES (0, "Tom Apostol");

-- Editoriales

INSERT INTO Editoriales VALUES (0, "A. K. Peters");
INSERT INTO Editoriales VALUES (0, "APA Editorial");
INSERT INTO Editoriales VALUES (0, "Abada");
INSERT INTO Editoriales VALUES (0, "Academic Press");
INSERT INTO Editoriales VALUES (0, "Ace");
INSERT INTO Editoriales VALUES (0, "Acervo");
INSERT INTO Editoriales VALUES (0, "Addison-Wesley");

-- Libros

INSERT INTO Libros VALUES (0, 1, "Geometría descriptiva", "Matemática, geometría");
INSERT INTO Libros VALUES (0, 2, "Historia del Uruguay y de América", "Historia");
INSERT INTO Libros VALUES (0, 3, "Ortografía práctica", "Idioma español");
INSERT INTO Libros VALUES (0, 3, "Historia del arte", "Historia, arte");
INSERT INTO Libros VALUES (0, 3, "Introducción a la Lógica", "Matemática, lógica");
INSERT INTO Libros VALUES (0, 4, "Geometría descriptiva", "Matemática, geometría");
INSERT INTO Libros VALUES (0, 4, "Química general superior", "Química");
INSERT INTO Libros VALUES (0, 4, "Músicos célebres", "Música");
INSERT INTO Libros VALUES (0, 4, "Física 1", "Física");
INSERT INTO Libros VALUES (0, 5, "Física 2", "Física");
INSERT INTO Libros VALUES (0, 5, "El club de los millones", "Dinero");
INSERT INTO Libros VALUES (0, 5, "Uruguay: 1958-1968", "Historia");
INSERT INTO Libros VALUES (0, 5, "Don Quijote de la Mancha", "Novela");
INSERT INTO Libros VALUES (0, 1, "Macbeth", "Drama");
INSERT INTO Libros VALUES (0, 2, "Hamlet", "Tragedia");
INSERT INTO Libros VALUES (0, 3, "Europa de 1815 a nuestros días", "Historia");
INSERT INTO Libros VALUES (0, 2, "Las aventuras de Huckleberry Finn", "Ficción");
INSERT INTO Libros VALUES (0, 5, "Las Flores del Mal", "Poesía");
INSERT INTO Libros VALUES (0, 6, "Yo, Paco", "Autobiografía");
INSERT INTO Libros VALUES (0, 6, "Hasta la última gota", "Autobiografía");
INSERT INTO Libros VALUES (0, 7, "Volver para crear futuro", "Autobiografía");

-- Ejemplares

INSERT INTO Ejemplares VALUES (0, 1, 1);
INSERT INTO Ejemplares VALUES (0, 1, 2);
INSERT INTO Ejemplares VALUES (0, 2, 1);
INSERT INTO Ejemplares VALUES (0, 2, 1);
INSERT INTO Ejemplares VALUES (0, 2, 1);
INSERT INTO Ejemplares VALUES (0, 3, 1);
INSERT INTO Ejemplares VALUES (0, 3, 1);
INSERT INTO Ejemplares VALUES (0, 4, 1);
INSERT INTO Ejemplares VALUES (0, 5, 1);
INSERT INTO Ejemplares VALUES (0, 5, 2);
INSERT INTO Ejemplares VALUES (0, 6, 1);
INSERT INTO Ejemplares VALUES (0, 6, 2);
INSERT INTO Ejemplares VALUES (0, 6, 1);
INSERT INTO Ejemplares VALUES (0, 6, 1);
INSERT INTO Ejemplares VALUES (0, 6, 1);
INSERT INTO Ejemplares VALUES (0, 7, 1);
INSERT INTO Ejemplares VALUES (0, 7, 1);
INSERT INTO Ejemplares VALUES (0, 7, 2);
INSERT INTO Ejemplares VALUES (0, 7, 3);
INSERT INTO Ejemplares VALUES (0, 7, 1);
INSERT INTO Ejemplares VALUES (0, 7, 1);
INSERT INTO Ejemplares VALUES (0, 8, 1);
INSERT INTO Ejemplares VALUES (0, 8, 1);
INSERT INTO Ejemplares VALUES (0, 9, 1);
INSERT INTO Ejemplares VALUES (0, 10, 1);
INSERT INTO Ejemplares VALUES (0, 11, 1);
INSERT INTO Ejemplares VALUES (0, 11, 2);
INSERT INTO Ejemplares VALUES (0, 11, 2);
INSERT INTO Ejemplares VALUES (0, 12, 1);
INSERT INTO Ejemplares VALUES (0, 12, 1);
INSERT INTO Ejemplares VALUES (0, 13, 1);
INSERT INTO Ejemplares VALUES (0, 14, 1);
INSERT INTO Ejemplares VALUES (0, 14, 2);
INSERT INTO Ejemplares VALUES (0, 15, 1);
INSERT INTO Ejemplares VALUES (0, 15, 2);
INSERT INTO Ejemplares VALUES (0, 16, 1);
INSERT INTO Ejemplares VALUES (0, 16, 1);
INSERT INTO Ejemplares VALUES (0, 16, 2);
INSERT INTO Ejemplares VALUES (0, 17, 1);
INSERT INTO Ejemplares VALUES (0, 18, 1);
INSERT INTO Ejemplares VALUES (0, 19, 1);
INSERT INTO Ejemplares VALUES (0, 20, 1);
INSERT INTO Ejemplares VALUES (0, 20, 1);
INSERT INTO Ejemplares VALUES (0, 20, 1);
INSERT INTO Ejemplares VALUES (0, 21, 1);
INSERT INTO Ejemplares VALUES (0, 21, 1);
INSERT INTO Ejemplares VALUES (0, 21, 1);

-- AutoresLibros

INSERT INTO AutoresLibros VALUES (1, 1);
INSERT INTO AutoresLibros VALUES (2, 1);
INSERT INTO AutoresLibros VALUES (3, 2);
INSERT INTO AutoresLibros VALUES (4, 2);
INSERT INTO AutoresLibros VALUES (5, 3);
INSERT INTO AutoresLibros VALUES (6, 3);
INSERT INTO AutoresLibros VALUES (7, 4);
INSERT INTO AutoresLibros VALUES (8, 5);
INSERT INTO AutoresLibros VALUES (9, 5);
INSERT INTO AutoresLibros VALUES (10, 6);
INSERT INTO AutoresLibros VALUES (11, 6);
INSERT INTO AutoresLibros VALUES (12, 6);
INSERT INTO AutoresLibros VALUES (13, 7);
INSERT INTO AutoresLibros VALUES (14, 7);
INSERT INTO AutoresLibros VALUES (15, 7);
INSERT INTO AutoresLibros VALUES (16, 8);
INSERT INTO AutoresLibros VALUES (17, 8);
INSERT INTO AutoresLibros VALUES (18, 9);
INSERT INTO AutoresLibros VALUES (19, 10);
INSERT INTO AutoresLibros VALUES (20, 10);
INSERT INTO AutoresLibros VALUES (21, 10);

-- Reservas

INSERT INTO Reservas VALUES (1, 1, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (2, 2, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (3, 3, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (1, 4, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (2, 5, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (3, 6, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (1, 7, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (2, 7, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (3, 9, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (1, 10, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (2, 11, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (3, 12, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (1, 13, '2019-03-01', '2019-03-11');
INSERT INTO Reservas VALUES (2, 14, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (3, 15, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (1, 16, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (2, 17, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (3, 18, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (1, 19, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (2, 20, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (3, 21, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (1, 22, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (2, 23, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (3, 24, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (1, 25, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (2, 26, '2019-04-01', '2019-04-11');
INSERT INTO Reservas VALUES (3, 27, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (1, 28, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (2, 29, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (3, 30, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (1, 31, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (2, 32, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (3, 33, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (1, 34, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (2, 35, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (3, 36, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (1, 37, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (2, 38, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (3, 39, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (1, 40, '2019-05-01', '2019-05-11');
INSERT INTO Reservas VALUES (2, 41, '2019-06-01', '2019-06-11');
INSERT INTO Reservas VALUES (3, 42, '2019-06-01', '2019-06-11');
INSERT INTO Reservas VALUES (1, 43, '2019-06-01', '2019-06-11');
INSERT INTO Reservas VALUES (2, 44, '2019-06-01', '2019-06-11');
INSERT INTO Reservas VALUES (3, 45, '2019-06-01', '2019-06-11');
INSERT INTO Reservas VALUES (1, 46, '2019-06-01', '2019-06-11');
INSERT INTO Reservas VALUES (2, 47, '2019-06-01', '2019-06-11');