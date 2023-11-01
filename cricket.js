let scoreStr = localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);

    function resetScore(scoreStr) {
      score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,

      };

      score.displayScore = function () {
        return `Score: Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
      };
        showResult();
    }


    function computerRandomChoice() {
      let randomNumber = Math.random() * 3;

      if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';

      } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
      } else {
        return 'Stump';

      }

    }


    function getResult(userMove, computerMove) {

      if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
          score.win++;
          return 'User won';
        } else if (computerMove === 'Bat') {
          score.tie++;
          return 'Match tie';
        } else {
          score.lost++;
          return 'Computer won';
        }

      } else if (userMove === 'Ball') {
        if (computerMove === 'Bat') {
          score.lost++;
          return 'Computer won';
        } else if (computerMove === userMove) {
          score.tie++;
          return 'Match tie';
        } else {
          score.win++;
          return 'User won';
        }

      } else {
        if (computerMove === 'Ball') {
          score.lost++;
          return 'Computer won';
          
        } else if (computerMove === 'Stump') {
          score.tie++;
          return 'Match tie';
        } else {
          score.win++;
          return 'User won';
        }

      }

    }

    function showResult(userMove, computerMove, result) {

      localStorage.setItem('Score', JSON.stringify(score));

      document.querySelector('#user-move').innerText = 
      userMove ? `You have chosen ${userMove}`: '';
      document.querySelector('#computer-move').innerText = computerMove ? `Computer have chosen ${computerMove}`: '';
      document.querySelector('#result').innerText = result  || '';
      document.querySelector('#score').innerText = score.displayScore();
    }
