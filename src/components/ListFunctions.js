import axios from 'axios'

export const getList = () => {
    return axios
        .get('api/tasks', {
            headers: { 'Content-type': 'application/json' }
        })
        .then(res => {
            var data = []
            Object.keys(res.data).forEach(function (key) {
                var val = res.data[key]
                data.push([val.first_name, val._id, val.comment])
            })
            console.log(data)
            return data
        })
}

export const getmenuList = () => {
    return axios
        .get('api/menulist', {
            headers: { 'Content-type': 'application/json' }
        })
        .then(res => {
            var data = []
            Object.keys(res.data).forEach(function (key) {
                var val = res.data[key]
                data.push([val.dishName, val._id, val.discription, val.ingredients, val.price])
            })
            console.log(data)
            return data
        })
}


export const cheflist = () => {
    return axios
        .get('api/cheflist', {
            headers: { 'Content-type': 'application/json' }
        })
        .then(res => {
            var data = []
            Object.keys(res.data).forEach(function (key) {
                var val = res.data[key]
                data.push([val.first_name, val._id, val.last_name, val.email])
            })
            console.log(data)
            return data
        })
}


export const addToList = term => {
    return axios
        .post(
            'api/task',
            {
                title: term
            },
            {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            console.log(response)
        })
}

export const deleteItem = term => {
    axios
        .delete(`api/task/${term}`, {
            headers: { 'Content-type': 'application/json' }
        })
        .then((response) => {
            console.log(response)
        })
        .catch((response) => {
            console.log(response)
        })
}

export const updateItem = (term, id) => {
    return axios
        .put(`api/task/${id}`, {
            title: term
        }, {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            console.log(response)
        })
}

export const getdishid = (id) => {
    console.log(id)
    return axios
        .get(`api/getdishid/${id}`, {
                headers: { 'Content-type': 'application/json' }
        })
        .then((response) => {
            console.log(response)
        })
}

