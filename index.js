/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-11T14:26:37+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T12:54:52+02:00
 */



let localStorage = {
     /**
      * Takes an array and transforms it to a string for localStorage
      * and stores is as 'store'
      * @param {Array} data
      */
     set: function (store, data) {
         if (Array.isArray(data)) {
             localStorage.setItem(store, JSON.stringify(data))
             return data
         }
     },
     /**
      * Gets the 'store in localStorage and parses it back to array (JSON)
      * @return {Array} returns the store as an array if it exist otherwise
      * returns an empy array
      */
     get: function (store) {
         var stringArray = localStorage.getItem(store)
         var array = []
         try { array = JSON.parse(stringArray) } catch (e) {}
         return Array.isArray(array) ? array : []
     }
     //
    // filter: function (store, query, callback) {
    //     // TODO : filter function and use callback pattern
    //     // if (response) callback(undefined, response.response)
    //     // else callback('That command does not exist! To list basic commands execute <b>commands</b> (or <b>cmd</b>) in the cmd field below.')
    // }
 }
export default localStorage

 // filterTodos: function (todos, showCompleted, search) {
 //
 //     var filteredTodos = todos.filter((todo) => {
 //         return !todo.completed || showCompleted
 //     })
 //
 //     filteredTodos = filteredTodos.filter((todo) => {
 //         var text = todo.text.toLowerCase()
 //         return search.length === 0 || todo.text.indexOf(search) > - 1
 //     })
 //
 //     filteredTodos.sort((a,b) => {
 //         if (!a.completed && b.completed) return - 1
 //         else if (a.completed && !b.completed) return 1
 //         else return 0
 //     })
 //
 //     return filteredTodos
 // }
