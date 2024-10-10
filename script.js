// 在文件开头添加这行代码
let isRotating = false;

// 在文件开头添加新的函数

function getZodiacSign(birthdate) {
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();
    
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "水瓶座";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "双鱼座";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "白羊座";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "金牛座";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "双子座";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "巨蟹座";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "狮子座";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "处女座";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "天秤座";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "天蝎座";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "射手座";
    return "摩羯座";
}

function getAstrologyPrediction(zodiacSign) {
    const predictions = {
        "水瓶座": "创新思维将带来意外惊喜，保持开放态度迎接新机遇。",
        "双鱼座": "直觉力增强，艺术灵感迸发，注意倾听内心声音。",
        "白羊座": "充满活力与激情，勇于挑战，但需谨防冲动决策。",
        "金牛座": "稳健踏实的态度将助你实现目标，财运可能有所提升。",
        "双子座": "人际交往频繁，信息交流顺畅，可能有意外之喜。",
        "巨蟹座": "情感生活丰富多彩，家庭关系和谐，注意平衡工作与生活。",
        "狮子座": "领导才能得到发挥，自信心增强，注意倾听他人意见。",
        "处女座": "细节把控能力出众，工作效率提高，但需放松心情。",
        "天秤座": "人际关系和谐，可能遇到贵人相助，注意维护平衡。",
        "天蝎座": "洞察力增强，适合深入研究和探索，谨防过度敏感。",
        "射手座": "冒险精神高涨，可能有新的旅行或学习机会，保持乐观。",
        "摩羯座": "事业运势上升，努力将得到回报，注意劳逸结合。"
    };
    return predictions[zodiacSign] || "星座预测暂时获取。";
}

