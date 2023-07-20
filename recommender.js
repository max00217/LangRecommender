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
    "Standard Library", //9
    "ForWeb", //10
    "ForApp", //11
    "ForGame", //12
    "ForAI", //13
    "ForData", //14
];

const questions = [
    {
        text: "초보자도 쉽게 배울 수 있는 언어를 선호하나요?",
        choices: [
            {
                text: "네, 저는 빠르게 배우고 서비스하고 싶어요.",
                value: {
                    0: 3,
                    2: 1,
                    4: 1,
                    7: 3,
                    9: 1
                },
            },
            {
                text: "아니요, 오래 걸리더라도 확실히 마스터할래요.",
                value: {
                    0: -4,
                    3: 4,
                    7: -1,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    0: 0,
                    2: 0,
                    3: 0,
                    7: 0,
                    9: 0
                },
            },
            {
                text: "난이도는 중요하지 않아요.",
                value: {
                    0: 1,
                    2: 1,
                    3: 1,
                    4: 1,
                    7: 1,
                    9: 1
                },
            },
        ],
    },
    {
        text: "프로그램의 동작을 최대한 명확히 이해하고 싶나요?",
        choices: [
            {
                text: "네, 코드의 모든 부분을 이해하고, 작성 단계에서부터 오류를 최소화하는 것이 중요해요.",
                value: {
                    1: 4,
                    0: -1,
                    2: -1,
                    3: 1,
                },
            },
            {
                text: "아니요, 그럴 필요 없이 필요한 부분만 확인하는 것이 더 편해요.",
                value: {
                    1: -3,
                    0: 3,
                    2: 1,
                    3: -2,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    1: 0
                },
            },
            {
                text: "오류 발생에 대해선 큰 비중을 두지 않을래요.",
                value: {
                    1: -3,
                    0: 1,
                },
            },
        ],
    },
    {
        text: "코드 작성 과정에서 각각의 부분을 분할하여 관리하는 것을 선호하나요?",
        choices: [
            {
                text: "네, 각 부분을 객체로 나눠서 코드를 관리하는 것이 편해요.",
                value: {
                    2: 4,
                    0: 1,
                    3: -1,
                    7: 1,
                },
            },
            {
                text: "아니요, 그것 말고 다른 방법도 고려해볼 필요가 있어요",
                value: {
                    2: -4,
                    0: -1,
                    3: 4,
                    7: -1,
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
                    2: 2,
                    3: 1,
                    7: 1,
                },
            },
        ],
    },
    {
        text: "코드의 복잡성을 줄이기 위해 코드의 불변성을 사용하고 싶나요?",
        choices: [
            {
                text: "네, 순수 함수와 불변성을 이용하려고 해요.",
                value: {
                    3: 4,
                    2: -2,
                    7: -2,
                    8: -1
                },
            },
            {
                text: "아니요, 대중적인 명령형 스타일이 더 사용하기 편해요",
                value: {
                    3: -4,
                    2: 2,
                    8: 1
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    3: 0
                },
            },
            {
                text: "한 가지 방식에만 국한될 필요는 없다고 생각해요.",
                value: {
                    3: 2,
                    2: 2,
                },
            },
        ],
    },
    {
        text: "다른 사람들이 만든 자료를 중요하게 생각하나요?",
        choices: [
            {
                text: "네, 외부 자원을 활용하고 싶어요.",
                value: {
                    4: 4,
                    0: 1,
                    5: 2,
                    8: 1
                },
            },
            {
                text: "아니요, 핵심 기본 기능만으로도 충분하다고 생각해요.",
                value: {
                    4: -4,
                    0: -2,
                    9: 3
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
                    4: -2,
                    9: 1
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
                    5: 7,
                    0: 1,
                    4: 1
                },
            },
            {
                text: "아니요, 특정 플랫폼에 특화된 프로젝트가 더 작업하기 수월해요.",
                value: {
                    5: -4,
                    0: -2,
                    4: 1
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
                    5: -2,
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
                    6: 4,
                    1: -2,
                    9: -2
                },
            },
            {
                text: "아니요, 편의성이 더 중요해요.",
                value: {
                    6: -4,
                    1: 1,
                    4: 1,
                    9: 3
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
                    6: -2,
                    7: 1,
                    4: 1
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
                    7: 4,
                    0: 1,
                    2: 1,
                    3: 1,
                },
            },
            {
                text: "아니요, 코드의 가독성보다는 세부적인 구현이 더 초점을 맞출래요.",
                value: {
                    7: -3,
                    4: 1,
                    5: 1,
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
                    7: -2,
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
                    8: 4,
                    0: 1,
                    4: 1,
                    6: 2,
                },
            },
            {
                text: "아니요, 다른 사람들보다 느리더라도 꼼꼼하게 만들고 싶어요.",
                value: {
                    8: -4,
                    1: 1,
                    4: -1,
                    6: -2,
                    9: 2,
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
                    8: -2,
                    6: -1,
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
                    9: 4,
                    0: 1,
                    4: -2,
                },
            },
            {
                text: "아니요, 언어가 무거운 것 보단 기본적인 기능을 통해 내가 직접 구현하는 것도 상관없어요.",
                value: {
                    9: -4,
                    4: -1,
                    6: 2,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    9: 0,
                },
            },
            {
                text: "표준 라이브러리에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    9: -2,
                },
            },
        ],
    },
    {
        text: "웹 개발에 관심이 있나요?",
        choices: [
            {
                text: "네, 웹사이트를 통해 다양한 기능을 구현하고 싶어요.",
                value: {
                    10: 7,
                    11: -1,
                    12: -1,
                    13: -1,
                    14: -1,
                },
            },
            {
                text: "아니요, 웹은 너무 흔해요.",
                value: {
                    10: -3,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    10: 0,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                },
            },
            {
                text: "개발 분야에 관해선 그다지 신경쓰지 않아요.",
                value: {
                    10: 2,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 1,
                },
            },
        ],
    },
    {
        text: "앱 개발에 관심이 있나요?",
        choices: [
            {
                text: "네, 스마트폰을 통해 사용 가능한 기능을 구현하고 싶어요.",
                value: {
                    10: -1,
                    11: 7,
                    12: -1,
                    13: -1,
                    14: -1,
                },
            },
            {
                text: "아니요, 앱은 복잡해보여요.",
                value: {
                    10: 1,
                    11: -4,
                    12: 1,
                    13: 1,
                    14: 1,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    10: 1,
                    11: 0,
                    12: 1,
                    13: 1,
                    14: 1,
                },
            },
            {
                text: "개발 분야는 상관 없어요.",
                value: {
                    10: 1,
                    11: 2,
                    12: 1,
                    13: 1,
                    14: 1,
                },
            },
        ],
    },
    {
        text: "게임 개발에 관심이 있나요?",
        choices: [
            {
                text: "네, 게임 개발에 관심이 있어요.",
                value: {
                    10: -1,
                    11: -1,
                    12: 7,
                    13: -1,
                    14: -1,
                },
            },
            {
                text: "아니요, 게임 개발에 필요한 요소는 너무 많고 어려워보여요.",
                value: {
                    10: 1,
                    11: 1,
                    12: -4,
                    13: 1,
                    14: 1,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 0,
                    13: 1,
                    14: 1,
                },
            },
            {
                text: "개발 분야는 상관 없어요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 2,
                    13: 1,
                    14: 1,
                },
            },
        ],
    },
    {
        text: "인공지능 개발에 관심이 있나요?",
        choices: [
            {
                text: "네, 인공지능, 머신 러닝 등에 관심이 있어요.",
                value: {
                    10: -1,
                    11: -1,
                    12: -1,
                    13: 7,
                    14: -1,
                },
            },
            {
                text: "아니요, 저에게 인공지능은 너무 어려워요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 1,
                    13: -4,
                    14: 1,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 0,
                    14: 1,
                },
            },
            {
                text: "개발 분야는 상관 없어요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 2,
                    14: 1,
                },
            },
        ],
    },
    {
        text: "데이터 분석에 관심이 있나요?",
        choices: [
            {
                text: "네, 데이터 및 자료를 분석하는 것에 관심이 있어요.",
                value: {
                    10: -1,
                    11: -1,
                    12: -1,
                    13: -1,
                    14: 7,
                },
            },
            {
                text: "아니요, 기능 개발에 더 관심이 있어요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: -4,
                },
            },
            {
                text: "잘 모르겠어요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 0,
                },
            },
            {
                text: "개발 분야는 상관 없어요.",
                value: {
                    10: 1,
                    11: 1,
                    12: 1,
                    13: 1,
                    14: 2,
                },
            },
        ],
    }

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
    document.getElementById("question-count").textContent = `${currentIndex + 1} of ${questions.length} Questions`;
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
    "PHP",
    "Swift",
    "Kotlin",
    "Rust",
    "Dart",
    "Lua",
    "Assembly",
    "Scratch"
];

