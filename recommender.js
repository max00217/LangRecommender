const categories = [
    "beginner friendly", //0
    "static/dynamic typing", //1
    "OOP", //2
    "Functional", //3
    "Community Resource", //4
    "Multi-Platform", //5
    "Speed", //6
    "Simplecode", //7
    "Dev speed", //8
    "Standard Library" //9
];

const questions = [
    {
        text: "초보자가 쉽게 배울 수 있는 언어를 선호하나요?",
        choices: [
            {
                text: "네, 저는 빠르게 배우고 싶어요.",
                value: {
                    0: 5,
                    2: 1,
                    4: 3,
                    7: 3,
                    9: 2
                },
            },
            {
                text: "아니요, 오래 걸리더라도 확실히 마스터할래요.",
                value: {
                    0: -2,
                    3: 3,
                    7: -1,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    0: 1,
                    2: 1,
                    3: 1,
                    7: 1,
                    9: 1
                },
            },
            {
                text: "쉽든 어렵든 상관 없어요.",
                value: {
                    0: 2,
                    2: 2,
                    3: 2,
                    4: 2,
                    7: 2,
                    9: 2
                },
            },
        ],
    },
    {
        text: "프로그램의 동작을 최대한 명확히 이해하고 싶나요?",
        choices: [
            {
                text: "네, 코드의 모든 부분을 이해하고, 오류를 찾는 것이 중요해요.",
                value: {
                    1: 2
                },
            },
            {
                text: "아니요, 그럴 필요 없이 필요한 부분만 확인하는 것이 더 편해요.",
                value: {
                    1: -2
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    1: 0
                },
            },
            {
                text: "오류는 발생하고 나서 확인할래요.",
                value: {
                    1: -1
                },
            },
        ],
    },
    {
        text: "코드 작성 과정에서 각각의 부분을 분할하여 관리하는 것을 선호하나요?",
        choices: [
            {
                text: "네, 객체나 클래스를 사용해서 코드를 분할하여 관리하는 것이 편해요.",
                value: {
                    2: 2
                },
            },
            {
                text: "아니요, 그것 말고 다른 방법도 고려해볼 필요가 있어요",
                value: {
                    2: -1
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    2: 0
                },
            },
            {
                text: "코드 구조에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    2: -2
                },
            },
        ],
    },
    {
        text: "코드의 가변성을 줄이고, 에러 발생 가능성을 낮춰 코드의 복잡성을 줄이고 싶나요?",
        choices: [
            {
                text: "네, 순수 함수와 불변성을 사용하려고 해요.",
                value: {
                    3: 3
                },
            },
            {
                text: "아니요, 명령형 스타일이 더 사용하기 편해요",
                value: {
                    3: -2
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    3: 0
                },
            },
            {
                text: "꼭 함수형이나 객체 지향 프로그래밍에만 국한될 필요는 없다고 생각해요.",
                value: {
                    3: -1
                },
            },
        ],
    },
    {
        text: "다른 사람들이 만든 자료를 활용하고 싶나요?",
        choices: [
            {
                text: "네, 외부 자원을 활용하고 싶어요.",
                value: {
                    4: 2
                },
            },
            {
                text: "아니요, 내가 구현하는 프로젝트에서는 핵심 기능만 제공되어도 괜찮아요.",
                value: {
                    4: -3
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    4: 0
                },
            },
            {
                text: "추가 자원에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    4: -1
                },
            },
        ],
    },
    {
        text: "크로스 플랫폼을 지원하는 것이 중요한가요?",
        choices: [
            {
                text: "네, 다양한 플랫폼에서 작동해야 해요.",
                value: {
                    5: 4
                },
            },
            {
                text: "아니요, 특정 플랫폼에 특화된 프로젝트가 더 작업하기 수월해요.",
                value: {
                    5: -3
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    5: 0
                },
            },
            {
                text: "플랫폼 이슈에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    5: -1
                },
            },
        ],
    },
    {
        text: "높은 성능이 필요한가요?",
        choices: [
            {
                text: "네, 빠른 속도가 필요해요.",
                value: {
                    6: 3
                },
            },
            {
                text: "아니요, 편의성이 더 중요해요.",
                value: {
                    6: -3
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    6: 0
                },
            },
            {
                text: "성능에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    6: -1
                },
            },
        ],
    },
    {
        text: "다른 사람이 내 코드를 쉽게 이해할 수 있도록 작성하고 싶나요?",
        choices: [
            {
                text: "네, 코드 가독성을 높이고 싶어요.",
                value: {
                    7: 3
                },
            },
            {
                text: "아니요, 코드의 가독성보다는 세부적인 구현이 더 초점을 맞출래요.",
                value: {
                    7: -1
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    7: 0
                },
            },
            {
                text: "가독성에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    7: -2
                },
            },
        ],
    },
    {
        text: "다양한 결과물을 빠르게 만들고 싶나요?",
        choices: [
            {
                text: "네, 다른 사람들보다 빠르게 결과물을 만들고 싶어요.",
                value: {
                    8: 4
                },
            },
            {
                text: "아니요, 다른 사람들보다 느리더라도 꼼꼼하게 만들고 싶어요.",
                value: {
                    8: -3
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    8: 0
                },
            },
            {
                text: "생산성에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    8: -1
                },
            },
        ],
    },
    {
        text: "다양한 기본 기능이 제공되는 것이 중요한가요?",
        choices: [
            {
                text: "네, 이미 만들어진 다양한 도구를 사용하고 싶어요.",
                value: {
                    9: 3
                },
            },
            {
                text: "아니요, 언어가 무거운 것 보단 기본적인 기능을 통해 내가 직접 구현하는 것도 상관없어요.",
                value: {
                    9: -1
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    9: 0
                },
            },
            {
                text: "표준 라이브러리에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    9: -2
                },
            },
        ],
    },
    // 추가 질문 작성(언어 인덱스 수정 필요)
];

