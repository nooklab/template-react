/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */

// import Modal from 'bootstrap/js/dist/modal'

function OpenModal() {
    // const myModal = new Modal(document.getElementById('alertModalContainer'), {
    //     keyboard: false
    // })
    // myModal.show()
}

export const AlertProvider = {
    alert: (title: string, message: string | any[], size?: string, onClose?) => {
        AlertProvider.setCurrent({
            title: title,
            message,
            close: '닫기',
            onClose,
            icon: null,
        })
        // OpenModal()
        AlertProvider.setShow(true)
    },
    notify: (title: string, message: string | any[], size?: string, onClose?) => {
        AlertProvider.setCurrent({
            title: title,
            message,
            close: '닫기',
            onClose,
            icon: 'bi-check-circle-fill color-primary',
        })
        // OpenModal()
        AlertProvider.setShow(true)
    },
    confirm: (title: string, message: string | any[], size?: string, onClose?) => {
        AlertProvider.setCurrent({
            title: title,
            message,
            close: '취소',
            ok: '확인',
            onClose,
            icon: 'bi-check-circle-fill color-primary',
        })
        AlertProvider.setShow(true)
    },
    error: (message: string, code?, size?: number, onClose?) => {
        AlertProvider.setCurrent({
            title: '오류',
            message,
            close: '닫기',
            onClose,
            icon: 'bi-x-circle-fill',
        })
        AlertProvider.setShow(true)
    },
    icon: null,
    setCurrent: null,
    setShow: null,
}
