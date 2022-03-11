import React from "react";

import { Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Top from "./Components/Top";
import ScrollToTop from "./ScrollToTop";
import axios from "axios";
// import Transition from "./Components/Transition";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loader from "./Components/Loader";
// import Cityview from "./Components/cityView";
// import ContactForm from "./Components/ContactForm";
// import ProjectSec from "./Components/ProjectSec";

const Transition = React.lazy(() => import("./Components/Transition"));
const CityView = React.lazy(() => import("./Components/cityView"));
const Footer = React.lazy(() => import("./Components/Footer"));

class App extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      show: "",
      mobile: "",
      offsetY: 0,
      greetings: "Welcome",
      photos: [],
      videos: [],
      navToggle: false,
      showNavBtn: false,
      author: ``,
      // position: { x: 0, y: 0 },
      pexelQuery: "",
      youtubeQ: "",
      youtubeSrc: "",
      youtubeId: "",
      youtubeChannel: "",
      youtubeTitle: "",
    };
    this.handleVisibility = this.handleVisibility.bind(this);
    this.postPexelQuery = this.postPexelQuery.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleYTSearchSubmit = this.handleYTSearchSubmit.bind(this);
    this.handleYTSearchChange = this.handleYTSearchChange.bind(this);
    this.handleNavToggleClick = this.handleNavToggleClick.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    this.getYoutubeVideos = this.getYoutubeVideos.bind(this);
    this.handleGreeting = this.handleGreeting.bind(this);
    this.handleSideBarClick = this.handleSideBarClick.bind(this);
    this.ytHandleSideBarClick = this.ytHandleSideBarClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setFromEvent = this.setFromEvent.bind(this);
    this.handleMobileState = this.handleMobileState.bind(this);
    this.handleOffsetY = this.handleOffsetY.bind(this);
  }

  handleMobileState() {
    if (window.innerWidth <= 768) {
      this.setState({
        mobile: true,
      });
    } else {
      this.setState({
        mobile: false,
        // photos: response.data.photos,
      });
    }
  }

  handleOffsetY() {
    this.setState({
      offsetY: window.pageYOffset,
    });
  }

  componentDidMount() {
    this._isMounted = true;
    // window.scrollTo(0, 0);

    this.showTimeout = setTimeout(
      () =>
        this.setState({
          show: true,
        }),

      10000
    );

    window.addEventListener("mousemove", this.setFromEvent);

    window.addEventListener("scroll", this.handleOffsetY);

    this.handleMobileState();

    this.handleScroll();

    this.handleGreeting();

    this.timerID2 = setTimeout(() => {
      // const time = 35000;
      this.handleVisibility();

      // const helloText = document.querySelector(".helloText");
      // helloText.style.visibility = "hidden";
    }, 2000);
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearTimeout(this.timerID2);
    clearInterval(this.timeID1);
    clearTimeout(this.showTimeout);
  }

  setFromEvent(e) {
    const cursors = document.querySelectorAll(".cursor");

    cursors.forEach((cursor) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    });

    // cursor.style.transform = ` translateX${e.clientY}px translateY${e.clientX}px`;

    // this.setState({
    //   position: {
    //     x: e.clientX,
    //     y: e.clientY,
    //   },
    // });
  }

  postPexelQuery(query) {
    query = this.state.pexelQuery;
    let section = document.querySelector(".welcome");
    let section2s = document.querySelectorAll(".welcome2");
    // let section3 = document.querySelector(".welcome3");
    let topCols = document.querySelectorAll(".topCol");

    // let downSlide = document.querySelector(".downSlide");
    // let bottomLeft = document.querySelector(".bottom-left");
    // let bottomRight = document.querySelector(".bottom-right");
    let pic;
    // let pic2;
    // let pic3;
    let photographer;
    // let photographer2;

    let self = this;

    axios
      .post(
        "/.netlify/functions/PexelAPI",
        {
          queryString: query,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        const pexelText = document.querySelector(".pexelText");

        if (response.data.total_results === 0) {
          pexelText.style.display = "inline";
          pexelText.innerHTML =
            " 0 results found. Please check spelling or try searching another word";

          // return;
        } else {
          pexelText.style.display = "none";
        }

        const rndNum = Math.floor(Math.random() * 10);

        pic = response.data.photos[rndNum].src.landscape;

        photographer = response.data.photos[rndNum].photographer;

        section.style.background = self.state.mobile
          ? `url(${pic}) center center/cover`
          : `url(${pic}) fixed center center/cover`;
        topCols.forEach((col) => {
          col.style.background = self.state.mobile
            ? `url(${pic}) center center/cover`
            : `url(${pic})fixed center center/cover`;
        });

        section2s.forEach((section) => {
          section.style.background = self.state.mobile
            ? `url(${pic}) center center/cover`
            : `url(${pic})fixed center center/cover`;
        });

        self.setState({
          author: photographer,
          photos: response.data.photos,
        });
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  handleSideBarClick(e) {
    let section = document.querySelector(".welcome");

    let section2s = document.querySelectorAll(".welcome2");
    let section4 = document.querySelector(".welcome4");
    // let topCols = document.querySelectorAll(".topCol");
    // let downSlide = document.querySelector(".downSlide");

    let { aurthor } = e.target.dataset;
    // console.log(aurthor);
    const clickedsrc = e.target.src;

    section.style.background = this.state.mobile
      ? `   no-repeat  url(${clickedsrc})  center center/cover`
      : `   no-repeat  url(${clickedsrc})  fixed center center/cover`;

    section2s.forEach((section) => {
      section.style.background = this.state.mobile
        ? ` no-repeat  url(${clickedsrc})   center center/cover`
        : ` no-repeat  url(${clickedsrc})  fixed center center/cover`;
    });

    // section3.style.background = `no-repeat  url(${clickedsrc}) fixed center center/cover`;
    section4.style.background = this.state.mobile
      ? ` no-repeat  url(${clickedsrc})   center center/cover`
      : `no-repeat  url(${clickedsrc}) fixed center center/cover`;

    // topCols.forEach((col) => {
    //   col.style.background = `no-repeat  url(${clickedsrc}) fixed center center/cover`;
    // });
    // downSlide.style.background = "transparent";

    // background: `no-repeat  url(${clickedsrc}) fixed center center/cover`;

    this.setState({
      author: aurthor,
    });
  }
  ytHandleSideBarClick(e) {
    let { id, title, channel } = e.target.dataset;

    this.setState({
      youtubeSrc: `https://www.youtube.com/embed/${id}?autoplay=1`,
      youtubeId: id,
      youtubeChannel: channel,
      youtubeTitle: title.replace(/[&#39;]/g, "'"),
    });
  }

  handleNavToggleClick() {
    //  fix canvas text z index issue

    const canvasTexts = document.querySelectorAll(".canvasText");

    canvasTexts.forEach((txt) => {
      // console.log(txt.style.display);

      if (txt.style.display === "") {
        txt.style.display = "none";
      } else if (txt.style.display === "none") {
        txt.style.display = "";
      }

      console.log(txt.style.display);
    });

    // txt.style.display = "none";

    this.setState((prevState) => ({
      navToggle: !prevState.navToggle,
    }));
  }

  handleMobileMenuClose() {
    //  fix canvas text z index issue

    const canvasTexts = document.querySelectorAll(".canvasText");

    canvasTexts.forEach((txt) => {
      // console.log(txt.style.display);

      if (txt.style.display === "") {
        txt.style.display = "none";
      } else if (txt.style.display === "none") {
        txt.style.display = "";
      }
    });

    this.setState({ navToggle: false });
  }

  handleScroll() {
    const elements = document.querySelectorAll(".observed");
    if (elements === undefined) {
      return;
    }

    const option = {
      root: null,
      threshold: 0,
      // rootMargin: "150px",
    };

    const elementObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(entry.target.style);
          entry.target.style.Transition =
            " opacity 1s ease transform 2s cubic-bezier(0.86, 0, 0.07, 1) 1s";
          entry.target.style.opacity = 1;
          entry.target.style.transform = "scale(1)";
          // entry.target.style.display = "none";
        } else {
          entry.target.style.transform = "scale(.5)";
          entry.target.style.opacity = 0;

          // entry.target.style.display = "";
        }
      });
    }, option);

    elements.forEach((element) => {
      elementObserver.observe(element);
    });
  }

  handleVisibility() {
    this.setState({
      show: false,
    });
  }

  handleGreeting() {
    const greetingsArray = [
      "Akwaaba",
      "你好",
      "Bem-Vinda",
      "Bienvenidos",
      "Hallo",
      "مرحبا!",
      "Hello",

      "こんにちは",
      "Guten Tag",

      "Bonjour",
      "γεια",
      "Siyakwamukela",
      "स्वागत हे",
      "Kaabo",
      "Nnabata",
    ];

    let counter = 0;

    this.timeID1 = setInterval(() => {
      this.setState({
        greetings: greetingsArray[counter],
      });

      counter++;
      if (counter === greetingsArray.length) {
        // this.setState({
        //   greetings: "test",
        // });

        counter = 0;
      }
    }, 5000);
  }

  handleSearchSubmit(event) {
    event.preventDefault();

    const pexelText = document.querySelector(".pexelText");
    pexelText.style.display = "inline";
    pexelText.innerHTML = " loading...";
    // axios post reques here
    this.postPexelQuery(this.state.pexelQuery);
  }
  handleSearchChange(event) {
    this.setState({ pexelQuery: event.target.value });
  }

  handleYTSearchSubmit(event) {
    event.preventDefault();

    const youtubeText = document.querySelector(".youtubeText");
    youtubeText.style.display = "inline";
    youtubeText.innerHTML = " loading...";

    this.getYoutubeVideos(this.state.youtubeQ);
  }

  handleYTSearchChange(event) {
    this.setState({ youtubeQ: event.target.value });
  }

  async getYoutubeVideos(query) {
    query = this.state.youtubeQ;
    let self = this;
    let videoId = "";
    let channel = "";
    let title = "";

    axios.defaults.withCredentials = true;

    axios
      .post(
        "/.netlify/functions/YoutubeAPI",
        {
          queryString: query,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        const rndNum = Math.floor(Math.random() * 10);
        let vidArr = response.data.items;

        const youtubeText = document.querySelector(".youtubeText");

        if (vidArr.length === 0) {
          youtubeText.style.display = "inline";
          youtubeText.innerHTML =
            "Please check your spelling or try seraching another word";

          return;
        } else {
          youtubeText.style.display = "none";
        }

        videoId = response.data.items[rndNum].id.videoId;
        channel = response.data.items[rndNum].snippet.channelTitle;
        title = response.data.items[rndNum].snippet.title.toString();
        const cleanTitle = title.replace(/[&#39;]/g, `'`);
        // console.log(cleanTitle);

        self.setState({
          youtubeSrc: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
          youtubeId: videoId,
          youtubeChannel: channel,
          youtubeTitle: cleanTitle,
          videos: vidArr,
        });
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state.mobile);

    return (
      <div
        className="app pageFade"
        style={{
          display: "none",
        }}
      >
        <ScrollToTop />
        <div
          style={{
            opacity: this.state.mobile ? "0" : this.state.offsetY >= 2 && "0",
          }}
          className="cursor"
        >
          <small
            style={{
              color: "black",
              fontSize: ".5rem",
              position: "relative",
              top: "39px",
            }}
            className="cursorInner"
          >
            {this.state.greetings}
          </small>
        </div>
        <Navbar
          navToggle={this.state.navToggle}
          greetings={this.state.greetings}
          handleNavToggleClick={this.handleNavToggleClick}
          handleMobileMenuClose={this.handleMobileMenuClose}
        />

        <Switch>
          <Route path="/work">
            <React.Suspense fallback={<>LOADING...</>}>
              <Transition
                authorName={this.state.author}
                pexelQuery={this.state.pexelQuery}
                youtubeSrc={this.state.youtubeSrc}
                youtubeId={this.state.youtubeId}
                youtubeChannel={this.state.youtubeChannel}
                youtubeTitle={this.state.youtubeTitle}
                greetings={this.state.greetings}
                youtubeQ={this.state.youtubeQ}
                handleSearchSubmit={this.handleSearchSubmit}
                handleSearchChange={this.handleSearchChange}
                handleYTSearchSubmit={this.handleYTSearchSubmit}
                handleYTSearchChange={this.handleYTSearchChange}
                handleSideBarClick={this.handleSideBarClick}
                ytHandleSideBarClick={this.ytHandleSideBarClick}
                photos={this.state.photos}
                videos={this.state.videos}
              />
            </React.Suspense>
          </Route>

          <Route path="/contact">
            <React.Suspense fallback={<Loader />}>
              <CityView />
            </React.Suspense>
          </Route>
          <Route path="/">
            <Home
              show={this.state.show}
              onChange={this.handleGreeting}
              greetings={this.state.greetings}
            />

            <React.Suspense fallback={<Loader />}>
              <CityView />
            </React.Suspense>
          </Route>
        </Switch>

        <React.Suspense fallback={<Loader />}>
          {" "}
          <Footer> </Footer>{" "}
        </React.Suspense>
      </div>
    );
  }
}

export default App;
