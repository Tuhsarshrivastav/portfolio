import Reactstore from "../assets/projects_images/mqdefault.jpg";
import ReactRedux from "../assets/projects_images/React-Redux.jpg";
import tinder from "../assets/projects_images/tinder2.jpg";
import blog from "../assets/projects_images/blog.png";
import Pizza from "../assets/projects_images/pizza.jpg";
import microsoft from "../assets/projects_images/microsoft.jpg";
import instagram1 from "../assets/projects_images/insta2.jpg";
import instagram2 from "../assets/projects_images/insta3.jpg";
import fbmessage from "../assets/projects_images/fbmessage.png";
import memories from "../assets/projects_images/memories.jpg";
import books from "../assets/projects_images/book.jpg";
import Amazon from "../assets/projects_images/Amazon-Clone.jpg";
import Hulu from "../assets/projects_images/Hulu.jpg";
import Facebook from "../assets/projects_images/facebook.png";
import World from "../assets/projects_images/World-Rank.jpg";
import News from "../assets/projects_images/news.jpg";
import Crypto from "../assets/projects_images/crypto.jpg";
import node from "../assets/projects_images/node.jpg";
import shop from "../assets/projects_images/shopit.jpg";
import whatsapp from "../assets/projects_images/whatsapp.jpg";
import tesla from "../assets/projects_images/tesla.jpeg";
import coinbase from "../assets/projects_images/coinbase.jpg";
import youtube from "../assets/projects_images/youtube.webp";
import signal from "../assets/projects_images/signal.webp";
import portfolio from "../assets/projects_images/portfolio.jpg";
import slack from "../assets/projects_images/slack.png";
import shopping from "../assets/projects_images/shopping.jpg";
import flipkart from "../assets/projects_images/flipkart.jpg";
const data_projects = [
  {
    name: "Slack-Clone",
    image: slack,
    deployed_url: "https://whispering-escarpment-96376.herokuapp.com/",
    github_url: "https://github.com/Tuhsarshrivastav/Mern-slack-clone",
    category: ["mern-stack"],
  },
  {
    name: "Shopping-App",
    image: shopping,
    deployed_url: "https://shpping-app.herokuapp.com/login",
    github_url: "https://github.com/Tuhsarshrivastav/MERN_Ecommerce",
    category: ["mern-stack"],
  },
  {
    name: "Shop-iT",
    image: shop,
    deployed_url: "https://mern-shop1.herokuapp.com/",
    github_url: "https://github.com/Tuhsarshrivastav/Mern-Shop-app",
    category: ["mern-stack"],
  },

  {
    name: "Blog-App",
    image: blog,
    deployed_url: "https://mern-blog-app1.herokuapp.com/",
    github_url: "https://github.com/Tuhsarshrivastav/MERN-Blog",
    category: ["mern-stack"],
  },
  {
    name: "Memories-App",
    image: memories,
    deployed_url: "https://mern-memories-app1.herokuapp.com/",
    github_url: "https://github.com/Tuhsarshrivastav/MERN-Memories-App",
    category: ["mern-stack"],
  },
  {
    name: "book-App",
    image: books,
    deployed_url: "https://mern-book-app1.herokuapp.com/",
    github_url: "https://github.com/Tuhsarshrivastav/MERN-Memories-App",
    category: ["mern-stack"],
  },
  {
    name: "Instagram",
    image: instagram1,
    deployed_url: "https://mern-instagram-clone1.herokuapp.com/login",
    github_url: "https://github.com/Tuhsarshrivastav/MERN_Instagram_clone",
    category: ["mern-stack"],
  },
  {
    name: "Flipkart-Clone",
    image: flipkart,
    deployed_url: "https://flipkart-clone1.herokuapp.com/",
    github_url: "https://github.com/Tuhsarshrivastav/Mern-flipkart-clone",
    category: ["mern-stack"],
  },
  {
    name: "Blog",
    image: node,
    deployed_url: "https://nodejs-blog-app1.herokuapp.com/",
    github_url: "https://github.com/Tuhsarshrivastav/Nodejs-blog-app",
    category: ["node.js"],
  },
  {
    name: "Amazon-Clone",
    image: Amazon,
    deployed_url: "https://amazon-clone2-0-eight.vercel.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Amazon-Clone2.0",
    category: ["nextjs"],
  },
  {
    name: "Hulu-Clone",
    image: Hulu,
    deployed_url: "https://hulu-clone-2-ten.vercel.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Hulu-Clone-2",
    category: ["nextjs"],
  },
  {
    name: "Facebook-Clone",
    image: Facebook,
    deployed_url: "https://facebook-clone-teal.vercel.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Facebook-clone",
    category: ["nextjs"],
  },
  {
    name: "Worlds-Rank",
    image: World,
    deployed_url: "https://worlds-rank.vercel.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Worlds-Rank",
    category: ["nextjs"],
  },
  {
    name: "News-App",
    image: News,
    deployed_url: "https://news-app-orpin.vercel.app/",
    github_url: "https://github.com/Tuhsarshrivastav/News-App",
    category: ["nextjs"],
  },
  {
    name: "Crypto-App",
    image: Crypto,
    deployed_url: "https://crypto-app-wine.vercel.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Crypto-App",
    category: ["nextjs"],
  },
  {
    name: "Portfolio",
    image: portfolio,
    deployed_url: "https://react-portfolio-project1.netlify.app/",
    github_url: "https://github.com/Tuhsarshrivastav/React-Portfolio",
    category: ["react.js"],
  },
  {
    name: "Ecommerce2.0",
    image: ReactRedux,
    deployed_url: "https://react-redux-ecommerce-c7681.web.app/",
    github_url: "https://github.com/Tuhsarshrivastav/React-redux-ecommerce",
    category: ["react.js"],
  },

  {
    name: "Ecommerce",
    image: Reactstore,
    deployed_url: "https://react-store-5f33b.web.app/",
    github_url: "https://github.com/Tuhsarshrivastav/react-store",
    category: ["react.js"],
  },
  {
    name: "Tinder-Clone",
    image: tinder,
    deployed_url: "https://tinder-clone-35d25.web.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Tinder-clone",
    category: ["react.js"],
  },

  {
    name: "Instgaram-Clone",
    image: instagram2,
    deployed_url: "https://instagram-clone-b7110.web.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Instagram-clone-2.0",
    category: ["react.js"],
  },
  {
    name: "Coinbase-Clone",
    image: coinbase,
    deployed_url:
      "https://github.com/Tuhsarshrivastav/React-Native-Coinbase_Clone",
    github_url:
      "https://github.com/Tuhsarshrivastav/React-Native-Coinbase_Clone",
    category: ["react-native"],
  },
  {
    name: "Whatsapp-UI",
    image: whatsapp,
    deployed_url:
      "https://github.com/Tuhsarshrivastav/React-Native-Whatsapp-Ui-Clone",
    github_url:
      "https://github.com/Tuhsarshrivastav/React-Native-Whatsapp-Ui-Clone",
    category: ["react-native"],
  },
  {
    name: "Tesla-Clone",
    image: tesla,
    deployed_url:
      "https://github.com/Tuhsarshrivastav/React-Native-Tesla-CLone",
    github_url: "https://github.com/Tuhsarshrivastav/React-Native-Tesla-CLone",
    category: ["react-native"],
  },
  {
    name: "Youtube-Clone",
    image: youtube,
    deployed_url:
      "https://github.com/Tuhsarshrivastav/React-native-Youtube-clone",
    github_url:
      "https://github.com/Tuhsarshrivastav/React-native-Youtube-clone",
    category: ["react-native"],
  },
  {
    name: "Signal-Clone",
    image: signal,
    deployed_url:
      "https://github.com/Tuhsarshrivastav/React-native-Signal-Clone",
    github_url: "https://github.com/Tuhsarshrivastav/React-native-Signal-Clone",
    category: ["react-native"],
  },
  {
    name: "Pizza-Ui",
    image: Pizza,
    deployed_url: "https://pizza-ui.netlify.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Pizza-ui",
    category: ["design"],
  },
  {
    name: "Microsoft-Ui",
    image: microsoft,
    deployed_url: "https://microsoft-ui-clone.netlify.app/",
    github_url: "https://github.com/Tuhsarshrivastav/Microsoft-Ui-Clone",
    category: ["design"],
  },
  {
    name: "Messenger-Clone",
    image: fbmessage,
    deployed_url: "https://fb-messenger-clone-6b6f2.web.app/",
    github_url: "https://github.com/Tuhsarshrivastav/fb-messenger",
    category: ["react.js"],
  },
];

export default data_projects;
