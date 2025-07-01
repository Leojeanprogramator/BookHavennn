const livros = [
  {
    id: 1,
    titulo: "As 48 Leis Do Poder",
    categoria: "desenvolvimento",
    Formato:"PDF",
    img: "https://m.media-amazon.com/images/I/81C6v0ElnxL._UF894,1000_QL80_.jpg",
    link: "https://drive.google.com/file/d/1o94RQQq9jDxRYNx9-N2Ud8JoUiDEW2h8/view?usp=drive_link",
    descricao: "Em As 48 leis do poder, o leitor aprende a manipular pessoas e situações para alcançar seus objetivos. E descobre por que alguns conseguem ser tão bem-sucedidos, enquanto outros estão sempre sendo passados para trás. Querer ser melhor do que o chefe, por exemplo, é um erro fatal."
  },
  {
    id: 2,
    titulo: "Verity - Colleen Hoover",
    categoria: "romance",
   Formato:"PDF",
    img: "https://i.postimg.cc/FKkbcb9S/Chat-GPT-Image-2-05-2025-18-39-44.png",
    link: "https://drive.google.com/file/d/1Dxux7OvO1ZZuOfQ277dVYm7YlxIAaISw/view?usp=drive_link",
    descricao: "O livro 'Verity', de Colleen Hoover, é um thriller psicológico que acompanha Lowen Ashleigh, uma escritora contratada para terminar a série de livros de sucesso de Verity Crawford, uma autora que se encontra em estado catatônico após um grave acidente."
  },
  {
    id: 3,
    titulo: "A Sutil Arte de Ligar o F*da-Se",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/6175IU0qFgL._SL1000_.jpg",
    link: "https://drive.google.com/file/d/1GbVTY1shOVrgsI3LrcpnIjtFiJ7H9fEI/view?usp=drive_link",
    descricao: "Com uma linguagem bem-humorada e ácida, A sutil arte de ligar o f*da-se propõe um novo olhar para a vida, mais coerente com a realidade uma oposição à pressão social para sempre demonstrar otimismo."
  },
{id: 4, titulo:"Corte de Espinhos e Rosas", categoria:"romance", preco:4.99, img:"https://cdn.record.com.br/wp-content/uploads/2020/08/25155421/6123-600x889.jpeg", link:"https://drive.google.com/file/d/1mJIqRJGmQOTsAJRKiXStVS_3XTOBWtNi/view?usp=drive_link", descricao:"Num mundo dividido uma muralha mágica separa duas espécies. De um lado, os feéricos vivem dentro de suas fronteiras cheias de beleza e mistério; do outro, os humanos possuem apenas medo, desconfiança e dificuldades. Feyre, filha de um casal de mercadores humanos e falidos, se torna caçadora para sustentar a família."},
  {
  id: 5,
  titulo: "Garota exemplar",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/510k5EkYuWL._SY425_.jpg",
  link: "https://drive.google.com/file/d/1jYTFHSUtqsLQ4tJx5GdolcfXjIdW-cFp/view?usp=drive_link",
  descricao: "Garota exemplar é tipicamente descrita como uma pessoa com bom comportamento, responsabilidade e sucesso acadêmico. Ela é conhecida por ser uma aluna dedicada, obediente, e que se destaca positivamente em suas atividades. Além disso, uma garota exemplar geralmente demonstra respeito, empatia e boas atitudes em suas interações sociais."
},
  {id: 6, titulo:"Os Segredos da Mente Milionaria - T. Harv Eker", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/41W22mT8L-L._SY445_SX342_.jpg", link:"https://drive.google.com/file/d/1zgWY6oLSKT7yyk3KD5HgtKwqfGVotB5j/view?usp=drive_link", descricao:"Eker mostra como substituir uma mentalidade destrutiva – que você talvez nem perceba que tem – pelos, 17 modos de pensar e agir que distinguem os ricos das demais pessoas."},
  {id: 7, titulo:"Hábitos Atómicos", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/51DOkmV31rL._SY445_SX342_.jpg", link:"https://drive.google.com/file/d/1fQ56FqVnhzQrQe5AJjulpFJ3nDVJ2aqx/view?usp=drive_link", descricao:"Hábitos Atômicos é um livro do James Clear que explora a importância de pequenas mudanças diárias para alcançar grandes resultados. A ideia central é que, ao focar em melhorias de 1% por dia, acumuladas ao longo do tempo. podemos criar um efeito composto que leva a mudanças significativas em nossa vida."},
  {id: 8, titulo:"Pai Rico Pai Pobre", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/71V4lNR2gKL._SL1500_.jpg", link:"https://drive.google.com/file/d/10Ot0smEV5WFhk_fG5jYd_MFKYcQ4QTAx/view?usp=drive_link", descricao:"Pai Rico, Pai Pobre é o primeiro best-seller de Robert Kiyosaki e Sharon Lechter. Ele advoga a busca pela independência financeira através de investimento, imóveis, ter seu próprio negócio e o uso de táticas financeiras de proteção do patrimônio."},
  {id: 9, titulo:"O Milagre Da Manhã Hal-Elrod", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/512zQ6qXkML._AC_UF1000,1000_QL80_.jpg", link:"https://drive.google.com/file/d/18_vZ3YT1AJwlTGKwMO_DuIuIkZeJBNv_/view?usp=drive_link", descricao:"Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades. O milagre da manhã permite que o leitor alcance níveis de sucesso jamais imaginados, tanto na vida pessoal quanto profissional."},
  {id: 10, titulo:"Até o Verão Terminar - Colleen Hoover", categoria:"romance", preco:4.99, img:"https://i.postimg.cc/FKrhF0HL/Whats-App-Image-2025-05-07-at-17-34-18.jpg", link:"https://drive.google.com/file/d/1KINJJY8jvc3TYWg_yLp2ePP1KrxfiH9f/view?usp=drive_link", descricao:"Uma vida de dor e abandono fizeram de Beyah uma pessoa cética, desconfiada e boa em guardar segredos. Mas, até o verão terminar, ela terá que rever tudo o que acredita. Da mesma autora dos sucessos É assim que acaba, Layla e Verity ."},
  {id: 11, titulo:"12 Regras Para a Vida: Um Antídoto Para o Caos", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/71geoUmEoQL._SY425_.jpg", link:"https://drive.google.com/file/d/11AldhqNTFzOc1YpHaLc0xArRQ0Ok0wYO/view?usp=drive_link", descricao:"Aclamado psicólogo clínico, Jordan Peterson tem influenciado a compreensão moderna sobre a personalidade e, agora, se transformou em um dos pensadores públicos mais populares do mundo, com suas palestras sobre tópicos que variam da bíblia, às relações amorosas e à mitologia, atraindo dezenas de milhões de espectadores. Em uma era de mudanças sem precedentes e polarização da política, sua mensagem franca e revigorante sobre o valor da responsabilidade individual e da sabedoria ancestral tem ecoado em todos os cantos do mundo. Neste livro, ele oferece doze princípios profundos e práticos sobre como viver uma vida com significado."},
  {id: 12, titulo:"Manual de persuasão do FBI", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/715Y9D5zNWL._SY425_.jpg", link:"https://drive.google.com/file/d/1Mqcsbi8CMbJxIWgSdRgUt3u_sZMU3VFN/view?usp=drive_link", descricao:"Como um agente especial para o Programa de Análise Comportamental da Divisão de Segurança Nacional do FBI, Dr. Jack Schafer desenvolveu estratégias dinâmicas e inovadoras para entrevistar terroristas e detectar mentiras.  Agora, Dr. Schafer evoluiu suas táticas e nos ensina como aplicá-las no cotidiano para obter sucesso nas relações interpessoais."},
  {id: 13, titulo:"Amor & gelato", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81EE1CAUoEL._SY425_.jpg", link:"https://drive.google.com/file/d/1iuuwRhyAgTt3m4kULeg_CLtCKLvTWFD9/view?usp=drive_link", descricao:"Depois da morte da mãe, Lina fica com a missão de realizar um último pedido: ir até a Itália para conhecer o pai. Do dia para a noite, ela se vê na famosa paisagem da Toscana, morando em uma casa localizada no mesmo terreno de um cemitério memorial de soldados americanos da Segunda Guerra Mundial, com um homem que nunca tinha ouvido falar."},
  {id: 14, titulo:"Todas as suas (im)perfeições - Colleen Hoover", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81Vhnel+xxL._SY425_.jpg", link:"https://drive.google.com/file/d/1J1fK7ERr6nFM5-VcZInr3Be8GGaD4xjL/view?usp=drive_link", descricao:"Todas as suas imperfeições narra a história de Quinn e Graham. Eles se conhecem no pior dia de suas vidas; ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a traição da namorada. E é assim que ambos acabam no corredor de um prédio, trocando confidências, biscoitos da sorte e palavras de conforto."},
  {id: 15, titulo:"É assim que começa - Colleen Hoover", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81Izv2GRWoL._SY425_.jpg", link:"https://drive.google.com/file/d/11Y2f3PdOn54CDnVLHTaAPPuFOI1FHa5y/view?usp=sharing", descricao:"Preparem os corações. Lily e Atlas estão de volta na aguardada sequência de É assim que acaba. É assim que começa chega para consagrar novamente Colleen Hoover como a autora mais vendida do Brasil. Colleen é um fenômeno editorial, acumulando não só milhões de visualizações no TikTok, mas também milhões de exemplares vendidos."},
  {id: 17, titulo:"Sem esperança (Vol. 2 Hopeless) - Colleen Hoover", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91DszGVK+2L._SY425_.jpg", link:"https://drive.google.com/file/d/1fWqB6XqVAnGD4LL-9S1OuNpGV2G-952O/view?usp=drive_link", descricao:"Após se apaixonar por Sky e Holder em Um caso perdido, agora é a hora de conhecer o outro lado da história. Sem esperança oferece a perspectiva única dos impactantes acontecimentos através do olhar de Holder. Da autora dos best-sellersÉ assim que acaba e Verity, Colleen Hoover chega com mais um romance arrebatador e emocionante, nesta nova edição com capa inédita da artista Carmell Louize."},
  {id: 19, titulo:"O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios", categoria:"desenvolvimento", preco:4.99, img:"https://m.media-amazon.com/images/I/815iPX0SgkL._SY425_.jpg", link:"https://drive.google.com/file/d/1171s5qOBHWURilM8dzmEfonrXaIH2_pt/view?usp=drive_link", descricao:"Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. "},
  {id: 20, titulo:"Os sete maridos de Evelyn Hugo", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91yEPgRcELL._SY425_.jpg", link:"https://drive.google.com/file/d/1yORQU_xn2NOjrUMpXhg48T4hu4Ad5SGQ/view?usp=drive_link", descricao:"Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez."},
  {id: 21, titulo:"A paciente silenciosa", categoria:"suspense", preco:4.99, img:"https://m.media-amazon.com/images/I/91R8S52UP6L._SY425_.jpg", link:"https://drive.google.com/file/d/10ruwLQoiSG5dyY5G6I_5JGcepjLS09Sb/view?usp=drive_link", descricao:"Após cometer o assassinado de seu marido, uma mulher se recusa a falar qualquer coisa, deixando suspeitas e mistérios não resolvidos sobre o caso. E o terapeuta Theo Faber  está obcecado em descobrir o motivo da violencia e do silencio. Só ela sabe o que aconteceu. Só ele pode fazê-la falar.  A paciente silenciosa é um daqueles livros que não saem da cabeça do leitor, quer ele queira, quer não."},
  {id: 22, titulo:"Boa garota nunca mais: Manual de assassinato para boas garotas (vol. 3)", categoria:"suspense", preco:4.99, img:"https://m.media-amazon.com/images/I/81atsbPweKL._SY425_.jpg", link:"https://drive.google.com/file/d/1rj6Qwpg5Slozxx0_3K2REFrKxMMuCm3g/view?usp=drive_link", descricao:"Após uma série de eventos estranhos, Pip percebe que está sendo perseguida de verdade. E pior: seu stalker pode estar conectado a um assassino que aterrorizou a região na mesma época do caso de Andie Bell. Com a ajuda de Ravi, a garota precisa descobrir quem está por trás disso… antes que se torne a próxima vítima."},
  {id: 23, titulo:"Boa garota, segredo mortal(Vol.2)", categoria:"suspense", preco:4.99, img:"https://m.media-amazon.com/images/I/81JPQxDDNeL._SY425_.jpg", link:"https://drive.google.com/file/d/1Idn0SWgrvgouft6bCK6wqYSY9HWpyd-T/view?usp=drive_link", descricao:"Um ano após a investigação obsessiva que reescreveu a história de sua pacata cidade, Pip acredita que seus dias de detetive amadora chegaram ao fim. Prometendo nunca mais se envolver no emaranhado de segredos de Little Kilton, a garota planeja lançar um podcast sobre a resolução do caso e voltar a ter uma vida normal."},
  {id: 24, titulo:"Uma segunda chance - Colleen Hoover", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/813WvRoZ0HL._SY466_.jpg", link:"https://drive.google.com/file/d/1zAWBKBgIwXuI9v2dYjAKg8WPxdzNIztr/view?usp=drive_link", descricao:"Será que todos merecem uma segunda chance? É o que mais deseja Kenna Rowan, na luta para recuperar os pedaços estilhaçados de sua antiga vida após um trágico acidente ter colocado tudo a perder. Uma segunda chance é o tão esperado novo romance de Colleen Hoover, CoHo para os íntimos, autora fenômeno de vendas, que já ultrapassou a marca de 1 milhão de exemplares vendidos no Brasil. "},
  {id: 25, titulo:"O lado feio do amor - Colleen Hoover", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81FEytag46L._SY466_.jpg", link:"https://drive.google.com/file/d/1AMbXDEVskly_7UWn-rZpKNRB_6bjRCl5/view?usp=drive_link", descricao:"Quando começou a se envolver com Miles, Tate prometeu não se apaixonar. Mas vai descobrir que nenhuma regra é capaz de controlar o amor e o desejo...Da autora-fenômeno Colleen Hoover, que acumula best- sellers , visualizações no TikTok e milhares de leitores apaixonados no mundo todo."},
  {id: 26, titulo:"É Assim que Acaba: 1 - Colleen Hoover", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91r5G8RxqfL._SY466_.jpg", link:"https://drive.google.com/file/d/11Y2f3PdOn54CDnVLHTaAPPuFOI1FHa5y/view?usp=drive_link", descricao:"Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil. É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta. "},
  {id: 27, titulo:"A Biblioteca da Meia-Noite", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81iqH8dpjuL._SY425_.jpg", link:"https://drive.google.com/file/d/1wCK6osKyhWvvdlLqwbG3VHCsfgC_ZiRc/view?usp=drive_link", descricao:"A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo."},
  {id: 28, titulo:"Vermelho, branco e sangue azul", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/41QaXCahKrL._SY445_SX342_.jpg", link:"https://drive.google.com/file/d/1jDl-TW2lBfYhU6O0fbUZ73Mjwo-9obM7/view?usp=drive_link", descricao:"Quando sua mãe foi eleita presidenta dos Estados Unidos, Alex Claremont-Diaz se tornou o novo queridinho da mídia norte-americana. Bonito, carismático e com personalidade forte, Alex tem tudo para seguir os passos de seus pais e conquistar uma carreira na política, como tanto deseja. Mas quando sua família é convidada para o casamento real do príncipe britânico Philip, Alex tem que encarar o seu primeiro desafio diplomático: lidar com Henry, irmão mais novo de Philip, o príncipe mais adorado do mundo, com quem ele é constantemente comparado ― e que ele não suporta."},
  {id: 29, titulo:"Coraline: Neil Gaiman & Chris Riddell", categoria:"ficcao", preco:4.99, img:"https://m.media-amazon.com/images/I/818565mPygL._SY466_.jpg", link:"https://drive.google.com/file/d/12zYqvFAY7mKy_86tAlA6HZdRPL49ukps/view?usp=drive_link", descricao:"Não é a névoa, nem o gato que parece estar sempre a observá-la, nem os sinais de perigo que a Srta. Spink e a Srta. Forcible, suas novas vizinhas, leem nas folhas de chá. É a outra casa – aquela atrás da velha porta da sala de estar. Outra mãe e um pai com olhos de botão preto e pele fina como papel esperam que Coraline se junte a eles. E querem que ela fique com eles. Para sempre. Ela sabe que, se se aventurar por aquela porta, pode nunca mais voltar."},
  {id: 30, titulo:"O verão que mudou minha vida: (Trilogia Verão vol. 1)", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91UjIwmok9L._SY425_.jpg", link:"https://drive.google.com/file/d/1y9jQxhxsKd3JJn6V62TPliHFyQmEaiX5/view?usp=drive_link", descricao:"Com uma história encantadora e personagens inesquecíveis, a Trilogia Verão acompanha os amores, as desilusões e os dilemas da protagonista Belly dos 15 aos 24 anos. Em meio a descobertas e mudanças, ela se apaixona, se envolve em um triângulo amoroso, entra na universidade e descobre que amadurecer também significa tomar decisões difíceis. A trama escrita por Jenny Han, autora de Para todos os garotos que já amei, inspirou a série de sucesso O verão que mudou minha vida, do Amazon Prime Video."},
  {id: 31, titulo:"Sem você não é verão: (Trilogia Verão vol. 2) ", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/81RAaO1bJ1L._SY425_.jpg", link:"https://drive.google.com/file/d/15lCZCQt6qD1vAGth7VDRqXW8To8bB8JR/view?usp=drive_link", descricao:"Com uma história encantadora e personagens inesquecíveis, a Trilogia Verão acompanha os amores, as desilusões e os dilemas da protagonista Belly dos 15 aos 24 anos. Em meio a descobertas e mudanças, ela se apaixona, se envolve em um triângulo amoroso, entra na universidade e descobre que amadurecer também significa tomar decisões difíceis. A trama escrita por Jenny Han, autora de Para todos os garotos que já amei, inspirou a série de sucesso O verão que mudou minha vida, do Amazon Prime Video."},
  {id: 32, titulo:"Sempre teremos o verão: (Trilogia Verão vol. 3)", categoria:"romance", preco:4.99, img:"https://m.media-amazon.com/images/I/91-szq3u4AL._SY425_.jpg", link:"https://drive.google.com/file/d/1-td5vidn426JgKVhOfJ6DTts1fLisqqV/view?usp=drive_link", descricao:"Com uma história encantadora e personagens inesquecíveis, a Trilogia Verão acompanha os amores, as desilusões e os dilemas da protagonista Belly dos 15 aos 24 anos. Em meio a descobertas e mudanças, ela se apaixona, se envolve em um triângulo amoroso, entra na universidade e descobre que amadurecer também significa tomar decisões difíceis. A trama escrita por Jenny Han, autora de Para todos os garotos que já amei, inspirou a série de sucesso O verão que mudou minha vida, do Amazon Prime Video."},
  {id: 33, titulo:"O príncipe cruel (Vol. 1 O Povo do Ar)", categoria:"ficcao", preco:4.99, img:"https://m.media-amazon.com/images/I/81FH6q0EqYS._SY425_.jpg", link:"https://drive.google.com/file/d/1eAfojYCtgf7NAG83hQTD4c7TGJdQ1EP8/view?usp=drive_link", descricao:"Jude tinha apenas sete anos quando seus pais foram brutalmente assasinados e ela e as irmãs levadas para viver no traiçoeiro Reino das Fadas. Dez anos depois, tudo o que Jude quer é se encaixar, mesmo sendo uma garota mortal. Mas todos os feéricos parecem desprezar os humanos... Especialmente o príncipe Cardan, o mais jovem e mais perverso dos filhos do Grande Rei de Elfhame."},
   {
    id: 34,
    titulo: "Corte de Névoa e Fúria",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81yonPQS4zL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1s7FkV8ranAfpHHY839QKkj3A6Q9CWpWB/view?usp=drive_link",
    descricao: "Feyre retorna à Corte Primaveril com poderes de Fada Suprema, mas enfrenta dilemas entre amor e liberdade enquanto uma ameaça antiga ressurge."
  },
  {
    id: 35,
    titulo: "Corte de Asas e Ruína",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81-VXYgospL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/122Y2Z4m5kzqAdJN4GaZtCWlkha5_B2XB/view?usp=drive_link",
    descricao: "Feyre infiltra-se na Corte Primaveril para reunir informações sobre o rei que ameaça Prythian, enfrentando intrigas e perigos iminentes."
  },
  {
    id: 36,
    titulo: "Corte de Gelo e Estrelas",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81BFOwnB6AL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/172MqqPNM1OxPA3fL4-_T4FlvmIOk020b/view?usp=drive_link",
    descricao: "Feyre e Rhysand trabalham para reconstruir Velaris após a guerra, enquanto enfrentam desafios pessoais e políticos na busca por paz."
  },
  {
    id: 37,
    titulo: "Corte de Chamas Prateadas",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/910yLnXkQnL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1QFoRk0Xmx2zp_rIrK3jtzmoo2_FHLpuZ/view?usp=drive_link",
    descricao: "Nesta e Cassian enfrentam traumas e desafios internos enquanto buscam redenção e aceitação em um mundo pós-guerra."
  },
  {
    id: 38, 
    titulo: "Harry Potter e a Câmara Secreta",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81jbivNEVML._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1abAOJzOlkvcIiVNcVpG_nnnlp9pabLCG/view?usp=drive_link",
    descricao: "Segunda aventura de Harry em Hogwarts, onde ele enfrenta mistérios na Câmara Secreta."
  },
  {
    id: 39,
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81u+ljPVifL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/16siF0TBaXyeVbPnJkt6zoGfim3ttIRUs/view?usp=drive_link",
    descricao: "Harry descobre segredos sobre seu passado e enfrenta novos perigos com a fuga de Sirius Black."
  },
  {
    id: 40,
    titulo: "Harry Potter e o Cálice de Fogo",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81nTLN-kz7L._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1H4ijJnjo6ojsP0tybaMMOYh9l_NDdMd_/view?usp=drive_link",
    descricao: "Harry compete no Torneio Tribruxo, enfrentando desafios mortais e ameaças crescentes."
  },
  {
    id: 41,
    titulo: "Harry Potter e a Ordem da Fênix",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81d6ESyPZwL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1Tuw0G4XfD2olBREeEenhs5bB-TY0Lik7/view?usp=drive_link",
    descricao: "Harry lidera a resistência contra Voldemort e enfrenta a opressão no Ministério da Magia."
  },
  {
    id: 42,
    titulo: "Harry Potter e o Enigma do Príncipe",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81yFIh1yoZL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1JiE4VDm6zSlyxMZuZdszFFZMIWVnK342/view?usp=drive_link",
    descricao: "Segredos sombrios do passado de Voldemort começam a ser revelados."
  },
  {
    id: 43,
    titulo: "Harry Potter e as Relíquias da Morte",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81rvO7xcJOL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1jm6xfRIyO1WOi8trOOVrH8iFL0CmdCCy/view?usp=drive_link",
    descricao: "A batalha final contra Voldemort, com decisões que mudarão o destino do mundo mágico."
  },
  {
    id: 44,
    titulo: "Harry Potter e a Criança Amaldiçoada",
    categoria: "fantasia",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/91m1WPwTusL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1uW0Z98RHvLcNXIpg-xHYAjtOyezwwZ-6/view?usp=drive_link",
    descricao: "Peça de teatro que continua a saga da família Potter, com novas aventuras e desafios."
  },
  {
    id: 56,
    titulo: "O milagre da manhã para se tornar um milionário.",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81sExobsgoL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1vhM-Zvo0tjB_ksI4Uv25odTXSSAJupkj/view?usp=drive_link",
    descricao: "Método de Hal Elrod para transformar sua rotina matinal e alcançar mais sucesso e produtividade."
  },
  {
    id: 58,
    titulo: "Essencialismo",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/71HuZRl-XeL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1Qm94UZjWIM8oyLTDP_v5eiimixYeubCr/view?usp=drive_link",
    descricao: "Um guia para focar no que realmente importa e eliminar o excesso na vida profissional e pessoal."
  },
  {
    id: 59,
    titulo: "O Homem Mais Rico da Babilônia",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/81ehX6Quw2L._SL1500_.jpg",
    link: "https://drive.google.com/file/d/13HP3tDvtVwL-7ib-Gs08yTq_tdhawLtD/view?usp=drive_link",
    descricao: "Princípios financeiros atemporais para prosperar, contados através de parábolas da antiga Babilônia."
  },
  {
    id: 60,
    titulo: "Poder e Manipulação - Jacob Petry",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/717diaFhKoL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1CUbI3xd7oEo2NrBP-Y6KvADBX7mKnFGb/view?usp=drive_link",
    descricao: "Um olhar profundo sobre as técnicas de influência e manipulação nas relações humanas."
  },
  {
    id: 61,
    titulo: "Comece Pelo Porquê - Simon Sinek",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/71M6czhxmTL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1b-Q2e-OPMH2FQxNpgljwoikeFYLm7ebL/view?usp=drive_link",
    descricao: "Descubra o poder de liderar com propósito e por que algumas pessoas e empresas inspiram mais."
  },
  {
    id: 62,
    titulo: "Mindset - Carol Dweck",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/71Ils+Co9fL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1rsQA5szK5t7YK_qP5DkILccUsK5TZfAh/view?usp=drive_link",
    descricao: "Como a mentalidade de crescimento pode impactar seu sucesso nos estudos, carreira e relacionamentos."
  },
  {
    id: 63,
    titulo: "Mais Esperto que o Diabo - Napoleon Hill",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/819ERrDHRcL._SL1500_.jpg",
    link: "https://drive.google.com/file/d/1BVw1Z99PD8DA-pX_SQFi4AS7CQzmACcH/view?usp=drive_link",
    descricao: "Reflexões profundas sobre medo, fé e sucesso, em uma entrevista imaginária com o 'Diabo'."
  },
  {
    id: 64,
    titulo: "Quebrando o Hábito de Ser Você Mesmo",
    categoria: "desenvolvimento",
    preco: 4.99,
    img: "https://m.media-amazon.com/images/I/61me0V6JIKL._SL1360_.jpg",
    link: "https://drive.google.com/file/d/1clGpBXn70aobVDezmBwlTMOXiuMKapjn/view?usp=drive_link",
    descricao: "Dr. Joe Dispenza ensina como mudar crenças e padrões mentais para transformar sua realidade."
  },
  {
  id: 65,
  titulo: "Seis Anos Depois",
  categoria: "suspense",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/81BgOQJ4KUL._SL1500_.jpg", // Substitua pela capa real
  link: "https://drive.google.com/file/d/1tLJrFQeW4hPk3D6EfUveCRDKe3q_UbCJ/view?usp=drive_link",
  descricao: "Jake Fisher viu o amor da sua vida se casar com outro. Seis anos depois, ele descobre que nada era o que parecia. Uma trama de suspense e reviravoltas."
},
{
  id: 66,
  titulo: "O Jardim das Borboletas",
  categoria: "suspense",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/91PdHkLLtNL._SL1500_.jpg", // Substitua pela capa real
  link: "https://drive.google.com/file/d/1ER5dibqW41eSS6We9TKrc6Je_ey4uSaP/view?usp=drive_link",
  descricao: "Um jardim secreto onde meninas são mantidas contra a vontade por um psicopata. Uma história perturbadora, intensa e psicologicamente densa."
},
{
  id: 67,
  titulo: "A Empregada",
  categoria: "suspense",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/81BdpMhm3iL._SL1500_.jpg", // Substitua pela capa real
  link: "https://drive.google.com/file/d/1ng80IF3F1efVay-OAoIWKhMUa_074k2E/view?usp=drive_link",
  descricao: "Uma empregada doméstica descobre segredos obscuros dos patrões. Um thriller psicológico com viradas surpreendentes."
},
{
  id: 68,
  titulo: "Jantar Secreto",
  categoria: "suspense",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/71AeB1+8dZL._SL1500_.jpg", // Substitua pela capa real
  link: "https://drive.google.com/file/d/1GaKHX7E4nPq3hOi3Hg9BjHsMnieP42i2/view?usp=drive_link",
  descricao: "Quatro amigos promovem jantares misteriosos para a elite carioca, mas segredos sinistros e perigosos estão no cardápio."
},
{
  id: 69,
  titulo: "Mentirosos – Sucesso no TikTok",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/71bJYZfcrKL._SL1500_.jpg", // Substitua pela capa real
  link: "https://drive.google.com/file/d/1eRZmysdBUz8LZKXNsZ8kNbMypRstTN2_/view?usp=drive_link",
  descricao: "Um grupo de adolescentes ricos vive em uma ilha durante o verão. Uma tragédia, segredos e mentiras mudam tudo. Final impactante."
},
{
  id: 70,
  titulo: "O Homem de Giz",
  categoria: "suspense",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/71oxE2vkZmL._SL1500_.jpg", // Substitua pela capa real
  link: "https://drive.google.com/file/d/1zNvoz-froBOYGteNxo1E80xGGbZN-xSt/view?usp=drive_link",
  descricao: "Desenhos de giz levam um grupo de amigos a descobrir um corpo. Anos depois, o passado volta com força e mistérios se intensificam."
},
{
  id: 71,
  titulo: "Todo esse tempo",
  categoria: "romance",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/8132cJm73bL._SL1500_.jpg",
  link: "https://pay.kirvano.com/faed6d73-1a2a-4f07-b163-33968cd753d1",
  descricao: "Após um acidente devastador, Kyle precisa reconstruir sua vida e encontra esperança onde menos esperava."
},
{
  id: 72,
  titulo: "Roube como um artista",
  categoria: "desenvolvimento",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/6106NkDT9hS._SL1213_.jpg",
  link: "https://drive.google.com/file/d/1tCDp19Lj7duFAWS63JvyMim6mYLTnMZn/view?usp=drive_link",
  descricao: "10 dicas práticas sobre criatividade para inovar, inspirar-se e desenvolver seu potencial criativo."
},
{
  id: 73,
  titulo: "A Cantiga dos Pássaros e das Serpentes",
  categoria: "fantasia",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/81Iluivp1gL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1srUuLhZdsgZpvbkw3z_7Ycc62GeHkmyy/view?usp=drive_link",
  descricao: "Prequel da saga Jogos Vorazes, revelando o passado do presidente Snow e os primórdios dos jogos."
},
{
  id: 74,
  titulo: "O Diário de Jack, o Estripador",
  categoria: "true crime",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/A1D6YuNtv3L._SL1500_.jpg",
  link: "https://drive.google.com/file/d/14JYf5SrVXSjChHLiTVCQVDqHzc4Rj3fb/view?usp=drive_link",
  descricao: "Investigação polêmica sobre um diário atribuído ao lendário assassino de Whitechapel."
},
{
  id: 75,
  titulo: "Quebre os seus sapatinhos de cristal",
  categoria: "desenvolvimento",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/51fAimt1Y-L._SL1000_.jpg",
  link: "https://drive.google.com/file/d/1ii77_VMzq88EqLDfVTJ_AjTkt-SejrWK/view?usp=drive_link",
  descricao: "Uma coletânea poética feminista sobre empoderamento, libertação e reconstrução pessoal."
},
{
  id: 76,
  titulo: "Precisamos falar sobre o Kevin",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/919g-oJ1tZL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1dwRPadVd0lcYDXYetMWXr-sbYDPk5IOT/view?usp=drive_link",
  descricao: "Uma mãe tenta entender os motivos que levaram seu filho a cometer um crime brutal em sua escola."
},
{
  id: 77,
  titulo: "Por Lugares Incríveis",
  categoria: "romance",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/918Maoi6OML._SL1500_.jpg",
  link: "https://drive.google.com/file/d/12lSBy_gHME5MwZXbLau7e9Fdco1Xv7e9/view?usp=drive_link",
  descricao: "Dois jovens com passados traumáticos se encontram e embarcam em uma jornada transformadora."
},
{
  id: 78,
  titulo: "Os Dois Morrem No Final",
  categoria: "drama",
  preco: 4.99,
  img: "https://books.google.com.br/books/publisher/content?id=vC84EAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2AFp_OPTpal_1GTXv8Z13pULOhPw&w=1280",
  link: "https://drive.google.com/file/d/1GYqYKWHVo7hPO7w2HbqqIlHQfK5aYPXe/view?usp=drive_link",
  descricao: "Em um mundo onde é possível saber o dia da própria morte, dois jovens vivem seu último dia juntos."
},
{
  id: 79,
  titulo: "Os 13 porquês: Se você está ouvindo isso já é tarde demais",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/81gDX2uuoiL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1oZubX1R4zdZUAbs3obZSj2xlGHpqmEzR/view?usp=drive_link",
  descricao: "Clay recebe fitas deixadas por Hannah, explicando os motivos que a levaram a tirar a própria vida."
},
{
  id: 80,
  titulo: "O Deus que destrói sonhos",
  categoria: "desenvolvimento",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/91VxtptiBgL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1ZnVNQOn4WuYavCYchVhUrRk-uR3lqOlT/view?usp=drive_link",
  descricao: "Um convite a confiar em Deus mesmo quando Ele desmonta nossos planos para revelar algo maior."
},
{
  id: 81,
  titulo: "O Castelo Animado",
  categoria: "fantasia",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/81JPLgU-EgS._SY385_.jpg",
  link: "https://drive.google.com/file/d/1VMJjnExjRfqgebbPjnCzaa2KT4uGQ3c-/view?usp=drive_link",
  descricao: "Sophie é amaldiçoada e busca ajuda no castelo de um mago imprevisível chamado Howl."
},
{
  id: 82,
  titulo: "O Último Rei Dragão",
  categoria: "fantasia",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/91z92c6URXL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1zh0X8Mb1uJOX2n-sf51Q6sHZzV595E2c/view?usp=drive_link",
  descricao: "Um herdeiro perdido retorna para salvar um reino à beira da destruição por criaturas mágicas."
},
{
  id: 83,
  titulo: "Mil beijos de garoto",
  categoria: "romance",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/71PwlBLehAL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1rn_MbCqjh7C9cugKtJRx2DuNxr-y69az/view?usp=drive_link",
  descricao: "Um romance comovente sobre amor, perda e a beleza das memórias que resistem ao tempo."
},
{
  id: 84,
  titulo: "Haunted Love",
  categoria: "romance",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/91p-EDZgBzL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1OOv9cciEdJAWq9qswe00lCM5OD6hc4Og/view?usp=drive_link",
  descricao: "Uma história de amor marcada por traumas do passado e segredos que ameaçam o presente."
},
{
  id: 85,
  titulo: "Love in The Dark",
  categoria: "romance",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/71A5tOXn9GL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1-vTXBAH2aPBP4kA5dHxI8w_GnjKdiOEX/view?usp=drive_link",
  descricao: "Duas almas quebradas encontram luz uma na outra, mas sombras do passado ainda assombram o futuro."
},
{
  id: 86,
  titulo: "Extraordinário",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/41--5-gbIhL._SY445_SX342_.jpg",
  link: "https://drive.google.com/file/d/1Hn2kNS2kshGHNf6bTPIhEqlk5GOJ1R6Z/view?usp=drive_link",
  descricao: "A história inspiradora de Auggie, um garoto com uma deformidade facial, e sua luta por aceitação."
},
{
  id: 87,
  titulo: "Fabricante de Lágrimas",
  categoria: "romance",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/51xezL8vrCL._SY445_SX342_.jpg",
  link: "https://drive.google.com/file/d/1tirVi5d1w6heP2_Kx2M31CzUbkpFtbUc/view?usp=drive_link",
  descricao: "Uma história intensa sobre amor, amadurecimento e cicatrizes emocionais que definem quem somos."
},
{
  id: 89,
  titulo: "Coroa de Sombras I",
  categoria: "fantasia",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/91Mz6jcum1L._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1Fp8ZMKcPQO8pP1Qd9sU0jTBWc3vlDsVW/view?usp=drive_link",
  descricao: "Uma guerreira com um passado sombrio parte em uma missão mortal para proteger o reino."
},
{
  id: 90,
  titulo: "BTK: Máscara da Maldade",
  categoria: "suspense",
  preco: 4.99,
  img: "https://i0.wp.com/1.bp.blogspot.com/-4xCApK3G1aY/XVMQs-ArTiI/AAAAAAAAauI/bGPFxblAyO8uf-V1OuSoyO6BQod316NhACLcBGAs/s1600/BTK%2B-%2BPost%2B5.jpg?ssl=1",
  link: "https://drive.google.com/file/d/1109MSllbXkH2XLR_d42FvJ9oRWsO0osz/view?usp=drive_link",
  descricao: "A chocante história do assassino em série BTK, contada através de investigações reais e entrevistas."
},
{
  id: 91,
  titulo: "As Virgens Suicidas",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/91CHrS6ZlYL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1s6NitdMwR_RpEUcfmE2hTBMRIVcxt0Pv/view?usp=drive_link",
  descricao: "Cinco irmãs adolescentes marcadas por repressão e mistério, narradas por vizinhos obcecados."
},
{
  id: 92,
  titulo: "As Vantagens de Ser Invisível",
  categoria: "drama",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/81tJ71gMtpL._SL1500_.jpg",
  link: "https://drive.google.com/file/d/1Ex2Dg3I1tigHi_wj0r4XbKBGnVQoF1ZG/view?usp=drive_link",
  descricao: "Charlie escreve cartas enquanto navega pela adolescência, trauma e amizades transformadoras."
},
{
  id: 93,
  titulo: "Xadrez Básico",
  categoria: "técnico",
  preco: 4.99,
  img: "https://static.wixstatic.com/media/38961e_a3d67f3e6abf4884b20c4957bdd58e45~mv2.jpg/v1/fill/w_980,h_1695,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/38961e_a3d67f3e6abf4884b20c4957bdd58e45~mv2.jpg",
  link: "https://drive.google.com/file/d/1v6bIG7XmhgvHbX7ta1kkqG8BpTMt9oXY/view?usp=drive_link",
  descricao: "De acordo com a crítica especializada, Xadrez Básico é uma das melhores obras da literatura enxadrística moderna, apresentada em estilo agradável, que prima pela clareza e propriedade. Qualquer amador encontrará neste livro uma rica fonte de ensinamentos."
},
{
  id: 94,
  titulo: "Meu Sistema: O Primeiro Livro de Ensino de Xadrez",
  categoria: "técnico",
  preco: 4.99,
  img: "https://m.media-amazon.com/images/I/61bMc7lQV5L._SL1434_.jpg",
  link: "https://drive.google.com/file/d/11gxi8-VtbPWVSBHYYB_aiHnQJS0LtKhR/view?usp=drive_link",
  descricao: "O livro Meu Sistema é considerado por muitos como o mais importante da literatura enxadrística. "
},
 {
    "id": 95,
    "titulo": "CRÔNICA DE UMA NAMORADA",
    "categoria": "romance",
    "descricao": "Uma narrativa envolvente sobre os altos e baixos de um relacionamento amoroso, explorando sentimentos reais com leveza e humor.",
    "img": "https://m.media-amazon.com/images/I/912tV6+SLLL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1Jj_IDcVwPOhjipwACG5MN-EF7WyjDPI9/view?usp=drive_link"
  },
  {
    "id": 97,
    "titulo": "Vidas Secas",
    "categoria": "drama",
    "descricao": "Obra-prima de Graciliano Ramos, retrata a vida difícil de uma família de retirantes nordestinos em meio à seca e à miséria.",
    "img": "https://m.media-amazon.com/images/I/61kIG+4RESL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1pbBv1x27jFeVAtACboy-8UW4Sv0KZvan/view?usp=drive_link"
  },
  {
  "id": 98,
  "titulo": "Vamos Conversar?",
  "categoria": "drama",
  "descricao": "Elisama Santos convida o leitor a refletir sobre como se comunicar com empatia e autenticidade, em busca de relações mais saudáveis.",
  "img": "https://m.media-amazon.com/images/I/81ttjntgszL._SL1500_.jpg",
  "link": "https://drive.google.com/file/d/1CqcnGrQQPgRp8-BGL59HgNWtr2IAptpH/view?usp=drive_link"
},
{
    "id": 99,
    "titulo": "Uma Vida Pequena",
    "categoria": "drama",
    "descricao": "Um romance intenso sobre amizade, trauma e superação, que acompanha a vida de quatro amigos ao longo de décadas em Nova York.",
    "img": "https://m.media-amazon.com/images/I/91mdEwOzdGS._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1ab6_3Zm7vqvY5_W6N1faqGYwT6bTahiC/view?usp=drive_link"
  },
  {
    "id": 100,
    "titulo": "Uma Mulher no Escuro",
    "categoria": "suspense",
    "descricao": "Raphael Montes entrega um thriller psicológico sobre traumas do passado e segredos obscuros que voltam à tona de forma surpreendente.",
    "img": "https://m.media-amazon.com/images/I/91OyxWEVdDL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/12y2jb8ep4OauSTgC8xWVEP6CbMOASCYf/view?usp=drive_link"
  },
  {
    "id": 101,
    "titulo": "Um de Nós Está Mentindo",
    "categoria": "suspense",
    "descricao": "Cinco estudantes entram em detenção. Apenas quatro saem vivos. Uma trama envolvente cheia de segredos e reviravoltas.",
    "img": "https://m.media-amazon.com/images/I/91JOybMpUVL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1NjXiGWWHbIxInLmN1mlwEsvzcRvV-BNs/view?usp=drive_link"
  },
  {
    "id": 102,
    "titulo": "Tudo sobre Amor",
    "categoria": "romance",
    "descricao": "Bell Hooks analisa o amor em suas múltiplas formas, oferecendo uma visão crítica e inspiradora sobre como amar conscientemente.",
    "img": "https://m.media-amazon.com/images/I/71jsAzQaTsL._UF894,1000_QL80_.jpg",
    "link": "https://drive.google.com/file/d/1qqNnpz67_Qyu5Io5rQ4sOsUEqhhyrgg2/view?usp=drive_link"
  },
  {
    "id": 103,
    "titulo": "Tudo é Rio",
    "categoria": "drama",
    "descricao": "Carla Madeira apresenta uma história intensa e poética sobre amor, perdas e escolhas, marcada por profundidade emocional.",
    "img": "https://m.media-amazon.com/images/I/816Udvs9O7L._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/13nz70paFAhEOirqNgmThYTjf09DR_yXe/view?usp=drive_link"
  },
  {
    "id": 104,
    "titulo": "Trono de Vidro - Capítulos Extras",
    "categoria": "fantasia",
    "descricao": "Complemento da série 'Trono de Vidro', esses capítulos extras expandem o universo de Celaena com mais ação e mistérios.",
    "img": "https://m.media-amazon.com/images/I/8149sHa46sL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1J52Mg8EUUbRW-V0DFctH5XoGZ2E1njpH/view?usp=drive_link"
  },
  {
    "id": 105,
    "titulo": "Teto Para Dois",
    "categoria": "terror",
    "descricao": "Raphael Montes mistura suspense e drama em uma narrativa que envolve segredos, solidão e redenção.",
    "img": "https://m.media-amazon.com/images/I/61TAfUkC13L._SL1434_.jpg",
    "link": "https://drive.google.com/file/d/1yQ_uNoYehJ0ts4k0C6D1gW76ioqgUN8i/view?usp=drive_link"
  },
  {
    "id": 107,
    "titulo": "Sete Minutos Depois da Meia-Noite",
    "categoria": "fantasia",
    "descricao": "Uma história comovente sobre perda e aceitação, com elementos fantásticos que ajudam um garoto a enfrentar sua dor.",
    "img": "https://m.media-amazon.com/images/I/817RXVIiekL._SL1437_.jpg",
    "link": "https://drive.google.com/file/d/1JGLxFh-6JSKyoxr5Uck3-q-1itAPQHLA/view?usp=drive_link"
  },
  {
    "id": 108,
    "titulo": "Psicologia do Inconsciente",
    "categoria": "ficcao",
    "descricao": "Obra essencial de Carl Gustav Jung, onde o autor explora os fundamentos do inconsciente coletivo e da psique humana.",
    "img": "https://m.media-amazon.com/images/I/71-XrpD4XAL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1o5lNIkgYemwKlTZwwPZiSreI0o4TmgZC/view?usp=drive_link"
  },
  {
    "id": 109,
    "titulo": "Por-que-gritamos",
    "categoria": "drama",
    "descricao": "Exploração profunda dos motivos emocionais que nos levam a expressar a raiva e a frustração, buscando autoconhecimento.",
    "img": "https://m.media-amazon.com/images/I/71V2Zu9CAYL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1bDjgxiYJ6aAjYWD04Bm_IvNe4NL5bswe/view?usp=drive_link"
  },
  {
    "id": 110,
    "titulo": "Pessoas Normais - Sally Rooney",
    "categoria": "romance",
    "descricao": "Retrato sensível da complexidade dos relacionamentos modernos entre dois jovens na Irlanda contemporânea.",
    "img": "https://m.media-amazon.com/images/I/71jrp43TCcL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1J8bPtDn6iMf5MMOjYz25I0L4fA97MtDy/view?usp=drive_link"
  },
  {
    "id": 111,
    "titulo": "Os Imperfeitos",
    "categoria": "ficcao",
    "descricao": "História que aborda a imperfeição humana, mostrando personagens que buscam aceitação e transformação.",
    "img": "https://m.media-amazon.com/images/I/616U6mSP3lL._SL1000_.jpg",
    "link": "https://drive.google.com/file/d/1dGPHzVC86fsNQL-VGOFBTBmP2hsz8mF8/view?usp=drive_link"
  },
  {
    "id": 112,
    "titulo": "Os Cinco Sobreviventes - Holly Jackson",
    "categoria": "suspense",
    "descricao": "Cinco adolescentes lutam para sobreviver após um acidente misterioso, revelando segredos perigosos.",
    "img": "https://m.media-amazon.com/images/I/71XZ+xbghOL._SL1005_.jpg",
    "link": "https://drive.google.com/file/d/1Nibqz0aO1PIav_bYZgkERzDa-kLfbUJt/view?usp=drive_link"
  },
  {
    "id": 113,
    "titulo": "Orgulho e Preconceito",
    "categoria": "romance",
    "descricao": "Clássico de Jane Austen que explora amor, classe social e preconceitos em uma sociedade inglesa do século XIX.",
    "img": "https://m.media-amazon.com/images/I/71Xta4Nf7uL._SL1360_.jpg",
    "link": "https://drive.google.com/file/d/1GWwT-tqCE_37sPEmWgrBRcSEVcyaB7U4/view?usp=drive_link"
  },
  {
    "id": 114,
    "titulo": "Olhos D'água - Conceição Evaristo",
    "categoria": "drama",
    "descricao": "Narrativas que discutem questões raciais e sociais a partir da perspectiva negra feminina brasileira.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YE98yONDjfpHRIT8EyKBTccY1tTQpEkqJw&s",
    "link": "https://drive.google.com/file/d/1598Oqt38PLr_gyL4s_IAuJKZ-UQSEQss/view?usp=drive_link"
  },
  {
    "id": 115,
    "titulo": "O que é Interseccionalidade - Carla Akotirene",
    "categoria": "desenvolvimento",
    "descricao": "Uma abordagem que explica como diferentes formas de opressão se cruzam e afetam a vida das pessoas.",
    "img": "https://m.media-amazon.com/images/I/717MIllMQuL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1f7D975QeXIaTrGjYjdfn4kmViJqxjsZp/view?usp=drive_link"
  },
  {
    "id": 116,
    "titulo": "O Segredo da Empregada - Freida McFadden",
    "categoria": "suspense",
    "descricao": "Um thriller psicológico envolvendo segredos guardados por uma empregada, que podem mudar tudo.",
    "img": "https://m.media-amazon.com/images/I/81qwX4O+XIL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1_dRs_JjnmBjUvnfJYdBbxMgwmwOWs9Q6/view?usp=drive_link"
  },
  {
    "id": 117,
    "titulo": "O Colecionador",
    "categoria": "Suspense",
    "descricao": "Clássico thriller psicológico onde um homem sequestra uma jovem em uma obsessão perturbadora.",
    "img": "https://darkside.vtexassets.com/arquivos/ids/167609/111-o-colecionador.jpg?v=636802523172600000",
    "link": "https://drive.google.com/file/d/1evyMkwQ4brJYt8Jd2EEEcD99SuL4r8fg/view?usp=drive_link"
  },
  {
    "id": 118,
    "titulo": "O Poder do Subconsciente - Joseph Murphy",
    "categoria": "desenvolvimento",
    "descricao": "Obra que explora como usar o poder da mente subconsciente para transformar sua vida e alcançar objetivos.",
    "img": "https://m.media-amazon.com/images/I/91kLesOuQwL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1IsGfqind7N_OwNpJ7-PakX0-21Gg4Act/view?usp=drive_link"
  },
  {
    "id": 119,
    "titulo": "O Poder do Agora - Eckhart Tolle",
    "categoria": "desenvolvimento",
    "descricao": "Guia para viver o presente, com foco na consciência plena para superar o sofrimento mental e encontrar paz interior.",
    "img": "https://m.media-amazon.com/images/I/71sh8JtiZbL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1yz8pw9QVe0b0fyjBFzo5ol5_fUGQyH93/view?usp=drive_link"
  },
  {
    "id": 120,
    "titulo": "Novembro, 9",
    "categoria": "romance",
    "descricao": "Romance emocionante sobre encontros e desencontros, passado e presente entre dois jovens que se apaixonam.",
    "img": "https://m.media-amazon.com/images/I/91YbRs+x+cL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1u-2_etvKqpgwVjDDy7mKpnFnABJVekXh/view?usp=drive_link"
  },
  {
    "id": 121,
    "titulo": "Neville Goddard - A Coleção Completa",
    "categoria": "desenvolvimento",
    "descricao": "Compilação das obras de Neville Goddard sobre o poder da imaginação para manifestar a realidade desejada.",
    "img": "https://m.media-amazon.com/images/I/71YDjyokhcL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1a_g_jQClHAzPgLdkUbaudtAGMenBB7_M/view?usp=drive_link"
  },
  {
    "id": 122,
    "titulo": "Não é como nos Filmes - Lynn Painter",
    "categoria": "romance",
    "descricao": "Um romance jovem adulto que desconstrói clichês do amor idealizado, mostrando a realidade dos relacionamentos.",
    "img": "https://m.media-amazon.com/images/I/71KrPChpFXL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/10UQHF8Sr5sHWDdUnpGbqadshaiBrOVW6/view?usp=drive_link"
  },
  {
    "id": 123,
    "titulo": "Mulheres, Raça e Classe - Angela Davis",
    "categoria": "desenvolvimento",
    "descricao": "Análise histórica e crítica sobre como raça, gênero e classe interagem na opressão das mulheres negras.",
    "img": "https://m.media-amazon.com/images/I/81PP53v0mML._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1OgZAxY611BqBimlz_LsP6MjaYIEe7EVR/view?usp=drive_link"
  },
  {
    "id": 124,
    "titulo": "Mesa 27: Ao Fugir do Destino - Adriana Nicolodi",
    "categoria": "drama",
    "descricao": "Histórias que exploram encontros e desencontros, reflexões sobre escolhas e destinos entrelaçados.",
    "img": "https://m.media-amazon.com/images/I/81449FBxi3L._UF894,1000_QL80_.jpg",
    "link": "https://drive.google.com/file/d/1v4ThhA18yWHnbfzTnCr3HH9fYPUuZwGX/view?usp=drive_link"
  },
  {
    "id": 125,
    "titulo": "Maternidade Ordinária",
    "categoria": "drama",
    "descricao": "Relatos reais e sensíveis sobre as experiências e desafios da maternidade no cotidiano.",
    "img": "https://m.media-amazon.com/images/I/81pjl7QwQHL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1ubnBmlG-T7447zbjqB0sOFdsstFV7ocP/view?usp=drive_link"
  },
  {
    "id": 126,
    "titulo": "Malcolm X - Uma Vida de Reinvenções - Manning Marable",
    "categoria": "ficcao",
    "descricao": "Biografia detalhada da vida e legado do ativista Malcolm X, suas transformações e impacto social.",
    "img": "https://m.media-amazon.com/images/I/8111jFHDARL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1NGQLCtFOpZ-fqS86s9INHvsqqrwGovN-/view?usp=drive_link"
  },
  {
    "id": 127,
    "titulo": "Inteligência Emocional - Daniel Goleman",
    "categoria": "desenvolvimento",
    "descricao": "Estudo sobre a importância da inteligência emocional para o sucesso pessoal e profissional.",
    "img": "https://m.media-amazon.com/images/I/71f9R8hY23L._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1qlpJkXWRV4bzEibeklRtojf1GUsY3Srw/view?usp=drive_link"
  },
  {
    "id": 128,
    "titulo": "Ikigai: Os Segredos dos Japoneses para uma Vida Longa e Feliz",
    "categoria": "desenvolvimento",
    "descricao": "Guia para encontrar propósito e felicidade inspirada na cultura japonesa do ikigai.",
    "img": "https://m.media-amazon.com/images/I/717ksSGStoL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1vYHvR_FjwL0sUYAIHtrBcMyivxVEUeO3/view?usp=drive_link"
  },
  {
    "id": 130,
    "titulo": "Gente Ansiosa",
    "categoria": "desenvolvimento",
    "descricao": "Reflexões e estratégias para entender e lidar com a ansiedade na vida moderna.",
    "img": "https://m.media-amazon.com/images/I/91ou97JFpKL._UF894,1000_QL80_.jpg",
    "link": "https://drive.google.com/file/d/1gbsrkLusW-R7VXqlYMKlSSy3Oybt0-5x/view?usp=drive_link"
  },
  {
    "id": 131,
    "titulo": "Gabriela, Cravo e Canela - Jorge Amado",
    "categoria": "romance",
    "descricao": "Romance regionalista que retrata a sensualidade e cultura da Bahia através da personagem Gabriela.",
    "img": "https://m.media-amazon.com/images/I/81IyZdXmUqL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1Je-_JmqKBXZ6-4XoG4vUEhC0KQmUbS0y/view?usp=drive_link"
  },
  {
    "id": 132,
    "titulo": "From Imagination to Reality - Abiola Abrams",
    "categoria": "desenvolvimento",
    "descricao": "Livro que incentiva a transformação dos sonhos em realidade através do poder da imaginação e ação.",
    "img": "https://m.media-amazon.com/images/I/81ZE-evnR3L._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1wpz0UVdX1D9gy5-RdTzHGkzc4EqRhkLE/view?usp=drive_link"
  },
  {
    "id": 133,
    "titulo": "Flores para Algernon",
    "categoria": "ficcao",
    "descricao": "Um clássico emocionante que aborda a inteligência, humanidade e ética através da história de Charlie.",
    "img": "https://m.media-amazon.com/images/I/71VrMtcmE9L._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1D7AKYPsY2SJl8Ve-bbYLn_SjpNix_GC3/view?usp=drive_link"
  },
  {
    "id": 134,
    "titulo": "Flamingos - Clary Avelino",
    "categoria": "romance",
    "descricao": "Romance contemporâneo que explora temas como autoconhecimento e superação pessoal.",
    "img": "https://m.media-amazon.com/images/I/61+tRKqyEYL._SL1334_.jpg",
    "link": "https://drive.google.com/file/d/1H7j2INQPvQbikjK8VYmUcKwTmm6kt2Ae/view?usp=drive_link"
  },
  {
    "id": 136,
    "titulo": "Em Busca de Cinderela - Colleen Hoover",
    "categoria": "romance",
    "descricao": "Uma releitura moderna de contos de fadas com toques emocionais e narrativas de superação.",
    "img": "https://m.media-amazon.com/images/I/91hnhxCy8LL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1A_oSMiMNAIuC4U3ORcKvqISfLYYYjPbI/view?usp=drive_link"
  },
  {
    "id": 137,
    "titulo": "Educação Não Violenta - Elisama Santos",
    "categoria": "desenvolvimento",
    "descricao": "Métodos e reflexões para aplicar a educação com empatia, respeito e paciência.",
    "img": "https://m.media-amazon.com/images/I/81gXbrZlIgL._SL1482_.jpg",
    "link": "https://drive.google.com/file/d/1cmc7pE8qPWmXKW1uGpEeLUSMcprpxt_p/view?usp=drive_link"
  },
  {
    "id": 138,
    "titulo": "De Repente Adulta - Turner Sarah",
    "categoria": "drama",
    "descricao": "História sobre as dificuldades e descobertas do amadurecimento na transição para a vida adulta.",
    "img": "https://m.media-amazon.com/images/I/71nAqXl2ADL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1Vc77rOu-01YCft95wiJJTiPVo6-rW6Eq/view?usp=drive_link"
  },
  {
    "id": 139,
    "titulo": "Cutelo e Corvo - Brynne Weaver",
    "categoria": "fantasia",
    "descricao": "Fantasia sombria com elementos místicos, intrigas e jornadas de autoconhecimento.",
    "img": "https://m.media-amazon.com/images/I/81dfmzsNDwL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1mNSgZ1wBi7maRKLcvFuk4k74MjIkf8iL/view?usp=drive_link"
  },
  {
    "id": 140,
    "titulo": "Cordialmente Cruel 2: A Escada Furtiva - Maureen Johnson",
    "categoria": "suspense",
    "descricao": "Continuação da saga cheia de mistério, intrigas e eventos sobrenaturais.",
    "img": "https://m.media-amazon.com/images/I/81MSDwQ0xYS._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/19ioDddHUfgVjWGsdbZuKm5V4Bk81R96N/view?usp=drive_link"
  },
  {
    "id": 141,
    "titulo": "Tudo que Quiser é Seu",
    "categoria": "romance",
    "descricao": "História de amor e escolhas difíceis, com personagens complexos e emocionantes.",
    "img": "https://m.media-amazon.com/images/I/81ZHdAPogEL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1z5zYRXwjuGlzFpL6HrCFtWhKNKKszcRE/view?usp=drive_link"
  },
  {
    "id": 142,
    "titulo": "Contos de Amor Rasgados",
    "categoria": "romance",
    "descricao": "Coleção de contos que exploram diferentes faces do amor, com emoção e realismo.",
    "img": "https://m.media-amazon.com/images/I/711j3sBMqgS._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1RCB9c8NRlJtyk83ahyqYdJ_IrjQI7Whb/view?usp=drive_link"
  },
  {
    "id": 143,
    "titulo": "Conflitos de Sangue - Jennifer Lynn Barnes",
    "categoria": "fantasia",
    "descricao": "Fantasia juvenil com temas de magia, poder e conflitos familiares.",
    "img": "https://m.media-amazon.com/images/I/81-oNZ9wUnL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1jwu9gPc6oVs68cHNiJLMKRiz8p8XNf3z/view?usp=drive_link"
  },
  {
    "id": 144,
    "titulo": "Comunicação Não Violenta",
    "categoria": "desenvolvimento",
    "descricao": "Guia prático para melhorar as relações pessoais e profissionais através da empatia e diálogo.",
    "img": "https://m.media-amazon.com/images/I/51Gx35khLzL._SL1360_.jpg",
    "link": "https://drive.google.com/file/d/19yJuYUrodkDAv4a6kdH6WqvdRCHJ8xyT/view?usp=drive_link"
  },
  {
    "id": 145,
    "titulo": "Nunca Saia Sozinho - Charlie Donlea",
    "categoria": "suspense",
    "descricao": "Um thriller envolvente que acompanha uma investigação policial cheia de reviravoltas.",
    "img": "https://m.media-amazon.com/images/I/81YPhNJpdRL._UF894,1000_QL80_.jpg",
    "link": "https://drive.google.com/file/d/1lYRY-jB_wANVnWk5YYnRzZahF6CQqV4D/view?usp=drive_link"
  },
  {
    "id": 146,
    "titulo": "Assistente do Vilão - Hannah Nicole Maehrer",
    "categoria": "fantasia",
    "descricao": "Uma aventura em mundo fantástico, focada em personagens complexos e seus dilemas morais.",
    "img": "https://m.media-amazon.com/images/I/81DkKVIavBL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1KZSzEqreh89PjNqQMxLwaVRf_tKR0zw0/view?usp=drive_link"
  },
  {
    "id": 147,
    "titulo": "As Coisas Que Guardamos Em Segredo - Lucy Score",
    "categoria": "romance",
    "descricao": "Romance contemporâneo que mistura segredos do passado com a possibilidade de um novo começo.",
    "img": "https://m.media-amazon.com/images/I/71XzXzjWwlL._SL1461_.jpg",
    "link": "https://drive.google.com/file/d/1WE1wwwu-7cyvbVGLA85oQfxcz8P6xKwX/view?usp=drive_link"
  },
  {
    "id": 148,
    "titulo": "As Vantagens de Ser Você - Ray Tavares",
    "categoria": "drama",
    "descricao": "História sobre autoconhecimento, aceitação e a luta para ser quem realmente somos.",
    "img": "https://m.media-amazon.com/images/I/81e0FqCFxhL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/162mI6s5gkboJYd3GgRlk0q32MU6yGK1s/view?usp=drive_link"
  },
  {
    "id": 149,
    "titulo": "As Mil Partes do Meu Coração - Colleen Hoover",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/814pUv-EGbL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/14ccZZWcu-NCWn4jsgEVfvVcmNbhSErFX/view?usp=sharing",
    "descricao": "Um romance comovente sobre superação, perdão e os laços do amor."
  },
  {
    "id": 150,
    "titulo": "Amor(es) verdadeiro(s)",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/A1UvSKiOJGL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1CtooyY1FvfWedf6LPnjSG3oP23ibz-S8/view?usp=drive_link",
    "descricao": "Uma jornada emocional de descobertas sobre o verdadeiro amor."
  },
  {
    "id": 151,
    "titulo": "Amor em Roma - Sarah Adams",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/81BVc61FjoL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1OlsBJg0jXl7RsbK0e0_cHz3EULlsVmQW/view?usp=drive_link",
    "descricao": "Um romance leve e divertido ambientado na romântica cidade de Roma."
  },
  {
    "id": 152,
    "titulo": "Almas Antigas - Tom Shroder",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://http2.mlstatic.com/D_NQ_NP_933653-MLB80842784478_122024-O.webp",
    "link": "https://drive.google.com/file/d/1ADXnvpVadna3LjIx8ZcH58PstO3d8y12/view?usp=drive_link",
    "descricao": "Investigação sobre reencarnação e as memórias inexplicáveis de crianças."
  },
  {
    "id": 153,
    "titulo": "Alerta-de-Spoiler-Olivia-Dade",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/61YTa4iiEXL._UF1000,1000_QL80_.jpg",
    "link": "https://drive.google.com/file/d/1wmVVcTYIgoY_V1jG2Gi2QBTFQ917I4S8/view?usp=drive_link",
    "descricao": "Romance divertido entre uma fã de fanfics e um astro de série de TV."
  },
  {
    "id": 154,
    "titulo": "Acolhendo sua criança interior",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/81fyJqqSEIL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1nW0M1YluXwNa8ng7aXddKO2dDmH51sOK/view?usp=drive_link",
    "descricao": "Um guia terapêutico para curar feridas emocionais da infância."
  },
  {
    "id": 155,
    "titulo": "Abd_Allah_Teacher_Healer",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/51OwcnbBhkL._SL1360_.jpg",
    "link": "https://drive.google.com/file/d/1iSihCgKPqZwfdILZ6SkMadNShHznMkFg/view?usp=drive_link",
    "descricao": "Relato inspirador de cura espiritual e autoconhecimento."
  },
  {
    "id": 156,
    "titulo": "A Teoria Da Conspiração de Nós Dois - Talia Hibbert",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71uqywS8aZL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1qyeJYQ-_IuGrwmQapGcoau7IOI2A9B3B/view?usp=drive_link",
    "descricao": "Comédia romântica com personagens carismáticos e uma trama envolvente."
  },
  {
    "id": 157,
    "titulo": "A razão do Amor",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/81bkmJnflPL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/167RgfanBfnK-S2nv6Pz9-U0rUUxx0O_4/view?usp=drive_link",
    "descricao": "Uma reflexão sobre os motivos que nos levam a amar e persistir."
  },
  {
    "id": 158,
    "titulo": "A natureza da mordida - Carla Madeira",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/91B5NWWKuzL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1bh74JqmlAJzUsAwm1oWkC8BAaa_pt9qn/view?usp=drive_link",
    "descricao": "Narrativa intensa sobre dor, obsessão e os limites do desejo humano."
  },
  {
    "id": 159,
    "titulo": "A Moreninha",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71P6H2vSsEL._SL1360_.jpg",
    "link": "https://drive.google.com/file/d/123gIQn8hdEHdPSMENf1b5A0CiI3l_6Qa/view?usp=drive_link",
    "descricao": "Clássico do romantismo brasileiro sobre amor juvenil e promessas do passado."
  },
  {
    "id": 160,
    "titulo": "A guarda-costas - Katherine Center",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/81L+gOP5vRL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1gO9rPPFh76iK-sQU4MiD42z3KogYVvyg/view?usp=drive_link",
    "descricao": "Uma guarda-costas precisa proteger um astro de cinema – e o amor pode estar no caminho."
  },
  {
    "id": 161,
    "titulo": "Amor Por Engano",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/61NIKTSzi1L._SL1005_.jpg",
    "link": "https://drive.google.com/file/d/1b9RPUG8c3hFkp-4y3a9resQl13Zw_oqj/view?usp=drive_link",
    "descricao": "Encontros inesperados levam a um amor que ninguém esperava."
  },
  {
    "id": 162,
    "titulo": "A Casa dos 20",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/51XiRD9HjcL._UF894,1000_QL80_.jpg",
    "link": "https://drive.google.com/file/d/1wdNRhx2ghtqoV3QIUbjb3TwS0hF9bdQ7/view?usp=drive_link",
    "descricao": "Reflexões e descobertas de jovens na faixa dos 20 anos em uma casa compartilhada."
  },
  {
    "id": 163,
    "titulo": "Prometa Não Se Apaixonar",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71TGEtUpIVL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1vz6DEbqWXd98JXYZN6Vp_IFknml-XvB_/view?usp=drive_link",
    "descricao": "Um pacto para não amar pode se tornar o começo de uma história inesquecível."
  },
  {
    "id": 164,
    "titulo": "Se Deus Me Chamar, Não Vou - Mariana Salomão",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/81VxBlEGeTL.jpg",
    "link": "https://drive.google.com/file/d/1dRXXvOPy0dDKWFEJUstN3f1IrAK8QHEO/view?usp=drive_link",
    "descricao": "Crônica sensível sobre juventude, autodescoberta e espiritualidade."
  },
  {
    "id": 165,
    "titulo": "Antes Que Tudo Acabe - Jéssica Dias",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71UDjsw77BL._UF894,1000_QL80_.jpg",
    "link": "https://drive.google.com/file/d/1MbWqxKC8agFGsfKox-VLOqur8EP9ZnNK/view?usp=drive_link",
    "descricao": "Uma reflexão sobre o tempo, as escolhas e as perdas da vida."
  },
  {
    "id": 166,
    "titulo": "Talvez Você Deva Conversar com Alguém",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVBGzidneNWjj1OcP_TRNh3InZUrv5HnQRA&s",
    "link": "https://drive.google.com/file/d/1NK20Zf-Erx2Fx9VJ95ucVgBOgHmf1ehY/view?usp=drive_link",
    "descricao": "Uma terapeuta e seus pacientes – um olhar tocante sobre a psicoterapia."
  },
  {
    "id": 167,
    "titulo": "Minha Vida Com Os Garotos Walter - Ali Novak",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/511vqWRSpKL.jpg",
    "link": "https://drive.google.com/file/d/1avGG7RhCQxyV41l6Y_1hU5jH2beIXesR/view?usp=drive_link",
    "descricao": "Uma garota vai morar com uma família cheia de irmãos... e tudo muda."
  },
  {
    "id": 168,
    "titulo": "O Peso Do Pássaro Morto - Aline Bei",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/61QCWnAtMJL.jpg",
    "link": "https://drive.google.com/file/d/1k9AdseODy0rbUxdx1YB15tTwOsMhe0Py/view?usp=drive_link",
    "descricao": "Poético e sensível, narra perdas e dores desde a infância até a vida adulta."
  },
  {
    "id": 169,
    "titulo": "Exu do Ouro - Rodrigo Queiroz",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/91RH3KUf5UL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1PpQ3DTYVr_ANtdajoke3LVyLKfPf6e8g/view?usp=drive_link",
    "descricao": "Livro espiritual sobre a linha de Exu e sua atuação na prosperidade e equilíbrio."
  },
  {
    "id": 170,
    "titulo": "Antes Que o Café Esfrie - Toshikazu Kawaguchi",
    "categoria": "ficcao",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71ebvuM3t-L._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1rO2IQvD1xubjw3Nmvm88YVTlHIXqg03r/view?usp=drive_link",
    "descricao": "Em uma cafeteria, é possível viajar no tempo – mas apenas até o café esfriar."
  },
  {
    "id": 171,
    "titulo": "O Livro Que Gostaria Que Seus Pais Tivessem Lido - Philippa Perry",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71BROqAwZtL.jpg",
    "link": "https://drive.google.com/file/d/1CtRVdyuliyoAVegD2J3j5zEGbj5Pz6HG/view?usp=drive_link",
    "descricao": "Reflexões práticas e emocionais para fortalecer vínculos entre pais e filhos."
  },
  {
    "id": 172,
    "titulo": "Quarto de Despejo",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71z42zpEwbL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1bzqw_HZi4J7N_ThpOQnkPx2j4K7mu4FN/view?usp=drive_link",
    "descricao": "Diário real e impactante de Carolina Maria de Jesus sobre a vida na favela."
  },
  {
    "id": 173,
    "titulo": "Textos Cruéis Demais Para Serem Lidos Rapidamente",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/61mzLkXJdXL._SL1360_.jpg",
    "link": "https://drive.google.com/file/d/1bTODLq-qRTjFzTmSmHfoQqjE-HMV6pPS/view?usp=drive_link",
    "descricao": "Textos e poesias que exploram a intensidade dos sentimentos humanos."
  },
  {
    "id": 174,
    "titulo": "Dry.",
    "categoria": "ficcao",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71InG0u6nsL.jpg",
    "link": "https://drive.google.com/file/d/1QguLaz4pCXJRnXMQbQlb7e4I4FdtVvLy/view?usp=drive_link",
    "descricao": "Quando a água acaba na Califórnia, a sobrevivência se torna uma luta diária."
  },
  {
    "id": 175,
    "titulo": "Orgulho e Preconceito - Jane Austen",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71UHNHdoCqL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1GWwT-tqCE_37sPEmWgrBRcSEVcyaB7U4/view?usp=drive_link",
    "descricao": "Clássico absoluto da literatura sobre orgulho, preconceito e amor improvável."
  },
  {
    "id": 176,
    "titulo": "Vencendo a Ansiedade",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/71TLZfo0tdL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/17rGySiJpQoJurhBU6hehTf8OdebdrpCb/view?usp=sharing",
    "descricao": "Técnicas e orientações para entender e superar a ansiedade no dia a dia."
  },
  {
    "id": 177,
    "titulo": "A Inconveniente Loja de Conveniência - Kim Ho-Yeon",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=EyVoEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1jW-6rCjaOGnOjb4AXX0P6Pit8DQwau3q/view?usp=drivesdk",
    "descricao": "Uma história sensível sobre um jovem com dificuldades sociais que encontra estabilidade e propósito trabalhando em uma loja de conveniência."
  },
  {
    "id": 178,
    "titulo": "A Metamorfose - Franz Kafka",
    "categoria": "ficcao",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/715JOcuqSSL._SL1021_.jpg",
    "link": "https://drive.google.com/file/d/1UBtcKGmocKOBpYTYIsNRG-Wtpi1RWvMc/view?usp=drivesdk",
    "descricao": "Um clássico da literatura que narra a transformação de Gregor Samsa em um inseto grotesco e o impacto disso em sua vida e família."
  },
  {
    "id": 179,
    "titulo": "A Professora - Freida McFadden",
    "categoria": "suspense",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=bGsiEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1iEQvB6y49qHEhu1qIYXFtdBR2NjhE0kd/view?usp=drivesdk",
    "descricao": "Uma professora com um passado sombrio tenta proteger um aluno misterioso enquanto lida com seus próprios segredos."
  },
  {
    "id": 180,
    "titulo": "A Arte da Guerra - Sun Tzu",
    "categoria": "desenvolvimento",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=TW5-uUZlkzIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1bqMQDuV_JkfM7OxCujgLeW2it6GgqkA_/view?usp=drivesdk",
    "descricao": "Clássico da estratégia militar que também é amplamente aplicado no mundo dos negócios e desenvolvimento pessoal."
  },
  {
    "id": 181,
    "titulo": "A Hipótese do Amor - Ali Hazelwood",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/81LTEfXYgcL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/1XJjHYdRtQ9l5gO-ZujQatQURYg96JDPo/view?usp=drivesdk",
    "descricao": "Uma comédia romântica envolvente entre uma estudante de PhD e um professor linha-dura, com toques de humor e ciência."
  },
  {
    "id": 182,
    "titulo": "Amêndoas - Won-pyung Sohn",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=4tawEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/1DUEtaN5Oceso2Pnq5aMbTmh7TTUZaoti/view?usp=drivesdk",
    "descricao": "Um jovem incapaz de sentir emoções embarca em uma jornada de autodescoberta e humanidade após um evento trágico."
  },
  {
    "id": 183,
    "titulo": "Amor, Teoricamente - Ali Hazelwood",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=BerIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1IKlOC-rntdDY5nQH_le29_5UG_5V8HeN/view?usp=drivesdk",
    "descricao": "Uma física teórica precisa fingir estar apaixonada para manter sua carreira – até que o fingimento se torna real."
  },
  {
    "id": 184,
    "titulo": "Brisingr - Ciclo da Herança Vol. 3 - Christopher Paolini",
    "categoria": "fantasia",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=43CqLq7TkroC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/1s9Ft6XXIHEqkpcWShRslA7_wxQZfO0Pk/view?usp=drivesdk",
    "descricao": "Eragon continua sua missão para derrotar o império de Galbatorix enquanto fortalece seus poderes como Cavaleiro de Dragão."
  },
  {
    "id": 185,
    "titulo": "Carrie Soto Está de Volta - Taylor Jenkins Reid",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=XLOFEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1SNhEp7mgxVM4wwsqwhE6LN2xa7v_KktY/view?usp=drivesdk",
    "descricao": "Uma lenda do tênis retorna à competição após anos de aposentadoria para reconquistar seu título e dignidade."
  },
  {
    "id": 186,
    "titulo": "Clube do Livro dos Homens - Lyssa Kay Adams",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=2mgNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1j_Gjx_RN-9dSwBsV_ydCnAwqmhnm5fnu/view?usp=drivesdk",
    "descricao": "Homens formam um clube secreto para ler romances e salvar seus relacionamentos, provando que o amor pode ser aprendido."
  },
  {
    "id": 187,
    "titulo": "Murtagh - Christopher Paolini",
    "categoria": "fantasia",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=mM5AEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/105rxPAAfETrSMDz_2kYhEodfYc5BgBe6/view?usp=drivesdk"
  },
  {
    "id": 188,
    "titulo": "Noiva - Ali Hazelwood",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=_7fvEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/1ab1l2e3Pa5dUPbLFnp7Q4Es6QMMo4Ik_/view?usp=drivesdk"
  },
  {
    "id": 189,
    "titulo": "O cemiterio - Stephen King",
    "categoria": "terror",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=bh5sSJhW81UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/1-Yt5p0vxQRXgI2y111k04Yc1OQqIu4V7/view?usp=drivesdk"
  },
  {
    "id": 190,
    "titulo": "O Despertar da Lua Caída - Sarah A. Parker",
    "categoria": "fantasia",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=7hcXEQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/1BeoT5iUtYlriHVFLTrcwNKxEev24f8tG/view?usp=drivesdk"
  },
  {
    "id": 191,
    "titulo": "O massacre da família Hope",
    "categoria": "suspense",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=oQwSEQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/1wZRvyPCErv-Nvsvvjq4zKqND50MlZajm/view?usp=drivesdk"
  },
  {
    "id": 192,
    "titulo": "O rei Elfo - Leia Stone",
    "categoria": "fantasia",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=c3tEEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1ZHSnU9ZINsTfnWy8yGAnojrPU_L4p0xc/view?usp=drivesdk"
  },
  {
    "id": 193,
    "titulo": "O Casal que Mora Ao Lado - Shari Lapena",
    "categoria": "suspense",
    "formato": "PDF",
    "img": "https://m.media-amazon.com/images/I/81Nxysd0pFL._SL1500_.jpg",
    "link": "https://drive.google.com/file/d/19SDCeBvwWxzaY4nNIxjPyHmyCsGCgMKB/view?usp=drivesdk"
  },
  {
    "id": 194,
    "titulo": "Ondas do Oeste - Série Bússola Vol. 3 - Brittainy C. Cherry",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=HEiMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1Yt2zKQtP3Y6QPmObPFBTUtEK8dF1yrhS/view?usp=drivesdk"
  },
  {
    "id": 195,
    "titulo": "Parte do seu Mundo - Abby Jimenez",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=mSQhEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1W0hTsH1Q4Cg-r9kZ7KYn4eR0O-OHp82E/view?usp=drivesdk"
  },
  {
    "id": 196,
    "titulo": "Powerful - Lauren Roberts",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=l63-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1SPrTBDNNHrvoL-2J86NvaIHiRvjZFmuo/view?usp=drivesdk"
  },
  {
    "id": 197,
    "titulo": "Powerless - Lauren Roberts",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=QkTAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/1f-stw-2voQEXKxjFtTtLGJb8xRxukZQZ/view?usp=drivesdk"
  },
  {
    "id": 198,
    "titulo": "Quebrando o gelo - Hannah Grace",
    "categoria": "romance",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=yonAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/16RlZnB6iNn9cfIyy-b4yj8gYvbkYKFun/view?usp=drivesdk"
  },
  {
    "id": 199,
    "titulo": "Queria morrer, mas no céu não tem tteokbokki - Baek Sehee",
    "categoria": "drama",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=W-y2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "link": "https://drive.google.com/file/d/10kalRzlCE0ETKryK0DNE6nR9uef4GZ33/view?usp=drivesdk"
  },
  {
    "id": 200,
    "titulo": "Quem é voce, Alasca - John Green",
    "categoria": "ficcao",
    "formato": "PDF",
    "img": "https://books.google.com/books/content?id=npWMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "link": "https://drive.google.com/file/d/12bXOz205CFhumH8QZ0wgSQFoHdqVYL5B/view?usp=drivesdk"
  },
  
  ];
let currentPage = 1;
const itemsPerPage = 35;
let currentFilter = 'todos';
let currentSearch = '';

function normalizeText(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function mostrarPagina(page, rolarParaTopo = false) {
  currentPage = page;
  const produtosContainer = document.getElementById('produtos');
  produtosContainer.innerHTML = '';

  const normalizedSearch = normalizeText(currentSearch);

  const filteredLivros = livros.filter(livro => {
    const normalizedTitle = normalizeText(livro.titulo);
    const categoriaMatch = currentFilter === 'todos' || livro.categoria === currentFilter;
    const titleMatch = normalizedTitle.includes(normalizedSearch);
    return categoriaMatch && titleMatch;
  });

  const start = (page - 1) * itemsPerPage;
  const livrosPagina = filteredLivros.slice(start, start + itemsPerPage);

  if (livrosPagina.length === 0) {
    produtosContainer.innerHTML = '<p style="text-align:center; margin-top:20px;">Nenhum livro encontrado.</p>';
  } else {
    livrosPagina.forEach(livro => {
  const livroDiv = document.createElement('div');
  livroDiv.className = 'livro';
  livroDiv.dataset.categoria = livro.categoria;
  livroDiv.addEventListener('click', () => mostrarDetalhes(livro.id));
  livroDiv.innerHTML = `
    <img src="${livro.img}" alt="${livro.titulo}" />
    <h3>${livro.titulo}</h3>
    <p><strong>Formato:</strong> ${livro.formato ? livro.formato : 'PDF'}</p>
    <span class="ver-mais">Clique para ver mais</span>
  `;
  produtosContainer.appendChild(livroDiv);
});
  }

  atualizarPaginacao(filteredLivros.length);

  if (rolarParaTopo) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function atualizarPaginacao(totalItems) {
  const paginacaoContainer = document.getElementById('paginacao');
  paginacaoContainer.innerHTML = '';

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.classList.toggle('active', i === currentPage);
    btn.addEventListener('click', () => mostrarPagina(i, true));
    paginacaoContainer.appendChild(btn);
  }
}

function filtrar(categoria) {
  currentFilter = categoria;

  document.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.classList.toggle('ativa', btn.dataset.categoria === categoria);
    btn.setAttribute('aria-pressed', btn.dataset.categoria === categoria ? 'true' : 'false');
  });

  mostrarPagina(1);

  const produtosSection = document.getElementById('catalogoView');
  if (produtosSection) {
    produtosSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function buscar() {
  const input = document.getElementById('searchInput');
  currentSearch = input.value.trim();
  mostrarPagina(1);
}

function mostrarDetalhes(id) {
  const livro = livros.find(l => l.id === id);
  if (!livro) return;

  document.getElementById('header').style.display = 'none';
  document.getElementById('toggleCategorias').style.display = 'none';
  document.getElementById('categoriasMenu').style.display = 'none';
  document.getElementById('heroSection').style.display = 'none';

  document.getElementById('catalogoView').style.display = 'none';
  document.getElementById('detalhesView').style.display = 'block';

  document.getElementById('detalhesProduto').innerHTML = `
    <h1>${livro.titulo}</h1>
    <img src="${livro.img}" alt="${livro.titulo}" />
    <p>${livro.descricao}</p>
    <p><strong>Formato:</strong> ${livro.formato}</p>
    <a href="${livro.link}" class="btn-comprar" target="_blank" rel="noopener noreferrer">Acessar agora</a>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarCatalogo() {
  document.getElementById('detalhesView').style.display = 'none';
  document.getElementById('catalogoView').style.display = 'block';

  document.getElementById('header').style.display = '';
  document.getElementById('toggleCategorias').style.display = '';
  document.getElementById('categoriasMenu').style.display = '';
  document.getElementById('heroSection').style.display = '';

  mostrarPagina(currentPage);
}

function toggleMenuCategorias() {
  const btn = document.getElementById('toggleCategorias');
  const menu = document.getElementById('categoriasMenu');

  if (!menu || !btn) return;

  const isOpen = menu.classList.contains('mostrar');

  if (isOpen) {
    menu.classList.remove('mostrar');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('mostrar');
    btn.setAttribute('aria-expanded', 'true');
  }
}
window.onload = () => {
  mostrarPagina(1);

  document.querySelector('.logo').addEventListener('click', () => {
    // Define a categoria como 'todos'
    filtrar('todos');

    // Rola suavemente para a seção inicial
    const hero = document.getElementById('heroSection');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }

    // Garante que a visualização do catálogo esteja ativa
    voltarCatalogo();
  });

  // outros event listeners que você já tem, por exemplo:
  document.getElementById('searchInput')?.addEventListener('input', buscar);

  document.querySelectorAll('.categoria-btn').forEach(btn => {
    btn.addEventListener('click', () => filtrar(btn.dataset.categoria));
  });

  const btnVoltar = document.querySelector('.btn-voltar');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', voltarCatalogo);
  }

  const btnCategorias = document.getElementById('toggleCategorias');
  if (btnCategorias) {
    btnCategorias.addEventListener('click', toggleMenuCategorias);
  }
};
