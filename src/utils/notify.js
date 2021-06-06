import { Notify } from 'quasar'

export function notify(msg, type) {
    Notify.create({
        type: type,
        message: msg,
        position: 'top'
    })
}
