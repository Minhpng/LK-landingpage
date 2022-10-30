const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const videoWrapperLandingpage = $('.video-wrapper')

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

function App() {

    const body = $('body')

    const openModal = (modalType) => {

        const closeModal = () => {
            body.classList.remove('stop-scrolling')
            body.removeChild(modal)
        }

        const modal = document.createElement('div')
        modal.classList.add('landingpage-modal')
        modal.setAttribute('role', 'dialog')

        modal.onclick = (e) => {

        }

        body.appendChild(modal)
        body.classList.add('stop-scrolling')

        const openVideo = (modal) => {
            const packageItem = packages.map(package => {
                const packageDesc = package['desc'].map(item => {
                    return `
                    <li class="package-desc__item">
                        <div class="package-desc__icon"><img src="./img/list-${item[1]}.svg" alt=""></div>
                        <p class="package-desc__content">${item[0]}</p>
                    </li>
                    `
                })
                console.log(package.name);
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

            modal.onclick = (e) => {
                if (e.target.closest('.close-btn')) {
                    closeModal()
                }

                if (e.target.closest('#login-btn')) {
                    const element = e.target

                    element.closest('.modal-body').innerHTML = packageSection()
                }
            }

            const packageSection = () => {
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



            const html = `
               <div class="modal-video">
                   <div class="video-wrapper">
                       <video
                           video-controler
                           autoplay
                           controls
                           poster="/img/video-hero-thumbnail.png"
                           src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
                           type="video/mp4"
                       ></video>
                   </div>
                   <div class="modal-body">
                       <div class="ask-for-login">
                            <h3 class="fs-sec-heading fw-semi-bold">Đăng nhập để xem mức giá đặc biệt của của bạn!</h3>
                            <button id="login-btn" class="btn">Đăng nhập và nhận ưu đãi</button>
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

            modal.innerHTML = `
            <div class="modal-content-wrapper" role="document">
                <div class="modal-content">
                    <div
                        class="close-btn">
                        <i class="fa-solid fa-xmark"></i></div>
                    <!-- modal children -->
                    ${html}
                </div>
            </div>
            `
        }




        if (modalType === 'video') {
            openVideo(modal)
        }
    }

    videoWrapperLandingpage.addEventListener('click', () => {
        openModal('video')
    })
}

App()
