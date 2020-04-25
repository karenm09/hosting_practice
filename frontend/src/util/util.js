export const getAPI = () => {
   if(window.location.hostname === "localhost") {
      return "http://localhost:3001"
   } else {
      return "https://karenm09-apr2020.herokuapp.com/"
   }
}