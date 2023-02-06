var questions = [{
        id: 1,
        description: "Cultura de massa é o conjunto de bens culturais que é produzido em larga escala. Seus objetivos são garantir o lucro e o consumo e atender às necessidades culturais e de entretenimento da sociedade.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 2,
        description: "Cultura de massa e publicidade andam, muitas vezes, lado a lado, vendendo não apenas produtos, mas também valores e estilo de vida. Nessa linha de pensamento, muitas séries animadas, especialmente nos anos 80, foram criadas com o intuito de vender brinquedos para o público infantil, como <em>Thundercats</em> e <em>He-man e os Mestres do Universo</em>.",
        img_src: '../assets/design/pg1/figura1.jpg',
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 3,
        description: "A <em>pop art</em> surgiu nos anos 50 como um movimento da música popular brasileira.",
        bt_values: [0, 1],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta! No final dos anos 50, o mundo passava por um período em que os meios de comunicação em massa estavam conduzindo o gosto e o desejo das pessoas. Com o crescimento dos meios de comunicação, como a televisão e o rádio, além de jornais e revistas, houve um aumento na divulgação de produtos, estimulando o desejo das pessoas para a compra de produtos lançados pela mídia. Além de induzir os padrões sociais na vida das pessoas, a divulgação em massa desses produtos influenciava a moda, a arquitetura e a música, entre outras vertentes. Nesse cenário, muitos artistas começaram a se questionar sobre o padrão de consumo da época, nascendo assim o movimento artístico denominado pop art."
        }
    },
    {
        id: 4,
        description: "O movimento <em>pop art</em> teve como características a introdução da vida cotidiana nas obras, o uso de cores fortes e vibrantes, a reprodução de temas inspirados em histórias em quadrinhos, além da inserção de figuras de celebridades.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 5,
        description: "A Obra “Serigrafia Marilyn Monroe”, do artista Andy Warhol, faz parte do movimento <em>pop art</em>.",
        img_src: '../assets/design/pg1/figura10.jpg',
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 6,
        description: "Nos anos 60, se intensificou a inserção da cultura americana e de massa em solo brasileiro, e a cultura jovem passou a fazer parte da rotina. A grande expoente desse movimento foi a Jovem Guarda, encabeçada pelos grupos Titãs e Legião Urbana.",
        bt_values: [0, 1],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A grande expoente desse movimento foi a Jovem Guarda, encabeçada pelo trio Roberto Carlos, também conhecido na época como “O Brasa”; Erasmo Carlos, cujo apelido era “Tremendão”; e Wanderléa, sob a alcunha de “Ternurinha”."
        }
    },
    {
        id: 7,
        description: "O Tropicalismo surgiu no cenário do regime ditatorial militar, conhecido pela censura, pela alta repressão popular e pelos crimes contra os direitos humanos. Essa corrente estética tentou explicar o Brasil por meio da arte, em especial da canção popular brasileira. Popularizado a partir das composições de Caetano Veloso e Gilberto Gil, o Tropicalismo tornou-se um movimento estético de grande importância para a cultura brasileira, com influência direta nas obras estéticas produzidas no país.",
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 8,
        description: "A Semana de Arte Moderna, também conhecida como Semana de 22, foi um importante marco na história da arte e da literatura mundial, ocorrido na França, com exposição de escritores, artistas plásticos e músicos do mundo inteiro.",
        bt_values: [0, 1],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A Semana de Arte Moderna foi um importante marco na história da arte e da literatura brasileiras, ocorrida no Teatro Municipal de São Paulo, entre 13 e 18 de fevereiro de 1922. Escritores, artistas plásticos, músicos, entre outros, apresentaram obras que rompiam com o que era produzido até aquele momento no Brasil."
        }
    },
    {
        id: 9,
        description: "A arte moderna teve grande repercussão no Brasil e continua sendo marcada como um dos movimentos mais ricos e importantes da nossa cultura. A seguir, veja imagens de obras da arte moderna brasileira.",
        img_src: '../assets/design/pg2/figura18.png',
        img_src2: '../assets/design/pg2/figura19.png',
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },
    {
        id: 10,
        description: "A cultura de massa também faz parte do âmbito esportivo. Ídolos do futebol também influenciam seus fãs e se tornam referência. Um exemplo é o atleta Ronaldo Nazário, que, na Copa de 2002, apareceu com um corte de cabelo que virou febre entre crianças e adolescentes, que queriam ficar parecidos com o ídolo.",
        img_src: '../assets/design/pg3/figura41.png',
        img_src2: '../assets/design/pg3/figura42.png',
        bt_values: [1, 0],
        feedbacks: {
            certo: "Parabéns! Resposta correta.",
            errado: "Resposta incorreta. A afirmação é verdadeira."
        }
    },

]