function getCrystalBallPrediction() {
    const predictions = [
        "水晶球中浮现出一片金光，预示着您即将迎来一个充满机遇的时期。",
        "球体中出现波澜，暗示您可能面临一些挑战，但这些都将成为您成长的契机。",
        "水晶球呈现出平静的蓝色，象征着您的内心将会找到平和与安宁。",
        "球中闪烁着星光，预示着您的才能将得到认可和赏识。",
        "水晶球中出现交织的线条，暗示您可能会遇到一个重要的人际关系。",
        "球体呈现出彩虹色彩，预示着多方面的好运即将降临。"
    ];
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function getPalmistryReading() {
    const readings = [
        "您的生命线长而清晰，预示着健康长寿。",
        "您的智慧线分叉，表明您具有多方面的才能和创造力。",
        "您的感情线深而连续，暗示着丰富而稳定的情感生活。",
        "您的事业线明显，预示着职业发展的潜力和成功。",
        "您的命运线与生命线紧密相连，表明您的人生将充满机遇和挑战。",
        "您的太阳线清晰可见，暗示着您将获得名声和认可。"
    ];
    return readings[Math.floor(Math.random() * readings.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const birthdate = document.getElementById('birthdate');
    const birthtimeHour = document.getElementById('birthtime-hour');
    const birthtimeMinute = document.getElementById('birthtime-minute');
    const fortuneForm = document.getElementById('fortuneForm');
    const cardContainer = document.getElementById('card-container');
    const resultContainer = document.getElementById('result');
    const card = document.querySelector('.card');
    const modal = document.getElementById('resultModal');
    const closeBtn = document.querySelector('.close');
    const minuteGroup = document.getElementById('minute-group');

    let hasRevealed = false;

    // 初始化日期选择器
    flatpickr(birthdate, {
        dateFormat: "Y-m-d",
        disableMobile: true
    });

    // 生成小时选项
    birthtimeHour.innerHTML = '<option value="">选择小时</option>';
    for (let i = 0; i < 24; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i.toString().padStart(2, '0')}时`;
        birthtimeHour.appendChild(option);
    }

    // 生成分钟选项
    birthtimeMinute.innerHTML = '<option value="">选择分钟</option>';
    for (let i = 0; i < 60; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i.toString().padStart(2, '0')}分`;
        birthtimeMinute.appendChild(option);
    }

    // 显示分钟选择
    birthtimeHour.addEventListener('change', function() {
        if (this.value !== '') {
            minuteGroup.classList.remove('hidden');
        } else {
            minuteGroup.classList.add('hidden');
            birthtimeMinute.value = ''; // 重置分钟选择
        }
    });

    // 表单提交事件
    fortuneForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (hasRevealed) {
            alert("天机已揭示，请刷新页面重新开始。");
            return;
        }
        
        hasRevealed = true;
        modal.style.display = 'block';
        card.classList.remove('flipped');
        resultContainer.classList.add('hidden');
        startRotation();
    });

    function startRotation() {
        const cardFront = document.querySelector('.card-front');
        const cardBack = document.querySelector('.card-back');
        const phrases = ['我自踏雪至山巅', '无人扶我青云志'];
        const centerPhrase = '逆天改命';
        
        cardFront.innerHTML = cardBack.innerHTML = `
            <div class="phrase-container">
                <div class="phrase left"></div>
                <div class="phrase center"></div>
                <div class="phrase right"></div>
            </div>
        `;

        const frontPhrases = cardFront.querySelectorAll('.phrase');
        const backPhrases = cardBack.querySelectorAll('.phrase');

        function showCharacter(element, phrase, index) {
            if (index < phrase.length) {
                element.textContent += phrase[index];
                setTimeout(() => showCharacter(element, phrase, index + 1), 100);
            } else if (element.classList.contains('center') && index === phrase.length) {
                setTimeout(rotateCard, 500);
            }
        }

        function showPhrases() {
            showCharacter(frontPhrases[0], phrases[0], 0);
            showCharacter(frontPhrases[2], phrases[1], 0);
            backPhrases[0].textContent = phrases[0];
            backPhrases[2].textContent = phrases[1];

            setTimeout(() => {
                showCharacter(frontPhrases[1], centerPhrase, 0);
                backPhrases[1].textContent = centerPhrase;
            }, Math.max(phrases[0].length, phrases[1].length) * 100 + 500);
        }

        function rotateCard() {
            let rotation = 0;
            let speed = 0.1; // 开始时更慢
            const maxSpeed = 50; // 最大速度更快
            const totalRotation = 1800; // 5 full rotations
            const duration = 8000; // 增加到8秒
            const startTime = Date.now();

            function rotate() {
                const currentTime = Date.now();
                const progress = (currentTime - startTime) / duration;

                if (progress < 1) {
                    rotation = easeInOutQuad(progress) * totalRotation;
                    speed = easeInQuint(progress) * maxSpeed;
                    card.style.transform = `rotateY(${rotation}deg)`;
                    card.style.filter = `blur(${Math.min(speed / 3, 15)}px)`;
                    requestAnimationFrame(rotate);
                } else {
                    card.style.transform = `rotateY(${totalRotation}deg)`;
                    card.style.filter = 'blur(0)';
                    setTimeout(showResult, 500);
                }
            }

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }

            function easeInQuint(t) {
                return t * t * t * t * t;
            }

            rotate();
        }

        showPhrases();
    }

    function showResult() {
        const nameValue = name.value;
        const birthdateValue = new Date(birthdate.value);
        const hour = parseInt(birthtimeHour.value) || 0;
        const minute = parseInt(birthtimeMinute.value) || 0;
        
        const bazi = calculateBaZi(birthdateValue, hour, minute);
        const yijing = interpretYijing(bazi);
        const tarot = drawTarotCard();
        const nameAnalysis = analyzeNameFengShui(nameValue);
        const zodiacSign = getZodiacSign(birthdateValue);
        const astrologyPrediction = getAstrologyPrediction(zodiacSign);
        const crystalBallPrediction = getCrystalBallPrediction();
        const fortune = generateDetailedFortune(nameValue, nameAnalysis, bazi, yijing, tarot, zodiacSign, astrologyPrediction, crystalBallPrediction);
        
        const resultHTML = `
            <div class="result-section name-analysis">
                <h3>姓名分析</h3>
                ${getNameAnalysisContent(nameValue, nameAnalysis)}
            </div>
            <div class="result-section bazi">
                <h3>八字解析</h3>
                <p>您的八字：${bazi.pillars.join(' ')}</p>
                <p>五行属性：${bazi.elements.join(', ')}</p>
                <p>${getBaziInterpretation(bazi)}</p>
            </div>
            <div class="result-section yijing">
                <h3>易经解读</h3>
                <p>${yijing.interpretation}</p>
            </div>
            <div class="result-section tarot">
                <h3>塔罗牌</h3>
                <p>${tarot.name}: ${tarot.meaning}</p>
            </div>
            <div class="result-section astrology">
                <h3>星座运势</h3>
                <p>${zodiacSign}: ${astrologyPrediction}</p>
            </div>
            <div class="result-section crystal-ball">
                <h3>水晶球预言</h3>
                <p>${crystalBallPrediction}</p>
            </div>
            <div class="result-section fortune">
                <h3>详细解析</h3>
                ${fortune}
            </div>
        `;
        
        resultContainer.innerHTML = resultHTML;
        
        setTimeout(() => {
            cardContainer.style.display = 'none';
            resultContainer.classList.remove('hidden');
            resultContainer.style.opacity = '1';
            
            resultContainer.scrollIntoView({ behavior: 'smooth' });

            const sections = document.querySelectorAll('.result-section');
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 500);
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function getNameAnalysisContent(name, nameAnalysis) {
        if (!name || !nameAnalysis) return '无法分析姓名';
        return `
        <p><strong>姓名：</strong>${name}</p>
        <p><strong>五行属性：</strong>${nameAnalysis.element || '未知'}</p>
        <p><strong>方位：</strong>${nameAnalysis.direction || '未知'}</p>
        <p><strong>幸运色：</strong>${nameAnalysis.color || '未知'}</p>
        <p><strong>总体运势：</strong>${nameAnalysis.luck || '未知'}</p>
        <p><strong>名字得分：</strong>${nameAnalysis.score || 0}分 - ${getNameScoreInterpretation(nameAnalysis.score || 0)}</p>
        `;
    }

    function getBaziInterpretation(bazi) {
        const elementStrengths = bazi.elements.map((element, index) => {
            if (element === '未知') return '未知';
            const strength = ['弱', '中', '强'][Math.floor(Math.random() * 3)]; // 简化的强度计
            return `${element}${strength}`;
        }).join('，');

        return `您的八字显示：${elementStrengths}。这表明您的生命中包含多元素的影响，每个元素都为您带来独特的特质和机遇。`;
    }

    function generateDetailedFortune(name, nameAnalysis, bazi, yijing, tarot, zodiacSign, astrologyPrediction, crystalBallPrediction) {
        const lifeAspects = ['事业', '财运', '姻缘', '健康'];
        const fortuneDetails = lifeAspects.map(aspect => {
            const score = Math.floor(Math.random() * 100) + 1;
            const description = getFortuneDescription(aspect, score, bazi, yijing, tarot);
            return `<p><strong>${aspect}（${score}分）：</strong>${description}</p>`;
        }).join('');

        return `
        ${fortuneDetails}
        <p><strong>命运解读：</strong>${getFateInterpretation(bazi, yijing, tarot)}</p>
        <p><strong>综合建议：</strong></p>
        <ul>
            <li>${getAdvice(bazi, yijing, tarot)}</li>
            <li>${getAdvice(bazi, yijing, tarot)}</li>
            <li>${getAdvice(bazi, yijing, tarot)}</li>
        </ul>
        `;
    }

    function calculateBaZi(birthdate, hour, minute) {
        // 实现八字计算逻辑
        // 这里使用简化版本
        const heavenlyStems = ['', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
        const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
        
        const year = birthdate.getFullYear();
        const month = birthdate.getMonth() + 1;
        const day = birthdate.getDate();
        
        const yearStem = heavenlyStems[(year - 4) % 10];
        const yearBranch = earthlyBranches[(year - 4) % 12];
        const monthStem = heavenlyStems[(year * 2 + month + 4) % 10];
        const monthBranch = earthlyBranches[month - 1];
        const dayStem = heavenlyStems[(Math.floor((year * 5 + year / 4 + month * 3 + day) / 3) + 4) % 10];
        const dayBranch = earthlyBranches[(day + 1) % 12];
        const hourStem = heavenlyStems[(dayStem.charCodeAt(0) - '甲'.charCodeAt(0) + hour) % 10];
        const hourBranch = earthlyBranches[Math.floor(hour / 2) % 12];
        
        return {
            pillars: [yearStem + yearBranch, monthStem + monthBranch, dayStem + dayBranch, hourStem + hourBranch],
            elements: [
                getElement(yearStem) || '未知',
                getElement(monthStem) || '未知',
                getElement(dayStem) || '未知',
                getElement(hourStem) || '未知'
            ]
        };
    }

    function getElement(character) {
        const elementMap = {
            '甲': '木', '乙': '木',
            '丙': '火', '丁': '火',
            '戊': '土', '己': '土',
            '庚': '金', '辛': '金',
            '壬': '水', '癸': '水',
            '子': '水', '丑': '土', '寅': '木', '卯': '木',
            '辰': '土', '巳': '火', '午': '火', '未': '土',
            '申': '金', '酉': '金', '戌': '土', '亥': '水'
        };
        return elementMap[character] || '未知';
    }

    function interpretYijing(bazi) {
        const hexagrams = [
            { name: '乾卦', meaning: '象征，代表强健、刚、创造、领导' },
            { name: '坤卦', meaning: '象征，代表柔顺、包容滋养、支持' },
            { name: '屯卦', meaning: '象征初始，代表开始、困难、潜力、需要耐心' },
            { name: '蒙卦', meaning: '象征蒙昧，代表启蒙、教育、成长、需要指导' },
            { name: '需卦', meaning: '象征等待，代表耐心、适时行动、准备、机遇' },
            { name: '讼卦', meaning: '象征争讼，代表冲突、辩论、需要调解、谨慎' },
            { name: '师卦', meaning: '象征军队，代表纪律、组、领导、团结' },
            { name: '比卦', meaning: '象征亲，代表合、和谐、交流、情' }
        ];
        
        const index = (bazi.pillars[0].charCodeAt(0) + bazi.pillars[1].charCodeAt(0) + 
                       bazi.pillars[2].charCodeAt(0) + bazi.pillars[3].charCodeAt(0)) % hexagrams.length;
        
        const dominantElement = ['木', '火', '土', '', '水'][bazi.elements.indexOf(Math.max(...bazi.elements))];
        
        return {
            hexagram: hexagrams[index],
            dominantElement: dominantElement,
            interpretation: `您的命盘对应${hexagrams[index].name}，${hexagrams[index].meaning}。
            您的五行中以${dominantElement}为主，这暗示着${getElementInterpretation(dominantElement)}。`
        };
    }

    function getElementInterpretation(element) {
        const interpretations = {
            '木': '您具有成长和适应的能力，富有创造力和理想主义精神',
            '火': '您热情洋溢，富有领导魅力，善于表达和激励他人',
            '土': '您稳重踏实，注重实际，具有很强的责任感和可靠性',
            '金': '您果断坚毅，追求完美，具有很强的执行力和判断力',
            '水': '您聪明灵活，善于沟通，具有很强的适应能力和洞察力'
        };
        return interpretations[element] || '无法解读该元素';
    }

    function drawTarotCard() {
        const tarotCards = [
            { name: '愚者', meaning: '新的开始、冒险、自由、无畏' },
            { name: '魔术师', meaning: '创造力、技能、意志力、自信' },
            { name: '女祭司', meaning: '直觉、神秘、内在知识、潜意识' },
            { name: '女皇', meaning: '丰饶、母性、创造力、自然和谐' },
            { name: '皇帝', meaning: '权威、领导力、结构、稳定' },
            { name: '教皇', meaning: '精神指引、传统、信仰、道德' },
            { name: '恋人', meaning: '爱情、和谐、关系、价值观' },
            { name: '战车', meaning: '胜利、意志力、自制、心' }
        ];
        return tarotCards[Math.floor(Math.random() * tarotCards.length)];
    }

    function calculateNameScore(name) {
        let score = 0;
        for (let i = 0; i < name.length; i++) {
            score += name.charCodeAt(i);
        }
        return score % 100 + 1; // 返回1-100之间的分数
    }

    function getNameScoreInterpretation(score) {
        if (score >= 90) return "您的名字蕴含强大的能量，预示着非凡的人生轨迹";
        if (score >= 80) return "您的名字寓意深远，暗示着美好的前程和潜在的成功";
        if (score >= 70) return "您的名字颇具特色，可能会给您带来独特的机遇和挑战";
        if (score >= 60) return "您的名字平衡而和谐，有助于您在人生旅途中保持稳定";
        return "您的名字简单朴实，彰显低调内敛的特质，可能助您在不经意间获得成功";
    }

    function getFateInterpretation(bazi, yijing, tarot) {
        const fateInterpretations = [
            "您的命格独特，暗示着不平凡的人生轨迹。在未来的岁月里，您可能会遇到许多挑战，但这些战恰恰是您成长和功的阶梯。保持放和积极的心态，勇于面对每一个机遇和挑战。",
            "您的八字显示出强烈的创造力和导潜质。在职业生涯中，您可能会在创新领域取得突破性的成就。但要注意平衡工作与生活，以确保全面的成功和幸福。",
            "您的命盘呈现出和谐与平衡的特质。这预示着您在人际关系方面将会有出色的表现。善用您的外交才能，无论是在职场还是个人生活中，都能够建立有价值的人脉网络。",
            "根据您的八字，您的一生可能会经历多次重大转折。这些转变虽然可能带来短暂的不适，但最终会引导您走向更好的方向。保持灵活性和适应能力将助您在变化中找到机遇。",
            "您的命格显示出强烈的学习欲望和智慧潜能。终身学习将是您成功的关键。不断充实自己，探索新的领域，您的知识和经验将成为您最有价值的资产。"
        ];
        
        return fateInterpretations[Math.floor(Math.random() * fateInterpretations.length)];
    }

    function getFortuneDescription(aspect, score, bazi, yijing, tarot) {
        const descriptions = {
            '事业': [
                '事业发展面临挑战，需要耐心和毅力',
                '事业稳步上升，有望取得突破',
                '事业蒸蒸日上，将迎来重大机遇'
            ],
            '财运': [
                '财运略显低迷，需谨慎理财',
                '财运平稳，可适度投资',
                '财运亨通，有意外之财'
            ],
            '姻缘': [
                '感情生活略显波折，需要用心经营',
                '桃花运旺盛，易遇良缘',
                '姻缘天成，将遇到命中注定的人'
            ],
            '健康': [
                '身体状况良好，保持规律作息',
                '精力充沛，适合开始新的运动计划'
            ]
        };
        const index = Math.floor(score / 34);
        return descriptions[aspect][index];
    }

    function getAdvice(bazi, yijing, tarot) {
        const advices = [
            "顺应天时，把握当下机遇",
            "培养内在修养，提升个人魅力",
            "保持谦逊态度，广结人缘",
            "关注细节，精益求精",
            "勇于尝试新事物，拓展视野",
            "善用自身优势，发挥潜能",
            "学会取舍，专注于重要目标",
            "保持耐心，厚积薄发",
            "与贵人多交流，寻求指导",
            "注重身心平衡，保持乐观积极"
        ];
        return advices[Math.floor(Math.random() * advices.length)];
    }

    function analyzeNameFengShui(name) {
        const elements = ['木', '火', '土', '金', '水'];
        const directions = ['东', '南', '中', '西', '北'];
        const colors = ['绿', '红', '黄', '白', '黑'];
        
        let nameElement = elements[name.length % 5];
        let nameDirection = directions[name.charCodeAt(0) % 5];
        let nameColor = colors[name.charCodeAt(name.length - 1) % 5];
        
        let score = calculateNameScore(name);
        let luck = (score % 3 === 0) ? '吉' : ((score % 3 === 1) ? '中' : '凶');
        
        return {
            element: nameElement,
            direction: nameDirection,
            color: nameColor,
            score: score,
            luck: luck
        };
    }
});