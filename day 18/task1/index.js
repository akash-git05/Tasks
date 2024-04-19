const btn=document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let word=document.querySelector('.search-value').value;
    getWord(word);
});


//creating a async function to perform the search // ${meaning.definitions[0].definition}

async function getWord(word) {
  let div1 = document.querySelector('.card-body');
  div1.innerHTML = ''; // Clear previous content

  try {
      let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      let data = await response.json();

      let para = document.createElement('p');
      let para1 = document.createElement('ul');
      para1.style.listStyleType = 'none';

      // Process meanings
      data[0].meanings.forEach((meaning) => {
          let listItem = document.createElement('li');
          listItem.innerHTML = `partOfSpeech: <strong>${meaning.partOfSpeech}</strong>`;

          let subList = document.createElement('ol');
          meaning.definitions.forEach((definition) => {
              let subListItem = document.createElement('li');
              subListItem.innerHTML = `<em>${definition.definition}</em>`;
              subList.appendChild(subListItem);
          });

          listItem.appendChild(subList);
          para1.appendChild(listItem);
      });

      para.innerHTML = `<h2>
          <span class="fas fa-volume-up span"></span>
          <audio src=${data[0].phonetics[0].audio} type='audio/mpeg' class="audio"></audio>
          <strong>${data[0].word}</strong>
      </h2>`;

      div1.appendChild(para);
      div1.appendChild(para1);

      document.querySelector('.span').addEventListener('click', (e) => {
          e.preventDefault();
          let audio = document.querySelector('.audio');
          audio.play();
      });
  } catch (error) {
      console.log(error);
      div1.innerHTML = `<p class="text-danger text-center">The word <strong>${word}</strong> is not found in the dictionary</p>`;
      // Append error message to document body or specific container
      document.body.appendChild(div1);
  }
}
