const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body')
const videoWrapperLandingpage = $('.video-wrapper')
const exerciseBtn = $('[exercse-btn]')

const App = (() => {
    const packages = [
        {
            name: 'Gói đặc biệt',
            desc: [
                ['2 năm học', 'check'],
                ['Thêm 6 tháng học ', 'check'],
                ['Khóa 10 ngày phát âm', 'check'],
                ['Khóa lấy lại căn bản', 'check'],
            ],
            bestseller: true,
            priceOld: '5,190,000 VNĐ',
            priceNew: '1,290,000 VNĐ',
        },
        {
            name: 'Gói 2 năm',
            desc: [
                ['2 năm học', 'check'],
                ['Thêm 6 tháng học ', 'cross'],
                ['Khóa 10 ngày phát âm', 'cross'],
                ['Khóa lấy lại căn bản', 'cross'],
            ],
            bestseller: false,
            priceOld: '5,190,000 VNĐ',
            priceNew: '1,290,000 VNĐ',
        },
        {
            name: 'Gói 1 năm tặng 3 tháng',
            desc: [
                ['1 năm học', 'check'],
                ['Thêm 3 tháng học ', 'check'],
                ['Khóa 10 ngày phát âm', 'cross'],
                ['Khóa lấy lại căn bản', 'cross'],
            ],
            bestseller: false,
            priceOld: '1,290,000 VNĐ',
            priceNew: '890,000 VNĐ',
        },
    ]

    function handleEvent() {
        videoWrapperLandingpage && videoWrapperLandingpage.addEventListener('click', () => {
            openModal(openVideo())
        })

        exerciseBtn && exerciseBtn.addEventListener('click', () => {
            openModal(openExercise())
        })
    }

    function closeModal(modal) {
        body.classList.remove('stop-scrolling')
        body.removeChild(modal)
        delete modal
    }

    function openModal(html) {

        const modal = document.createElement('div')
        modal.classList.add('landingpage-modal')
        modal.setAttribute('role', 'dialog')



        modal.onclick = (e) => {
            html.handleEvent(e, modal)
        }

        body.appendChild(modal)
        body.classList.add('stop-scrolling')

        modal.innerHTML = `
        <div class="modal-content-wrapper" role="document">
            <div class="modal-content">
                <div
                    class="close-btn">
                    <i class="fa-solid fa-xmark"></i></div>
                <!-- modal children -->
                ${html.html}
            </div>
        </div>
        `

        return modal
    }

    function openVideo() {

        const packageItem = packages.map(package => {
            const packageDesc = package['desc'].map(item => {
                return `
                <li class="package-desc__item">
                    <div class="package-desc__icon"><img src="./img/list-${item[1]}.svg" alt=""></div>
                    <p class="package-desc__content">${item[0]}</p>
                </li>
                `
            })
            return `
            <div class="package-item">
                <h2>
                    ${package.name}
                    ${package.bestseller ? '<span>Bestseller</span>' : ''}
                </h2>
                <div class="package-desc">
                    <p class="desc-text">Gồm:</p>
                    <ul class="package-desc__list">
                        ${packageDesc.join('')}
                    </ul>
                    <p class="package-price"><span>${package.priceOld}</span> ${package.priceNew}</p>
                    <button class="btn ${!package.bestseller ? 'btn-secondary' : ''}">Thanh toán</button>
                </div>
            </div>
            `
        })

        const packageSection = () => {

            const countdown = `
                    <div class="countdown__heading">Ưu đãi kết thúc sau:</div>
                    <div class="countdown__clock-wrapper">
                        <div class="countdown__number-wrapper">
                            <span class="countdown-number">02</span>
                            <span class="countdown-prefix">Ngày</span>
                        </div>
                        <div class="countdown__number-wrapper">
                            <span class="countdown-number">12</span>
                            <span class="countdown-prefix">Giờ</span>
                        </div>
                        <div class="countdown__number-wrapper">
                            <span class="countdown-number">20</span>
                            <span class="countdown-prefix">Phút</span>
                        </div>
                        <div class="countdown__number-wrapper">
                            <span class="countdown-number">11</span>
                            <span class="countdown-prefix">Giây</span>
                        </div>
                    </div>

            `
            return `
            <div class="price-list">
                    <h2 class="fs-sec-heading fw-bold text-center">Mức giá ưu đãi dành riêng cho bạn
                        </br>Chỉ 1 lần duy nhất</h2>
                    <!-- countdown -->
                    <div class="countdown">
                        <div class="countdown__heading">Ưu đãi kết thúc sau:</div>
                        <div class="countdown__clock-wrapper">
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">02</span>
                                <span class="countdown-prefix">Ngày</span>
                            </div>
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">12</span>
                                <span class="countdown-prefix">Giờ</span>
                            </div>
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">20</span>
                                <span class="countdown-prefix">Phút</span>
                            </div>
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">11</span>
                                <span class="countdown-prefix">Giây</span>
                            </div>
                        </div>
                    </div>
                    <p class="choose-package-cta">Chọn gói thanh toán</p>
                    <div class="package-wrapper">
                        ${packageItem.join('')}
                    </div>
                </div>
                <div class="support text-center">
                    <p class="text-red fw-bold fs-body">Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
                    <div class="support-phone-wrapper">
                        <div class="support-icon">
                            <svg class="icon">
                                <use xlink:href="./img/support-icon.svg#support-icon"></use>
                                </svg>
                        </div>
                        <a class="support-phone-number" href="tel:+84973979109">097 397 9109</a>
                    </div>
                </div>
                <div class="request-support">
                    <p class="request-support__desc">
                        Hoặc gửi yêu cầu đến nhân viên hỗ trợ
                    </p>
                    <a href="#">Bấm gửi yêu cầu</a>
                </div>
            </div>
        `
        }

        const handleEvent = (e, modal) => {
            if (e.target.closest('.close-btn')) {
                closeModal(modal)
            }

            if (e.target.closest('#login-btn')) {
                const element = e.target

                element.closest('.modal-body').innerHTML = `<div class="loader"></div>`

                const modalBody = $('.loader').closest('.modal-body')

                const html = packageSection()

                setTimeout(() => {
                    modalBody.innerHTML = html
                    console.log('1');

                }, 500)

            }
        }

        const html = `
           <div class="modal-video">
               <div class="video-wrapper">
                   <video
                       video-controler
                       autoplay
                       controls
                       poster="./img/video-hero-thumbnail.png"
                       src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
                       type="video/mp4"
                   ></video>
               </div>
               <div class="modal-body">
                   <div class="ask-for-login">
                        <h3 class="fs-sec-heading fw-semi-bold">Đăng nhập để xem mức giá đặc biệt của của bạn!</h3>
                        <button id="login-btn" class="btn" >Đăng nhập và nhận ưu đãi</button>
                        <div class="support text-center">
                            <p class="text-red fw-bold fs-body">Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
                            <div class="support-phone-wrapper">
                                <div class="support-icon">
                                    <svg class="icon">
                                        <use xlink:href="./img/support-icon.svg#support-icon"></use>
                                    </svg>
                                </div>
                                <a class="support-phone-number" href="tel:+84973979109">097 397 9109</a>
                            </div>
                        </div>
                    </div>
                </div>

           </div>
           `
        return {
            html,
            packageSection,
            handleEvent
        }
    }

    function openExercise() {

        const rightSound = new Audio('./audio/bell-right.mp3')
        const wrongSound = new Audio('./audio/bell-wrong.mp3')

        const exercisePackage = [
            {
                questionName: 'Tôi đi học bằng xe đạp mỗi ngày',
                answer: 'I go to school by bike every day'
                // I go to school by bike every day
            },
            {
                questionName: 'Có gì đó trong mắt của tôi',
                answer: "There's something in my eyes",
            },
            {
                questionName: 'Bạn cảm thấy thế nào?',
                answer: "How are you feeling?",
            },
            {
                questionName: 'Bạn ổn chứ?',
                answer: "Are you alright?",
            },
            {
                questionName: 'Tôi ổn, cảm ơn',
                answer: "I am fine, thanks",
            },
        ]

        let html = `
            <div class="lp-exercise">
                <div class="exercise-intro">
                    <div class="exercise-intro__image">
                        <img src="./img/exercise-intro-img.png" alt="do you speak english?">
                    </div>
                    <h1 class="exercise-intro__title">Khoan đã</h1>
                    <p class="exercise-intro__desc">Hãy thử nói vài câu để kiểm tra trình độ của bạn trước nhé?
                    </p>
                    <p class="exercise-intro__cta">Bạn đã sẵn sàng chưa?</p>
                    <button exercise-start-btn class="btn">Bắt đầu</button>
                </div>
            </div>
        `

        let currentQuestion = 0

        function createExercise() {
            const exerciseWrapper = document.createElement('div')
            exerciseWrapper.classList.add('exercise-question')

            const html = `
                <div class="question-number">
                    Câu: ${currentQuestion + 1}/${exercisePackage.length}
                </div>
                <div class="question-title">${exercisePackage[currentQuestion].questionName}</div>
                <div class="question-input">
                    <input type="text"placeholder="Dịch câu trên sang tiếng Anh..." rows="4">
                    <p class="question-input__cta">Gõ câu trả lời của bạn vào ô trên và bấm Nộp bài!</p>
                </div>
                <div class="question-btn-wrapper">
                    <button class="btn submit-anwswer">Nộp bài</button>
                    <button class="btn btn-no-bg ">Tôi muốn bỏ qua và học thử ngay</button>
                </div>
            `

            exerciseWrapper.innerHTML = html

            const result = (isRight) => {

                const html = `<div class="question-result">
                                <div class="question-result__desc">Đáp án:</div>
                                <div class="question-result__answer">${exercisePackage[currentQuestion].answer}</div>
                            </div>
                    `
                return `
                    <p class="question-input__check-result">${isRight ? 'Đúng rồi! Hay quá!' : ''}</p>
                    ${!isRight ? html : ''}
                    <button class="btn submit-anwswer">Tiếp theo</button>
                    <button class="btn btn-no-bg ">Tôi muốn bỏ qua và học thử ngay</button>
            `
            }

            return {
                result,
                exerciseWrapper
            }
        }
        const { result, exerciseWrapper } = createExercise()

        function showFinishedScreen(element) {
            const elementWrapper = element.closest('.lp-exercise')
            elementWrapper.classList = 'lp-exercise'

            elementHtmlContent = `
                <div class="exercise-finished">
                    <p class="exercise-finished__desc">Bạn trả lời đúng bao nhiêu câu?
                    </p>
                    <p class="exercise-finished__desc">Nếu các câu đơn giản này bạn chưa nói chính xác được, thì bạn nên xem 1 lần hết video này!
                    </p>

                    <div class="video-wrapper">
                        <video
                            video-controler
                            controls
                            poster="/img/video-hero-thumbnail.png"
                            src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
                            type="video/mp4"
                        ></video>
                    </div>
                    <button class="btn">Không, tôi chỉ muốn học thử ngay!</button>
                </div>
            `

            elementWrapper.innerHTML = elementHtmlContent
        }

        function resetQuestion(element) {
            element.closest('.lp-exercise').classList.remove('correct')
            element.closest('.lp-exercise').classList.remove('incorrect')
            while (element.firstChild) {
                element.removeChild(element.firstChild)
            }
        }

        function checkResult(e, exerciseWrapper) {
            e.preventDefault()
            let userInputValue = e.target.value.replace(/,|\.|\?|\!/g, '')
            rightAnswer = exercisePackage[currentQuestion].answer.replace(/,|\.|-/g, '')
            const isRight = userInputValue.toUpperCase() === rightAnswer.toUpperCase()

            const showHtmlResult = exerciseWrapper.querySelector('.question-btn-wrapper')
            showHtmlResult.innerHTML = result(isRight)

            const nextBtn = showHtmlResult.querySelector('.submit-anwswer')

            function loadNextQuestion(e) {
                if (currentQuestion < exercisePackage.length - 1) {
                    currentQuestion++
                    showNextQuestion(e.target)
                } else {
                    showFinishedScreen(e.target)
                }
            }

            nextBtn.addEventListener('click', loadNextQuestion)

            e.target.style.borderColor = 'currentColor'
            e.target.disabled = true;

            if (isRight) {
                rightSound.play()
                exerciseWrapper.closest('.lp-exercise').classList.add('correct')
                exerciseWrapper.closest('.lp-exercise').classList.remove('incorrect')


            } else {
                wrongSound.play()
                exerciseWrapper.closest('.lp-exercise').classList.remove('correct')
                exerciseWrapper.closest('.lp-exercise').classList.add('incorrect')

            }
        }


        function showNextQuestion(element) {
            const { result, exerciseWrapper } = createExercise()

            const exerciseElement = element.closest('.lp-exercise')
            resetQuestion(exerciseElement)
            exerciseElement.appendChild(exerciseWrapper)

            const userInput = exerciseWrapper.querySelector('input')
            userInput.focus()

            const checkResultBtn = exerciseWrapper.querySelector('.submit-anwswer')
            checkResultBtn.style.opacity = 0.5

            userInput.addEventListener('keyup', (e) => {
                if (!userInput.value) return

                checkResultBtn.addEventListener('click', () => {
                    checkResult(e, exerciseWrapper)
                })
                checkResultBtn.style.opacity = 1
                if (e.key === 'Enter') {
                    checkResult(e, exerciseWrapper)
                }
            })

        }

        const handleEvent = (e, modal) => {
            if (e.target.closest('.close-btn')) {
                closeModal(modal)
            }

            if (e.target.closest('[exercise-start-btn]')) {
                const element = e.target

                showNextQuestion(element)
            }

        }

        return {
            html,
            handleEvent
        }
    }

    function start() {
        handleEvent()
    }

    return start()
})()