// import axios from 'axios';

// export class PixabayFetchObj{
//     constructor(base_url, key) {
//         this.base_url = base_url;
//         this.key = key;
//     }
//     // создаем метод
//     searchPhotos(searchQuery, searchPage, searchPerPage) {
//         axios.defaults.baseURL = this.base_url;
//         axios.defaults.headers.common.key = this.key;        

//         let endPoint = `search`
//         let params = `?key=${key}&q=${searchQuery}&page=${searchPage}&per_page=${searchPerPage}&image_type=photo&orientation=horizontalv`;
//         let url = endPoint + params;
//         axios.get(url)
//             .then((resalt) => { console.log(resalt) })
//             .catch((error) => { console.log(error) });
//         // не все параметры как в домашке
//     }
// }

// export function PixabayFetchFn() {
//     const base_url = `https://pixabay.com/api/`;
//     const key = `?21301375-7d22153b76338a293f3dc129f`;

//     axios.defaults.baseURL = base_url;

//     const searchPhotos = (searchQuery, searchPage, searchPerPage) => {
//         axios.defaults.baseURL = this.base_url;
//         axios.defaults.headers.common.key = this.key;        

//         let url = `?key=${key}&q=${searchQuery}&page=${searchPage}&per_page=${searchPerPage}&image_type=photo&orientation=horizontalv`;
//         axios.get(url)
//             .then((resalt) => { console.log(resalt) })
//             .catch((error) => { console.log(error) });       
//     }
// }