const languageScores = [
    /* "beginner friendly", "static/dynamic typing", "OOP", "Functional", 
    "Community Resource", "Multi-Platform", "Speed", "Simplecode", "Dev speed", "Standard Library", 
    "ForWeb", "ForApp", "ForGame", "ForAI", "ForData" */
    [7, -2, 4, 0, 6, 3, 0, 4, 6, 6, 5, 4, 4, 7, 6], // Python
    [2, 2, 4, 0, 6, 7, 3, 2, 4, 5, 3, 7, 5, 2, 2], // Java
    [5, -2, 2, 5, 7, 6, 4, 4, 3, 6, 7, 5, 4, 3, 3], // JavaScript
    [0, 2, 2, 2, 3, 4, 7, 2, 3, 2, 2, 3, 1, 1, 1], // C
    [2, 2, 5, 0, 4, 4, 7, 3, 4, 4, 2, 3, 6, 2, 2], // C++
    [2, 2, 5, 0, 4, 5, 7, 4, 4, 5, 2, 4, 7, 2, 2], // C#
    [6, -2, 4, 1, 4, 3, 0, 5, 5, 3, 7, 6, 3, 2, 3], // Ruby
    [4, -2, 4, 0, 3, 3, 1, 3, 4, 3, 7, 4, 1, 1, 1], // PHP
    [4, 2, 4, 1, 5, 2, 7, 4, 4, 6, 4, 7, 6, 4, 2], // Swift
    [4, 2, 4, 4, 5, 7, 5, 4, 5, 4, 4, 7, 4, 2, 2], // Kotlin
    [4, 2, 4, 4, 4, 5, 5, 4, 4, 4, 5, 5, 4, 3, 3], // Rust
    [6, -2, 4, 3, 3, 5, 4, 4, 5, 3, 6, 7, 5, 2, 3], // Dart
    [7, -2, 3, 3, 3, 5, 7, 5, 4, 2, 4, 3, 7, 3, 2], // Lua
    [-1, 2, 1, 1, 1, 1, 6, -1, -1, -1, 1, 1, 1, 1, 1], // Assembly
    [9, -1, 1, 1, 2, 1, 0, 4, 4, 1, 2, 2, 2, 2, 2] // Scratch
];


function displayResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    const recommendedLanguage = recommendLanguage();

    function getHtmlFileName(language) {
        return 'langs/' + language.toLowerCase().replaceAll(' ', '-') + '.html';
    }

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
