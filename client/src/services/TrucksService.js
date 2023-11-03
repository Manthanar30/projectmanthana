import Api from '@/services/Api'

export default {
    index() {
        return Api().get('trucks')
    },
    show(truckId){
        return Api().get('truck/'+truckId)
    },
    post(truck){
        return Api().post('truck', truck)
    },
    put(truck){
        return Api().put('truck/'+truck.id, truck)
    },
    delete(truck){
        return Api().delete('truck/'+truck.id, truck)
    },
}