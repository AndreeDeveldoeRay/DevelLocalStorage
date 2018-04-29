/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-11T14:26:37+02:00
 * @Email:  me@andreeray.se
 * @Filename: index.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-19T12:54:52+02:00
 */



 let DevelLocalStorage = {
     /**
      * Takes an array and transforms it to a string for localStorage
      * and stores is as 'store'
      * @param {Array} data
      */
     set: function(store, data) {
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
     get: function(store) {
         var stringArray = localStorage.getItem(store)
         var array = []
         try {
             array = JSON.parse(stringArray)
         } catch (e) {
             console.log(e)
         }
         return Array.isArray(array) ? array : []
     }

 }

 export default localStorage