var QuizCorrida = {
    current: 0,
    player_points: 0,
    questionUI: null,
    feedbackUI: null,
    txt_description: null,
    img_src: null,
    img_src2: null,
    btn_true: null,
    btn_false: null,
    btsPista: null,
    showQuestion: function (index, data) {
        console.log(this.current)
        console.log(data[index].description);
        this.txt_description.innerHTML = data[index].description;
        this.img_src.src = data[index].img_src
        this.img_src2.src = data[index].img_src2
        this.btn_true.value = data[index].bt_values[0];
        this.btn_false.value = data[index].bt_values[1];
        this.questionUI.show();
    },
    showFeedback: function (index, data, res) {
        document.querySelector('#modal-quiz-feedback .feedback-text').innerHTML = data[index].feedbacks[res];
        document.querySelector('#modal-quiz-feedback').classList.remove('certo');
        document.querySelector('#modal-quiz-feedback').classList.remove('errado');
        document.querySelector('#modal-quiz-feedback').classList.add(res)
        let title = '';
        console.log(res);
        (res == 'certo') ? title = "Correto!": title = 'Atenção!';
        document.querySelector('#modal-quiz-feedback #modal-quiz-feedback-title').innerHTML = title
        this.feedbackUI.show();
        if (res === 'certo') {
            document.querySelector('#snd-acerto').play()
        } else {
            document.querySelector('#snd-erro').play()
        }

    },
    gameProgress: function () {
        this.btsPista[this.current].classList.add('respondido');
        this.btsPista[this.current].disabled = true;
        this.btsPista[this.current].classList.remove('atual');
        this.current++;
        if (this.current < 10) {
            this.btsPista[this.current].disabled = false;
            this.btsPista[this.current].classList.add('atual');
        } else {
            document.querySelector('.bt-finish').disabled = false;
            document.querySelector('.bt-finish').classList.add('atual');
            $('.tip-podio').fadeIn(200)
        }

        document.querySelector('#quiz-points').innerHTML = `Pontos: ${this.player_points}`

    },
    startGame: function () {
        this.btsPista[this.current].disabled = false;
        this.btsPista[this.current].classList.add('atual');
        document.querySelector('#quiz-points').innerHTML = `Pontos: ${this.player_points}`
    },
    gameEnd: function () {
        //Acertou 10 questões: medalha de ouro 
        //Acertou 8 ou mais: medalha de prata 
        //Acertou 5 ou mais: medalha de bronze 
        // document.querySelector('.object-window.finishScreen .mensagem').innerHTML = 'Parabéns! Você concluiu a atividade e ganhou o troféu da cultura e identidade!'

        let medal = "";
        if (this.player_points === 10){
            medal = 'ouro'
            document.querySelector('.object-window.finishScreen .mensagem').innerHTML = 'Parabéns! Você concluiu a atividade e ganhou o troféu de ouro da cultura e identidade!'
        } else if (this.player_points >= 8){
            medal = 'prata'
            document.querySelector('.object-window.finishScreen .mensagem').innerHTML = 'Parabéns! Você concluiu a atividade e ganhou o troféu de prata da cultura e identidade!'
        }else if (this.player_points >= 5){
            medal = 'bronze'
            document.querySelector('.object-window.finishScreen .mensagem').innerHTML = 'Parabéns! Você concluiu a atividade e ganhou o troféu de bronze da cultura e identidade!'
        }else {
            medal = 'nope';
            document.querySelector('.object-window.finishScreen .mensagem').innerHTML = "Clique no botão e jogue novamente.";
        }

        document.querySelector('.total-points').innerHTML = `Você fez ${this.player_points} pontos!`;

        document.querySelector('.object-window.finishScreen .object-medal').classList.add(medal);

        console.log(medal);

    },
    gameRestart: function () {
        this.btsPista.forEach(function (el) {
            el.classList.remove('respondido');
            el.classList.remove('atual');
            el.disabled = true;
        })

        document.querySelector('.bt-finish').disabled = true;
        document.querySelector('.bt-finish').classList.remove('atual');

        this.current = 0;
        this.player_points = 0;
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('nope');
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('prata');
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('bronze');
        document.querySelector('.object-window.finishScreen .object-medal').classList.remove('ouro');
        $('.tip-podio').hide()
        $('.object-window.finishScreen').fadeOut(150);
        $('.object-window.startGame').fadeIn(150);
    },
    init: function () {
        console.log('Quiz Corrida inicializado')
        this.questionUI = new bootstrap.Modal(document.querySelector('#modal-question'), {
                keyboard: false
            }),
            this.feedbackUI = new bootstrap.Modal(document.querySelector('#modal-quiz-feedback'), {
                keyboard: false
            })
        this.txt_description = document.querySelector('#modal-question-description');
        this.img_src = document.querySelector('#modal-question figure img')
        this.img_src2 = document.querySelector('#modal-question .segunda-figura')
        this.btn_true = document.querySelector('.btn_true');
        this.btn_false = document.querySelector('.btn_false');

        ocq = this;

        this.btsPista = Array.from(document.querySelectorAll('.bt-show-question:not(.bt-finish)'));

        this.btsPista.forEach(function (bt) {
            bt.addEventListener('click', function () {
                ocq.showQuestion(this.value, questions)
            })
        })

        document.querySelector('.btn-continue').addEventListener('click', function () {
            ocq.gameProgress();
        })

        document.querySelector('.bt-start').addEventListener('click', function () {
            $('.object-window.startGame').fadeOut(200, function () {
                ocq.startGame()
            })
        })
        document.querySelector('.bt-restart').addEventListener('click', function () {
            ocq.gameRestart()
        })

        document.querySelector('.bt-finish').addEventListener('click', function () {
            ocq.gameEnd();
            $('.object-window.finishScreen').fadeIn(200);
            setTimeout(function () {
                $('.object-window.finishScreen').css('display', 'flex');
                if (ocq.player_points >= 5) {
                    document.querySelector('#snd-aplauso').play()
                } else {
                    document.querySelector('#snd-trombone').play()
                }

            }, 10);

        })

        Array.from(document.querySelectorAll('.btn_res')).forEach(function (el) {
            el.addEventListener('click', function () {
                console.log("value=", this.value)
                ocq.questionUI.hide()
                let res = null;
                if (this.value == 1) {
                    res = 'certo';
                    ocq.player_points++;
                } else {
                    res = 'errado';
                }
                console.log('player_points:', ocq.player_points)
                ocq.showFeedback(ocq.current, questions, res)
            })
        })
    }
}

QuizCorrida.init();