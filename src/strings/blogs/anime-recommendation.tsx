import type { Content } from "../../utils/interfaces";

///////////////////////////// Top x animes of y genrre /////////////////////////

export default function getBlog1({ language }: { language: string }) {
  ///////////////////// ENGLISH VERSION ////////////////////
  if (language == "pt") {
    return [
      {
        title: "Cowboy Bebop (1998)",
        image: "bebop.webp",
        description:
          "Loved by many and hated by absolutely nobody, Cowboy Bebop is an anime that follows a crew of bounty hunters united by pure convenience, each one with their own story and goals, living in a dystopian future with just enough money to survive, they are still having to deal with their past. Cowboy bebop is one of the most influential anime ever created, it has a great song track focused on Jazz, great characters, this show just have a great overall experience.",
      },
      {
        title: "Samurai Champloo (2004)",
        image: "Champloo.png",
        description:
          "Speaking of great soundtrack, Samurai Champloo is no exception, combining samurai with hip hop, this anime is worth a look. It follows Fuu, Mugen and Jin, they are 3 strangers to each other, but after Fuu saves Mugen and Jin life, they agree to join her as bodyguards on a search for the samurai who smells like sunflowers.",
      },
      {
        title: "Chainsaw man (2022)",
        image: "chainsaw.png",
        description:
          "Denji is a teenager who works as a devil hunter since his childhood to pay his dad debts, until one day his demon pet sacrifices his life to save Denji's, giving him an incredible power. Now he is finally free to do what he wants. This is a very enjoyable anime to watch.",
      },
      {
        title: "Trigun (1998)",
        image: "trigun.avif",
        description:
          "Trigun is without a doubt a great show, if you don't mind a cheap animation, this is definitely a must-watch. Set on the planet of No Man's land, Vash is the most feared outlaw who has earned a bounty of $$60 billion (double dollars) on his head, he's notoriously known to be a ruthless cruel gunman who destroys entire cities without any casualty. This anime has a beautiful message about human nature.",
      },
      {
        title: "Lookism (2022)",
        image: "Lookism.jpg",
        description:
          "Netflix has done a great job with this one, this anime is about a high school student who is consdered fat and ugly which cause him to be extremely mistreated by his classmates, when all of a sudden he gains a second body, one of which is handsome and thin. This anime has a great lesson about bullying.",
      },
      {
        title: "A Silent Voice (2016)",
        image: "silent-voice.jpg",
        description:
          "Shoya Ishida was a bully during middle school, but after an event with a deaf girl, he have grown an incredible guilt that follows him throughout the whole high school years, after a while he got a chance to compensate for it.",
      },
      {
        title: "Death Note (2006)",
        image: "death-note.webp",
        description:
          "Light Yagami is a young Japanese student who finds a note that whoever name is written that person dies, he decides to use this unholy power to kill all criminals in the world and become the The God of the new world.",
      },
      {
        title: "Attack on Titan (2013)",
        image: "titan.webp",
        description:
          "Eren Yeager had grown up in a cruel world, where Giants cold blooded called Titans walk on earth and eat human flesh, After seeing his mother die being eating by a Titan, he swears to kill all titans. This anime is definitely a must-watch.",
      },
      {
        title: "Grave of the Fireflies (1988)",
        image: "graveofthefireflies.jpg",
        description:
          "This film is as good as it is old and as sad as it is good, it is about a young boy and his sister trying to survive alone in Japan during the second world war after their parents died. See these two kids dealing with the cruelty of the war and people is heartbreaking.",
      },
      {
        title: "Black Lagoon (2002)",
        image: "black-lagoon.webp",
        description:
          "Rock was an average employee at a big company until one day he is kidnap by pirates, when he realizes that his boss had no interesting on pay for his rescue, he decides to join the crew of pirates. This anime is not for everyone, but it is for some.",
      },
      {
        title: "Akira (1988)",
        image: "akira.webp",
        description:
          "One of the most influential anime ever created, Akira is set in a post-apocalyptic Tokyo called Neo-Tokyo, the story centers on a bike gang, after one of the members of the gang is kidnap by the government, Shotaro Kaneda the lider of the gang try to look for him, and along the way he discovers how corrupt his society actually is.",
      },
      {
        title: "Monster (2004)",
        image: "monster.avif",
        description:
          "A well-known and respected doctor saves a little boy's life, but the exact same boy grows up to be a cruel serial killer. The doctor decides to kill this man. Monster is about a doctor chasing an ex-patient who is a psychopath, while discovering the past and motives behind this cruel man along the way.",
      },
      {
        title: "Ghost Stories english dub (2000)",
        image: "ghost.jpg",
        description:
          "A living meme. The original Ghost Stories had nothing special going for it. However, the people responsible for the English dub decided to go totally off the original script, making it a masterpiece of nonsensical comedy. For those who like dark and nonsensical comedy it is a must-watch.",
      },
      {
        title: "Sword of the Stranger (2007)",
        image: "sword-of-stranger.jpg",
        description:
          "Is it even possible to talk about anime without talking about samurais? The plot here is not unique in any way, but it is a very well-made samurai anime. The story is about a samurai who is taking a little boy to a Buddhist temple, but he faces some problems along the way. This anime is worth a look.",
      },
      {
        title: "Serial Experiments Lain (1998)",
        image: "lain.avif",
        description:
          " Serial Experiments Lain is an anime about a girl named Lain. Lain is a teenager who discovers a way to live in both the Wired (internet) and the real world at the same time. This anime is very confusing and does not appear to make a lot of sense unless you put a lot of effort on it, but it is worth it.",
      },
      {
        title: "Perfect Blue (1997)",
        image: "Perfect-Blue.jpg",
        description:
          " Mima Kirigoe is a J-pop idol who is trying to become an actress. As if the disapproval of some of her fan base wasn't enough, she discovers a site that is tracking her every movement without her consent, all this is driving her quite literally crazy. This anime is very dark and confusing, but it is worth a look.",
      },
    ] satisfies Content[];
  }

  ////////////// PORTUGUESE VERSION //////////////
  else if (language === "eng") {
    return [
      {
        title: "Cowboy Bebop (1998)",
        image: "bebop.webp",
        description:
          "Amado por muitos e odiado por absolutamente ninguém, Cowboy Bebop é um anime que acompanha uma equipe de caçadores de recompensas unidos por pura conveniência. Cada um tem sua própria história e objetivos. Vivendo em um futuro distópico, com dinheiro apenas o suficiente para sobreviver, eles ainda precisam lidar com seus passados. Cowboy Bebop é um dos animes mais influentes já criados, com uma trilha sonora focada em jazz, personagens incríveis e uma experiência geral marcante.",
      },
      {
        title: "Samurai Champloo (2004)",
        image: "Champloo.png",
        description:
          "Falando em trilha sonora incrível, Samurai Champloo não é exceção. Combinando samurais e hip hop, esse anime merece ser assistido. A história segue Fuu, Mugen e Jin, três estranhos que, após Fuu salvar a vida de Mugen e Jin, concordam em acompanhá-la como guarda-costas em uma busca por um samurai que cheira a girassóis.",
      },
      {
        title: "Chainsaw Man (2022)",
        image: "chainsaw.png",
        description:
          "Denji é um adolescente que trabalha como caçador de demônios desde a infância para pagar as dívidas do pai. Até que, um dia, seu animal de estimação demoníaco se sacrifica para salvá-lo, concedendo-lhe um poder incrível. Agora, finalmente livre, ele pode fazer o que quiser. Um anime muito divertido de assistir.",
      },
      {
        title: "Trigun (1998)",
        image: "trigun.avif",
        description:
          "Trigun é, sem dúvida, um ótimo anime. Se você não se incomoda com uma animação simples, é imperdível. Ambientado no planeta 'Terra de Ninguém', Vash é o fora-da-lei mais temido, com uma recompensa de $$60 bilhões (double dollars) por sua cabeça. É conhecido por destruir cidades inteiras sem causar mortes. Esse anime traz uma bela mensagem sobre a natureza humana.",
      },
      {
        title: "Lookism (2022)",
        image: "Lookism.jpg",
        description:
          "A Netflix fez um ótimo trabalho com esse anime. A história é sobre um estudante do ensino médio considerado feio e gordo, que sofre muito bullying dos colegas. De repente, ele ganha um segundo corpo — bonito e magro. Um anime com uma lição poderosa sobre bullying.",
      },
      {
        title: "A Voz do Silêncio (2016)",
        image: "silent-voice.jpg",
        description:
          "Shoya Ishida era um valentão no ensino fundamental, mas após um evento envolvendo uma garota surda, desenvolve uma enorme culpa que o persegue durante os anos seguintes. Eventualmente, ele tem a chance de se redimir.",
      },
      {
        title: "Death Note (2006)",
        image: "death-note.webp",
        description:
          "Light Yagami é um jovem estudante japonês que encontra um caderno onde qualquer nome escrito resulta na morte da pessoa. Ele decide usar esse poder para matar todos os criminosos do mundo e se tornar o Deus do novo mundo.",
      },
      {
        title: "Attack on Titan (2013)",
        image: "titan.webp",
        description:
          "Eren Yeager cresceu em um mundo cruel, onde gigantes chamados Titãs devoram seres humanos. Após ver sua mãe ser comida por um Titã, ele jura exterminar todos eles. Esse anime é definitivamente imperdível.",
      },
      {
        title: "Túmulo dos Vagalumes (1988)",
        image: "graveofthefireflies.jpg",
        description:
          "Esse filme é tão bom quanto antigo e tão triste quanto bom. Conta a história de um garoto e sua irmã tentando sobreviver sozinhos no Japão durante a Segunda Guerra Mundial, após perderem os pais. Ver essas duas crianças lidando com a crueldade da guerra e das pessoas é de partir o coração.",
      },
      {
        title: "Black Lagoon (2002)",
        image: "black-lagoon.webp",
        description:
          "Rock era um funcionário comum em uma grande empresa, até que um dia é sequestrado por piratas. Quando percebe que seu chefe não pretende pagar o resgate, ele decide se juntar à tripulação pirata. Esse anime não é para todos, mas com certeza é para alguns.",
      },
      {
        title: "Akira (1988)",
        image: "akira.webp",
        description:
          "Um dos animes mais influentes já criados, Akira se passa em uma Tóquio pós-apocalíptica chamada Neo-Tóquio. A história gira em torno de uma gangue de motoqueiros. Após um dos membros ser sequestrado pelo governo, Shotaro Kaneda, líder da gangue, parte em sua busca e acaba descobrindo o quão corrupta é sua sociedade.",
      },
      {
        title: "Monster (2004)",
        image: "monster.avif",
        description:
          "Um médico renomado salva a vida de um garotinho, que mais tarde se torna um serial killer cruel. O médico decide que precisa matá-lo. Monster acompanha a perseguição do doutor ao ex-paciente psicopata, enquanto ele descobre o passado e os motivos por trás daquela crueldade.",
      },
      {
        title: "Ghost Stories (dublagem em inglês, 2000)",
        image: "ghost.jpg",
        description:
          "Um meme vivo. A versão original de Ghost Stories não tinha nada de especial. Porém, a equipe responsável pela dublagem em inglês ignorou completamente o roteiro original e criou uma comédia sem sentido genial. Para quem gosta de humor sombrio e absurdo, é imperdível.",
      },
      {
        title: "A Espada do Estranho (2007)",
        image: "sword-of-stranger.jpg",
        description:
          "É possível falar de anime sem falar de samurais? A história aqui não é única, mas é um anime de samurai muito bem feito. Conta a jornada de um samurai que escolta um garoto até um templo budista, enfrentando diversos obstáculos pelo caminho. Vale a pena assistir.",
      },
      {
        title: "Serial Experiments Lain (1998)",
        image: "lain.avif",
        description:
          "Serial Experiments Lain é sobre uma garota chamada Lain, uma adolescente que descobre uma forma de viver tanto no Wired (internet) quanto no mundo real ao mesmo tempo. Esse anime é confuso e não faz muito sentido à primeira vista, mas com dedicação, vale a pena.",
      },
      {
        title: "Perfect Blue (1997)",
        image: "Perfect-Blue.jpg",
        description:
          "Mima Kirigoe é uma idol do J-pop tentando virar atriz. Como se a desaprovação dos fãs não bastasse, ela descobre um site que acompanha todos os seus passos sem consentimento, o que começa a deixá-la literalmente louca. Esse anime é sombrio e confuso, mas vale ser assistido.",
      },
    ] satisfies Content[];
  }
}
