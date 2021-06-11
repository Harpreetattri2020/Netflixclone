module.exports = {
  mode:"jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme=>({
        'login':"url('https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins:[require("tailwind-scrollbar-hide"),
  require('@tailwindcss/line-clamp')],
           

}
