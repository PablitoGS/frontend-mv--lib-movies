const movies = [
  {
    id: 580489,
    overview:
      'Eddie Brock (Tom Hardy) y su simbionte Venom todavía están intentando descubrir cómo vivir juntos cuando un preso que está en el corredor de la muerte (Woody Harrelson) se infecta con un simbionte propio.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/2jVVDtDaeMxmcvrz2SNyhMcYtWc.jpg',
    releaseDate: '2021-09-30',
    title: 'Venom: Habrá Matanza'
  },
  {
    id: 512195,
    overview:
      'Cuando la Interpol envía una "Alerta roja", significa que los departamentos de Policía de todo el mundo deben estar alerta para capturar a los criminales más buscados. Todas las alarmas saltan cuando un temerario robo une al mejor agente del FBI (Johnson) con dos criminales rivales entre sí (Gadot & Reynolds). Una coincidencia que hará que suceda lo impredecible.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/odBUpjZGxY3y7FBo5NBtEYGJf5r.jpg',
    releaseDate: '2021-11-04',
    title: 'Alerta roja'
  },
  {
    id: 566525,
    overview:
      'Adaptación cinematográfica del héroe creado por Steve Englehart y Jim Starlin en 1973, un personaje mitad chino, mitad americano, cuyo característico estilo de combate mezclaba kung-fu, nunchacos y armas de fuego.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/9VqajJXm29uprSaxOcEh7O0d6E9.jpg',
    releaseDate: '2021-09-01',
    title: 'Shang-Chi y la leyenda de los Diez Anillos'
  },
  {
    id: 634649,
    overview:
      'Peter Parker está desenmascarado y ya no puede separar su vida normal de las altas apuestas de ser un superhéroe. Cuando le pide ayuda al Doctor Strange, lo que está en juego se vuelve aún más peligroso, lo que lo obliga a descubrir lo que realmente significa ser Spider-Man.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/memAp4wemvpYYpO38TLfgsJHBLF.jpg',
    releaseDate: '2021-12-15',
    title: 'Spider-Man: No Way Home'
  },
  {
    id: 589761,
    overview:
      'Chernóbil: Abyss es el primer gran largometraje ruso sobre las consecuencias de la explosión de la central nuclear de Chernóbil, cuando cientos de personas sacrificaron sus vidas para limpiar el lugar de la catástrofe y evitar con éxito un desastre aún mayor que podría haber convertido una gran parte del continente europeo en una zona de exclusión inhabitable.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/5QirkP6rB0V5skK3482Rhf0vAFD.jpg',
    releaseDate: '2021-04-15',
    title: 'Chernobyl: Abyss'
  },
  {
    id: 585245,
    overview:
      'Cuando Emily Elizabeth conoce a un rescatador mágico de animales que le regala un pequeño cachorro rojo, nunca se hubiera imaginado que al despertarse se encontraría un sabueso gigante de tres metros en su pequeño apartamento de Nueva York. Mientras su madre soltera se encuentra de viaje de negocios, Emily y su divertido pero impulsivo tío Casey se embarcan en una gran aventura.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/kW5JBtCGnIwBS1SD4sMXu8gee4U.jpg',
    releaseDate: '2021-11-10',
    title: 'Clifford, el gran perro rojo'
  },
  {
    id: 568124,
    overview:
      'Encanto, te traslada a Colombia, donde una mágica familia vive en una casa llena de magia.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/pZc0GpA8jPTwqHuABnSW6XwvWAi.jpg',
    releaseDate: '2021-11-24',
    title: 'Encanto'
  },
  {
    id: 762433,
    overview:
      "Tras un asedio apocalíptico, 'Zeros and Ones' cuenta la historia de cuando el soldado americano JJ se abre camino en un mundo turbio y encerrado de miedo, paranoia y, más adelante, esperanza a la sombra del Vaticano. Una guerra entre la historia y el futuro tiene lugar hasta el amanecer.",
    posterPath:
      'https://image.tmdb.org/t/p/w300/dWwspmKX8lTPe2M3wMycxbegTgQ.jpg',
    releaseDate: '2021-11-18',
    title: 'Zeros and Ones'
  },
  {
    id: 370172,
    overview:
      'En ‘No Time to Die’, James Bond se encuentra disfrutando de unas merecidas vacaciones en Jamaica. Sin embargo, su paz termina cuando su amigo de la CIA, Felix Leiter, lo busca para una nueva misión que implica rescatar a un importante científico que ha sido secuestrado.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/rDfYClNuplM26KwPbyFAE7CDZo4.jpg',
    releaseDate: '2021-09-29',
    title: 'Sin tiempo para morir'
  },
  {
    id: 522402,
    overview:
      'Tom Hanks interpreta a Finch, un ingeniero especializado en robótica y uno de los pocos supervivientes de un cataclismo solar que ha convertido al mundo en un páramo. Pero Finch, que lleva una década viviendo en un búnker subterráneo, ha construido un mundo propio que comparte con su perro, Goodyear, y con un robot, interpretado por Caleb Landry Jones, que creó para que cuide de Goodyear cuando él ya no pueda hacerlo. Cuando el trío se embarca en un peligroso viaje al desolado oeste americano, Finch se esfuerza por mostrar a su creación, que se bautizó como Jeff, y la alegría y la maravilla que representan estar vivo. Su viaje está plagado de retos y de humor, ya que a Finch le resulta tan difícil lograr que Jeff y Goodyear se lleven bien como a él lidiar con los peligros de este nuevo mundo.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/akCtSzs2ln4lFWODXZ412lmsjUe.jpg',
    releaseDate: '2021-11-04',
    title: 'Finch'
  },
  {
    id: 524434,
    overview:
      'Hace millones de años, los seres cósmicos conocidos como los Celestiales comenzaron a experimentar genéticamente con los humanos. Su intención era crear individuos superpoderosos que hicieran únicamente el bien, pero algo salió mal y aparecieron los Desviantes, destruyendo y creando el caos a su paso. Ambas razas se han enfrentado en una eterna lucha de poder a lo largo de la historia. En medio de esta guerra, Ikaris y Sersi tratarán de vivir su propia historia de amor.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/zpSW0AswPGYZQvLVsHbAcTzEyy3.jpg',
    releaseDate: '2021-11-03',
    title: 'Eternals'
  },
  {
    id: 767377,
    overview:
      'Cuando un cínico ex presentador de noticias de televisión recibe una llamada alarmante en su programa de radio, ve la oportunidad de regresar a su carrera, pero puede costarle la conciencia.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/sWjCiyjheEXDluWi1uAVKtdpkYd.jpg',
    releaseDate: '2021-11-19',
    title: 'Dhamaka'
  },
  {
    id: 885110,
    overview:
      'En Zazzau del siglo XVI, ahora Zaria, Nigeria, Amina debe utilizar sus habilidades y tácticas militares para defender el reino de su familia. Basado en una historia real.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/gII53HAH7UA1yx189vROMzWA5ib.jpg',
    releaseDate: '2021-11-04',
    title: 'Amina'
  },
  {
    id: 550988,
    overview:
      'Guy trabaja como cajero de un banco, y es un tipo alegre y solitario al que nada la amarga el día. Incluso si le utilizan como rehén durante un atraco a su banco, él sigue sonriendo como si nada. Pero un día se da cuenta de que Free City no es exactamente la ciudad que él creía. Guy va a descubrir que en realidad es un personaje no jugable dentro de un brutal videojuego.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/suaooqn1Mnv60V19MoGxneMupJs.jpg',
    releaseDate: '2021-08-11',
    title: 'Free Guy'
  },
  {
    id: 876716,
    overview:
      'Mientras su mejor amigo, Luca, está en el colegio, Alberto disfruta de su nueva vida en Portorosso, donde trabaja con Massimo, el imponente pescador manco y tatuado, parco en palabras, que es, a ojos de Alberto, el humano más guay de todo el planeta. Lo que más desea Alberto es impresionar a su mentor, pero eso es más fácil decirlo que hacerlo. Corto relacionado con la película "Luca" de Pixar.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/3xlgMrGXYlQ7W7Sj0bllJgPHiB3.jpg',
    releaseDate: '2021-11-12',
    title: 'Ciao Alberto'
  },
  {
    id: 877183,
    overview:
      'Los Simpson organizan una fiesta de Disney + Day y todos están en la lista ... excepto Homer. Con amigos de todo el servicio y música digna de una princesa de Disney, Plusaversary es el evento del año de Springfield.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/p5jzbffrXuBTjsiwrQ3aOMTrvCj.jpg',
    releaseDate: '2021-11-12',
    title: 'Los Simpson en Plusniversario'
  },
  {
    id: 763164,
    overview:
      'Cinco cazadores de élite pagan para cazar a un hombre en una isla desierta. A medida que avanza la cacería, los cazadores se convierten en presa de su presa que demuestra un nivel de supervivencia desconocido.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg',
    releaseDate: '2021-11-12',
    title: 'Apex'
  },
  {
    id: 438631,
    overview:
      'En un lejano futuro, la galaxia conocida es gobernada mediante un sistema feudal de casas nobles bajo el mandato del Emperador. Las alianzas y la política giran entorno a un pequeño planeta, Dune,  del que extrae la "especia melange", la materia prima que permite los viajes espaciales. La Casa Atreides, bajo el mandato del Duque Leto Atreides recibe el encargo de custodiar el planeta, relevando en la encomienda a sus históricos enemigos, los Harkonnen. Paul Atreides, hijo del duque, se verá atrapado en las intrigas políticas mientras descubre el destino que le deparan los desiertos de Dune. Nueva adaptación al cine de las novelas de Frank Herbert, que ya fueron trasladadas a la gran pantalla por David Lynch en 1984.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/m6XWQpT0biTpe5wBGWd60RXmtEX.jpg',
    releaseDate: '2021-09-15',
    title: 'Dune'
  },
  {
    id: 785538,
    overview:
      'Para ofrecer una vida mejor a su familia en el país, Mateus, de 18 años, acepta un trabajo en un vertedero de São Paulo para su nuevo jefe, Luca, pero se ve atrapado en el peligroso mundo del tráfico de personas.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/zLOf5qU2vx3cYRGkm5PDJBHxEq4.jpg',
    releaseDate: '2021-10-22',
    title: '7 prisioneros'
  },
  {
    id: 633802,
    overview:
      'Dark Spell es la historia de una chica llamada Zhenya que sufre por estar enamorada de su marido que la ha abandonado, por lo que decide traerlo de vuelta. La heroína desesperada lanza un hechizo llamado "" Boda Negra "", que es un ritual mágico conocido por su gran poder e irreversibilidad. Después del ritual, su amado esposo regresa, aunque su amor se vuelve más como una obsesión: incluso está dispuesto a matar a Zhenya, para no dársela a nadie. Cuando muere el marido enloquecido, el hechizo no cesa: porque ni siquiera la muerte separará a los que fueron prometidos por el demonio de las bodas negras.',
    posterPath:
      'https://image.tmdb.org/t/p/w300/rd2gDMuCdC5iQrIQdKHfPcoK3k8.jpg',
    releaseDate: '2021-02-11',
    title: 'Dark Spell'
  }
]

export default movies
