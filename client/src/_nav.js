export default {
  items: [
    {
      title: true,
      name: 'SEARCH',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Search For Doggy Sitter',
      url: '/search/doggysitter',
      icon: 'cui-magnifying-glass',
    },
    {
      name: 'Search For Dogs',
      url: '/search/dogs',
      icon: 'cui-magnifying-glass',
    }
  ],
};
