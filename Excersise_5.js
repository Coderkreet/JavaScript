
let Myobj = `{
    "word": "original",
    "results": [
      {
        "definition": "something that serves as a model or a basis for making copies",
        "partOfSpeech": "noun",
        "synonyms": [
          "archetype",
          "pilot"
        ],
        "typeOf": [
          "model",
          "example"
        ],
        "examples": [
          "this painting is a copy of the original"
        ]
      },
      {
        "definition": "an original creation (i.e., an audio recording) from which copies can be made",
        "partOfSpeech": "noun",
        "synonyms": [
          "master",
          "master copy"
        ],
        "typeOf": [
          "creation"
        ]
      },
      {
        "definition": "being or productive of something fresh and unusual; or being as first made or thought of",
        "partOfSpeech": "adjective",
        "also": [
          "primary",
          "creative",
          "originative",
          "first",
          "unconventional"
        ],
        "attribute": [
          "originality"
        ],
        "similarTo": [
          "innovational",
          "innovative",
          "new",
          "novel",
          "groundbreaking",
          "avant-garde",
          "daring",
          "freehand",
          "freehanded",
          "fresh",
          "germinal",
          "originative",
          "seminal",
          "underivative"
        ],
        "antonyms": [
          "unoriginal"
        ],
        "derivation": [
          "originality"
        ],
        "examples": [
          "a truly original approach",
          "with original music",
          "an original mind"
        ]
      },
      {
        "definition": "not derived or copied or translated from something else",
        "partOfSpeech": "adjective",
        "similarTo": [
          "underived"
        ],
        "examples": [
          "the play is original; not an adaptation",
          "he kept the original copy and gave her only a xerox",
          "the translation misses much of the subtlety of the original French"
        ]
      },
      {
        "definition": "(of e.g. information) not secondhand or by way of something intermediary",
        "partOfSpeech": "adjective",
        "similarTo": [
          "primary"
        ],
        "examples": [
          "his work is based on only original, not secondary, sources"
        ]
      },
      {
        "definition": "preceding all others in time or being as first made or performed",
        "partOfSpeech": "adjective",
        "similarTo": [
          "first"
        ],
        "examples": [
          "the original inhabitants of the Americas",
          "the book still has its original binding",
          "restored the house to its original condition",
          "the original performance of the opera",
          "the original cast",
          "retracted his original statement"
        ]
      }
    ],
    "syllables": {
      "count": 4,
      "list": [
        "o",
        "rig",
        "i",
        "nal"
      ]
    },
    "pronunciation": {
      "all": "ə'rɪdʒənəl"
    },
    "frequency": 4.51
  }`



let Obj = JSON.parse(Myobj);

// console.log(Obj);


let addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click' , display)

function display(){
 let results = Obj['results'];
 let html = " ";
 results.forEach(element => {
   html += `<h5 my-2px mx-2px  class ="list-group-item list-group-item-action list-group-item-info"> Defination of givrn example => ${element.definition}</h5> <hr>`
 document.getElementById('list').innerHTML = html;
 });

}