let currentIndex = 0;
let categoryScore = Array(categories.length).fill(0);

function displayQuestion() {
    if (currentIndex >= questions.length) {
        displayResult();
        return;
    }
    document.getElementById("question-text").textContent = questions[currentIndex].text;
    document.getElementById("choice-1").textContent = questions[currentIndex].choices[0].text;
    document.getElementById("choice-2").textContent = questions[currentIndex].choices[1].text;
    document.getElementById("choice-3").textContent = questions[currentIndex].choices[2].text;
    document.getElementById("choice-4").textContent = questions[currentIndex].choices[3].text;
    document.getElementById("question-count").textContent = `질문 ${currentIndex + 1} of ${questions.length}`;
}


function updateChoice(choiceIndex) {
    const question = questions[currentIndex];
    const choice = question.choices[choiceIndex];

    for (const catIndex in choice.value) {
        categoryScore[catIndex] += choice.value[catIndex];
    }

    currentIndex += 1;
    displayQuestion();
}

const languages = [
    "Python",
    "Java",
    "JavaScript",
    "C",
    "C++",
    "CSharp",
    "Ruby",
    "Go",
    "PHP",
    "Swift",
    "Kotlin",
    "Rust",
    "Scala",
    "Dart",
    "Lua",
    "Haskell",
    "TypeScript",
    "R",
    "Assembly",
    "Scratch"
];

const languageScores = [
    /* "beginner friendly", "static/dynamic typing", "OOP", "Functional", "Community Resource", "Multi-Platform", "Speed", "Simplecode", "Dev speed", "Standard Library"
     0, 1, 2, 3, 4, 5, 6, 7, 8, 9*/
    [7, -1, 4, 1, 3, 3, 0, 4, 5, 5], // Python
    [2, 5, 4, 1, 4, 3, 4, 0, 4, 3], // Java
    [1, -1, 2, 5, 5, 4, 2, 5, 3, 5], // JavaScript
    [0, 3, 5, 1, 2, 1, 5, 2, 5, 2], // C
    [3, 4, 5, 1, 4, 2, 4, 2, 4, 4], // C++
    [3, 5, 5, 3, 4, 4, 3, 2, 4, 4], // C#
    [6, -1, 4, 1, 3, 1, 1, 5, 5, 3], // Ruby
    [5, 3, 3, 3, 4, 5, 5, 4, 5, 4], // Go
    [5, 0, 4, 1, 3, 3, 1, 3, 4, 3], // PHP
    [4, 4, 4, 4, 4, 5, 2, 4, 4, 4], // Swift
    [4, 5, 5, 3, 4, 5, 2, 4, 5, 4], // Kotlin
    [5, 5, 4, 4, 3, 5, 3, 4, 4, 4], // Rust
    [3, 5, 5, 4, 2, 3, 3, 4, 4, 4], // Scala
    [6, -1, 4, 3, 3, 5, 2, 4, 5, 3], // Dart
    [7, -1, 1, 3, 2, 2, 2, 5, 4, 1], // Lua
    [2, 5, 1, 5, 2, 2, 2, 4, 3, 4], // Haskell
    [6, 2, 5, 3, 5, 3, 2, 5, 5, 5], // TypeScript
    [6, 3, 1, 4, 4, 3, 1, 4, 4, 4], // R
    [-1, 2, 1, 1, 1, 1, 5, 1, 2, 1], // Assembly
    [9, -1, 1, 1, 2, 2, 0, 5, 3, 2] // Scratch
];

function displayResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    const recommendedLanguage = recommendLanguage();
  
    // 언어별로 파일명을 리턴하는 함수
    function getHtmlFileName(language) {
      return 'langs/' + language.toLowerCase().replaceAll(' ', '-') + '.html';
    }
  
    // 결과에 따라 해당 언어의 페이지로 이동
    const htmlFileName = getHtmlFileName(recommendedLanguage);
    window.location.href = htmlFileName;
  }
  


function recommendLanguage() {
    const bestMatch = languages.reduce(
        (best, language, index) => {
            const score = categoryScore.reduce(
                (sum, value, catIndex) => sum + value * languageScores[index][catIndex],
                0
            );

            if (score > best.score) {
                return { language, score };
            }

            return best;
        },
        { language: null, score: -Infinity }
    );

    return bestMatch.language;
}
